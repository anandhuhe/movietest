import React from "react";
import { withRouter } from "react-router";
import { Link, Route } from "react-router-dom";

class Cards extends React.Component {
  goToCarddetails = (cardId) => {
    localStorage.setItem("selectedCard", cardId);
    // this.props.history.push("/CurrentMovieDetails", cardId);
    // you can manage here to pass the clicked card id to the card details page if needed
  };
  render() {
    return (
      <div class="col m4">
        <Link to={{ pathname: "/CurrentMovieDetails" }}>
          <div class="card" onClick={() => this.goToCarddetails(this.props.imdbID)}>
            <div class="card-image">
              <img src={this.props.image} style={{ height: 280 }} />
            </div>
            <div class="card-content">
              <span className="card-title">{this.props.name}</span>
              <p>Year : {this.props.year}</p>
              <p> Type:{this.props.type}</p>
            </div>
          </div>
        </Link>{" "}
        *
      </div>
    );
  }
}

export default withRouter(Cards);
