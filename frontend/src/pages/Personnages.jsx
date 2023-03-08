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
      <div className="flex flex-col bg-bg-sable w-full items-center mt-20">
        <img
          src={plante}
          alt="eucalyptus"
          className=" z-0 fixed left-0 top-0"
        />
        <img
          src={stone}
          alt="eucalyptus"
          className=" z-0 fixed right-0 bottom-0"
        />
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="font-cursive text-4xl text-brown">TOI ?</h1>
          <select
            className="z-50 rounded-full w-9/12 md:w-7/12 h-11 text-center font-sans m-9 bg-white text-xl shadow-2xl drop-shadow-2xl"
            name="selectName"
            onChange={(e) => setSelectedName(e.target.value)}
          >
            <option className="font-sans" value="">
              Donne nom de toi
            </option>
            <option className="font-sans" value="Ugg">
              Ugg
            </option>
            <option className="font-sans" value="Gata">
              Gata
            </option>
            <option className="font-sans" value="Broud">
              Broud
            </option>
            <option className="font-sans" value="Grok">
              Grok
            </option>
          </select>
          <div className="z-50 flex flex-wrap justify-evenly mt-5 md:max-w-[70%]">
            {selectedName === ""
              ? personnage.map((elem) => (
                  <div className="w-2/5">
                    <img
                      key={elem.nom}
                      className="rounded-md  shadow-2xl drop-shadow-2xl"
                      src={elem.img}
                      alt={elem.nom}
                      onClick={() => navigate("/manger")}
                    />
                    <h2 className="relative bottom-5 font-sans bg-brown text-white font-bold p-2 w-2/5 text-center rounded-md">
                      {elem.nom}
                    </h2>
                  </div>
                ))
              : personnage
                  .filter((elem) => elem.nom === selectedName)
                  .map((elem) => (
                    <div className="h-[495px] w-4/5">
                      <img
                        className="rounded-md"
                        src={elem.img}
                        alt={elem.nom}
                      />
                      <h2 className="relative bottom-5 bg-brown text-white font-bold p-2 w-1/3 text-center rounded-md  shadow-2xl drop-shadow-2xl">
                        {elem.nom}
                      </h2>
                      <button
                        type="button"
                        className="relative bottom-1/2 left-[90px] text-center bg-bg-sable rounded-full w-32 h-10 text-brown font-cursive text-3xl animate-pulse"
                        onClick={() => navigate("/manger")}
                      >
                        Moi
                      </button>
                    </div>
                  ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Personnages;
