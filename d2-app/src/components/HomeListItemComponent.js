import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Badge, CardSubtitle, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import PropTypes from 'prop-types';

class HomeListItemComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let color = (this.props.active === true) ? 'danger' : 'secondary';

        return (
            <div className="HomeListItemComponent">
                <Card style={{marginBottom: '20px', marginTop: '20px'}}>
                    <CardImg top width="100%" height="300px" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=Test&w=300&h=350" alt="Card image cap" />
                    <CardBody>
                        <CardTitle><b>{this.props.itemName}</b></CardTitle>
                        <CardSubtitle style={{fontSize: '22px'}}><Badge style={{padding: '10px'}} color={color}>{this.props.price}</Badge><small> | {this.props.brandName}</small></CardSubtitle>
                        <hr />
                        <CardText>{this.props.description}</CardText>
                        <a href={this.props.pathURL} target={'_blank'}><Button color={color} className={'form-control'}><b>Get deal</b> <FontAwesome name={'external-link'} /></Button></a>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

const {string, bool} = PropTypes;

HomeListItemComponent.propTypes = {
    itemName: string,
    brandName: string,
    price: string,
    active: bool,
    pathURL: string
};

export default HomeListItemComponent;
