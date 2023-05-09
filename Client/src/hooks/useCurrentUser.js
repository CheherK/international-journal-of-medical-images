import { useContext } from "react";
import { UserContext } from "../contexts/user.context";

const useCurrentUser = () => {
   return useContext(UserContext);
}
export default useCurrentUser;