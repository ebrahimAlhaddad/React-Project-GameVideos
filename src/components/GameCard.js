import React from 'react'
export default class GameCard extends React.Component {
    
    
    render(){
        let {background_image,name,genres,platforms,rating,released,key} = this.props.game;
        let {children} = this.props;
        let platform_html = "";
        let genre_html = "";
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
        let no_image = false;
        if(background_image == null){
            no_image = true;
        }

        return(
            <div key={key} className="card">
                {no_image?(<img className="card-img-top" src='https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg' alt="Card image cap"/>
                ):(
                    <img className="card-img-top" src={background_image} alt="Card image cap"/>
                )}
                
                <div className="card-body">
                    <span className="card_title">{name}</span>
                    <span className="rating">☆{rating}</span>
                    <div>
                        <span className="date">Release Date: {released}</span>
                    </div>
                    <div>
                        <span className="mini-title">Platforms:</span>
                        <span className="listing">{platform_html}</span>
                    </div>
                    <div>
                        <span className="mini-title">Genres:</span>
                        <span className="listing">{genre_html}</span>
                    </div>
                </div>
                    {
                        typeof children === 'function'?(children()):(<div></div>)
                    }
                    
            </div>
        );
    }
}

