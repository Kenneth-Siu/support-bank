const url =
    "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist?key=6c9c30a1-0fd3-4b1b-8831-29aba43c5c7c";

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((json) => console.log(json));

// HEllo

/*

GET
POST
PUT
DELETE
PATCH


GET https://pokeapi.co/api/v2/pokemon/pikachu
POST https://pokeapi.co/api/v2/pokemon/pikachu
PUT https://pokeapi.co/api/v2/pokemon/pikachu
DELETE https://pokeapi.co/api/v2/pokemon/pikachu


*/
