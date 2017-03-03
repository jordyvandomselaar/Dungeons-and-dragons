import React, {Component} from 'react';
import Navbar from '../navbar/Navbar/Navbar';
import '../../../public/styles/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarItems: [
        { url: "/", text: "Home" },
        { url: "/about", text: "About" },
        { url: "/register", text: "Register" }
      ]
    };
  }

  render() {
    return (
      <div className="App layout-vertical">
        <Navbar items={this.state.navbarItems}></Navbar>

        <div id="content">
          {this.props.children}
        </div>

      </div>
    );
  }
}

export default App;
