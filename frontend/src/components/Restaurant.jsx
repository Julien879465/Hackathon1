import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="flex flex-col ">
      {data
        .filter((y) => y.restaurant_name === selectedRestaurant)
        .map((menu) => (
          <div className="flex flex-row w-full flex-nowrap" key={menu.id}>
            {menu.name_menu}
            {menu.description_menu}
            <img src={menu.image_url}></img>
            {menu.price}
          </div>
        ))}
    </div>
  );
}

export default Restaurant;
