import React from 'react';
import Home from './homePresentational.js';
import PropTypes from 'prop-types';

export class HomeBusiness extends React.Component {
    componentDidMount() {
        this.props.getMovies();
    }
    render() {
        return (
            <Home movies = {this.props.movies} error = {this.props.error} isLoader = {this.props.isLoader} />
        );
    }
}
HomeBusiness.propTypes = {
    getMovies: PropTypes.func,
    movies: PropTypes.array,
    error: PropTypes.string,
    isLoader: PropTypes.bool,
};