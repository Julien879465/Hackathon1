import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import Personnages from "./pages/Personnages";
import Manger from "./pages/Manger";

export default function App() {
  return (
    <UserContextProvider>
      <div className="flex flex-col items-center h-full w-full bg-bg-sable">
        <Routes>
          <Route path="/manger" element={<Manger />} />
          <Route path="/personnages" element={<Personnages />} />
        </Routes>
      </div>
    </UserContextProvider>
  );
}
