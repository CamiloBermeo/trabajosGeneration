
const prompt = require("prompt-sync")();

const pokemonNombre = prompt("ingrese el nombre del pokemon ")

buscarPokemon(pokemonNombre)



async function buscarPokemon(nombrePokemon) {

    const datos = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)

    if (!datos.ok) {
        console.log(datos.status)
        return null;
    }

    const respuesta = await datos.json();

    console.log("nombre del pokemon: ", respuesta.name);
    console.log("ID del pokemon: ", respuesta.id);

    async mostrarFicha(respuesta);
}

async function mostrarFicha (pokemon){

    if (pokemon == null){
        console.log("no hay un pokemon qu emostrar");
        return null;
    }

    console.log(pokemon.name)
    console.log(pokemon.id);
    
    

}