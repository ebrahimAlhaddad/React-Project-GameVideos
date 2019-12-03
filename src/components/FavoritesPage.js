import React from 'react';
import GameCards from './GameCardList';
import {getFavorites, deleteFavorite, putFavorite} from './ApiFetch';
import UpdateGameForm from './UpdateGameForm';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';


export default class AddGamesPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            favoriteGames:[],
            viewForm: false
        };
    }

    async componentDidMount(){
        let favoriteGames = await getFavorites();
        this.setState({favoriteGames});
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
        let favoriteGames = await getFavorites();
        this.setState({favoriteGames});
        //console.log(this.state.favoriteGames);
    }
    render(){
        return(
 

                <Router>
                    <Switch>
                    <Route exact path='/favorites'>
                        <div>
                        <h3>Favorite Games</h3>
                        <GameCards games={this.state.favoriteGames} 
                         clickButton={this.clickButton}/>
                        </div>
                        

                    </Route>
     
                     <Route path='/favorites/ViewUpdateForm/:id' 
                     render={(props) => <UpdateGameForm {...props} onSubmit={this.handleUpdate} />}/>
                         
                     </Switch>
                </Router>
        );
    }
}