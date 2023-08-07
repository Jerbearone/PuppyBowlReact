import { useState, useEffect } from "react";
import { postPuppy } from "../api/fetchFunctions";

export default function NewPlayerForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [url, setUrl] = useState("");
    const [player, setPlayer] = useState({})

    //implement onsubmit, and onchange for the form


    function onNameChanged(event) {
        setName(event.target.value)
    }

    function onBreedChanged(event) {
        setBreed(event.target.value);

    }

    function onImageUrlChanged(event) {
        setUrl(event.target.value);
    }

    //cancel regular form submit
    function submitForm(event) {
        event.preventDefault();
        console.log(name, breed);
        if (name != "" && breed != "" && url != "") {
            createPlayer();
        }
    }

    useEffect(() => {
        //when player is set, we can post player to database.
        console.log(player);
        async function postPlayer() {
            //post the data of the new player
            if (name != "" && breed != "" && url != "") {
                await postPuppy(player);
            }

        }
        postPlayer();

    }, [player]);

    function createPlayer() {
        const newPlayer = {name:name, breed:breed, imageUrl: url};
        setPlayer(newPlayer);
    }

    return (
        <div>
            <h1>Add new Player</h1>
            <form onSubmit={submitForm}>
                <ul className="newPlayerFormList">
                    <li>
                        <label>Name:</label>
                        <input onChange={onNameChanged}></input>

                    </li>
                    <li>
                        <label>Breed:</label>
                        <input onChange={onBreedChanged}></input>

                    </li>

                    <li>
                        <label>Image Url: </label>
                        <input onChange={onImageUrlChanged}></input>

                    </li>
                    <li>
                        <button type="submit">Submit</button>
                    </li>
                </ul>   
            </form>
            
        </div>
    )
}