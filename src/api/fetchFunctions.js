
const baseUrl = " https://fsa-puppy-bowl.herokuapp.com/api";
const cohortName = '2302-acc-pt-web-pt-e';
const playersEndpoint = "players";

//api call to get all puppies
async function getAllPuppies() {
    try{
        const response = await fetch(`${baseUrl}/${cohortName}/${playersEndpoint}`)
        const data = await response.text();
        const responseJson = JSON.parse(data);
        const puppyData = responseJson.data.players;
        console.log("getAllPuppies: " + puppyData);
        return puppyData;
    }catch(error){
        console.log(error);

    }

}
//api call to get single puppy info

async function getPuppy(puppyId) {
    try{
        const response = await fetch(`${baseUrl}/${cohortName}/${playersEndpoint}/${puppyId}`)
        const data = await response.text();
        const responseJson = JSON.parse(data);
        const puppy = responseJson.data.player;
        console.log("getPuppy: " + puppy);
        return puppy;
    }catch(error){
        console.log(error);

    }

}
//api call to add puppy to db (post)

async function postPuppy(puppyObject) {
    try{
        const response = await fetch(`${baseUrl}/${cohortName}/${playersEndpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(puppyObject)
        });
        const result = await response.json();
        console.log("Posted Pupper: " + result);
    }catch(error){
        console.log(error)
    }

}

//delete a single puppy from api
async function deletePuppy(puppyId) {
    try{
        const response = await fetch(`${baseUrl}/${cohortName}/${playersEndpoint}/${puppyId}`, {
            method: "DELETE",
        });
        const deleteResponse = await response.text();
        const delJson = JSON.parse(deleteResponse);
        console.log("Deleted pupper: " + delJson);
    }catch(error){
        console.log( `Whoa, could not delete ${puppyId} from roster...`, error);
    }

}

export {getAllPuppies, getPuppy, postPuppy, deletePuppy}