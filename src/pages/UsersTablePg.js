import { Container, Row, Col } from "reactstrap";
import SearchInput from "./../components/SearchInput";
import UserTable from "./../components/UserTable";
const UsersTablePg = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={{ size: 8, offset: 2 }}>
          <h1>User search</h1>
          <SearchInput />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={{ size: 8, offset: 2 }}>
          <UserTable />
        </Col>
      </Row>
    </Container>
  );
};

export default UsersTablePg;
