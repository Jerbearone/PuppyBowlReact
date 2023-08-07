import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

export default function SinglePlayer() {
    const passedPlayer = useLocation();
    const [player, setPlayer] = useState("");
    useEffect(() => {
        console.log(passedPlayer.state);
        setPlayer(passedPlayer.state);
    }, []);
    
    return (
        <div>
            <h1>{player.name}</h1>
            <h2>{player.breed}</h2>
            <img className="puppyImage" src={player.imageUrl}></img>
            
        </div>
    )
}