import "./Jogo.css";
import clouds from "../../assets/clouds.png";
import pipe from "../../assets/pipe.png";


function jogo () {
    return <div className="jogo">
        <img className="nuvens" alt="nuvens" src={clouds}/>

        <img className="pipe" alt="pipe" src={pipe}/>
    </div>;

    
}

export default jogo;