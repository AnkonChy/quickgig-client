import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className=" flex">
      {/* sidebar  */}
      <div className="w-64 bg-slate-700 min-h-screen">
        <h1 className="text-center my-2 text-2xl md:text-3xl text-white">
          <NavLink to="/" className="">
            QuickGig
          </NavLink>
        </h1>
        <ul className="menu text-white">
          <li className="my-1">
            <NavLink className="text-center">Worker Home</NavLink>
          </li>
          <li className="my-1">
            <NavLink className="text-center">TaskList</NavLink>
          </li>
          <li className="my-1">
            <NavLink className="text-center">Submission</NavLink>
          </li>
          <li className="my-1">
            <NavLink className="text-center">Withdrawals</NavLink>
          </li>
          <li className="my-1">
            <NavLink to="/dashboard/addTask" className="text-center">
              Add new Tasks
            </NavLink>
          </li>
          <li className="my-1">
            <NavLink to="/dashboard/allTasks" className="text-center">
              My Task's
            </NavLink>
          </li>
          <li className="my-1">
            <NavLink className="text-center">Purchase Coin</NavLink>
          </li>
          <li className="my-1">
            <NavLink className="text-center">Manage Users</NavLink>
          </li>
          <li className="my-1">
            <NavLink className="text-center">Manage Task</NavLink>
          </li>
        </ul>
      </div>

      {/* dashboard content  */}
      <div className="flex-1">
        <div className="w-10/12 mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
