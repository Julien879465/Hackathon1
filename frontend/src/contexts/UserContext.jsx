import { createContext, useContext } from "react";
import { useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  // mettre les states ici
  const [selectedRestaurant, setSelectedRestaurant] = useState(0);
  return (
    <UserContext.Provider
      value={{
        /* passer les props ici*/
        selectedRestaurant,
        setSelectedRestaurant,
      }}
    >
      {" "}
      {children}{" "}
    </UserContext.Provider>
  );
};
