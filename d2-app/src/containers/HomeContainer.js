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
        return (
            <div className="App" style={{marginTop: '20px'}}>
                <h2 style={{textAlign: 'center'}}>Hottest</h2>
                <Row noGutters={true}>
                <HomeListItemComponent itemName={'Reebook Classic'}
                                       brandName={'Reebook'}
                                       price={'199,99zł'}
                                       description={'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'}
                                       pathURL={'https://google.com'}
                                       active={true}
                                       key={1}/>
                <HomeListItemComponent itemName={'Reebook Classic'}
                                       brandName={'Reebook'}
                                       price={'199,99zł'}
                                       description={'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'}
                                       pathURL={'https://google.com'}
                                       active={true}
                                       key={2}/>
                    <HomeListItemComponent itemName={'Reebook Classic'}
                                       brandName={'Reebook'}
                                       price={'199,99zł'}
                                       description={'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'}
                                       pathURL={'https://google.com'}
                                       active={true}
                                       key={3}/>
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
