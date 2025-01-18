// import React from "react";
// import useAdmin from "../../hooks/useAdmin";
// import { Navigate, useLocation } from "react-router-dom";
// import Loading from "../../components/Loading/Loading";
// import useAuth from "../../hooks/useAuth";

// const AdminRoute = ({children}) => {
//   const {user, loading} = useAuth();
//   const [isAdmin, isAdminLoading] = useAdmin();
//   const location = useLocation();
//   if (loading || isAdminLoading) {
//     return <Loading></Loading>;
//   }

//   if (user && isAdmin) {
//     return <div>{children}</div>;
//   }
//   return <Navigate state={location.pathname}></Navigate>;
// };

// export default AdminRoute;
