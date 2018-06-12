import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
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
                    <NavbarBrand href="/"><b><FontAwesome name={'fire'} /> AppName</b></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#"><Link to={'/hottest'}>Hottest</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#"><Link to={'/latest'}>Latest</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#"><Link to={'/featured'}>Featured</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#"><Link to={'/add'}>Add new</Link></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}