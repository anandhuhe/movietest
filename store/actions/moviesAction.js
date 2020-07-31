import { Movies } from "../actions/actionTypes";

const fetchMoviePendig = () => ({
  type: Movies.FETCH_MOVIE_PENDING,
});

const fetchMovieSuccess = (json) => ({
  type: Movies.FETCH_MOVIE_SUCCESS,
  payload: json,
});

const fetchMovieError = (error) => ({
  type: Movies.FETCH_MOVIE_ERROR,
  payload: error,
});

// export const fetchMovie = (name, filter) => {
//   return async (dispatch) => {
//     dispatch(fetchMoviePendig());
//     try {
//       const url = `http://www.omdbapi.com/?apikey=8e2101cd&s=${name}&plot=full&type=${filter}
//       `;
//       const response = await fetch(url);
//       const result = await response.json(response);

//       // console.log(result.Search)
//       dispatch(fetchMovieSuccess(result.Search));
//     } catch (error) {
//       dispatch(fetchMovieError(error));
//     }
//   };
// };

export const fetchMovie = (name, filter) => async (dispatch, getState) => {
  const { totalCount, pagination } = getState().movies;
  try {
    const Search = await fetch(`http://www.omdbapi.com/?apikey=8e2101cd&s=${name}&plot=full&type=${filter}&page=${pagination.page || 1}
    `);

    const searchResult = await Search.json();

    await dispatch({ type: Movies.FETCH_MOVIE_SUCCESS, data: { data: searchResult.Search }, totalCount: searchResult.totalResults });
  } catch (error) {
    console.log({ error });
  }
};

export const handlePagination = (page, name, filter) => async (dispatch, getState) => {
  const state = getState().movies;
  //const { searchKey } = state;

  await dispatch({ type: Movies.SET_DEFAULT, data: { pagination: { ...state.pagination, page: page || 1 } } });
  dispatch(fetchMovie(name, filter));
  //else dispatch(handleStoreSearch(searchKey));
};
