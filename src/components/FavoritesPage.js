import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom';
import GameCards from './GameCardList';
import {getFavorites, postFavorite,deleteFavorite} from './ApiFetch';
export default class AddGamesPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            favoriteGames:[]
        };
    }

    async componentDidMount(){
        this.loadGames();
    }
    loadGames = async()=>{
        let favoriteGames = await getFavorites();
        console.log(favoriteGames);
        this.setState({favoriteGames});
    }
    clickButton = (game) =>{
        return(
        <div>
            <a 
            className="btn btn-danger deleteBtn"
            onClick={()=>deleteFavorite(game)}
        >
                  Delete
        </a>

        <a 
        className="btn btn-primary editBtn"
        onClick={()=>postFavorite(game)}
         >
              Edit
        </a>

        </div>
        
        );
    }
    render(){
        return(
            <GameCards games={this.state.favoriteGames} 
            clickButton={this.clickButton}/>
        );
    }
}