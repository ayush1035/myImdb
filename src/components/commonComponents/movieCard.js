import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

class MovieCard extends React.Component{
    render() {
        if(this.props.obj.Poster!=="N/A")
        {
            return (
                <div className=" col-md-4 cardDiv">
                    <div className="card" style={{width: '20rem'}}>
                    
                        <img className="card-img-top" src={this.props.obj.Poster} alt="Card cap" />
                        <div className="card-block">
                            <h6 className="card-title">{this.props.obj.Title}</h6>
                            <NavLink className="btn btn-info cardBtn" activeStyle={{ color: 'white', textDecoration: 'none'}} to={"/details/" + this.props.obj.imdbID}>More Details</NavLink>               
                        </div>
                    </div>
                </div>
            );
        }
        else
        {
            return null;
        }
    }
}
MovieCard.propTypes = {
    obj:PropTypes.object
};

export default MovieCard;