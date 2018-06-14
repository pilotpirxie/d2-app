import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchItems} from "../actions/ItemAction";
import HomeListItemComponent from '../components/HomeListItemComponent';
import { Row } from 'reactstrap';

class HomeContainer extends Component {
    constructor(props){
        super(props);

        this.handleFetchItems = this.props.fetchItems;
    }

    componentDidMount() {
        this.handleFetchItems();
    }

    render() {
        const {items} = this.props;
        return (
            <div className="App" style={{marginTop: '20px'}}>
                <h2 style={{textAlign: 'center'}}>Hottest</h2>
                <Row noGutters={true}>
                    {items.map(item => {
                        let active = Date.now() < Date.parse(item.expire_at);
                        console.log(active);
                       return <HomeListItemComponent
                                itemName={item.item_name}
                                brandName={item.brand_name}
                                price={item.price}
                                description={item.description}
                                pathURL={item.path_url}
                                active={active}
                                image={item.item_image}
                                key={item.ID}/>
                    })}
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.itemsReducer.items,
        isWorking: state.itemsReducer.isWorking,
        error: state.itemsReducer.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchItems
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
