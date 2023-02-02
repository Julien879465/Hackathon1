import React from "react";
import { useNavigate } from "react-router-dom";
import voiture from "../assets/img/changerToivoiture.png";
import Navbar from "../components/Navbar";

function ChangerToi() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/personnages");
  };

  return (
    <>
      <Navbar />
      <div className=" flex flex-col h-screen items-center justify-between">
        <img
          src={voiture}
          alt="homme préhistorique en voiture"
          className="w-full md:mt-10  shadow-2xl drop-shadow-2xl"
        />

        <div className="fixed rounded-t-lg bottom-0 h-[55%] md:h-[40%] w-10/12 bg-white  shadow-2xl drop-shadow-2xl">
          <div className="flex rounded-t-lg flex-col items-center bg-white h-full">
            <h1 className="font-cursive mt-12 mb-7 text-brown text-5xl md:text-8xl">
              HUUU BERT
            </h1>
            <p className="font-sans font-semibold text-2xl text-center md:text-3xl">
              arrive, pousse mammouth
            </p>
            <button
              type="button"
              className="text-brown mt-20 md:mt-9 border-brown rounded-full p-3 border-2 border-solid font-bold font-sans text-xl"
              onClick={handleClick}
            >
              CHANGER TOI ?
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangerToi;
