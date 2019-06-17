import React, { Component } from "react";
import Nav from "../Nav/Nav";

class MenuContent extends Component {
  constructor(props) {
    super(props);

    this.items = [];
    for (let i = 1; i <= 1; i++) {
      this.items.push(i);
    }
  }

  render() {
    return (
      <div className="menu">
        {this.items.map(i => (
          <div className="menu-item" key={i}>
            <Nav />
          </div>
        ))}
        {/* implement an onClick to close sidebar instead of clicking on page to close*/}
        <p className="hint">Click outside the menu to close it</p>
      </div>
    );
  }
}

// MenuContent.PropTypes = {
//   closeCallback: React.PropTypes.func.isRequired
// }

export default MenuContent;
