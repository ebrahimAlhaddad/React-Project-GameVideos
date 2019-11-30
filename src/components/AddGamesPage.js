import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import GameSearchForm from './GameSearchForm';
import {fetchGames} from './ApiFetch'

export default class AddGamesPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading:true,
            games: [],
            viewResults: false
        };
    }
 
    handleSearch = async (search,platform,genre) => {
        this.setState({ loading: true });
    
        let games = await fetchGames(search,platform,genre);
    
        this.setState({ games, viewResults:true, loading: false });
        console.log(this.state.games);
    }


    render(){
        return(
           
           <GameSearchForm onSearch={this.handleSearch} />
        );
    }
}