import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { IoNotificationsCircle } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";
import useBuyer from "../../hooks/useBuyer";
import useWorker from "../../hooks/useWorker";

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
                <NavLink to="/dashboard/allTasks" className="text-center">
                  My Task's
                </NavLink>
              </li>
              <li className="my-1">
                <NavLink className="text-center">Purchase Coin</NavLink>
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
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl"></a>
          </div>
          <div className="flex-none">
            <div>
              <div className="flex items-center gap-2">
                <h1>User role: bla</h1>
                <p>||</p>
                <h1>User Name: {user?.displayName}</h1>
              </div>
              <div>
                <p className="text-center">Available Coin: 2000</p>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle ml-2"
              >
                <div className="indicator">
                  <IoNotificationsCircle className="text-4xl" />
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-10/12 mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
