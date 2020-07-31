import React from "react";
import { connect } from "react-redux";
// import { fetchMovie, handlePagination } from "../../../store/actions/moviesAction";

class CardDetails extends React.Component {
  // componentDidMount() {
  //   this.props.getMovieList(selectedCardId);
  // }

  render() {
    const { data, loading, pagination, totalCount } = this.props.movies;
    let selectedCardId = localStorage.getItem("selectedCard");
    let currentMovieDetails = data.find((movie) => movie.imdbID === selectedCardId);

    // you can get this cardId anywhere in the component as per your requirement
    return (
      <div class="col m4">
        <div class="card">
          <div class="card-image">
            <img src={currentMovieDetails.Poster} style={{ height: 500 }} />
          </div>
          <div class="card-content">
            <span className="card-title">{currentMovieDetails.Title}</span>
            <p>Year : {currentMovieDetails.Year}</p>
            <p> Type:{currentMovieDetails.Type}</p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    data: state.data,
    pagination: state.pagination,
    totalCount: state.totalCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // getMovieList: (name, filter) => dispatch(fetchMovie(name, filter)),
    // handlePagination: (page, searchInput, filter) => dispatch(handlePagination(page, searchInput, filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);

// export default CardDetails;
