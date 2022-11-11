import "bootstrap/dist/js/bootstrap";
import "fontawesome";
function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-md bg-dark py-1">
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center logo"
          href="javascript:void(0)"
        >
          <span>IMDb</span>
        </a>
        <button
          data-bs-toggle="collapse"
          className="navbar-toggler"
          data-bs-target="#navcol-5"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-5">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <form className="search-form" action="javascript:void(0)">
                <div className="input-group">
                  <input
                    id="search-input"
                    className="form-control"
                    type="text"
                    placeholder="I am looking for.."
                  />
                  <button
                    id="search-button"
                    className="btn btn-light"
                    type="button"
                  >
                    Search
                  </button>
                </div>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
