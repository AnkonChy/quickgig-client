import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const AddTasks = () => {
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
    };
    const taskResponse = axiosSecure.post("/addTask", taskItem);
    console.log(taskResponse.data);
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
              <span className="label-text">Task Image URL*</span>
            </div>
            <input
              type="url"
              placeholder="Task Image URL"
              {...register("task_img_url")}
              required
              className="input input-bordered w-full"
            />
          </label>

          <button className="btn my-4">
            Add Item <FaUtensils className="ml-2"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTasks;
