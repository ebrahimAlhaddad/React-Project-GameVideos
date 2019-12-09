import React from 'react';
import moment from 'moment';
import {NavLink} from 'react-router-dom';
import {getFavorite} from './ApiFetch';
export default class UpdateGameForm extends React.Component {
    constructor(props) {
      super(props);
      var game_id = 0;
      if(this.props.match != undefined){
        game_id = this.props.match.params.id;
      }
      const game = getFavorite(game_id);
      //console.log(game);
      this.state = {
        title: '',
        rating:'',
        released:'',
        platformValue: '',
        genreValue: '',
        id:game_id,
        titleValid: true,
        ratingValid: true,
        releasedValid: true
      };
    }
    async componentDidMount(){
      const game = await getFavorite(this.state.id);
      this.setState({title:game.name, rating:game.rating, released:game.released});      
    }
    handleTitleInputChange = (event) => {
      this.setState({
        title: event.target.value
      });
    }
    handleRatingInputChange = (event) => {
        this.setState({
          rating: event.target.value
        });
      }
      handleReleasedInputChange = (event) => {
        this.setState({
          released: event.target.value
        });
      }
    handlePlatformChange = (event) => {
        this.setState({
            platformValue: event.target.value
        });
    }
    handleGenreChange = (event) => {
      this.setState({
          genreValue: event.target.value
      });
  }
     handleSubmit = async (event) => {
      event.preventDefault();
      if(this.state.title){
         this.setState({titleValid:true});
      } else {
         this.setState({titleValid:false});
      }

      if(!this.state.rating){
        this.setState({ratingValid:false});
      } else {
        if(isNaN(this.state.rating)){
          this.setState({ratingValid:false});
        } else {
          if(Number(this.state.rating) <= 5 && Number(this.state.rating) >= 0){
              this.setState({ratingValid:true});
          } else {
              this.setState({ratingValid:false});
          }
        }
      }

      if(moment(this.state.released, "YYYY-MM-DD", true).isValid()){
          if(moment().isAfter(this.state.released)){
            await this.setState({releasedValid:true});
          }else{
            await this.setState({releasedValid:false});
          }
      } else {
        await this.setState({releasedValid:false});
      }

      if(this.state.releasedValid && this.state.titleValid && this.state.ratingValid){
        this.props.onSubmit(this.state.id,this.state.title,this.state.rating,this.state.released,
        this.state.platformValue,
        this.state.genreValue);
        if(this.props.history){
          this.props.history.push('/favorites');
        }
      }
    }
    render() {
      return (
        <div>
          <h3>Favorite Games > Edit Game</h3>
           <NavLink to="/favorites">
                    <button 
                        className="btn btn-primary"
                    >Back to Favorites</button>
                    </NavLink>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Title</label>
                  {this.state.titleValid? (
                       <input data-testid="input-title" className="form-control"
                       type="text"
                       value={this.state.title}
                        onChange={this.handleTitleInputChange} />
                  ):(
                      <div>
                      <input data-testid="input-title" className="form-control is-invalid"
                       type="text"
                       value={this.state.title}
                        onChange={this.handleTitleInputChange} />
                       <span data-testid="input-title-error" className="text-danger">You must enter a title</span>
                       </div>
                  )}
            </div>

            <div className="form-group">
              <label>Rating</label>
                  {this.state.ratingValid? (
                    <div>
                       <input data-testid="input-rating" className="form-control"
                       type="text"
                       value={this.state.rating}
                        onChange={this.handleRatingInputChange} />
                    </div>
                  ):(
                      <div>
                      <input data-testid="input-rating" className="form-control is-invalid"
                       type="text"
                       value={this.state.rating}
                       onChange={this.handleRatingInputChange} />
                       <span data-testid="input-rating-error" className="text-danger">You must enter a valid rating(0-5)</span>
                       </div>
                  )}
            </div>

            <div className="form-group">
              <label>Release Date</label>
                  {this.state.releasedValid? (
                       <input data-testid="input-date" className="form-control"
                       type="date"
                       value={this.state.released}
                        onChange={this.handleReleasedInputChange} />
                  ):(
                      <div>
                      <input data-testid="input-date" className="form-control is-invalid"
                       type="date"
                       value={this.state.released}
                        onChange={this.handleReleasedInputChange} />
                       <span data-testid="input-date-error" className="text-danger">You must enter a valid date</span>
                       </div>
                  )}
            </div>

            <div className="form-group">
              <label>Platform</label>
              <select data-testid="input-platform" className="form-control" 
              value={this.state.platformValue}
              onChange={this.handlePlatformChange}
              >
              <option value="">Select Platform</option>
              <option value="4">PC</option>
              <option value="1">Xbox One</option>
              <option value="18">Playstation 4</option>
              <option value="3">iOS</option>
              <option value="21">Android</option>
              <option value="5">macOS</option>
              <option value="6">Linux</option>
              <option value="7">Nintendo Switch</option>
              <option value="8">Nintendo 3DS</option>
              <option value="9">Nintendo DS</option>
              <option value="13">Nintendo DSi</option>
              <option value="14">Xbox 360</option>
              <option value="80">Xbox</option>
              <option value="16">Playstation 3</option>
              <option value="15">Playstation 2</option>
              <option value="27">Playstation</option>
              <option value="19">PS Vita</option>
              <option value="17">PSP</option>
              <option value="10">Wii U</option>
              <option value="11">Wii</option>
              <option value="105">GameCube</option>
              <option value="83">Nintendo 64</option>
              <option value="24">Game Boy Advance</option>
              <option value="43">Game Boy Color</option>
              <option value="26">Game Boy</option>
              <option value="79">SNES</option>
              <option value="49">NES</option>
              <option value="171">Web</option>
  
              </select>
            </div>
  
            <div className="form-group">
              <label>Genre</label>
              <select  data-testid="input-genre" className="form-control" 
              value={this.state.genreValue}
              onChange={this.handleGenreChange}
              >
              <option value="">Select Genre</option>
              <option value="4">Action</option>
              <option value="51">Indie</option>
              <option value="3">Adventure</option>
              <option value="5">RPG</option>
              <option value="2">Shooter</option>
              <option value="10">Strategy</option>
              <option value="40">Casual</option>
              <option value="14">Simulation</option>
              <option value="11">Arcade</option>
              <option value="7">Puzzle</option>
              <option value="83">Platformer</option>
              <option value="1">Racing</option>
              <option value="15">Sports</option>
              <option value="59">Massively Multiplayer</option>
              <option value="19">Family</option>
              <option value="6">Fighting</option>
              <option value="28">Board Games</option>
              <option value="34">Educational</option>
              <option value="17">Card</option>

              </select>
            </div>
  
          <button data-testid="submit-btn" className="btn btn-primary" type="submit">Submit</button>
        </form>
        </div>

      );
    }
  }