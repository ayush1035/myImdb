import { DetailBusiness} from './detailBusiness.js';
import { connect } from 'react-redux';
import * as stateActions from "../../actions/actions.js";

const mapStateToProps = state => {
    let data = {
        movieDetail: state.movieDetail.movieDetail,
        isLoader: state.isLoader.isLoader,
        error: state.error.error
    };
    return data;
};
const mapDispatchToProps = dispatch =>({
    getMovieDetail: (imdbID) => dispatch(stateActions.fetchMovieDetail(imdbID))
});
export default connect(mapStateToProps, mapDispatchToProps)(DetailBusiness);
