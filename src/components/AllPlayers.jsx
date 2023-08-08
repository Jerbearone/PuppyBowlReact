import { getAllPuppies, deletePuppy } from "../api/fetchFunctions"
import { useState, useEffect } from 'react'
import SearchBar from "./SearchBar";

import '../App.css';
import { useNavigate } from "react-router-dom";


export default function AllPlayers() {
    const [players, setPlayers] = useState([]);
    const [playersBackup, setPlayersBackup] = useState([])
    const navigate = useNavigate();
    
    console.log(players);
    useEffect(() => {
        const getPuppers = async () => {
            const puppers = await getAllPuppies();
            console.log(puppers);
            setPlayers(puppers);
            setPlayersBackup(puppers);
        }
        getPuppers();
    }, []);

    return (
        <div>
            <SearchBar players={players} setPlayers={setPlayers} playersBackup={playersBackup}></SearchBar>
           {
            players.map((player) => {
                return  (
                    <div className="puppyInfo" key={player.id}>
                        <h2>{player.name}</h2>
                        <h4>{player.breed}</h4>
                        <h4>Status: {player.status}</h4>
                        <img className="puppyImage" src={player.imageUrl}></img>
                        <button className="playersButtons" onClick={() => {
                            navigate("/players/:id", {state:player})
                        }}>Details</button>
                        <button className="playersButtons" onClick={() => {
                            //delete a player
                            const confirmation = confirm(`Are you sure you want to delete ${player.name}?`)

                            if (confirmation) {

                                const deletePlayer = async () =>{
                                    const deletedPupper = await deletePuppy(player.id);
                                    console.log(deletedPupper);
                                } 
                                deletePlayer();
    
                                //filter for new puppies...
                                const newPlayerArray = players.filter((pup) => {
                                    const id = pup.id;
                                    return id != player.id;
                                })
                                setPlayers(newPlayerArray);
                                //console.log("current Players: " + players + " : " + players.length);
                                //console.log("new Players: " + newPlayerArray + " : " + newPlayerArray.length);
                            }
                        }}>Delete</button>
                        
                    </div>
                )
            })
           }
        </div>
    ) 

}