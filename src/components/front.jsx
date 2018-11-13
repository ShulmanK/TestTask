import React, { Component } from "react";
import CompanyImage from "../images/group.png";

class Front extends Component {
  state = {
    activeFront: "none"
  };
  hoverFront(){
    document.getElementById("hover-front-shadow").style.boxShadow = "0px 0px 0px blue"
  }
  nohoverFront(){
    document.getElementById("hover-front-shadow").style.boxShadow = "0 0 11px rgba(33,33,33,.2)"
  }
  render() {
    const { state, setSize } = this.props;
    return (
      <div className="front" >
        <div className="row justify-content-center mt-3">
          <div className="col-6">
            <div
              className="card"
              id="hover-front-shadow"
              //
              onMouseLeave={(e) => this.hoverFront(e)}
              onMouseOver={(e) => this.nohoverFront(e)}

            >
              <div className="row">
                <div className="col-6">
                  <div className="card-body"
                   style={{height: `${state.cardSize}px`}}
                  id="front-card-size"
                  >
                    <h5 class="card-title">Your Visit Card.</h5>
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
                    // className={}


                    style={{ background: state.isReversed ? 'red' : 'green', height: "100%" }}
                    id="card-color"
                  >
                    <div className="row justify-content-center mt-2">
                      <h5 class="card-title">{state.name}</h5>
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
