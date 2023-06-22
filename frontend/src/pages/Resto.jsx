import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
/*import { useUserContext } from "../contexts/UserContext.jsx";*/
import axios from "axios";
import back from "../assets/icons/chevron-left.svg";
import Restaurant from "@components/Restaurant";
import Navbar from "@components/Navbar";

function Resto({ selectedRestaurant }) {
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
      <div className="flex flex-col justify-between items-center w-screen h-auto  bg-bg-sable">
        <button
          type="button"
          className="bg-white rounded-full h-[30px] w-[30px] top-20 left-5 fixed"
          onClick={handleClick}
        >
          <img src={back} alt="go back" />
        </button>

        {data
          .filter((x) => x.restaurant_name === selectedRestaurant)
          .map((elem) => (
            <div>
              <li className="list-none" key={elem.id}>
                <img
                  className="aspect-video w-full"
                  src={elem.url}
                  alt="menu"
                />
                <h1 className="font-extrabold mt-3 mx-7">
                  {elem.restaurant_name}
                </h1>
              </li>
            </div>
          ))}
        <p className="m-2 mx-7 text-gray-700">
          Ici, manger chaud, manger bon, manger gras. Pizzas, pâtes, beaucoup
          bon.
        </p>
        <div className=" w-11/12  bg-bg-sable">
          <Restaurant selectedRestaurant={selectedRestaurant} />
        </div>
      </div>
    </>
  );
}

export default Resto;
