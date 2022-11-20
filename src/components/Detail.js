import React from "react";
import { addFavourite, unFavourite, setShowDetails } from "../actions";
class Detail extends React.Component {
  handleBackClick = () => {
    this.props.dispatch(setShowDetails({}));
  };
  render() {
    const { movies } = this.props.store.getState();
    const { showDetail } = movies;
    return (
      //button to go back to movie list
      <div className="details">
        <button className="back-btn" onClick={this.handleBackClick}>
          Go Back
        </button>
        <div className="movie_card" id="bright">
          <div className="info_section">
            <div className="movie_header">
              <img className="locandina" src={showDetail.Poster} alt="poster" />
              <h1>{showDetail.Title}</h1>
              <h4>
                {showDetail.Year}, {showDetail.Actors}
              </h4>
              <span className="minutes">{showDetail.Runtime} </span>
              <span className="minutes">{showDetail.imdbRating} </span>
              <p className="type">{showDetail.Genre}</p>
            </div>
            <div className="movie_desc">
              <p className="text">{showDetail.Plot}</p>
            </div>
            {/* <div className="movie_social">
            <ul>
              <li>
                <i className="fa-solid fa-share-from-square"></i>
              </li>
              <li>
                <i className="fa-solid fa-heart"></i>
              </li>
              <li>
                <i className="fa-solid fa-comment"></i>
              </li>
            </ul>
          </div> */}
          </div>
          <div className="blur_back bright_back" id="background_img"></div>
        </div>
      </div>
    );
  }
}
export default Detail;
