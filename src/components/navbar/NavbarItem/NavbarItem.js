/**
 * Created by jordy on 01-03-17.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';

class NavbarItem extends Component {
  render() {
    return (
      <Link to={this.props.href}>{this.props.children}</Link>
    );
  }
}

export default NavbarItem;