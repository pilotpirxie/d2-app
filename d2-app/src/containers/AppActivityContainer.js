import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

class AppActivityContainer extends Component {
  render() {
    return (
        <div>
            <HeaderComponent />
            <Container fluid={true}>
                <Row noGutters={true}>
                    <Col>
                        {this.props.children}
                    </Col>
                </Row>
            </Container>
            <FooterComponent />
        </div>
    );
  }
}

export default AppActivityContainer;
