import { Routes, Route } from "react-router-dom";
import MangerFeu from "./pages/MangerFeu";
import MangerFeuille from "./pages/MangerFeuille";
import Personnages from "./pages/Personnages";
import Manger from "./pages/Manger";
import { UserContextProvider } from "./contexts/UserContext";
import Home from "./pages/Home";

import Panier from "./pages/Panier";

export default function App() {
  return (
    <UserContextProvider>
      <div className="flex flex-col items-center h-full w-full bg-bg-sable">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/manger" element={<Manger />} />
          <Route path="/personnages" element={<Personnages />} />
          <Route path="/mangerfeu" element={<MangerFeu />} />
          <Route path="/mangerfeuille" element={<MangerFeuille />} />
          <Route path="/panier" element={<Panier />} />
        </Routes>
      </div>
    </UserContextProvider>
  );
}
