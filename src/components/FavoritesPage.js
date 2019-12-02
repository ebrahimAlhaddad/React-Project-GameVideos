import React from 'react';
import GameCards from './GameCardList';
import {getFavorites, postFavorite,deleteFavorite} from './ApiFetch';
import UpdateGameForm from './UpdateGameForm';
import {BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom';


export default class AddGamesPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            favoriteGames:[],
            viewForm: false
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
    updateGame = async(game)=>{
        this.setState({viewForm:true});
    }
    clickButton = (game) =>{
        return(
        <div>
            <a className="btn btn-danger deleteBtn"
            onClick={()=>deleteFavorite(game)}>
                  Delete
             </a>

            <a className="btn btn-primary editBtn"
             onClick={()=>this.updateGame(game)}>
                 Edit
             </a>
        </div>
        );
    }
    handleClick = (event)=>{
        this.setState({viewForm:false});
    }
    render(){
        return(
 

                <Router>
     
                    <Route path='/favorites'>
                         {this.state.viewForm ? <Redirect to="/favorites/ViewUpdateForm" /> : 
                         <GameCards games={this.state.favoriteGames} 
                         clickButton={this.clickButton}/>
                         }
                    </Route>
     
                     <Route path='/favorites/ViewUpdateForm'>
                         <NavLink to="/favorites">
                         <button 
                             className="btn btn-primary"
                             onClick={this.handleClick}
                         >Back to Favorites</button>
                         </NavLink>
                         <UpdateGameForm/>
                     </Route>
     
                </Router>
        );
    }
}