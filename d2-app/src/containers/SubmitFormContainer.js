import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {submitItem} from "../actions/ItemAction";
import { Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link} from 'react-router-dom';

class SubmitFormContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            formData: []
        };
        this.handleSubmitNewItem = this.handleSubmitNewItem.bind(this);
        this.setFormData = this.setFormData.bind(this);
    }

    handleSubmitNewItem(e) {
        e.preventDefault();
        this.props.submitItem(this.state.formData);
    }

    // map value to state
    setFormData(field, value) {
        const formData = this.state.formData;
        formData[field] = value;
        this.setState({
            formData: formData
        });
        console.log(this.state);
    }

    render() {
        return (
            <div className="SubmitFormContainer" style={{marginTop: '20px'}}>
                <h2 style={{textAlign: 'center'}}>Add new item</h2>
                <Row noGutters={true}>
                    <Form style={{width: '100%'}} onSubmit={this.handleSubmitNewItem}>
                        <FormGroup>
                            <Label for="price">Price</Label>
                            <Input type="text" name="price" id="price" onChange={(evt) => { this.setFormData(evt.target.name, evt.target.value); }} placeholder="Price" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="path_url">Link to store</Label>
                            <Input type="text" name="path_url" id="path_url" onChange={(evt) => { this.setFormData(evt.target.name, evt.target.value); }} placeholder="Link to store" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="brand_name">Brand or store name</Label>
                            <Input type="text" name="brand_name" id="brand_name" onChange={(evt) => { this.setFormData(evt.target.name, evt.target.value); }} placeholder="Brand or store name" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="item_name">Product name</Label>
                            <Input type="text" name="item_name" id="item_name" onChange={(evt) => { this.setFormData(evt.target.name, evt.target.value); }} placeholder="Product name" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="item_image">Link to image</Label>
                            <Input type="text" name="item_image" id="item_image" onChange={(evt) => { this.setFormData(evt.target.name, evt.target.value); }} placeholder="Link to image" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="expire_at">Offer expires at</Label>
                            <Input type="text" name="expire_at" id="expire_at" onChange={(evt) => { this.setFormData(evt.target.name, evt.target.value); }} placeholder="Offer expires at" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Short description</Label>
                            <Input type="text" name="description" id="description" onChange={(evt) => { this.setFormData(evt.target.name, evt.target.value); }} placeholder="Short description" />
                        </FormGroup>
                        <FormGroup>
                            <Button color={'danger'} type={'submit'}>Add</Button>
                            <Link to={'/'}><Button style={{marginLeft: '10px'}}>Back</Button></Link>
                        </FormGroup>
                    </Form>
                </Row>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        isWorking: state.itemsReducer.isWorking,
        error: state.itemsReducer.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        submitItem
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitFormContainer);
