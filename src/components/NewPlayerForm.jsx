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
        <div className="newPlayerRoot">
            <h1>Add new Player</h1>
            <form className="newPlayerFormList" onSubmit={submitForm}>
                <label>Name:
                    <input onChange={onNameChanged}></input>
                </label>
                <label>Breed:
                <input onChange={onBreedChanged}></input>
                </label>
                <label>Image Url:
                    <input onChange={onImageUrlChanged}></input>
                </label>
                <button className="playersButtons" type="submit">Submit</button>
            </form>
            
            
        </div>
    )
}