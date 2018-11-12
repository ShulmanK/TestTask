import React, { Component } from "react";

class Form extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className={"form mt-5"}>
          <div className={"row justify-content-center"}>
            <div className={"col-4"}>
              <div className={"card"}>
                <div className={"card-body"}>
                  <h5 className={"card-title text-left"}>Visit Card Creation Form</h5>
                  <form action="">
                    <div className={"form-group mt-4 text-left"}>
                      <label for="form_name">Name:</label>
                      <input
                        type="text"
                        className={"form-control"}
                        id="form_name"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className={"form-group text-left"}>
                      <label for="form_phone">Phone number:</label>
                      <input
                        type="text"
                        className={"form-control"}
                        id="form_phone"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className={"form-group text-left"}>
                      <label for="form_email">Email address:</label>
                      <input
                        type="text"
                        className={"form-control"}
                        id="form_email"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className={"form-group text-left"}>
                      <button type="submit" class="btn btn-success align-left">
                        SEND
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
