import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

class AppActivityContainer extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row noGutters={true}>
          <Col>
            <HeaderComponent />
            {this.props.children}
            <FooterComponent />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AppActivityContainer;
