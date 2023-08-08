import { TextField } from "@mui/material";
import { useState } from "react";

export default function SearchBar({players, setPlayers, playersBackup}) {

    function onSearchSubmitted(event) {
        console.log(event.target.value);
        const searchedPlayers = playersBackup.filter((playerBackup) => {
            return playerBackup.name.includes(event.target.value);
        })
        setPlayers(searchedPlayers);

    }

    return (<div className="searchBar">
        <TextField onChange={onSearchSubmitted} id="outlined-basic" label="Puppy" variant="outlined">

        </TextField>
    </div>)
}