import React from 'react';
import Detail from './detailPresentational.js';
import PropTypes from 'prop-types';

export class DetailBusiness extends React.Component {
    componentDidMount() {
        this.props.getMovieDetail(this.props.match.params.id);
    }
    render() {
        return (
            <Detail movieDetail = {this.props.movieDetail} error = {this.props.error} isLoader = {this.props.isLoader} />
        );
    }
}
DetailBusiness.propTypes = {
    getMovieDetail: PropTypes.func,
    movieDetail: PropTypes.object,
    error: PropTypes.string,
    isLoader: PropTypes.bool,
};