import React, { Component } from 'react'

const studentList = [
  'Randall Malfoy',
  'Kvothe Black',
  'Chun Zorander',
  'Leomund Ridcully',
  'Rary Stibbons',
  'Gandalf Dresden',
  'Zeddicus Doom',
]

export default class ChallengeTwo extends Component {
  //declare the states
  constructor(props) {
    super(props);

    this.state = { students:'' };
  }

  //a lifecycle method will execute when the page has loaded (this will only run once)

  //random button handler
  randomize = () => {
    //shuffle the array and set the state
    let student = studentList
    for (let i = student.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [student[i], student[j]] = [student[j], student[i]];
    }

    this.setState({ students: student.map((s, index) => (
      <React.Fragment key={index}>{s}<br /></React.Fragment>))
  })
  }

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className='msg'>
          <ul>
            {/* display the list of students by iterating through the array */}
            {this.state.students}
          </ul>
        </div>
        <button className='btn large' onClick={this.randomize}>Randomize</button>
      </>
    )
  }
}
