import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { IoNotificationsCircle } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";
import useBuyer from "../../hooks/useBuyer";
import useWorker from "../../hooks/useWorker";
import DashNav from "../../components/Dashboard/DashNav";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isBuyer] = useBuyer();
  const [isWorker] = useWorker();
  const { user } = useAuth();
  return (
    <div className=" flex">
      {/* sidebar  */}
      <div className="w-64 bg-slate-700 min-h-screen">
        <h1 className="text-center mt-5 mb-2 text-2xl md:text-3xl text-white">
          <NavLink to="/" className="">
            QuickGig
          </NavLink>
        </h1>
        <ul className="menu text-white">
          {isAdmin ? (
            <>
              <li className="my-1">
                <NavLink className="text-center">Admin Home</NavLink>
              </li>
              <li className="my-1">
                <NavLink to="/dashboard/allUsers" className="text-center">
                  Manage Users
                </NavLink>
              </li>
              <li className="my-1">
                <NavLink className="text-center">Manage Task</NavLink>
              </li>
            </>
          ) : isBuyer ? (
            <>
              <li className="my-1">
                <NavLink className="text-center">Buyer Home</NavLink>
              </li>
              <li className="my-1">
                <NavLink to="/dashboard/addTask" className="text-center">
                  Add new Tasks
                </NavLink>
              </li>
              <li className="my-1">
                <NavLink to="/dashboard/myTask" className="text-center">
                  My Task's
                </NavLink>
              </li>
              <li className="my-1">
                <NavLink to="/dashboard/purchaseCoin" className="text-center">
                  Purchase Coin
                </NavLink>
              </li>
            </>
          ) : isWorker ? (
            <>
              <li className="my-1">
                <NavLink className="text-center">Worker Home</NavLink>
              </li>
              <li className="my-1">
                <NavLink to="/dashboard/taskList" className="text-center">
                  TaskList
                </NavLink>
              </li>
              <li className="my-1">
                <NavLink to="/dashboard/allSubmission" className="text-center">
                  My Submission
                </NavLink>
              </li>
              <li className="my-1">
                <NavLink className="text-center">Withdrawals</NavLink>
              </li>
            </>
          ) : (
            ""
          )}
        </ul>
      </div>

      {/* dashboard content  */}
      <div className="flex-1">
        {/* navbar dash  */}
        <DashNav></DashNav>
        <div className="w-10/12 mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
