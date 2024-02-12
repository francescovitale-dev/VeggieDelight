const Footer = () => {
  return (
    <footer>
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
          <div className="col-auto">
              <p className="mb-0 p-footer">Created by <a className="p-footer link-footer" href="https://vitalefrancesco.com" target="_blank" rel="noopener noreferrer">Francesco Vitale</a></p>
            </div>
              <div className="col-auto">
                <div className="social-icons">
                  <a href="https://www.instagram.com/vitale_francesco_/" target="_blank"><i className="bi bi-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/francesco-vitale--/" target="_blank"><i className="bi bi-linkedin"></i></a>
                  <a href="https://github.com/francescovitale-dev" target="_blank"><i className="bi bi-github"></i></a>
                </div>
              </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;