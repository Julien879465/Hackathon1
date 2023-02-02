import ham1 from"../assets/img/ham1.png";
import HUB from"../assets/img/HUB.png";
import stone1 from "../assets/img/stone-1.png";
export default function Home() {
  
  return (
    <body class="bg-bg-sable h-screen">
      <div className="bg-bg-home relative h-80 bg-no-repeat top-0"></div>
      <div className="text-center">
        <div className="flex flex-col items-center">
        <img src={HUB} alt="LOGO" className="w-64 h-16 mb-2"/>
        </div>
        <div>
        <p className="font-cursive text-2xl">Arrêter de mourir de faim ?</p>
        </div>
        <div className="flex items-center justify-center h-full">
        <a href="/personnages">
       <img src={ham1} alt="clickable ham" className="w-40 h-40 m-20 animate-wiggle"/>
       </a>
       <img src={stone1} alt="stone" className="z-0 fixed right-0 bottom-0"/>
    </div>
   </div>
  </body>
  );
}