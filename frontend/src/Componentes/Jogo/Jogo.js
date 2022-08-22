import "./Jogo.css";
import clouds from "../../assets/clouds.png";

function jogo () {
    return <div className="jogo">
        <img className="nuvens" alt="nuvens" src={clouds}/>
    </div>;
}

export default jogo;