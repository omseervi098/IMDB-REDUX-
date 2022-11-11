function MovieCard(props) {
  const { movie } = props;
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={movie.Poster}
            className="img-fluid rounded-start card-img"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body p-4">
            <div className="card-top">
              <h5 className="card-title">{movie.Title}</h5>
              <p className="card-year my-1">{movie.Year}</p>
              <p className="card-rating my-1 rating">{movie.imdbRating}</p>
            </div>
            <p className="card-plot">{movie.Plot}</p>

            <div className="btn-group">
              <a href="#" className="btn btn-primary detail-btn">
                Get Details
              </a>
              <a href="#" className="btn btn-primary addtofav-btn">
                Add To Favourites
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MovieCard;
