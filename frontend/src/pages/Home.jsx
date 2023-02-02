import ham1 from"../assets/img/ham1.png";
import HUB from"../assets/img/HUB.png";


export default function Home() {
  return (
    <body class="bg-bg-sable h-full">
      <div className="bg-bg-home h-80 bg-no-repeat top-0"></div>
      <div className="text-center">
        <div className="flex flex-col items-center">
        <img src={HUB} alt="clickable ham" className="w-64 h-16 mb-2"/>
        </div>
        <p className="font-cursive text-2xl">Arrêter de mourir de faim ?</p>
        <a href="" className="inline-block">
        <img src={ham1} alt="clickable ham" className="w-40 h-40 m-20"/>
      </a>
    </div>
    <div className="h-60 bg-no-repeat bottom-0 bg-right bg-bg-stone"></div>
  </body>
  );
}
