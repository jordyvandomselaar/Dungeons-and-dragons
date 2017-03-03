import React, {Component} from 'react';
import NavbarItem from '../NavbarItem/NavbarItem';
import {IndexLink} from 'react-router';

class Navbar extends Component {
  render() {
    const items = this.props.items.map((item) => {
      return <NavbarItem key={item.text} href={item.url}>{item.text}</NavbarItem>
    });
    return (
      <nav id="nav">
        <IndexLink id="brand">D&D</IndexLink>
        {items}
      </nav>
    );
  }
}

export default Navbar;