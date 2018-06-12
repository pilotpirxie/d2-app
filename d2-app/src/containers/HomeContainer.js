import React, { Component } from 'react';
import HomeListItemComponent from '../components/HomeListItemComponent';

class HomeContainer extends Component {
    render() {
        return (
            <div className="App">
                <HomeListItemComponent itemName={'Reebook Classic'} brandName={'Reebook'} description={'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'} price={'199,99zł'}/>
            </div>
        );
    }
}

export default HomeContainer;
