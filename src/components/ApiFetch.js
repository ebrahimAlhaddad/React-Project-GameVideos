import {store} from 'react-notifications-component';
function callNotification(type,title,body){
    store.addNotification({
        title: title,
        message: body,
        type: type,
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true
        }
      });
}
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
export async function getFavorites(){
    const response = await fetch('https://itp404-crud-final-api.herokuapp.com/api/games',{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    });
    return response.json();
}
export async function deleteFavorite(game){
    const response = await fetch(`https://itp404-crud-final-api.herokuapp.com/api/games/${game.id}`,{
        method:"DELETE"
    });
    if(response.status === 204){
        callNotification("warning","Success!",`${game.name} was successfully removed from favorites!`
        );
    } else if(response.status === 504){
         callNotification("danger","Failed!",`${game.name} is not in favorites`)
    } else {
        callNotification("danger","Failed!",`Deleting ${game.name} failed`)
    }
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
    console.log(response.status);
    if(response.status === 204){
           callNotification("success","Success!",`${game.name} was successfully added to favorites!`
           );
        }
    else if(response.status == 504){
            callNotification("warning","Already Added!",`${game.name} is already in favorites`);
    }else{
            callNotification("danger","Failed!",`Adding ${game.name} failed. Refresh page and Try again`)
    }
    
}

export async function updateFavorite(game){
    
}