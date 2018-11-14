import React, { Component } from "react";
import CompanyImage from "../images/group.png";

class Front extends Component {
  render() {
    const { state } = this.props;
    return (
      <div className="front">
        <div className="row justify-content-center mt-3">
          <div className="col-6">
            <div
              className="card box"
              id="hover-front-shadow"
            >
              <div className="row">
                <div className="col-6">
                  <div
                    className="card-body"
                    style={{ height: `${state.cardSize}px` }}
                    id="front-card-size"
                  >
                    <h5 className ="card-title">Your Visit Card.</h5>
                    <div className="row ml-2 align-items-center">
                      <p className="mt-5">
                        Name: <span>{state.name}</span>
                      </p>
                      <p>
                        Phone number: <span>{state.phone}</span>
                      </p>
                      <p>
                        Email address: <span>{state.email}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="card-body"
                    style={{
                      background: state.isReversed ? "red" : "green",
                      height: "100%"
                    }}
                    id="card-color"
                  >
                    <div className="row justify-content-center mt-2">
                      <h5 className="card-title">{state.name}</h5>
                    </div>
                    <div className="row justify-content-center">
                      <img
                        className="card-img-top"
                        src={CompanyImage}
                        style={{ height: "180px", width: "180px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Front;
