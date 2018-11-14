import React, { Component } from "react";

class Form extends Component {
  render() {
    const { inputEmail, inputName, inputPhone, state, onLogin } = this.props;
    return (
      <div>
        <div className={"form mt-5"}>
          <div className={"row justify-content-center"}>
            <div className={"col-4"}>
              <div className={"card"}>
                <div className={"card-body"}>
                  <h5 className={"card-title text-left"}>
                    Visit Card Creation Form
                  </h5>
                  <form onSubmit={onLogin}>
                    <div className={"form-group mt-4 text-left"}>
                      <label htmlFor={"form_name"}>Name:</label>
                      <input
                        type="text"
                        className={"form-control"}
                        id="form_name"
                        placeholder="Enter your name"
                        onChange={inputName}
                        maxLength={20}
                        pattern="^[A-Za-z]+$"
                        required
                      />
                    </div>
                    <div className={"form-group text-left"}>
                      <label htmlFor={"form_phone"}>Phone number:</label>
                      <input
                        type="tel"
                        className={"form-control"}
                        id="form_phone"
                        placeholder="Enter your phone number"
                        onChange={inputPhone}
                        pattern="[+]972-[0-9]{2}-[0-9]{3}-[0-9]{4}"
                        required
                      />
                    </div>
                    <div className={"form-group text-left"}>
                      <label htmlFor={"form_email"}>Email address:</label>
                      <input
                        type="email"
                        className={"form-control"}
                        id="form_email"
                        placeholder="Enter your email address"
                        onChange={inputEmail}
                        pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                        required
                      />
                    </div>
                    <div className={"form-group text-left"}>
                      <button
                        type="submit"
                        className="btn btn-success align-left"
                        disabled={!(state.email && state.name && state.phone)}
                      >
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
