const FooterComponent = () => {
  return (
    <div className="container my-2">
      <footer className="text-black text-center text-lg-start">
        {/* Grid container */}
        <div className=" p-4">
          {/*Grid row*/}
          <div className="row mt-4">
            {/*Grid column*/}
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">About company</h5>

              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
              </p>

              <p>
                Blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias.
              </p>

              <div className="mt-4 justify-content-between">
                <div>
                  {/* Instagram */}
                  <button className="btn btn-floating btn-light btn-md me-2">
                    <i className="fab fa-instagram"></i>
                  </button>
                  {/* Twitter */}
                  <button className="btn btn-floating btn-light btn-md me-2">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  {/* Linkdln */}
                  <button className="btn btn-floating btn-light btn-md me-2">
                    <i className="fab fa-linkedin"></i>
                  </button>
                </div>
              </div>
            </div>
            {/*Grid column*/}

            {/*Grid column*/}
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 pb-1">Search something</h5>

              <div className="form-outline form-white mb-4">
                <input
                  type="text"
                  id="formControlLg"
                  className="form-control form-control-lg mb-2"
                />
                <button className="btn btn-primary ">Search</button>
              </div>

              <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-home" />
                  </span>
                  <span className="ms-2">Jakarta, Indonesia</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-envelope" />
                  </span>
                  <span className="ms-2">alfinfarhansyah12@gmail.com</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-phone" />
                  </span>
                  <span className="ms-2">+62 812-8272-8861</span>
                </li>
              </ul>
            </div>
            {/*Grid column*/}

            {/*Grid column*/}
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0 ">
              <h5 className="text-uppercase mb-4">Opening hours</h5>

              <table className="table text-center text-white">
                <tbody className="fw-bold">
                  <tr>
                    <td>Mon - Thu:</td>
                    <td>8am - 9pm</td>
                  </tr>
                  <tr>
                    <td>Fri - Sat:</td>
                    <td>8am - 1am</td>
                  </tr>
                  <tr>
                    <td>Sunday:</td>
                    <td>9am - 10pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </div>
        {/* Grid container */}
        <div className="row mt-4 text-center">
          <p>
            &copy; Copyright {new Date().getFullYear()} by{" "}
            <span className="fw-bold">Alfin</span>, All Right Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
