import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeClasses: [false, false, false],
    };
  }
  changeClass = (index) => {
    const activeClasses = [
      ...this.state.activeClasses.slice(0, index),
      !this.state.activeClasses[index],
      this.state.activeClasses.slice(index + 1),
    ].flat();
    this.setState({ activeClasses });
  };

  render() {
    // const style = {
    //   borderBottom: `20px solid ${this.state.borderColor}`,
    //   color: this.state.color,
    // };
    const activeClasses = this.state.activeClasses.slice();
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
                  className={activeClasses[0] ? "active" : "inactive"}
                  onClick={() => this.changeClass(0)}
                >
                  Personal Info
                </Link>
              </li>
              {/* <span class="active"> Personal Info</span> */}
            </div>
            <li>
              <Link
                to="/billing"
                className={activeClasses[1] ? "active" : "inactive"}
                onClick={() => this.changeClass(1)}
              >
                Biling Info
              </Link>
            </li>
            <li>
              <Link
                to="/confirm-payment"
                className={activeClasses[2] ? "active" : "inactive"}
                onClick={() => this.changeClass(2)}
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
