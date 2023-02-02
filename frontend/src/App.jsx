import { Routes, Route } from "react-router-dom";
import MangerFeu from "@pages/MangerFeu";
import MangerFeuille from "@pages/MangerFeuille";
import Personnages from "./pages/Personnages";
import Manger from "./pages/Manger";
import { UserContextProvider } from "./contexts/UserContext";

export default function App() {
  return (
    <UserContextProvider>
      <div className="flex flex-col items-center h-full w-full bg-bg-sable">
        <Routes>
          <Route path="/manger" element={<Manger />} />
          <Route path="/personnages" element={<Personnages />} />
          <Route path="/mangerfeu" element={<MangerFeu />} />
          <Route path="/mangerfeuille" element={<MangerFeuille />} />
        </Routes>
      </div>
    </UserContextProvider>
  );
}
