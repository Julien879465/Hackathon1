import React from "react";
import cailloux from "../assets/icons/cailloux.png";

export default function Popup() {
  const card = {
    url: "https://knowyourtown.co.in/wp-content/uploads/2020/03/pizzaronee-kondhwa-khurd-pune-pizza-outlets-lu7hv81hjk.jpg",
    name: "Pizza Préhistorique",
    price: "12",
  };

  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-brown text-white font-sans font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open small modal
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 backdrop-blur-sm">
            <div className="relative w-4/5 md:w-auto my-6 mx-auto max-w-sm">
              <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white">
                <div className="flex flex-col items-center justify-between p-5 rounded-t">
                  <img
                    className="w-full rounded-lg aspect-square max-h-56 md:max-h-full"
                    src={card.url}
                    alt="manger"
                    key={card.url}
                  />
                  <h3 className="pt-5 text-2xl font-sans font-bold">
                    {card.name}
                  </h3>
                </div>
                <div className="flex justify-center">
                  <p className="text-brown font-bold font-sans text-2xl">
                    {card.price}
                  </p>
                  <img
                    src={cailloux}
                    alt="cailloux"
                    className="mx-3 w-10 h-10"
                  />
                </div>
                <div className="flex items-center flex-col justify-end p-6 rounded-b">
                  <button
                    className="bg-brown text-white font-sans font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Mettre dans sac
                  </button>
                  <button
                    className="text-brown font-sans background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>.</div>
        </>
      ) : null}
    </>
  );
}