import React, { useEffect, useState } from "react";
import axios from "axios";
import back from "../assets/icons/chevron-left.svg";
import Pizzeria from "../assets/img/Pizzeria.png";

function MangerFeu() {
  // faire le fetch ici en filtrant sur feu
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}restaurants`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // useEffect(() => {
  //   axios.get(`${import.meta.env.VITE_BACKEND_URL}/dreams`).then((res) => {
  //     setData(res.data);
  //     setPopUp(res.data.map((elem) => ({ ...elem, quantity: 0 })));
  //   });
  // }, []);

  console.log(data);

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
          {data
            .filter(
              (feu) =>
                feu.cuisine === "Italien" ||
                feu.cuisine === "gastronomique" ||
                feu.cuisine === "Fast-Food"
            )
            .map((restaurant) => (
              <div className="bg-white rounded-xl p-auto">
                <img src={Pizzeria} alt="Pizza" />
                <div className="flex justify-between font-sans font-semibold p-3">
                  <h2 className="text-base">{restaurant.restaurant_name}</h2>
                  <p className="text-xl">{restaurant.rating}/5</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default MangerFeu;
