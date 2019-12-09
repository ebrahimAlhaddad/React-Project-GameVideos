import React from 'react';
import GameCards from './GameCardList';
import {getFavorites, deleteFavorite, putFavorite} from './ApiFetch';
import UpdateGameForm from './UpdateGameForm';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import PageNotFound from './PageNotFound';

export default class AddGamesPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            favoriteGames:[],
            viewForm: false,
            loading:true
        };
    }

    async componentDidMount(){
        let favoriteGames = await getFavorites();
        this.setState({favoriteGames,loading:false});
    }
    
    handleDelete = async (game)=>{
        await deleteFavorite(game);
        let favoriteGames = await getFavorites();
        this.setState({favoriteGames});
        //console.log(this.state.favoriteGames);
 
    }
    clickButton = (game) =>{
        return(
        <div>
            <a className="btn btn-danger deleteBtn"
            onClick={()=>this.handleDelete(game)}>
                  Delete
             </a>
            <NavLink to={`/favorites/ViewUpdateForm/${game.id}`} className="btn btn-primary editBtn">
           
                 Edit
 
             </NavLink>
        </div>
        );
    }
    handleClick = (event)=>{
        this.setState({viewForm:false});
    }
    handleUpdate = async (id,title,rating,released,platform,genre)=>{
        await putFavorite(id,title,rating,released,platform,genre);
        this.setState({loading:true});
        let favoriteGames = await getFavorites();
        this.setState({favoriteGames,loading:false});
        //console.log(this.state.favoriteGames);
    }
    render(){
        return(
 

                <Router>
                    <Switch>
                    <Route exact path='/favorites'>
                        <div>
                        <h3>Favorite Games</h3>
                        {this.state.loading && <Loader
                        type="Puff"
                        color="#3056FF"
                        height={100}
                        width={100}
                        timeout={3000} />}
                        <GameCards games={this.state.favoriteGames} 
                         clickButton={this.clickButton}/>
                        </div>
                        

                    </Route>
     
                     <Route exact path='/favorites/ViewUpdateForm/:id' 
                     render={(props) => <UpdateGameForm {...props} onSubmit={this.handleUpdate} />}/>
                     <Route component={PageNotFound} />

                     </Switch>
                </Router>
        );
    }
}