import ham1 from "../assets/img/ham1.png";
import stone1 from "../assets/img/stone-1.png";
import plante from "../assets/backgrounds/eucalyptus.png";

export default function Home() {
  return (
    <div className=" flex items-center justify-center w-full h-full">
      <div className="text-center">
        <div className="flex flex-col items-center ">
          <img
            src={plante}
            alt="eucalyptus"
            className=" z-0 fixed left-0 top-0 md:h-[300px]"
          />
          <p className=" z-10 font-cursive text-brown text-7xl pb-3 md:text-8xl">
            HUUU BERT
          </p>
        </div>
        <div>
          <p className="font-cursive text-2xl md:text-3xl">
            Arrêter de mourir de faim ?
          </p>
        </div>
        <div className="flex items-center justify-center h-full">
          <a className="z-50" href="/personnages">
            <img
              src={ham1}
              alt="clickable ham"
              className="z-50 w-40 h-40 m-20 drop-shadow-xl animate-wiggle"
            />
          </a>
          <img
            src={stone1}
            alt="stone"
            className="z-0 fixed right-0 bottom-0"
          />
        </div>
      </div>
    </div>
  );
}
