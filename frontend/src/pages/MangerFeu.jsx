import React from "react";
import back from "../assets/icons/chevron-left.svg";
import Pizzeria from "../assets/img/Pizzeria.png";

function MangerFeu() {
  // faire le fetch ici en filtrant sur feu

  return (
    <>
      <div className="flex flex-col items-start justify-around w-full h-full p-auto px-7">
        <div className="flex flex-row w-full justify-evenly items-center">
          <button
            type="button"
            className="bg-white rounded-full h-[30px] w-[30px] flex items-center justify-center"
          >
            <img src={back} alt="go back" />
          </button>

          <h1 className="py-5 font-sans font-semibold text-xl">
            MANGER ? Manger feu ! 🔥
          </h1>
        </div>

        <div className="flex flex-col justify-around h-full p-auto m-auto">
          {/* faire le map ici */}
          <div className="bg-white rounded-xl p-auto">
            <img src={Pizzeria} alt="Pizza" />
            <div className="flex justify-between font-sans font-semibold p-3">
              <h2 className="text-base">Nom du resto</h2>
              <p className="text-xl">4/5</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-auto">
            <img src={Pizzeria} alt="Pizza" />
            <div className="flex justify-between font-sans font-semibold p-3">
              <h2 className="text-base">Nom du resto</h2>
              <p className="text-xl">4/5</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MangerFeu;
