import { useLocation, Navigate, Outlet } from "react-router-dom";
import useCurrentUser from "../../hooks/useCurrentUser";

const RequireAuth = () => {
   const { user } = useCurrentUser();
   const location = useLocation();

   return (
      user
         ? <Outlet />
         : <Navigate to="/sign-in" state={{ from: location }} replace />
   );
};

export default RequireAuth;