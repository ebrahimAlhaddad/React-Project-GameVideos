export async function fetchGames(search,platform,genre){
    let url = `https://api.rawg.io/api/games?search=${search}`;
    if(platform){
        url = url + `&platforms=${platform}`;
    }
    if(genre){
        url = url + `&genres=${genre}`;
    }
    console.log(url);
    let response = await fetch(url);
    let games = response.json();
    console.log(games);
    return games;
}