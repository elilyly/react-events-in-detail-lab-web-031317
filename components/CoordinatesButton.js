import React from 'react';
import ReactDOM from 'react-dom';

class CoordinatesButton extends React.Component {
  constructor() {
    super()
    this.clicker = this.clicker.bind(this)
  }
    clicker(event) {
      this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
  render() {
    return (
      <button onClick={this.clicker}></button>
    )
  }
}
export default CoordinatesButton;
