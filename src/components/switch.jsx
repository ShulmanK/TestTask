import React, { Component } from "react";

class Switch extends Component {
  
  render() {
    const {frontSide, showFront, selectBack} = this.props;

    return (
      <div className="switch"
      >
        <div className="front mt-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-3">
                <div className="row justify-content-around">
                  <div className="form-check form-check-inline">
                    <input type="radio" name="side_card" id="front-choise" defaultChecked
                    onChange={showFront}
                    />
                    <label className="form-check-label pl-2" for="front-choise">
                      Front
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" name="side_card" id="back-choise" 
                    onChange={selectBack}/>
                    <label className="form-check-label pl-2" for="front-choise">
                      Back
                    </label>
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

export default Switch;
