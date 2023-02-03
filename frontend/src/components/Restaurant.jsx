import React, { useState, useEffect } from "react";
import axios from "axios";
import cailloux from "../assets/icons/cailloux.png";
import { useNavigate } from "react-router-dom";

function Restaurant({ selectedRestaurant }) {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [popUpOn, setPopUpOn] = useState([]);
  const navigate = useNavigate();

  const handleClick = (card) => {
    localStorage.setItem("menus", JSON.stringify([card]));
    navigate("/panier");
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/menus`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {data
        .filter((y) => y.restaurant_name === selectedRestaurant)
        .map((menu) => (
          <button
            type="button"
            onClick={() => {
              setPopUpOn([menu]);
              setShowModal(true);
            }}
            className="w-full flex flex-row justify-between flex-nowrap my-4 rounded-lg bg-white"
            key={menu.id}
          >
            <div className="flex flex-col justify-evenly items-start p-2 flex-nowrap">
              <h1 className="font-bold">{menu.name_menu} </h1>
              <h2 className="text-gray-400">{menu.description_menu}</h2>
              <h3 className=" text-brown font-bold">
                {menu.price.toFixed(0)}
                <img
                  className="w-[31px] h-[33px] ml-5 float-right"
                  src={cailloux}
                  alt=""
                />
              </h3>
            </div>
            <img
              className="aspect-square max-w-[40%] rounded-r-lg self-end"
              src={menu.image_url}
            ></img>
          </button>
        ))}{" "}
      {showModal &&
        popUpOn.map((card) => (
          <>
            <div
              key={card.id}
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 backdrop-blur-sm"
            >
              <div className="relative w-4/5 md:w-auto my-6 mx-auto max-w-sm">
                <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white">
                  <div className="flex flex-col items-center justify-between p-5 rounded-t">
                    <img
                      className="w-full rounded-lg aspect-square max-h-56 md:max-h-full"
                      src={card.image_url}
                      alt="manger"
                    />
                    <h3 className="pt-5 text-2xl font-sans font-bold">
                      {card.name_menu}
                    </h3>
                  </div>
                  <div className="flex justify-center">
                    <p className="text-brown font-bold font-sans text-2xl">
                      {card.price.toFixed(0)}
                    </p>
                    <img
                      src={cailloux}
                      alt="cailloux"
                      className="mx-3 w-10 h-10"
                    />
                  </div>
                  <div className="flex items-center flex-col justify-end p-6 rounded-b">
                    <button
                      className="bg-brown text-white font-sans font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        handleClick(card);
                      }}
                    >
                      Mettre dans sac
                    </button>
                    <button
                      className="text-brown font-sans background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>.</div>
          </>
        ))}
    </div>
  );
}

export default Restaurant;
