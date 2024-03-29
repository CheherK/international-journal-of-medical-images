import { createContext, useEffect, useReducer } from 'react';

import { createAction } from '../utils/reducer/reducer.utils';

export const USER_ACTION_TYPES = {
   SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const INITIAL_STATE = {
   currentUser: {
      id: "",
      email: "",
      role: "",
      token: ""
   },
};

const userReducer = (state, action) => {
   const { type, payload } = action;

   switch (type) {
      case USER_ACTION_TYPES.SET_CURRENT_USER:
         return { ...state, currentUser: payload };
      default:
         throw new Error(`Unhandled type ${type} in userReducer`);
   }
};

export const UserContext = createContext({
   setCurrentUser: () => null,
   currentUser: null,
});

export const UserProvider = ({ children }) => {
   const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

   const setCurrentUser = (user) => {
      dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
   };

   useEffect(() => {
      const storedUser = sessionStorage.getItem("user");
      if (storedUser?.id !== "") {
         setCurrentUser(JSON.parse(storedUser));
      }
   }, []);

   useEffect(() => {
      currentUser?.id !== "" && sessionStorage.setItem("user", JSON.stringify(currentUser));
   }, [currentUser]);

   const value = {
      currentUser,
      setCurrentUser
   };

   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};