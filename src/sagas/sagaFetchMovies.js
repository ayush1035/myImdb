import {delay} from "redux-saga";
import {call, put, takeEvery, all} from "redux-saga/effects";
import * as actionTypes from "../constants/actionTypes.js";
import * as actions from "../actions/actions.js";
import * as API from "../apiCalls/getApi.js";

export function* fetchSaga()
{
    try {
        yield put(actions.toggleLoader(true));
        let movies = yield call(API.getApiCall);
        yield put(actions.fetchMoviesSuccess(movies));
        yield put(actions.toggleLoader(false));
    }
    catch (err) {
        yield put(actions.fetchMoviesFailure(err));
        yield put(actions.toggleLoader(false));
    }
}

export function* fetchDetailSaga(action)
{
    try {
        yield put(actions.toggleLoader(true));
        yield call(delay,1000);
        let movieDetail = yield call(API.getApiDetailCall, action.imdbID);
        yield put(actions.fetchMovieDetailSuccess(movieDetail));
        yield put(actions.toggleLoader(false));
    }
    catch (err) {
        yield put(actions.fetchMovieDetailFailure(err));
        yield put(actions.toggleLoader(false));
    }
}

export function* fetchSearchedMoviesSaga(action)
{
    try {
        yield put(actions.toggleLoader(true));
        let searchedMovies = yield call(API.getApiSearchCall, action.searchText);
        yield put(actions.fetchSearchedMoviesSuccess(searchedMovies));
        yield put(actions.toggleLoader(false));
    }
    catch (err) {
        yield put(actions.fetchSearchedMoviesFailure(err));
        yield put(actions.toggleLoader(false));
    }
}

export function* watchFetchSaga() {
    yield takeEvery(actionTypes.FETCH_DATA, fetchSaga);
}

export function* watchFetchDetailSaga() {
    yield takeEvery(actionTypes.FETCH_MOVIE_DETAIL, fetchDetailSaga);
}

export function* watchFetchSearchedMoviesSaga() {
    yield takeEvery(actionTypes.FETCH_SEARCHED_MOVIES, fetchSearchedMoviesSaga);
}

export default function* rootSaga() {
    yield all([watchFetchSaga(), watchFetchDetailSaga(),watchFetchSearchedMoviesSaga()]);
}