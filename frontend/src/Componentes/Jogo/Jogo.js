import "./Jogo.css";
import clouds from "../../assets/clouds.png";
import pipe from "../../assets/pipe.png";
import mario from "../../assets/mario.gif";
import gameOver from "../../assets/game-over.png";
import { useEffect, useRef, useState } from "react";

function Jogo () {
    
    const [estaPulando, setEstaPulando] = useState(false);
    const [estaMorto, setEstaMorto] = useState(false)

    const [pontos, setPontos] = useState (0);

    const marioRef = useRef();
    const canoRef = useRef();

    function marioEstaNoCano() {

        const mario = marioRef.current;
        const cano = canoRef.current;

        if (!mario || !cano){
            return;
        }
 

    return(
        cano.offsetLeft > mario.offsetLeft &&
        cano.offsetLeft < mario.offsetLeft + mario.offsetWidth &&
        mario.offsetTop + mario.offsetHeight > cano.offsetTop
    );
}

// Implementação temporária para exibir se o mário está no cano
  // ou não
  setInterval(function () {
   const estaNoCano = marioEstaNoCano();

   if (!estaNoCano){
    return;
   }

  setEstaMorto(true);
  }, 100);

  useEffect(function (){

    const interval = setInterval(function () {
        if (estaMorto){
            return;
        }
    
        setPontos(pontos + 1);
    
         
        },500);

        return () => clearInterval(interval);
    }, 
    [estaMorto, pontos]
  );

    document.onkeydown = function () {
       setEstaPulando (true); 

       setTimeout(function () {
        setEstaPulando(false);
       }, 700);
    };

    let marioClassName = "mario";

    if (estaPulando) {
        marioClassName = "mario mario-pulo";
    }
  
    const marioImage = estaMorto ? gameOver : mario;

    const pararAnimacao = estaMorto ? "parar-animacao" : "";
  

    return <div className="jogo">

        <div>Pontos: {pontos}</div>

        <img className="nuvens" alt="nuvens" src={clouds}/>

        <img ref={canoRef}
        className={"pipe " + pararAnimacao}
        alt="pipe" src={pipe}/>

        <img ref={marioRef} 
        className={marioClassName} 
        src={marioImage} alt="mario"/>

        <div className="chao"></div>

    </div>;
    
}

export default Jogo;