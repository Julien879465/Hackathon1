import React, { useState, useEffect } from "react";
import cavemanWalking from "../assets/img/CalkingCaveman.gif";

function CommandeConfirme() {
//   const [showGif, setShowGif] = useState(true);

//   useEffect(() => {
//     const image = new Image();
//     image.src = cavemanWalking;
//     image.onload = () => {
//       setTimeout(() => {
//         setShowGif(false);
//       }, image.duration * 15000);
//     };
//   }, []);

  return (
//     <div style={{ background: showGif ? "transparent" : "white" }}>
//       {showGif && <img src={cavemanWalking} />}
//     </div>
//   );



    <div className="animation-once">
      CommandeConfirme
      <img
        src={cavemanWalking}
        alt="homme préhistorique qui marche dans le temps"
        className="animation-once"
      />
    </div>
  );
}

export default CommandeConfirme;
