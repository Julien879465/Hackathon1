import React from "react";
import { useNavigate } from "react-router-dom";
import stone from "../assets/backgrounds/stone.png";
import cailloux from "../assets/icons/cailloux.png";
import Navbar from "../components/Navbar";
import back from "../assets/icons/chevron-left.svg";

function Panier() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/manger");
  };
  const menus = JSON.parse(localStorage.getItem("menus"));
  return (
    <div className="flex flex-col justify-between items-center h-full w-full">
      <Navbar />

      {/* {menus.map((poubelle) => (
        <div>{poubelle.id}</div>
      ))} */}

      <img
        src={stone}
        alt="eucalyptus"
        className="z-0 fixed right-0 bottom-0"
      />
      <div className="px-4 flex flex-col h-full w-full justify-between">
        <div className="flex flex-col h-full w-11/12 justify-between items-center ">
          <div className="flex flex-row w-full justify-evenly items-center">
            <button
              type="button"
              className="bg-white rounded-full h-[30px] w-[30px] flex items-center justify-center"
              onClick={handleClick}
            >
              <img src={back} alt="go back" />
            </button>
            <h1 className="flex font-cursive text-4xl text-brown justify-end">
              Sac de manger
            </h1>
          </div>

          {menus.map((inCart) => (
            <div className="flex flex-col justify-between h-full">
              <div className="bg-white font-sans rounded-xl">
                <div className="flex flex-row flex-nowrap justify-between">
                  <div className="flex font-semibold items-start">
                    <img
                      src={inCart.image_url}
                      className="aspect-square max-w-[5rem] my-4 mx-4"
                    />
                    <div className="my-4 flex flex-col justify-between">
                      <h3 className="text-sm ">{inCart.name_menu}</h3>
                      <div className="flex flex-row justify-start text-base my-4">
                        <div className="button bg-brown text-white rounded-3xl whitespace-nowrap px-3  py-1">
                          <button
                            className="px-1 md:px-2 md:pl-3"
                            type="button"
                            onClick={() => handleQuantityLess()}
                          >
                            <p>-</p>
                          </button>
                          1
                          <button
                            className="px-1 md:px-2"
                            type="button"
                            onClick={() => handleQuantityMore()}
                          >
                            <p>+</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col text-brown font-semibold text-2xl items-start mx-4 my-3">
                    <p>{inCart.price.toFixed(0)}</p>
                    <img src={cailloux} alt="monnaie caillou" className="" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h2 className=" font-cursive text-4xl text-black">
                  {" "}
                  Donner cailloux ?{" "}
                </h2>
                <div className="flex items-center">
                  <p>20</p>
                  <img className="w-[31px] h-[33px]" src={cailloux} alt="" />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="z-50 text-center bg-bg-sable border-2 border-brown rounded-full w-32 h-10 text-brown  font-sans font-bold text-3xl"
                >
                  Garder
                </button>
                <button
                  type="button"
                  className="z-50 border-2 border-brown text-center bg-brown  rounded-full w-32 h-10 text-white  font-sans font-bold text-3xl"
                >
                  Donner
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Panier;
