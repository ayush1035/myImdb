import { SearchBusiness} from './searchBusiness.js';
import { connect } from 'react-redux';
import * as stateActions from "../../actions/actions.js";

const mapStateToProps = state => {
    let data = {
        searchedMovies: state.searchedMovies.searchedMovies,
        isLoader: state.isLoader.isLoader,
        error: state.error.error
    };
    return data;
};
const mapDispatchToProps = dispatch =>({
    getSearchedMovies: (searchText) => dispatch(stateActions.fetchSearchedMovies(searchText))
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchBusiness);
