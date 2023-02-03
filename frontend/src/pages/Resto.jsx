import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
/*import { useUserContext } from "../contexts/UserContext.jsx";*/
import axios from "axios";
import back from "../assets/icons/chevron-left.svg";
import Restaurant from "@components/restaurant";
import Navbar from "@components/Navbar";

function Resto({ selectedRestaurant }) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/manger");
  };
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
    <div className="flex flex-col items-start justify-around w-full h-full p-auto px-7 bg-bg-sable">
      <button
        type="button"
        className="bg-white rounded-full h-[30px] w-[30px] fixed top-10 left-5"
        onClick={handleClick}
      >
        <img src={back} alt="go back" />
      </button>

      {data
        .filter((x) => x.restaurant_name === selectedRestaurant)
        .map((elem) => (
          <li className="list-none" key={elem.id}>
            <img
              className="aspect-video rounded-t-lg w-full"
              src={elem.url}
              alt="menu"
            />
            <h1>{elem.restaurant_name}</h1>
          </li>
        ))}
      <p>
        Ici, manger chaud, manger bon, manger gras. Pizzas, pâtes, beaucoup bon.
      </p>
      <div className="flex flex-col justify-between w-full">
        <Restaurant selectedRestaurant={selectedRestaurant} />
      </div>
    </div>
  );
}

export default Resto;
