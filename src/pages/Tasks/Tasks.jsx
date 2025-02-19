import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaDollarSign, FaUsers } from "react-icons/fa";

const Tasks = () => {
  const axiosPublic = useAxiosPublic();
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    axiosPublic
      .get(`/tasks?searchParams=${search}&sort=${sort}`)
      .then((res) => setTasks(res.data));
  }, [search, sort]);

  const handleReset = () => {
    setSearch("");
    setSort("");
  };
  return (
    <div className="pt-32 w-11/12 mx-auto">
      <h1 className=" animate__animated animate__fadeInLeft text-3xl md:text-4xl text-center lg:text-5xl font-bold my-4">
        All Tasks
      </h1>
      <div>
        <label className="input input-bordered flex items-center gap-2 w-1/3 mx-auto my-6">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            name="search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="flex items-center justify-end gap-4">
        <select
          name="sort"
          id="sort"
          className="border p-4 rounded-md"
          onChange={(e) => setSort(e.target.value)}
          value={sort}
        >
          <option value="">Sort By Price</option>
          <option value="dsc">Descending Order</option>
          <option value="asc">Ascending Order</option>
        </select>
        <button onClick={handleReset} className="btn">
          Reset
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-20 rounded-none">
        {tasks
          .map((task) => (
            <div
              key={task._id}
              className="card bg-base-100 shadow-xl rounded-none"
            >
              <figure>
                <img
                  src={task.task_img_url}
                  alt="Shoes"
                  className="rounded-xl border h-72 w-full object-cover"
                />
              </figure>
              <div className="px-2 my-3 space-y-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-lg bg-slate-200 px-2 py-1 rounded-full">
                    Hire Space
                  </h1>
                  <p className="text-lg flex items-center gap-1">
                    <FaUsers />
                    {task.req_workers}
                  </p>
                </div>
                <h2 className="text-2xl font-bold w-4/5">{task.title}</h2>
                <div className="flex items-center justify-between">
                  <h1 className="text-lg font-bold">Last Date</h1>
                  <p className="text-lg font-bold">{task.completion_date}</p>
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="flex items-center gap-1 font-bold text-lg">
                    <FaDollarSign />
                    {task.amount}
                  </h1>
                  <button className="btn bg-blue-900 text-white">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
          .slice(0, 4)}
      </div>
    </div>
  );
};

export default Tasks;
