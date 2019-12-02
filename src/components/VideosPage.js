import React from 'react';
import {getFavorites} from './ApiFetch';
import YouTube from 'react-youtube';
export default class VideosPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            favoriteGames:[]
        }
    }
    async componentDidMount(){
        let favoriteGames = await getFavorites();
        this.setState({favoriteGames});
    }

    render(){
        return(
            <YouTube
        videoId="2g811Eo7K8U"
        onReady={this._onReady}
      />
        );
    
    }
}