import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTasks } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const UpdateTask = () => {
  const { user } = useAuth();
  const {
    _id,
    title,
    detail,
    req_workers,
    amount,
    completion_date,
    sub_info,
    task_img_url,
    task_owner,
  } = useLoaderData();

  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    const taskItem = {
      title: data.title,
      detail: data.detail,
      req_workers: parseInt(data.req_workers),
      amount: parseInt(data.amount),
      data: data.date,
      sub_info: data.sub_info,
      task_img_url: data.task_img_url,
      task_owner: user.email,
    };
    const taskResponse = await axiosSecure.patch(`/task/${_id}`, taskItem);
    // console.log(taskResponse.data.insertedId);
    if (taskResponse.data.modifiedCount) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.title} is updated to the tasklist`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <SectionTitle
        heading="Update a Task"
        subHeading="Update Info"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Task Title*</span>
            </div>
            <input
              type="text"
              defaultValue={title}
              placeholder="Task Title"
              {...register("title")}
              required
              className="input input-bordered w-full"
            />
          </label>
          {/* detail  */}
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Task Detail*</span>
            </div>
            <textarea
              defaultValue={detail}
              {...register("detail")}
              className="textarea textarea-bordered h-24"
              placeholder="Detail"
            ></textarea>
          </label>
          {/* required workers  */}
          <div className="flex gap-6 items-center">
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Required Workers*</span>
              </div>
              <input
                defaultValue={req_workers}
                readOnly
                type="number"
                placeholder="Required Workers"
                {...register("req_workers", { required: true })}
                className="input input-bordered w-full"
              />
            </label>
            {/* Payable amount  */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Payable Amount*</span>
              </div>
              <input
                readOnly
                defaultValue={amount}
                type="number"
                placeholder="Payable Amount"
                {...register("amount", { required: true })}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="flex gap-6 items-center">
            {/* Submission info  */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Submission Info</span>
              </div>
              <input
                defaultValue={sub_info}
                type="text"
                placeholder="Submission Info"
                {...register("sub_info")}
                required
                className="input input-bordered w-full"
              />
            </label>
            {/* completion date  */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Completion Date</span>
              </div>
              <input
                readOnly
                type="date"
                defaultValue={completion_date}
                placeholder="Completion Date"
                {...register("completion_date")}
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* task image url  */}
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Task Image URL*</span>
            </div>
            <input
              readOnly
              defaultValue={task_img_url}
              type="url"
              placeholder="Task Image URL"
              {...register("task_img_url")}
              required
              className="input input-bordered w-full"
            />
          </label>

          <button className="btn my-4">
            Update Task <FaTasks className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
