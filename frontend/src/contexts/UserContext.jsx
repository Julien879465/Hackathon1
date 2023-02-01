import { createContext, useContext } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  // mettre les states ici

  return <UserContext.Provider value={{ /* passer les props ici*/}}> {children} </UserContext.Provider>;
};
