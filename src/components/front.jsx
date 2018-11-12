import React, { Component } from "react";
import CompanyImage from '../images/group.png'

class Front extends Component {
  render() {
    return (
      <div className="front">
        <div className="row justify-content-center mt-3">
          <div className="col-6">
            <div className="card">
              <div className="row">
                <div className="col-6">
                  <div className="card-body style={{height:'350px'}}">
                    <h5 class="card-title">Your Visit Card.</h5>
                    <p className="mt-5">
                      Name: <span>Example</span>
                    </p>
                    <p>
                      Phone number: <span>+972xxxxxx</span>
                    </p>
                    <p>
                      Email address: <span>example@emaile.com</span>
                    </p>
                  </div>
                </div>

                <div className="col-6">
                  <div
                    className="card-body"
                    style={{ background: "#2cc362", height: "350px" }}
                  >
                    <div className="row justify-content-center mt-5">
                      <h5 class="card-title">Company Name</h5>
                    </div>
                    <div className="row justify-content-center">

                    <img className="card-img-top" src={CompanyImage} style={{height:'180px',width:'180px' }}/>

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
