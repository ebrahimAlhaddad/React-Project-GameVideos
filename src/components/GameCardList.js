import React from 'react';
import GameCard from './GameCard';
export default function GameCards(props){
    let {games,clickButton} = props;
    return(
    <div className="container-fluid">
        {
            games? games.map((game)=>{
                return (<div key={game.id}> 
                            <GameCard key={game.id} game={game}>
                            {
                                ()=>{
                                    return(
                                        clickButton(game)
                                    );
                                }
                            }
                            </GameCard>
                        </div>)
            }):(<div>No games found</div>)
        }
       
        
    </div>);
}