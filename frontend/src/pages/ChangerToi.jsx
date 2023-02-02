import React from "react";
import { useNavigate } from "react-router-dom";
import voiture from "../assets/img/changerToivoiture.png";

function ChangerToi() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/personnages");
  };

  return (
    <div className="flex flex-col h-full">
      <img
        src={voiture}
        alt="homme préhistorique en voiture"
        className="fixed top-0 left-0"
      />
      <div className="bg-white  fixed bottom-O w-full left-[50%] right-[50%] flex flex-col h-full items-center justify-end">
        <h1 className="font-cursive text-brown text-4xl">HUUU BERT</h1>
        <p className="font-sans font-semibold text-xl">
          arrive, pousse mammouth{" "}
        </p>
        <button
          type="button"
          className="text-brown border-brown border-solid font-bold font-sans text-xl"
          onClick={handleClick}
        >
          CHANGER TOI ?
        </button>
        
      </div>
    </div>
  );
}

export default ChangerToi;
