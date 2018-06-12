import React, { Component } from 'react';
import HomeListItemComponent from '../components/HomeListItemComponent';
import { Row } from 'reactstrap';

class HomeContainer extends Component {
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

export default HomeContainer;
