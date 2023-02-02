import React from "react";
import { useNavigate } from "react-router-dom";
import voiture from "../assets/img/changerToivoiture.png";

function ChangerToi() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/personnages");
  };

  return (
    <div className=" flex flex-col h-screen items-center justify-between ">
      <img
        src={voiture}
        alt="homme préhistorique en voiture"
        className="w-full shadow-2xl drop-shadow-xl"
      />

      <div className="fixed rounded-t-lg bottom-0 h-[45%] left-[10%] right-[10%] w-10/12 bg-white">
        <div className="flex  rounded-t-lg flex-col items-center justify-evenly bg-white h-full shadow-2xl drop-shadow-xl">
          <h1 className="font-cursive text-brown text-4xl">HUUU BERT</h1>
          <p className="font-sans font-semibold text-xl">
            arrive, pousse mammouth{" "}
          </p>
          <button
            type="button"
            className="text-brown border-brown rounded-full p-3 border-2 border-solid font-bold font-sans text-xl"
            onClick={handleClick}
          >
            CHANGER TOI ?
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangerToi;
