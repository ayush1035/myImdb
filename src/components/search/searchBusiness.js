import React from 'react';
import Search from './searchPresentational.js';
import PropTypes from 'prop-types';

export class SearchBusiness extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            searchText : "black"
        };
        this.onSearchClick = this.onSearchClick.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }
    componentDidMount()
    {
        this.props.getSearchedMovies(this.state.searchText)
    }
    onSearchClick() {
        this.props.getSearchedMovies(this.state.searchText);
    }
    onChangeInput(event) {
        let text = event.target.value
        this.setState({
            searchText :text
        })
    }

    render() {
        return (
            <Search searchedMovies = {this.props.searchedMovies} error = {this.props.error} isLoader = {this.props.isLoader} search={this.onSearchClick} onChangeInput={this.onChangeInput} />
        );
    }
}
SearchBusiness.propTypes = {
    getSearchedMovies: PropTypes.func,
    searchedMovies: PropTypes.array,
    error: PropTypes.string,
    isLoader: PropTypes.bool,
};