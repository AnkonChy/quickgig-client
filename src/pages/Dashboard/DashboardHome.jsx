import React from "react";
import useAdmin from "../../hooks/useAdmin";
import useBuyer from "../../hooks/useBuyer";
import useWorker from "../../hooks/useWorker";
import AdminHome from "./AdminHome";
import BuyerHome from "./BuyerHome";
import WorkerHome from "./WorkerHome";

const DashboardHome = () => {
  const [isAdmin] = useAdmin();
  const [isBuyer] = useBuyer();
  const [isWorker] = useWorker();
  return (
    <div>
      {isAdmin ? (
        <AdminHome></AdminHome>
      ) : isBuyer ? (
        <BuyerHome></BuyerHome>
      ) : isWorker ? (
        <WorkerHome></WorkerHome>
      ) : (
        ""
      )}
    </div>
  );
};

export default DashboardHome;
