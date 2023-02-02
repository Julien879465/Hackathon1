import React from "react";
import back from "../assets/icons/chevron-left.svg";

function MangerFeu() {
  return (
    <>
      <div className="flex flex-col items-start justify-around w-full p-auto px-7">
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
      </div>
    </>
  );
}

export default MangerFeu;
