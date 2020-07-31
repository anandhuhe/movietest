import { Movies } from "../actions/actionTypes";

const initValue = {
  data: [],
  loading: false,
  error: "",
  totalCount: "",
  pagination: { perPage: 3, page: 1 },
};

const moviesReducer = (state = initValue, action) => {
  switch (action.type) {
    case Movies.FETCH_MOVIE_PENDING:
      return {
        ...state,
        loading: true,
      };
    case Movies.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        ...action.data,
        loading: false,
        totalCount: action.totalCount,
        pagination: action.pagination ? action.pagination : state.pagination,
      };
    case Movies.FETCH_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case Movies.SET_DEFAULT:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};
export default moviesReducer;
