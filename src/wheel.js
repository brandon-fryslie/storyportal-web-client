import React, {Component} from 'react';
import renderWheelJquery from './wheel-jquery'
import './Wheel.scss'

class Wheel extends Component {

  componentDidMount() {
    this.renderWheel()
  }

  componentDidUpdate() {
    this.renderWheel()
  }

  renderWheel() {
    console.log("CALLING RENDER WHEEL", this.wheelContainer)
    renderWheelJquery(this.wheelContainer)
  }

  render() {
    return (
      <div className="wheels">
        <div className="wheel" ref={(wheel) => {
          this.wheelContainer = wheel
        }}>
          <div>Zero</div>
          <div>One</div>
          <div>Two</div>
          <div>Three</div>
          <div>Four</div>
          <div>Five</div>
          <div>Six</div>
          <div>Seven</div>
          <div>Eight</div>
          <div>Nine</div>
          <div>Ten</div>
          <div>Eleven</div>
          <div>Twelve</div>
          <div>Thirteen</div>
          <div>Fourteen</div>
          <div>Fifteen</div>
        </div>
      </div>
    );
  }
}

export default Wheel;
