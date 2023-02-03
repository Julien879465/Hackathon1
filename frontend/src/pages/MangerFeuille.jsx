import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import back from "../assets/icons/chevron-left.svg";
import Navbar from "../components/Navbar";
import eucalLeft from "../assets/img/eucal-left.png";
import eucalRight from "../assets/img/eucal-right.png";

function MangerFeuille({ selectedRestaurant, setSelectedRestaurant }) {
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
      <div className="flex flex-col items-start justify-around w-full h-auto p-auto px-7 bg-bg-sable ">
        <div className="flex flex-row w-full justify-evenly items-center md:justify-start md:gap-4 ">
          <button
            type="button"
            className="bg-white rounded-full h-[30px] w-[30px] flex items-center justify-center md:h-[50px] md:w-[50px]"
            onClick={handleClick}
          >
            <img src={back} alt="go back" />
          </button>

          <h1 className="py-5 font-sans font-semibold text-xl md:text-4xl">
            MANGER ? Manger feuille ! 🌿
          </h1>
        </div>

        <div className="z-10 flex flex-col justify-evenly p-auto m-auto md:grid md:gap-x-8 md:gap-y-4 md:grid-cols-3 md:justify-between md:w-full">
          {data
            .filter(
              (feu) =>
                feu.cuisine === "Pokébowl" ||
                feu.cuisine === "Sushi" ||
                feu.cuisine === "Bar à fruits"
            )
            .map((restaurant) => (
              <button
                type="button"
                onClick={() => {
                  setSelectedRestaurant(restaurant.restaurant_name);
                  navigate("/Resto");
                }}
                className="bg-white rounded-xl p-auto my-4 shadow-2xl drop-shadow-xl md:flex md:flex-col md:1/3 md:w-full"
                key={restaurant.id}
              >
                <img
                  className="aspect-video rounded-t-xl md:w-full"
                  src={restaurant.url}
                  alt="Affiche restaurant"
                />
                <div className="flex justify-between font-sans font-semibold p-3 md:flex">
                  <h2 className="text-base">{restaurant.restaurant_name}</h2>
                  <p className="text-xl">{restaurant.rating}/5</p>
                </div>
              </button>
            ))}
        </div>
      </div>
      <img
        src={eucalLeft}
        alt="flamme"
        className="z-0 fixed top-[15%] left-0"
      />
      <img
        src={eucalRight}
        alt="flamme"
        className="z-0 fixed bottom-[15%] right-0"
      />
    </>
  );
}

export default MangerFeuille;
