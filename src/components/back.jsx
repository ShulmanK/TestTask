import React, { Component } from "react";
import Switch from "react-switch";

class Back extends Component {
  state = {
    checked: false
  };

  // handleChange(e) {
  //   this.bind.setState({ checked: 'checked' });
  //   e.preventDefault();

  // }
  handleChange = (value) => {
    console.log(value)
    this.setState({ checked: !this.state.checked });
    // this.state({checked:true}) ? document.getElementById("card-color").style.background = 'blue' :  document.getElementById("card-color").style.background = "#2cc362"

  }


  // inputEmail = e => this.setState({ email: e.target.value });


  hoverFront() {
    document.getElementById("hover-back-shadow").style.boxShadow =
      "0px 0px 0px blue";
  }
  nohoverFront() {
    document.getElementById("hover-back-shadow").style.boxShadow =
      "0 0 11px rgba(33,33,33,.2)";
  }
  sizeM() {
    document.getElementById("back-card-size").style.height = "400px";
    document.getElementById("front-card-size").style.height = "400px";

    console.log("sizeM");
  }
  sizeS() {
    document.getElementById("back-card-size").style.height = "350px";
    document.getElementById("front-card-size").style.height = "350px";

    console.log("sizeS");
  }
  sizeL() {
    document.getElementById("back-card-size").style.height = "450px";
    document.getElementById("front-card-size").style.height = "450px";

    console.log("sizel");
  }
  reverseColors() {
    document.getElementById("card-color").style.background = "blue";
  }
  noreverseColors() {
    document.getElementById("card-color").style.background = "#2cc362";
  }

  render() {
    const { frontSide } = this.props;
    return (
      <div className="front" style={{ display: frontSide.selectBack }}>
        <div className="row justify-content-center mt-3">
          <div className="col-6">
            <div
              className="card"
              id="hover-back-shadow"
              onMouseLeave={e => this.hoverFront(e)}
              onMouseOver={e => this.nohoverFront(e)}
            >
              <div className="row">
                <div className="col-6">
                  <div
                    className="card-body"
                    style={{ height: "350px" }}
                    id="back-card-size"
                  >
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
                          onChange={e => this.sizeS(e)}
                        />
                        <label className="form-check-label pl-2">S</label>

                        <input
                          type="radio"
                          name="size_card"
                          id="m-choise"
                          className="ml-3"
                          onChange={e => this.sizeM(e)}
                        />
                        <label className="form-check-label pl-2">M</label>

                        <input
                          type="radio"
                          name="size_card"
                          id="l-choise"
                          className="ml-3"
                          onChange={e => this.sizeL(e)}
                        />
                        <label className="form-check-label pl-2">L</label>
                      </div>
                    </div>

                    <div className="row">
                      <span className="pl-3 mt-3">
                        Reverse colors:
                        <input
                          type="radio"
                          className="ml-3"
                          onClick={e => this.reverseColors(e)}
                          name="color_card"
                          
                        />
                        <label htmlFor="">Yes</label>
                        <input
                          type="radio"
                          className="ml-3"
                          onClick={e => this.noreverseColors(e)}
                          name="color_card"
                          defaultChecked  
                        />
                        <label htmlFor="">No</label>
                      </span>
                    </div>

                    <div className="row">
                      <span>Example</span>

                      <label htmlFor="material-switch">
                        <span>
                          Switch with style inspired by Material Design
                        </span>
                        <Switch
                          
                          onChange={this.handleChange}
                          checked={this.state.checked}
                          onColor="#86d3ff"
                          onHandleColor="#2693e6"
                          handleDiameter={30}
                          uncheckedIcon={false}
                          checkedIcon={false}
                          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                          height={20}
                          width={48}
                          className="react-switch"
                          id="material-switch"
                        />
                      </label>
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
