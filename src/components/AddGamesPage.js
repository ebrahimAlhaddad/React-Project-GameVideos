import React from 'react';
import GameSearchForm from './GameSearchForm';
import {fetchGames,postFavorite} from './ApiFetch';
import {BrowserRouter as Router, Route, Switch,NavLink, Redirect} from 'react-router-dom';
import GameCards from './GameCardList';
import Loader from 'react-loader-spinner';
import PageNotFound from './PageNotFound';
export default class AddGamesPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading:true,
            games: [],
            viewResults: false,
            loading: true
        };
    }
    
    handleSearch = async (search,platform,genre) => {
        this.setState({ loading: true });
    
        let games = await fetchGames(search,platform,genre);
        this.setState({ games, 
            viewResults:true, 
            loading: false, 
        });

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
<Switch>
               <Route exact={true} path='/add-games'>

                    {this.state.viewResults ? <Redirect to="/add-games/ViewSearchResults" /> :
                    <div>
                        <h3>Add Games > Search games</h3>
                        <GameSearchForm onSearch={this.handleSearch} />
                    </div>

                    }

                </Route>

                <Route exact={true} path='/add-games/ViewSearchResults'>
                <h3>Add Games</h3>
                    <NavLink to="/add-games">
                    <button 
                    
                        className="btn btn-primary"
                        onClick={this.handleClick}
                    >Back to Search</button>
                    </NavLink>
                    {this.state.loading && <Loader
                    type="Puff"
                    color="#3056FF"
                    height={100}
                    width={100}
                    timeout={3000} />}
                    <GameCards games={this.state.games.results} clickButton={this.clickButton}/>
                </Route>
                <Route component={PageNotFound} />
                </Switch>
           </Router>

        );
    }
}