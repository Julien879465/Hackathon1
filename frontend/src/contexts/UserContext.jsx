import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export function UserContextProvider({ children }) {
  // mettre les states ici
  const [selectedRestaurant, setSelectedRestaurant] = useState(0);
  return (
    <UserContext.Provider
      value={{
        /* passer les props ici */
        selectedRestaurant,
        setSelectedRestaurant,
      }}
    >
      {" "}
      {children}{" "}
    </UserContext.Provider>
  );
}
