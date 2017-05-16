import React from 'react';
import ReactDOM from 'react-dom';

class DelayedButton extends React.Component {
  constructor() {
    super()
    this.delayed = this.delayed.bind(this)
  }
  delayed(event) {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.delayed}></button>
    )
  }
}
export default DelayedButton;
