import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { FaTasks } from "react-icons/fa";
import Swal from "sweetalert2";

const Withdrawals = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset, setValue } = useForm();

  const [coinToWithdraw, setCoinToWithdraw] = useState(0);
  const { data: withdrawals = [] } = useQuery({
    queryKey: [user?.email, "withdrawals"],
    enabled: !!user?.email,
    queryFn: async () => {
      console.log("User email:", user?.email);
      const res = await axiosSecure.get(`/withdrawal?email=${user?.email}`);
      return res.data;
    },
  });
  const onCoinChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setValue("withdrawCoin", value);
    if (value > withdrawals.coins) {
      Swal.fire({
        icon: "error",
        title: "Invalid Amount",
        text: "Coin to withdraw cannot be greater than your current coins.",
      });
      return;
    }
    setCoinToWithdraw(value);
    const withdrawalAmount = value / 20;
    setValue("withdrawalAmount", withdrawalAmount.toFixed(2));
  };

  const onSubmit = async (data) => {
    const withdrawItem = {
      worker_email: user?.email,
      worker_name: user?.displayName,
      withdrawCoin: parseInt(data.withdrawCoin),
      withdrawalAmount: data.withdrawalAmount,
      paymentSystem: data.paymentSystem,
      withdraw_date: new Date().toLocaleDateString("en-GB"),
      status: "pending",
    };
    console.log(data);
    //

    const withdrawResponse = await axiosSecure.post(
      "/addWithdraw",
      withdrawItem
    );
    if (withdrawResponse.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Withdraw request send to the admin",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
      setCoinToWithdraw(0);
      return withdrawResponse.data;
    }
  };
  return (
    <div>
      <h1 className="font-bold text-2xl">Current coin : {withdrawals.coins}</h1>
      <p className="font-bold text-2xl">
        Withdrawal amount: {withdrawals.withdrawalAmount}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full my-6">
          <div className="label">
            <span className="label-text">Coin To WithDraw</span>
          </div>
          <input
            type="number"
            placeholder="Coin To Withdraw"
            {...register("withdrawCoin", { required: true })}
            // value={coinToWithdraw}
            onChange={onCoinChange}
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full my-6">
          <div className="label">
            <span className="label-text">Withdraw_amount ($)</span>
          </div>
          <input
            type="number"
            placeholder="Withdraw_amount ($)"
            {...register("withdrawalAmount", { required: true })}
            readOnly
            className="input input-bordered w-full"
          />
        </label>
        {/* payment  */}
        <label>Payment System</label>
        <select {...register("paymentSystem")} defaultValue="">
          <option value="" disabled>
            Select
          </option>
          <option value="bkash">Bkash</option>
          <option value="rocket">Rocket</option>
          <option value="nagad">Nagad </option>
          <option value="upay">Upay </option>
        </select>
        {/* account number  */}
        <label className="form-control w-full my-6">
          <div className="label">
            <span className="label-text">Account Number</span>
          </div>
          <input
            type="number"
            placeholder="Account Number"
            {...register("accountNumber")}
            required
            className="input input-bordered w-full"
          />
        </label>

        <button disabled={withdrawals.coins < 200} className="btn my-4">
          Withdraw <FaTasks className="ml-2" />
        </button>
      </form>
    </div>
  );
};

export default Withdrawals;
