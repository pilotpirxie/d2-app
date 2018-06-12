import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Badge, CardSubtitle, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import PropTypes from 'prop-types';

class HomeListItemComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="HomeListItemComponent">
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle><b>{this.props.itemName}</b></CardTitle>
                        <CardSubtitle><h5><Badge color={'danger'}>{this.props.price}</Badge><small> | {this.props.brandName}</small></h5></CardSubtitle>
                        <hr />
                        <CardText>{this.props.description}</CardText>
                        <Button color={'danger'} className={'form-control'}>Open <FontAwesome name={'link'} /></Button>
                    </CardBody>
                </Card>

            </div>
        );
    }
}

const {string, number} = PropTypes;

HomeListItemComponent.propTypes = {
    itemName: string,
    brandName: string,
    price: string,
    votes: number,
    pathURL: string
};

export default HomeListItemComponent;
