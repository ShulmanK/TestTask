import React, { Component } from "react";

class Back extends Component {
  state = {};
  render() {
    return (
      <div className="front">
        <div className="row justify-content-center mt-3">
          <div className="col-6">
            <div className="card ">
              <div className="row">
                <div className="col-6">
                  <div className="card-body" style={{height:'350px'}}>
                    <h5 className="card-title">Your Visit Card.</h5>
                    <div className="form-check form-check-inline">
                    <p>Card Size:</p>
                    

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

export default Back;
