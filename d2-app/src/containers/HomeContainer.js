import React, { Component } from 'react';
import HomeListItemComponent from '../components/HomeListItemComponent';

class HomeContainer extends Component {
    render() {
        return (
            <div className="App" style={{marginTop: '20px'}}>
                <h2 style={{textAlign: 'center'}}>Hottest</h2>
                <HomeListItemComponent itemName={'Reebook Classic'}
                                       brandName={'Reebook'}
                                       price={'199,99zł'}
                                       description={'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'}
                                       pathURL={'https://google.com'}
                                       active={true}
                                       key={1}/>
            </div>
        );
    }
}

export default HomeContainer;
