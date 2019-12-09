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
        } else {
            platform_html = "unavailable";
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
        } else {
            genre_html = "unavailable";
        }
        let no_image = false;
        if(background_image == null){
            no_image = true;
        }
        let no_name = false;
        if(name == null){
            no_name = true;
        }
        let no_rating = false;
        if(rating == null){
            no_rating = true;
        }
        let no_date = false;
        if(released == null){
            no_date = true;
        }
        return(
            <div key={key} className="card">
                {no_image?(<img data-testid="GameCard-image"className="card-img-top" src='https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg' alt="Card image cap"/>
                ):(
                    <img data-testid="GameCard-image" className="card-img-top" src={background_image} alt="Card image cap"/>
                )}
                
                <div className="card-body">
                    {no_name?(<span data-testid="GameCard-name" className="card_title">unavailable</span>):
                    (<span data-testid="GameCard-name" className="card_title">{name}</span>)}
                    {no_rating?(<span data-testid="GameCard-rating" className="rating">unavailable</span>):(<span data-testid="GameCard-rating" className="rating">☆{rating}</span>)}
                    
                    <div>
                        {no_date?(<span data-testid="GameCard-date" className="date">Release Date: unavailable</span>):
                        (<span data-testid="GameCard-date" className="date">Release Date: {released}</span>)}
                    </div>
                    <div>
                        <span className="mini-title">Platforms:</span>
                        <span data-testid="GameCard-platforms" className="listing">{platform_html}</span>
                    </div>
                    <div>
                        <span className="mini-title">Genres:</span>
                        <span data-testid="GameCard-genres" className="listing">{genre_html}</span>
                    </div>
                </div>
                    {
                        typeof children === 'function'?(children()):(<div></div>)
                    }
                    
            </div>
        );
    }
}

