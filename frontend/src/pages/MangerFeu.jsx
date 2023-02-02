import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

import axios from "axios";
import back from "../assets/icons/chevron-left.svg";
import flamme from "../assets/img/flame.png";
import flammeRight from "../assets/img/flameright.png";

function MangerFeu() {
  // faire le fetch ici en filtrant sur feu
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/manger");
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/restaurants`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-start justify-around w-full h-screen p-auto px-7 bg-bg-sable ">
        <div className="flex flex-row w-full justify-evenly items-center md:justify-start md:gap-4 ">
          <button
            type="button"
            className="bg-white rounded-full h-[30px] w-[30px] flex items-center justify-center md:h-[50px] md:w-[50px] z-50"
            onClick={handleClick}
          >
            <img src={back} alt="go back" />
          </button>

          <h1 className="py-5 font-sans font-semibold text-xl md:text-4xl">
            MANGER ? Manger feu ! 🔥
          </h1>
        </div>

      <div className="z-10 flex flex-col justify-evenly p-auto m-auto md:grid md:gap-x-8 md:gap-y-4 md:grid-cols-3 md:justify-between md:w-full">
        {data
          .filter(
            (feu) =>
              feu.cuisine === "Italien" ||
              feu.cuisine === "gastronomique" ||
              feu.cuisine === "Fast-Food"
          )
          .map((restaurant) => (
            <div
              className="bg-white rounded-xl flex flex-col my-4 md:flex md:flex-col md:1/3 md:w-full"
              key={restaurant.id}
            >
              <img
                className="aspect-video rounded-t-lg md:w-full"
                src={restaurant.url}
                alt="Pizza"
              />
              <div className="flex justify-between font-sans font-semibold p-3 md:flex">
                <h2 className="text-base">{restaurant.restaurant_name}</h2>
                <p className="text-xl">{restaurant.rating}/5</p>
              </div>
              </div>
            ))}
        
      </div>
      <img src={flamme} alt="flamme" className="z-0 fixed top-[10%] left-0" />
      <img
        src={flammeRight}
        alt="flamme"
        className="z-0 fixed bottom-[10%] right-0"
      />
    </div>
    </>
  );
}

export default MangerFeu;
