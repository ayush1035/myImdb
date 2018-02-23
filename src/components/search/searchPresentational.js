import React from "react";
import MovieCard from "../commonComponents/movieCard.js";
import PropTypes from "prop-types";

class Search extends React.Component {
    render() {
        if (this.props.isLoader === true) {
            return null;
        }
        if(!this.props.searchedMovies)
        {
            return(
                <div>
                    <br/>
                    <form onSubmit={this.props.search}>
                        <input type="text" name="focus" required className="search-box" placeholder="Search movie by name" onChange={this.props.onChangeInput} />
                        
                        <button type="button" className="btn btn-info searchBtn" onClick={this.props.search}>Search</button>
                    </form>
                    <br />
                    <h2 className="heading">No Results Or Error in Result</h2>
                    

                </div>
            );
        }
        return (
            <div>
                <br/>
                <form onSubmit={this.props.search}>
                    <input type="text" name="focus" required className="search-box" placeholder="Search movie by name" onChange={this.props.onChangeInput} />
                    
                    <button type="button" className="btn btn-info searchBtn" onClick={this.props.search}>Search</button>
                </form>
                <br />

                {this.props.searchedMovies.map(item => <MovieCard key={item.imdbID} obj={item} />)}
                <br />
            </div>
        );
    }

}

Search.propTypes={
    loader:PropTypes.bool,
    search:PropTypes.func,
    filter:PropTypes.array,
    error:PropTypes.string,
    newSearch:PropTypes.func

};

export default Search;