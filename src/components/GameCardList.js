import React from 'react';
import GameCard from './GameCard';
import {postFavorite} from './ApiFetch';
export default function GameCards(props){
    let {games,clickButton} = props;
    return(
    <div className="container-fluid">
        {
            games? games.map((game)=>{
                return (<div> 
                            <GameCard game={game}>
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