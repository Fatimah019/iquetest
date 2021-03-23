import React from "react";
import { NavLink } from "react-router-dom";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  changeClass = () => {
    this.setState({
      active: true,
    });
  };

  render() {
    return (
      <div class="task-one-header">
        <h1>Complete your Purchase</h1>
        {/* tabs */}
        <div>
          <ul className="flex space-between">
            <div>
              {" "}
              <li>
                <NavLink
                  className={this.state.active ? "active" : "inactive"}
                  to="/"
                  exact
                >
                  Personal Info
                </NavLink>
              </li>
            </div>
            <li>
              <NavLink
                className={this.state.active ? "active" : "inactive"}
                to="/billing"
              >
                Billing Info
              </NavLink>
            </li>
            <li>
              <NavLink
                className={this.state.active ? "active" : "inactive"}
                to="/confirm-payment"
              >
                Confirm Payment
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
