import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ugg from "../assets/img/ugg.png";
import gata from "../assets/img/gata.png";
import grok from "../assets/img/grok.png";
import broud from "../assets/img/broud.png";
import plante from "../assets/backgrounds/eucalyptus.png";
import stone from "../assets/backgrounds/stone.png";
import Navbar from "../components/Navbar";

function Personnages() {
  const navigate = useNavigate();
  const [selectedName, setSelectedName] = useState("");
  const personnage = [
    {
      nom: "Ugg",
      img: ugg,
    },
    { nom: "Gata", img: gata },
    { nom: "Broud", img: broud },
    { nom: "Grok", img: grok },
  ];
  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-bg-sable w-full h-full justify-around items-center">
        <h1 className="z-10 font-cursive text-4xl text-brown">TOI ?</h1>
        <img
          src={plante}
          alt="eucalyptus"
          className=" z-0 fixed left-0 top-10"
        />
        <img
          src={stone}
          alt="eucalyptus"
          className=" z-0 fixed right-0 bottom-0"
        />
        <select
          className="z-10 rounded-full w-[80%] h-11 text-center shadow-2xl drop-shadow-xl"
          name="selectName"
          onChange={(e) => setSelectedName(e.target.value)}
        >
          <option value="">Donne nom de toi</option>
          <option value="Ugg">Ugg</option>
          <option value="Gata">Gata</option>
          <option value="Broud">Broud</option>
          <option value="Grok">Grok</option>
        </select>
        <div className="z-0 flex flex-wrap justify-evenly ">
          {selectedName === ""
            ? personnage.map((elem) => (
                <div className="w-2/5">
                  <img
                    key={elem.nom}
                    className="rounded-md shadow-2xl drop-shadow-xl"
                    src={elem.img}
                    alt={elem.nom}
                    onClick={() => navigate("/manger")}
                  />
                  <h2 className="z-10 relative bottom-5 bg-slate-900 font-sans text-white   w-1/3 text-center rounded-md">
                    {elem.nom}
                  </h2>
                </div>
              ))
            : personnage
                .filter((elem) => elem.nom === selectedName)
                .map((elem) => (
                  <div className="z-10 h-[495px]  w-4/5">
                    <img
                      key={elem.nom}
                      className="z-10 rounded-md shadow-2xl drop-shadow-xl "
                      src={elem.img}
                      alt={elem.nom}
                    />
                    <h2 className="z-10 relative bottom-5 bg-slate-900 font-sans text-white   w-1/3 text-center rounded-md">
                      {elem.nom}
                    </h2>
                    <button
                      type="button"
                      className="z-10 relative bottom-1/2 left-[100px] text-center bg-bg-sable  rounded-full w-32 h-10 text-brown  font-cursive text-3xl drop-shadow-xl animate-pulse"
                      onClick={() => navigate("/manger")}
                    >
                      Moi
                    </button>
                  </div>
                ))}
        </div>
      </div>
    </>
  );
}

export default Personnages;
