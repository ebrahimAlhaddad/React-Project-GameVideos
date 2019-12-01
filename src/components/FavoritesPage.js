import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom';
import GameCard from './GameCard';
import GameCards from './GameCardList';
export default class AddGamesPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            favoriteGames:[]
        };
    }

    componentDidMount(){
        
    }
    render(){
        return(

            <GameCards games={this.state.favoriteGames}/>

        );
    }
}