import React from 'react';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      platformValue: '',
      genreValue: '',
      valid: true,
      changeView: false
    };
  }
  handleSearchInputChange = (event) => {
    this.setState({
      searchValue: event.target.value
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
  handleSearch = (event) => {
    event.preventDefault();
    if(this.state.searchValue){
        this.setState({valid:true,changeView:true});
        this.props.onSearch(this.state.searchValue,
            this.state.platformValue,
            this.state.genreValue);

    } else {
        this.setState({valid:false});

    }

  }
  render() {
    return (
      <form onSubmit={this.handleSearch}>
          <div className="form-group">

            <label>Title</label>
                {this.state.valid? (
                     <input className="form-control"
                     type="text"
                     value={this.state.searchValue}
                      onChange={this.handleSearchInputChange} />
                ):(
                    <div>
                    <input className="form-control is-invalid"
                     type="text"
                     value={this.state.searchValue}
                      onChange={this.handleSearchInputChange} />
                     <span className="text-danger">You must enter a title</span>
                     </div>
                )}
                
          </div>
        
          <div className="form-group">
            <label>Platform</label>
            <select className="form-control" 
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
            <select className="form-control" 
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

        <button className="btn btn-primary" type="submit">Search</button>
      </form>
    );
  }
}