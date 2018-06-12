import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {
        let currentYear = (new Date()).getFullYear();
        return (
            <div className="FooterComponent">
                <p style={{textAlign: 'center'}}>Copyright &copy; {currentYear}</p>
            </div>
        );
    }
}

export default FooterComponent;
