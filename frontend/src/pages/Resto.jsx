import React, { useState, useEffect } from "react";
/*import { useUserContext } from "../contexts/UserContext.jsx";*/
import axios from "axios";
import Restaurant from "@components/restaurant";

function Resto({ selectedRestaurant }) {
  const [data, setData] = useState([]);
  console.log(selectedRestaurant);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/restaurants`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(data);

  return (
    <div>
      {data
        .filter((x) => x.restaurant_name === selectedRestaurant)
        .map((elem) => (
          <li key={elem.id}>
            <img src={elem.url} />
            <h1>{elem.restaurant_name}</h1>
          </li>
        ))}

      <Restaurant selectedRestaurant={selectedRestaurant} />
    </div>
  );
}

export default Resto;
