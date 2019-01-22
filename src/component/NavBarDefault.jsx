import React, { Component } from 'react';
import burgerMenu from '../images/burgerMenu.png';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  FormGroup,
  Input,
} from 'reactstrap';

import './NavBarDefault.css';

class NavBarDefault extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      wordSearch: '',
      collapsed: true,
    };

  }

  searchChange(event) {
    this.setState({
      wordSearch: event.target.value,
    });
  }


  toggleNavbar() {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  }

  render() {
    const { collapsed, wordSearch } = this.state;
    return (
      <div className="NavBarDefault">
        <Navbar className="navbarcolor navbar-fixed-top" expand="md">
          <a href="/" className="navbar-brand d-inline align-center">
            <div className="logoalign">
              <img className="align-center" src="https://www.toile-impression.fr/image/HD/eos-6D.png" width="45vw" height="40vw" alt="logo" />
              <h2 className="positiontitre">Photo</h2>
            </div>
          </a>
          <NavbarToggler onClick={this.toggleNavbar}>
            <img className="d-inline-block align-top" alt="burger" src={burgerMenu} width="45vw" />
          </NavbarToggler>
          <Collapse isOpen={!collapsed} navbar>
            <FormGroup className="positionsearch form-inline m-auto">
              <form onSubmit={this.sendSearch} className="searchalign">
                <Input
                  className="form-control mr-sm-2 w-100"
                  value={wordSearch}
                  onChange={this.searchChange}
                  placeholder="Search for pictures..."
                  type="search"
                  name="search"
                  id="exampleSearch"
                  size="90"
                />
                <button className="btn btn-outline-light my-1 my-sm-1" type="submit">Search</button>
              </form>
            </FormGroup>
            <Nav className="ml-auto colorhover" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav className="titlemenu">
                  ADD
                </DropdownToggle>
                <DropdownMenu right>
                <button className="buttonlink" type="button">New Picture</button>
                    <button className="buttonlink" type="button">New project</button>
                    
                    

                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav className="titlemenu">
                  LOGIN
                </DropdownToggle>
                <DropdownMenu right>
                   Your profile 
                   Your projects
                  
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

      </div >
    );
  }
}
export default NavBarDefault;
