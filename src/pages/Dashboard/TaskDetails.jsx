import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { FaTasks } from "react-icons/fa";
import Swal from "sweetalert2";

const TaskDetails = () => {
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
    buyer_email,
    buyer_name,
  } = useLoaderData();

  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    const taskItem = {
      task_id: _id,
      task_title: title,
      payable_amount: amount,
      worker_email: user?.email,
      submission_details: data.submission_details,
      worker_name: user?.displayName,
      buyer_name: buyer_name,
      buyer_email: buyer_email,
      current_date: new Date().toLocaleDateString("en-GB"),
      status: "pending",
    };
    const submitResponse = await axiosSecure.post("/addSubmit", taskItem);

    console.log(submitResponse);
    if (submitResponse.data.result.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Submitted Successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <SectionTitle heading="Task Details Page"></SectionTitle>

      <div className="my-10 ">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* task details  */}
          <div className="md:w-2/3">
            <div>
              <img
                className="rounded-2xl h-[400px] object-cover"
                src={task_img_url}
                alt=""
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">{title}</h1>
              <div className="flex items-center justify-between">
                <p className="font-medium">
                  <span className="text-lg">Required Worker: </span>
                  {req_workers}
                </p>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-lg">Buyer Name : </h3>
                  {buyer_name}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 ">
                  <p>
                    <span className="font-medium text-lg">
                      Payable Amount:{" "}
                    </span>
                    {amount}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-lg">Completion Date: </h3>

                  {completion_date}
                </div>
              </div>
              <div className="flex justify-between items-center gap-4">
                <div className="w-2/5">
                  <h3 className="font-medium text-lg">Task Detail:</h3>
                  <p>{detail}</p>
                </div>
                <div className="w-2/5">
                  <h3 className="font-medium text-lg">Submission Info: </h3>
                  <p>{sub_info}</p>
                </div>
              </div>
            </div>
          </div>
          {/* submission form  */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-center">Submit Your Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* detail  */}
              <label className="form-control w-full my-6">
                <div className="label">
                  <span className="label-text">Submission Details*</span>
                </div>
                <textarea
                  {...register("submission_details", { required: true })}
                  className="textarea textarea-bordered h-24"
                  placeholder="Submission Details"
                ></textarea>
              </label>
              <button className="btn my-4">
                Submit
                <FaTasks className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
