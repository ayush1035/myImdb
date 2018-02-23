import * as actionTypes from "../constants/actionTypes.js";

const initialState = {
    movieDetail: {}
};

export const detailReducer  = (state = initialState,  action) => {
    switch (action.type)
    {
        case actionTypes.FETCH_MOVIE_DETAIL_SUCCESS:
            return Object.assign({}, ...state, {movieDetail:action.movieDetail});
        default:
            return state;    
    }
}