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
    <div>
      {data
        .filter((y) => y.restaurant_name === selectedRestaurant)
        .map((menu) => (
          <div
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
          </div>
        ))}
    </div>
  );
}

export default Restaurant;
