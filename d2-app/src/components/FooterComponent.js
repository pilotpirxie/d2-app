import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class FooterComponent extends Component {
    render() {
        let currentYear = (new Date()).getFullYear();
        return (
            <div className="FooterComponent">
                <Container fluid={true}>
                    <Row noGutters={true}>
                        <Col>
                            <hr/>
                            <p style={{textAlign: 'center'}}>Copyright &copy; {currentYear}</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default FooterComponent;
