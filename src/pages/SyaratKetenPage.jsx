import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "./../components/FaqComponent";

const SyaratKetenPage = () => {
  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-ketentuan min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center mb-2">Syarat & Ketentuan</h1>
              <p className="text-center">
                dksakd kakdka sdka kdsak ksadk ask dkas kdk ak daks kka sk dsa
              </p>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col>
              <p>
                daks okasd oas kdsa odsaok as osak ao oksa ksao k dsoksad kos ka
                okdak odkosa kodsoak ak dsao kdaodk as kdsoak aosk doask a kosa
                ksao kkas oas ksdoa ko k aosko asokd koa dkaso aks oksao kd
                skodaso kaos kask dkak dsko ako dskok adko kaska
              </p>
            </Col>
          </Row>

          <Row>
            <h4 className="fw-bold">1. Lorum</h4>
            <p>
              dkoksa ok asokask odkas sak oaskdoka s osaoksda kosa okoasko kosa
              kaskokasko asaskako dasasd oasdk asd okaskosadkoa ska koak
              kasasdkka doad s
            </p>

            <h4 className="fw-bold">2. Lorum</h4>
            <p>
              dkoksa ok asokask odkas sak oaskdoka s osaoksda kosa okoasko kosa
              kaskokasko asaskako dasasd oasdk asd okaskosadkoa ska koak
              kasasdkka doad s
            </p>

            <h4 className="fw-bold">3. Lorum</h4>
            <p>
              dkoksa ok asokask odkas sak oaskdoka s osaoksda kosa okoasko kosa
              kaskokasko asaskako dasasd oasdk asd okaskosadkoa ska koak
              kasasdkka doad s
            </p>
          </Row>
        </Container>
      </div>
      <FaqComponent></FaqComponent>
    </div>
  );
};

export default SyaratKetenPage;
