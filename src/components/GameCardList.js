import React from 'react';
import GameCard from './GameCard';

export default function GameCards(props){
    let {games} = props;
    return(
    <div className="container-fluid">
        {
            games.results? games.results.map((game)=>{
                return (<div> 
                            <GameCard game={game}/>
                        </div>)
            }):(<div>No games found</div>)
        }
       
        
    </div>);
}