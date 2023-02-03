import React, { useState, useEffect } from "react";
import axios from "axios";
import cailloux from "../assets/icons/cailloux.png";

function Restaurant({ selectedRestaurant }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/menus`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(selectedRestaurant);

  return (
    <div className="md:flex md:justify-between md:w-full md:gap-6">
      {data
        .filter((y) => y.restaurant_name === selectedRestaurant)
        .map((menu) => (
          <div
            className="flex flex-row justify-between flex-nowrap my-4 rounded-lg bg-white md:w-full md:h-2/5 md:flex md:flex-col md:mr-0 md:order-2"
            key={menu.id}
          >
            <div className="flex flex-col justify-evenly items-start p-2 flex-nowrap md:order-3">
              <h1 className="font-bold md:text-2xl">{menu.name_menu} </h1>
              <h2 className="text-gray-400 md:text-xl md:pt-1.5">{menu.description_menu}</h2>
              <h3 className=" text-brown font-bold  md:self-end md:mb-4">
                {menu.price.toFixed(0)}
                <img
                  className="w-[31px] h-[33px] ml-5 float-right md:mr-5 md:self-end md:mb-4"
                  src={cailloux}
                  alt=""
                />
              </h3>
            </div>
            <img
              className="aspect-square max-w-[40%] rounded-r-lg self-end md:self-center md:w-full md:order-1"
              src={menu.image_url}
            ></img>
          </div>
        ))}
    </div>
  );
}

export default Restaurant;
