import React from 'react';
import {getFavorites, searchYoutube} from './ApiFetch';
import YouTube from 'react-youtube';
import Loader from 'react-loader-spinner';

export default class VideosPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            favoriteGames:[],
            videosResults:[],
            loading: true
        }
    }
    async componentDidMount(){
        let favoriteGames = await getFavorites();
        this.setState({favoriteGames});
        let videosResults = await searchYoutube(favoriteGames);
        this.setState({videosResults,loading:false});
        //console.log(videosResults);
    }

    render(){
        return(
            <div>
                <h3>Video Feed</h3>
                {this.state.loading && <Loader
                type="Puff"
                color="#3056FF"
                height={100}
                width={100}
                timeout={3000} />}

             

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