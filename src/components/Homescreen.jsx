import { Container, Row, Col } from "react-bootstrap";
import Pizza from "../components/Pizza";
import pizzas from "../pizza-data";

const HomeScreen = () => {

  return (
    <>
      <Container>
          <Row>
            {pizzas.map((pizza) => (
              <Col md={4} key={pizza.name}>
                <Pizza pizza={pizza} />
              </Col>
            ))}
          </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
