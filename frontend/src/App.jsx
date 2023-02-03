import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import MangerFeu from "./pages/MangerFeu";
import MangerFeuille from "./pages/MangerFeuille";
import Personnages from "./pages/Personnages";
import Manger from "./pages/Manger";
import ChangerToi from "./pages/ChangerToi";
import Resto from "./pages/Resto";
import Home from "./pages/Home";
import Panier from "./pages/Panier";
import CommandeConfirme from "@pages/CommandeConfirme";

export default function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState("");
  console.log(selectedRestaurant);

  return (
    <BrowserRouter>
      <div className="flex flex-col items-center h-full w-full bg-bg-sable">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manger" element={<Manger />} />
          <Route path="/personnages" element={<Personnages />} />
          <Route
            path="/mangerfeu"
            element={
              <MangerFeu
                selectedRestaurant={selectedRestaurant}
                setSelectedRestaurant={setSelectedRestaurant}
              />
            }
          />
          <Route path="/mangerfeuille" element={<MangerFeuille />} />
          <Route
            path="/Resto"
            element={
              <Resto
                setSelectedRestaurant={setSelectedRestaurant}
                selectedRestaurant={selectedRestaurant}
              />
            }
          />
          <Route path="/changertoi" element={<ChangerToi />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/commande" element={<CommandeConfirme />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
