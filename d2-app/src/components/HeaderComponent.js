import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem} from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

export default class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="danger" dark={true} expand="md">
                    <NavbarBrand href="#"><Link to={'/'}><b><FontAwesome name={'fire'} /> AppName</b></Link></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <div className={'nav-link'} href="#"><Link to={'/'}>Home</Link></div>
                            </NavItem>
                            <NavItem>
                                <div className={'nav-link'} href="#"><Link to={'/add'}>Add new</Link></div>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}