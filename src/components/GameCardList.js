import React from 'react';
import GameCard from './GameCard';

export default function GameCards(props){
    let {games} = props;
    if(games){
        
    }
    return(
    <div>
       {games.results.map((game)=>{
           return <GameCard game={game}/>
       })}
    </div>);
}