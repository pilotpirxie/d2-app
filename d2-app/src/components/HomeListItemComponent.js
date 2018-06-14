import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Badge, CardSubtitle, Button, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import PropTypes from 'prop-types';

class HomeListItemComponent extends Component {
    render() {
        let color = (this.props.active === true) ? 'danger' : 'secondary';

        return (
            <Col sm={6} md={4} lg={3} xl={3}>
                <Card style={{marginBottom: '10px', marginTop: '10px'}}>
                    <CardImg top width="100%" src={this.props.image} alt="Card image cap" />
                    <CardBody>
                        <CardTitle><b>{this.props.itemName}</b></CardTitle>
                        <CardSubtitle style={{fontSize: '22px'}}><Badge style={{padding: '10px'}} color={color}>{this.props.price}</Badge><small> | {this.props.brandName}</small></CardSubtitle>
                        <hr />
                        <CardText>{this.props.description}</CardText>
                        <a href={this.props.pathURL} target={'_blank'}><Button color={color} className={'form-control'}><b>Get deal</b> <FontAwesome name={'external-link'} /></Button></a>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

const {string, bool} = PropTypes;

HomeListItemComponent.propTypes = {
    itemName: string,
    brandName: string,
    price: string,
    active: bool,
    pathURL: string,
    image: string
};

export default HomeListItemComponent;
