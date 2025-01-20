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
            "http://localhost:4000/sortWorkers"
          );
          const sortWorkerData = await sortWorkerRes.json();
          const allTaskRes = await fetch("http://localhost:4000/allTasks");
          const allTasksData = await allTaskRes.json();

          return { sortWorkerData, allTasksData };
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
      // {
      //   path: "taskList",
      //   element: <TaskList></TaskList>,
      // },

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
          fetch(`http://localhost:4000/task/${params.id}`),
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
          fetch(`http://localhost:4000/task/${params.id}`),
      },
      {
        path: "allSubmission",
        element: <MySubmission></MySubmission>,
      },

      //admin
      {
        path: "allUsers",
        element: <ManageUsers></ManageUsers>,
      },
    ],
  },
]);

export default router;
