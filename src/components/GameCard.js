import React from 'react'

export default class GameCard extends React.Component {
    constructor(props){
        super(props);
    }

 
    render(){
        let {background_image,name,genres,platforms,rating,released} = this.props.game;
        let platform_html = ""
        let count = 0;
        if(platforms){
            platforms.map((platform)=>{
                if(count === 0){
                    platform_html = platform_html + " " + platform.platform.name;
                    count = count + 1;
                } else {
                    platform_html = platform_html + ", " + platform.platform.name;
                }
            });
        }
        let genre_html = ""
        count = 0;
        if(genres){
            genres.map((genre)=>{
                if(count === 0){
                    genre_html = genre_html + " " + genre.name;
                    count = count + 1;
                } else {
                    genre_html = genre_html + ", " + genre.name;
                }
                
            });
        }
        
        return(
            <div className="card">
                <img className="card-img-top" src={background_image} alt="Card image cap"/>
                <div className="card-body">
                    <span className="card_title">{name}</span>
                    <span className="rating">☆{rating}</span>
                    <div>
                        <span className="card-text">Release Date: {released}</span>
                    </div>
                    <div>
                        <span className="mini-title">Platforms:</span>
                        {platform_html}
                    </div>
                    <div>
                        <span className="mini-title">Genres:</span>
                        {genre_html}
                    </div>
                </div>
                    <a href="#" class="btn btn-warning">Add to favorite</a>
            </div>
        );
    }
}

