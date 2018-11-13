import React, { Component } from "react";

class Back extends Component {

  render() {
    const {frontSide} = this.props;
    return (
      <div className="front"
      style={{display: frontSide.selectBack}}
      >
        <div className="row justify-content-center mt-3">
          <div className="col-6">
            <div className="card ">
              <div className="row">
                <div className="col-6">
                  <div className="card-body" style={{ height: "350px" }}>
                    <h5 className="card-title">Your Visit Card.</h5>
                    <div className="row mt-4">
                      <div className="form-check form-check-inline">
                        <span className="pl-3">Card Size:</span>
                        <input
                          type="radio"
                          name="size_card"
                          id="s-choise"
                          className="ml-3"
                          defaultChecked
                        />
                        <label
                          className="form-check-label pl-2"
                          
                        >
                          S
                        </label>
                        <input
                          type="radio"
                          name="size_card"
                          id="m-choise"
                          className="ml-3"
                        />
                        <label
                          className="form-check-label pl-2"
                          
                        >
                          M
                        </label>
                        <input
                          type="radio"
                          name="size_card"
                          id="l-choise"
                          className="ml-3"
                        />
                        <label
                          className="form-check-label pl-2"
                         
                        >
                          L
                        </label>
                      </div>

                     
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
