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

export async function postFavorite(game){
    //console.log(game);
    const response = await fetch('https://itp404-crud-final-api.herokuapp.com/api/games',{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(game)
    });
    return response.json();
}