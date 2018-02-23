import React from "react";
import PropTypes from "prop-types";
import FaStar from "react-icons/lib/fa/star-o";

class Detail extends React.Component {
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
                <div className="detailPage">
                    <div className = "detailCard">
                        <div className = "detailHeading">
                        <h3>{this.props.movieDetail.Title}&nbsp;<span className="titleYear">({this.props.movieDetail.Year})</span></h3>
                        <br/>
                        <p>&nbsp;{this.props.movieDetail.Runtime}&nbsp;|&nbsp;{this.props.movieDetail.Released}&nbsp;|&nbsp;{this.props.movieDetail.Type}&nbsp;|&nbsp;{this.props.movieDetail.Language}</p>
                        </div>
                        <div className = "detailBody">
                            <div className = "detailBodyImg">
                            <img src={this.props.movieDetail.Poster} alt="Error"/>
                            </div>
                            <div className = "detailBodyText">
                            <p className="sizeChange">{this.props.movieDetail.Plot}</p>
                            <span className="colorChange">Director:&nbsp;&nbsp;</span>{this.props.movieDetail.Director}
                            <br/>
                            <br/>
                            <span className="colorChange">Writer :&nbsp;&nbsp;</span>{this.props.movieDetail.Writer}
                            <br/>
                            <br/>
                            <span className="colorChange">Star Cast :&nbsp;&nbsp;</span>{this.props.movieDetail.Actors}
                            <br/>
                            <br/>
                            <span className="colorChange">Total Collection :&nbsp;&nbsp;</span>{this.props.movieDetail.BoxOffice}
                            <br/>
                            <br/>
                            <span className="colorChange">Genre :&nbsp;&nbsp;</span>{this.props.movieDetail.Genre}
                            <br/>
                            <br/>
                            <span className="colorChange">Rating :&nbsp;&nbsp;</span><FaStar/>&nbsp;{this.props.movieDetail.imdbRating}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return null;
        }
    }
}
Detail.propTypes={
    movieDetail:PropTypes.object,
    error:PropTypes.string,
    isLoader:PropTypes.bool
};

export default Detail;