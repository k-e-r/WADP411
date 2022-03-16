import React, { Component } from 'react';
//import images
import lookLeft from '../assets/look-left.jpeg';
import lookRight from '../assets/look-right.jpeg';

class ChallengeOne extends Component {
  //declare the state here
  constructor(props) {
    super(props);

    this.state = { image: lookLeft };
  }

  //click left/right button handler goes here
  clickHandler = (image) => {
    this.setState({ image })
  }

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={this.state.image}
            alt={this.state.image.split("/")[3].split('.')[0]}
          />
        </div>
        <button className="btn" onClick={() => this.clickHandler(lookLeft)}>⭠</button>
        <button className="btn" onClick={() => this.clickHandler(lookRight)}>⭢</button>
      </>
    );
  }
}

export default ChallengeOne;