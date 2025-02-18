import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Dashboard from "../layouts/Dashboard/Dashboard";
import AddTasks from "../pages/Dashboard/AddTasks";
import MyTasks from "../pages/Dashboard/MyTasks";
import UpdateTask from "../pages/Dashboard/UpdateTask";
import TaskList from "../pages/Dashboard/TaskList";
import WorkerHome from "../pages/Dashboard/WorkerHome";
import TaskDetails from "../pages/Dashboard/TaskDetails";
import MySubmission from "../pages/Dashboard/MySubmission";
import ManageUsers from "../pages/Dashboard/ManageUsers";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BuyerHome from "../pages/Dashboard/BuyerHome";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import PurchaseCoin from "../pages/Dashboard/PurchaseCoin";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/Payment/PaymentHistory";
import Withdrawals from "../pages/Dashboard/Withdrawals";
import ManageTasks from "../pages/Dashboard/ManageTasks";
import UserProfile from "../pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Tasks from "../pages/Tasks/Tasks";
import AboutUs from "../pages/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: async () => {
          const sortWorkerRes = await fetch(
            "https://quickgig-server.vercel.app/sortWorkers"
          );
          const sortWorkerData = await sortWorkerRes.json();
          // const allTaskRes = await fetch("https://quickgig-server.vercel.app/allTasks");
          // const allTasksData = await allTaskRes.json();

          return { sortWorkerData };
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        index: true,
        element: <DashboardHome></DashboardHome>,
      },
      //admin
      {
        path: "allUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manageTasks",
        element: <ManageTasks></ManageTasks>,
      },

      //buyer
      {
        path: "addTask",
        element: <AddTasks></AddTasks>,
      },
      {
        path: "myTask",
        element: <MyTasks></MyTasks>,
      },
      {
        path: "updateTask/:id",
        element: <UpdateTask></UpdateTask>,
        loader: ({ params }) =>
          fetch(`https://quickgig-server.vercel.app/task/${params.id}`),
      },
      {
        path: "purchaseCoin",
        element: <PurchaseCoin></PurchaseCoin>,
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`https://quickgig-server.vercel.app/paymentCard/${params.id}`),
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      //worker
      {
        path: "taskList",
        element: <TaskList></TaskList>,
      },
      {
        path: "taskDetails/:id",
        element: <TaskDetails></TaskDetails>,
        loader: ({ params }) =>
          fetch(`https://quickgig-server.vercel.app/task/${params.id}`),
      },
      {
        path: "allSubmission",
        element: <MySubmission></MySubmission>,
      },
      {
        path: "withdrawals",
        element: <Withdrawals></Withdrawals>,
      },
    ],
  },
]);

export default router;
