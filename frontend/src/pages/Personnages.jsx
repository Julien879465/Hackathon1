import ugg from "../assets/img/ugg.png";
import gata from "../assets/img/gata.png";
import grok from "../assets/img/grok.png";
import broud from "../assets/img/broud.png";

function Personnages() {
  return (
    <div className="flex flex-col bg-bg-sable w-full h-full justify-around items-center">
      <h1 className="font-cursive text-4xl text-brown">TOI ?</h1>
      <select
        className="rounded-full w-[80%] h-11 text-center"
        name="selectName"
        id=""
      >
        <option value="--">
          Donne nom de toi
        </option>
        <option value="Ugg">Ugg</option>
        <option value="Gata">Gata</option>
        <option value="Broud">Broud</option>
        <option value="Grok">Grok</option>
      </select>
      <div className="flex flex-wrap justify-evenly">
        <div className="w-2/5">
          <img className="rounded-md" src={ugg} alt="ugg" />
          <h2 className="relative bottom-5 bg-slate-900 font-sans text-white   w-1/3 text-center rounded-md">
            Ugg
          </h2>
        </div>

        <div className="w-2/5">
          <img className="rounded-md" src={gata} alt="gata" />
          <h2 className="relative bottom-5 bg-slate-900 font-sans text-white w-1/3 text-center rounded-md">
            Gata
          </h2>
        </div>
        <div className="w-2/5">
          <img className="rounded-md" src={broud} alt="broud" />
          <h2 className="relative bottom-5 bg-slate-900 font-sans text-white w-1/3 text-center rounded-md">
            Broud
          </h2>
        </div>
        <div className="w-2/5">
          <img className="rounded-md" src={grok} alt="grok" />
          <h2 className="relative bottom-5 bg-slate-900 font-sans text-white w-1/3 text-center rounded-md">
            Grok
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Personnages;
