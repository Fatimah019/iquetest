import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "active",
      normal: "normal",
    };
  }
  changeClass = () => {
    this.setState({
      active: "normal",
      normal: "active",
    });
  };
  render() {
    // const style = {
    //   borderBottom: `20px solid ${this.state.borderColor}`,
    //   color: this.state.color,
    // };
    return (
      <div class="task-one-header">
        <h1>Complete your Purchase</h1>
        {/* tabs */}
        <div>
          <ul className="flex space-between">
            <div>
              {" "}
              <li>
                <Link
                  to="/"
                  className={
                    this.state.active
                      ? `${this.state.normal} links no-text-wrap links no-text-wrap`
                      : this.state.active
                  }
                  onClick={this.changeClass}
                >
                  Personal Info
                </Link>
              </li>
              {/* <span class="active"> Personal Info</span> */}
            </div>
            <li>
              <Link
                to="/billing"
                className={
                  this.state.active
                    ? `${this.state.normal} links no-text-wrap links no-text-wrap`
                    : this.state.active
                }
                onClick={this.changeClass}
              >
                Biling Info
              </Link>
            </li>
            <li>
              <Link
                to="/confirm-payment"
                className={
                  this.state.active
                    ? `${this.state.normal} links no-text-wrap links no-text-wrap`
                    : this.state.active
                }
                onClick={this.changeClass}
              >
                Confirm Payment
              </Link>
            </li>
          </ul>
          {/* <hr id="hr-menu" />
          <span class="border-active"></span> */}
        </div>
      </div>
    );
  }
}
