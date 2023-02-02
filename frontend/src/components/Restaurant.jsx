import React, { useState, useEffect } from "react";
import axios from "axios";

function Restaurant() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/menus`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(data);
  return (
    <div>
      <ul>
        {data
          .filter((restoName) => restoName.restaurant_name === "Dino Delizioso")
          .map((menu) => (
            <li key={menu.id}>
              {menu.restaurant_name}
              {menu.name_menu}
              {menu.description_menu}
              <img src={menu.image_url}></img>
              {menu.price}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Restaurant;
