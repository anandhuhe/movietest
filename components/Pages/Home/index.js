import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovie, handlePagination } from "../../../store/actions/moviesAction";
import Input from "../Input";
import Movies from "../Movies";
import Loader from "../Loader";
import DropDown from "../../molecules/DropDown";
import SearchBox from "../../molecules/SearchBox";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import CurrentMovieDetails from "../CurrentMovieDetails";
import Pagination from "../../molecules/Pagination";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
      filter: "",
      selectedMovieDetails: "",
    };
  }

  _getMovie = () => {
    this.props.getMovieList(this.state.searchInput, this.state.filter);
  };

  _onChangeHandler = (value, type) => {
    if (type === "filterChange")
      this.setState({
        filter: value,
      });
    else {
      this.setState({
        searchInput: value,
      });
    }
  };

  _handlePaginations = (event, value) => {
    if (value) {
      this.props.handlePagination(value, this.state.searchInput, this.state.filter);
    }
  };

  render() {
    const { data, loading, pagination, totalCount } = this.props.movies;
    console.log(this.state.selectedMovieDetails, "selectedMovieDetails");
    return (
      <div className="center">
        <div>
          <h2 className="center white-text">Movie Search</h2>
        </div>
        <div className="container">
          <Select style={{ minWidth: "120px" }} labelId="demo-simple-select-label" id="demo-simple-select" displayEmpty value={this.state && this.state.filter} onChange={(e) => this._onChangeHandler(e.target.value, "filterChange")}>
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value="movie">Movie</MenuItem>
            <MenuItem value="series">Series</MenuItem>
            <MenuItem value="episode">Episode</MenuItem>
          </Select>

          <Input name="searchInputs" type="text" value={this.state && this.state.searchInput} onChange={(e) => this._onChangeHandler(e.target.value, "searchKey")} onClick={this._getMovie} />
          <div className="row">
            {loading ? (
              <Loader />
            ) : (
              data &&
              data.map((item) => {
                // console.log(item, "item");
                return <Movies imdbID={item.imdbID} image={item.Poster} name={item.Title} year={item.Year} type={item.Type} data={data} />;
              })
            )}
            <Pagination totalCount={totalCount} perPage={pagination.perPage} page={pagination.page} handlePagination={this._handlePaginations} />
            {this.state.selectedMovieDetails ? <CurrentMovieDetails selectedMovieDetails={this.state.selectedMovieDetails} /> : null}
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
    getMovieList: (name, filter) => dispatch(fetchMovie(name, filter)),
    handlePagination: (page, searchInput, filter) => dispatch(handlePagination(page, searchInput, filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
