import { Container, Row, Col } from "reactstrap";
import SearchInput from "./components/SearchInput";
import UserTable from "./components/UserTable";
//styles
import "./styles/app.css"
//component
function App() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={{ size: 4, offset: 4 }}>
          <h1>User search</h1>
          <SearchInput />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={{ size: 4, offset: 4 }}>
          <UserTable />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
