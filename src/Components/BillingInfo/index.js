import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu";

export default class BillingInfo extends Component {
  render() {
    return (
      <div>
        <Menu />
        <form className="billing-form">
          <div>
            <p>
              Name on Card <sup>*</sup>
            </p>
            <label class="flex align-center justify-content-center input">
              <input type="text" placeholder="Opara Linus Ahmed" />
            </label>
          </div>
          <div>
            <p>
              Card Type <sup>*</sup>
            </p>
            <label class="flex align-center justify-content-center input">
              <select>
                <option>Visa</option>
                <option>Verve</option>
                <option>Master</option>
              </select>
            </label>
          </div>
          <div className="card-details">
            <div>
              <p>
                Card details <sup>*</sup>
              </p>
              <label class="flex align-center justify-content-center input">
                <input
                  type="text"
                  placeholder="44960  44960  44960 44960"
                  className="text-center"
                />
              </label>
            </div>
            <div className="flex align-center card-info">
              <div>
                <p className="text-center">
                  Expiry date <sup>*</sup>
                </p>
                <label class="flex align-center justify-content-center input">
                  <input
                    type="text"
                    placeholder="04 / 23"
                    className="text-center"
                  />
                </label>
              </div>
              <div>
                <p className="text-center">
                  CVV <sup>*</sup>
                </p>
                <label class="flex align-center justify-content-center input">
                  <input
                    type="text"
                    placeholder="923"
                    className="text-center"
                  />
                </label>
              </div>
            </div>
          </div>

          <div class="billing-final">
            <div className="flex align-center forward">
              <Link to="/confirm-payment" className="btn">
                Next
              </Link>
              <Link to="/" className="link-page">
                Cancel Payment
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
