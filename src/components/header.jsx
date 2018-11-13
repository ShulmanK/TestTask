import React, { Component } from "react";
import Clock from "react-live-clock";

class Header extends Component {
  render() {
    return (
      <div>
        <div className={"header"}>
          <nav className={"navbar navbar-light bg-success"}>
            <h2 className={"text-white pl-4"}>Testing Task for Developers</h2>
            <h2 className={"text-white pr-4"}>
              <Clock format={"HH:mm"} ticking={true} />
            </h2>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
