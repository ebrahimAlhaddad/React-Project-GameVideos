import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import AddGamesPage from './components/AddGamesPage';
import FavoritesPage from './components/FavoritesPage';
export default class App extends React.Component{
  render(){
    return(
    <div>

    
    <div className="jumbotron jumbotron-fluid header">
      <div className="container">
          <h1 className="display-4">GameVideos</h1>
          <p className="lead" >Explore recent gameplays from your favoite games</p>
        </div>
    </div>

    <Router>
    <div className="container">
      <div className="row">
        <div className="col-3">
      <nav>
          <ul className="list-group">
            <li className="list-group-item">
              <NavLink to="/videos/">Watch Videos</NavLink>
            </li>
            <li className="list-group-item">
              <NavLink to="/favorites/">Favorites</NavLink>
            </li>
            <li className="list-group-item">
              <NavLink to="/add-games/">Add Games</NavLink>
            </li>
          </ul>
        </nav>
        </div>
      
      <div className="col-9">
        <Switch>
          <Route path="/" exact={true} >

          <h3 id="sectionTitle">Home</h3>
          <br/>
          <h4 className="display-12">Welcome to the Game Videos App. Feel free to explore the sidebar. Add games to your favorites and watch recent gameplays from Youtube
          </h4>

          </Route>
          <Route path="/videos/" component={PageNotFound} />
          <Route path="/favorites" component={FavoritesPage} />
          <Route path="/add-games" component={AddGamesPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      </div>
    </div>


    </Router>


    </div>
    );
  }
}