import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaTasks } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddTasks = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  

  const onSubmit = async (data) => {
    //image upload to imgbb and then get an url
    const imageFile = { image: data.task_img_url[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      //now send the task item
      const taskItem = {
        title: data.title,
        detail: data.detail,
        req_workers: parseInt(data.req_workers),
        amount: parseInt(data.amount),
        completion_date: data.completion_date,
        current_date: new Date().toLocaleDateString("en-GB"),
        sub_info: data.sub_info,
        task_img_url: res.data.data.display_url,
        buyer_email: user?.email,
        buyer_name: user?.displayName,
      };
      //
      try {
        const taskResponse = await axiosSecure.post("/addTask", taskItem);
        if (taskResponse.data.result) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.title} is added to the tasklist`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        if (
          error.response?.data?.error === "Not avaiable Coin. Purchase Coin"
        ) {
          Swal.fire({
            icon: "error",
            title: "Insufficient Coins",
            text: "You don't have enough coins to create this task.",
          });
          navigate("/dashboard/purchaseCoin");
        }
      }
    }
    console.log(res.data);
  };
  return (
    <div className="mb-6">
      <SectionTitle
        heading="Add an task"
        subHeading="What's new"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Task Title*</span>
            </div>
            <input
              type="text"
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
                type="date"
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
              <span className="label-text">Task Image URL/File*</span>
            </div>
            {/* <input
              type="url"
              placeholder="Task Image URL"
              {...register("task_img_url")}
              required
              className="input input-bordered w-full"
            /> */}
            <div>
              <input
                {...register("task_img_url", { required: true })}
                type="file"
                className="file-input w-full max-w-xs"
              />
            </div>
          </label>

          <button className="btn my-4">
            Add Task <FaTasks className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTasks;
