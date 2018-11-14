import React, { Component } from "react";
import Switch from "react-switch";

class Back extends Component {
  state = {
    checked: false
  };
  handleChange = value => {
    console.log(value);
    this.setState({ checked: !this.state.checked });
  };
  setSize(size) {}
  render() {
    const { state, setSize, reverseColors } = this.props;
    return (
      <div className="front">
        <div className="row justify-content-center mt-3">
          <div className="col-6">
            <div
              className="card box"
              id="hover-back-shadow"
            >
              <div className="row">
                <div className="col-6">
                  <div
                    className="card-body"
                    style={{ height: `${state.cardSize}px` }}
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
                          checked={state.cardSize === 350}
                          onChange={e => setSize(350)}
                        />
                        <label className="form-check-label pl-2">S</label>
                        <input
                          type="radio"
                          name="size_card"
                          id="m-choise"
                          className="ml-3"
                          checked={state.cardSize === 400}
                          onChange={e => setSize(400)}
                        />
                        <label className="form-check-label pl-2">M</label>
                        <input
                          type="radio"
                          name="size_card"
                          id="l-choise"
                          className="ml-3"
                          checked={state.cardSize === 450}
                          onChange={e => setSize(450)}
                        />
                        <label className="form-check-label pl-2">L</label>
                      </div>
                    </div>
                    <div className="row ">
                      <span className="ml-3 mt-2">Reverse colors:</span>
                      <Switch
                        onChange={reverseColors}
                        checked={state.isReversed}
                        onColor="green"
                        onHandleColor="#008000"
                        handleDiameter={20}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={15}
                        width={48}
                        className="react-switch ml-2 mt-2"
                        id="material-switch"
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

export default Back;
