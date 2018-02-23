import React from "react";
import MovieCard from "../commonComponents/movieCard.js";
import PropTypes from "prop-types";

class Home extends React.Component {
    render() {
        if (this.props.isLoader === false)
        {
            if(this.props.error.length > 0)
            {
                return(
                    <h1 className="heading">{this.props.error}</h1>
                );
            }
            return(
                <div>
                    <h1 className="heading">Welcome To My IMDB</h1>
                    <br />
                    <div className="homeDiv">
                        {this.props.movies.map(item => <MovieCard key={item.imdbID} obj={item} />)}
                    </div>
                    <br />
                </div>
            )
        }
        else {
            return null;
        }
    }
}
Home.propTypes={
    movies:PropTypes.array,
    error:PropTypes.string,
    isLoader:PropTypes.bool
};

export default Home;