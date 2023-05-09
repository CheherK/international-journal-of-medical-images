import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import useCurrentUser from "../../hooks/useCurrentUser";

const RequireAuth = () => {
   const { currentUser } = useCurrentUser();
   const location = useLocation();

   return (
      currentUser
         ? <Outlet />
         : <Navigate to="/sign-in" state={{ from: location }} replace />
   );
};

export default RequireAuth;