import {HomeBusiness} from './homeBusiness.js'
import * as stateActions from "../../actions/actions.js";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    let data = {
        movies: state.state.movies,
        error: state.error.error,
        isLoader: state.isLoader.isLoader
    };
    return data;
};

const mapDispatchToProps = dispatch => ({
    getMovies: () => dispatch(stateActions.fetchMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeBusiness);