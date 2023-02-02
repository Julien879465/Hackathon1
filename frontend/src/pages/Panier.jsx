import React from "react";
import stone from "../assets/backgrounds/stone.png";
import cailloux from "../assets/icons/cailloux.png";

function Panier() {
  return (
    <div className="px-4 flex flex-col h-full w-full justify-between">
      <img
        src={stone}
        alt="eucalyptus"
        className="z-0 fixed right-0 bottom-0"
      />
      <h1 className="flex font-cursive text-4xl text-brown justify-end">
        Sac de manger
      </h1>
      <h2 className="flex font-cursive text-4xl text-black justify-end">
        {" "}
        Donner cailloux ?{" "}
      </h2>
      <img className="w-[31px] h-[33px]" src={cailloux} alt="" />
      <div className="flex justify-center">
        <button
          type="button"
          className="z-50 text-center bg-bg-sable border-2 border-brown rounded-full w-32 h-10 text-brown  font-sans font-bold text-3xl"
        >
          Garder
        </button>
        <button
          type="button"
          className="z-50 border-2 border-brown text-center bg-brown  rounded-full w-32 h-10 text-white  font-sans font-bold text-3xl"
        >
          Donner
        </button>
      </div>
    </div>
  );
}

export default Panier;
