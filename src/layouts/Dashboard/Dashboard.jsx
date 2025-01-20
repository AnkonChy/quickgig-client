import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { IoNotificationsCircle } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";
import useBuyer from "../../hooks/useBuyer";
import useWorker from "../../hooks/useWorker";
import DashNav from "../../components/Dashboard/DashNav";
import { MdPayments } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";
import { BiTask } from "react-icons/bi";

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
                <NavLink>
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li className="my-1">
                <NavLink to="/dashboard/allUsers">Manage Users</NavLink>
              </li>
              <li className="my-1">
                <NavLink className="text-center">Manage Task</NavLink>
              </li>
            </>
          ) : isBuyer ? (
            <>
              <li className="my-1">
                <NavLink>
                  <FaHome />
                  Buyer Home
                </NavLink>
              </li>
              <li className="my-1">
                <NavLink to="/dashboard/addTask">
                  <IoIosAddCircle />
                  Add new Tasks
                </NavLink>
              </li>
              <li className="my-1">
                <NavLink to="/dashboard/myTask">
                  <BiTask />
                  My Task's
                </NavLink>
              </li>
              <li className="my-1">
                <NavLink to="/dashboard/purchaseCoin">
                  <BiSolidPurchaseTag />
                  Purchase Coin
                </NavLink>
              </li>
              <li className="my-1">
                <NavLink to="/dashboard/paymentHistory">
                  <MdPayments />
                  Payment History
                </NavLink>
              </li>
            </>
          ) : isWorker ? (
            <>
              <li className="my-1">
                <NavLink className="text-center">
                  <FaHome /> Worker Home
                </NavLink>
              </li>
              <li className="my-1">
                <NavLink to="/dashboard/taskList">TaskList</NavLink>
              </li>
              <li className="my-1">
                <NavLink to="/dashboard/allSubmission">My Submission</NavLink>
              </li>
              <li className="my-1">
                <NavLink>Withdrawals</NavLink>
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
