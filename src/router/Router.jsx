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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: async () => {
          const sortWorkerRes = await fetch(
            "http://localhost:4000/sortWorkers"
          );
          const sortWorkerData = await sortWorkerRes.json();

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
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        index: true,
        element: <WorkerHome></WorkerHome>,
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
        path: "allTasks",
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
