import React from 'react';
import {getFavorites, searchYoutube} from './ApiFetch';
import YouTube from 'react-youtube';
export default class VideosPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            favoriteGames:[],
            videosResults:[]
        }
    }
    async componentDidMount(){
        let favoriteGames = await getFavorites();
        this.setState({favoriteGames});
        let videosResults = await searchYoutube(favoriteGames);
        this.setState({videosResults});
        //console.log(videosResults);
    }

    render(){
        return(
            <div>
             <h3>Video Feed</h3>

            {
                this.state.videosResults.map((videoList)=>{
                    return(
                        
                            videoList.items.map((item)=>{
                                return(
                                    <YouTube
                                    id={item.id.videoId}
                                    videoId={item.id.videoId}
                                    onReady={this._onReady}
                                  />
                            
                                )
                            }) 
                        
                    )
                })
            }
           </div> 
        );
    
    }
            
}