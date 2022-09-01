import "./HighScore.css";

function HighScore(props) {
    
    return (
    <div className="HighScore">
        <div>
            Você fez <b>{props.pontos}</b> pontos!
        </div>
        
        <h1>HighScore</h1> 

        <div> Dalila - 90 pontos</div>  
        <div> Felipe - 50 pontos</div>  
        <div> Sofia - 32 pontos</div>  
        <div>
            <h1>Registre sua pontuação</h1>
            <form>
                <input type="text" placeholder="Digite o seu nome..."/>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
</div>
);
}

export default HighScore;