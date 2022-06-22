// const animeInput = document.getElementById("searchInput");
// const animeFact = document.getElementById("displayFact");

// const fetchAnime = async() => {
//     let kayword = animeInput["anime_name"].value;
// }

// const getPokemon = async kayword => {
//     const url = `https://anime-facts-rest-api.herokuapp.com/api/v1/${kayword}`;

//     const result = await fetch(url);
//     const pokemonData = await result.json();

//     console.log(pokemonData);

// }
// getPokemon('naruto');

// const searchAnime = document.getElementById("searchManga");

// searchAnime.addEventListener("click", anime);

// function anime() {
//     var input = document.getElementById("searchInput").value;
//     console.log(input);
// }

const searchAnime = document.getElementById("searchManga");
const animeDisplay = document.getElementById("displayFact");

const search = async(e) => {
    e.preventDefault();
    var keyword = searchSong["searchInput"].value;
    const response = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${keyword}`, {
        "method": "GET",
    });

    if (response.status === 200) {
        const resultResponse = await response.json();
        if (resultResponse.meta.status === 200) {
            animeDisplay.innerHTML = "";
            resultResponse.response.hits.forEach(listSongs);
        }
    } else {
        console.error("Terjadi kesalahan");

    }

}

const listSongs = (e) => {
    console.log(e);
    animeDisplay.innerHTML += `
    <div class="card-body">
        <p class="card-text">${e.data.fact_id}</p>
        <p class="card-text"> ${e.data.fact}</p>
    </div>
    `
}

searchAnime.addEventListener("click", function() {
    search();
});