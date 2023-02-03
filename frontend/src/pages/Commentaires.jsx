import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
/*import { useUserContext } from "../contexts/UserContext.jsx";*/
import axios from "axios";
import back from "../assets/icons/chevron-left.svg";

import Navbar from "@components/Navbar";

function Resto({ selectedRestaurant }) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/panier");
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/reviews`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(data);

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-between items-center w-screen h-auto  bg-bg-sable">
        <button
          type="button"
          className="bg-white rounded-full h-[30px] w-[30px] top-10 left-5 fixed"
          onClick={handleClick}
        >
          <img src={back} alt="go back" />
        </button>

        {data.map((review) => (
          <button
            type="button"
            className="w-4/5 md:w-3/5   flex flex-row justify-between flex-nowrap my-4 rounded-lg bg-white"
            key={review.id}
          >
            <div className=" w-full flex flex-col justify-evenly items-start p-2 flex-nowrap">
              <h1 className="font-bold ">{review.customer_name} </h1>
              <h2 className="text-gray-400 text-left">{review.review_text}</h2>
              <h3 className=" text-brown font-bold self-end mr-3">
                {review.rating}/5
              </h3>
            </div>
          </button>
        ))}
      </div>
    </>
  );
}

export default Resto;
