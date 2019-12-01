import React from 'react';
import GameSearchForm from './GameSearchForm';
import {fetchGames,postFavorite} from './ApiFetch';
import {BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom';
import GameCard from './GameCard';
import GameCards from './GameCardList';
export default class AddGamesPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading:true,
            games: [],
            viewResults: false,
            test:{}
        };
    }
 
    handleSearch = async (search,platform,genre) => {
        this.setState({ loading: true });
    
        let games = await fetchGames(search,platform,genre);
        const test = games.results.find((elem) => {
            return elem.id === 23833;
        });
        this.setState({ games, 
            viewResults:true, 
            loading: false, 
            viewResults:true,
            test: test
        });
        console.log(this.state.test);

    }

    handleClick = (event)=>{
        this.setState({viewResults:false});
    }
    clickButton = (game) =>{
        return(<a 
            className="btn btn-warning"
            onClick={()=>postFavorite(game)}
        >
                  Add to favorite
        </a>);
    }
    render(){
        return(
           <Router>

               <Route path='/add-games'>
                    {this.state.viewResults ? <Redirect to="/add-games/ViewSearchResults" /> : 
                     <GameSearchForm onSearch={this.handleSearch} />}
                </Route>

                <Route path='/add-games/ViewSearchResults'>
                    <NavLink to="/add-games">
                    <button 
                        className="btn btn-primary"
                        onClick={this.handleClick}
                    >Back to Search</button>
                    </NavLink>
                    <GameCards games={this.state.games.results} clickButton={this.clickButton}/>
                </Route>

           </Router>

        );
    }
}