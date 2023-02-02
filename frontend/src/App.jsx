import { Routes, Route } from "react-router-dom";

import { UserContextProvider } from "./contexts/UserContext";
import Personnages from "./pages/Personnages";

export default function App() {
  return (
    <UserContextProvider>
      <div className="flex flex-col items-center h-full w-full">
      <Routes>
        <Route path="/personnages" element={<Personnages />} />
      </Routes>
      </div>
    </UserContextProvider>
  );
}
