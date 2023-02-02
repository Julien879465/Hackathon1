import React, { useState, useEffect } from "react";
/*import { useUserContext } from "../contexts/UserContext.jsx";*/
import axios from "axios";
import Restaurant from "@components/restaurant";

const Resto = () => {
  const [data, setData] = useState([]);

  /* const [loading, setLoading] = useState(false);*/
  /*const { selectedRestaurant } = useUserContext();*/

  /* console.log(data);*/
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/restaurants`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {data
        .filter((elem) => elem.cuisine === "Italien")
        .map((elem) => (
          <li key={elem.id}>
            <img src={elem.url}></img>
          </li>
        ))}

      <h2>Menus for </h2>
      {/*{loading ? (
        <p>Loading...</p>
      ) : (*/}
      <Restaurant />
    </div>
  );
};

export default Resto;
