import { Container, Row, Col } from "reactstrap";
import SearchInput from "./components/SearchInput";
import UserTable2 from "./components/UserTable2";

//styles
import "./styles/app.css";
//component
function App() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={{ size: 6, offset: 3 }}>
          <h1>User search</h1>
          <SearchInput />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={{ size: 6, offset: 3 }}>
          <UserTable2 />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
