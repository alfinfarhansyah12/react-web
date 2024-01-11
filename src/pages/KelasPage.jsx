import { Container, Row, Col } from "react-bootstrap";
import { semuaKelas } from "../data/index";

import FaqComponent from "../components/FaqComponent";

const KelasPage = () => {
  return (
    <div className="kelas-page">
      <div className="kelas min-vh-100">
        <Container>
          <Row>
            <Col data-aos="fade-up">
              <h1 className="fw-bold text-center">Semua Kelas</h1>
              <p className="fw-bold text-center">
                lorem kadksaod ksadok oaskodok skaod okas odoask doak odaskkdaok
                dasd
              </p>
            </Col>
          </Row>

          <Row>
            {semuaKelas.map((kelas) => {
              return (
                <Col
                  key={kelas.id}
                  className="shadow rounded"
                  data-aos="fade-up"
                >
                  <img
                    src={kelas.image}
                    alt="unsplash.com"
                    className="w-100 mb-5 rounded-top"
                  />
                  <div className="star mb-2 px-3">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">{kelas.title}</h5>
                  <div className="ket d-flex justify-content-between px-3 align-items-center px-3 pb-3">
                    <p className="price m-0 fw-bold">{kelas.price}</p>

                    <button className="btn btn-danger rounded-1">
                      {kelas.buy}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <FaqComponent></FaqComponent>
    </div>
  );
};

export default KelasPage;
