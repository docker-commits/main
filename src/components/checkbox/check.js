import React, { Component } from 'react'

import CheckBox from './CheckBox'

class Check extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fruites: [
        { id: 1, value: 'Vijayawada', isChecked: false },
        { id: 2, value: '	Machilipatnam', isChecked: false },
        { id: 3, value: 'Gudivada', isChecked: false },
        { id: 4, value: 'Nuzvid', isChecked: false },
      ],
      prakasam: [
        { id: 1, value: 'Kandukur', isChecked: false },
        { id: 2, value: '	Markapur', isChecked: false },
        { id: 3, value: 'Ongole', isChecked: false },
      ],
      Data: [],
    }
  }

  handleAllChecked = (event) => {
    let fruites = this.state.fruites
    fruites.forEach((fruite) => {
      fruite.isChecked = event.target.checked

      if (fruite.isChecked) {
        console.log(fruite.value)
        this.setState({ Data: fruite.value })
      }
      console.log('this state >>', this.state.Data)
    })
    this.setState({ fruites: fruites })
  }

  handleAllChecked1 = (event) => {
    let prakasam = this.state.prakasam
    prakasam.forEach((city) => {
      city.isChecked = event.target.checked

      if (city.isChecked) {
        console.log('athore>>', city.value)
      }
    })
    this.setState({ prakasam: prakasam })
  }
  handleCheckChieldElement = (event) => {
    let fruites = this.state.fruites
    fruites.forEach((fruite) => {
      if (fruite.value === event.target.value)
        fruite.isChecked = event.target.checked
      if (fruite.isChecked) {
        this.setState({ Data: fruite.value })
      }
    })
    this.setState({ fruites: fruites })
  }
  handleCheckChieldElement1 = (event) => {
    let prakasam = this.state.prakasam
    prakasam.forEach((city) => {
      if (city.value === event.target.value)
        city.isChecked = event.target.checked
      if (city.isChecked) {
        // console.log(city.value)
      }
    })
    this.setState({ prakasam: prakasam })
  }
  render() {
    return (
      <div className="App">
        {/* <h1> Check and Uncheck All Example </h1> */}
        <input
          type="checkbox"
          onChange={this.handleAllChecked}
          value="checkedall"
        />{' '}
        Krishna
        <ul>
          {this.state.fruites.map((fruite, index) => {
            return (
              <CheckBox
                key={index}
                handleCheckChieldElement={this.handleCheckChieldElement}
                {...fruite}
              />
            )
          })}
        </ul>
        <input
          type="checkbox"
          onChange={this.handleAllChecked1}
          value="checkedall"
        />{' '}
        Prakasam
        <ul>
          {this.state.prakasam.map((city, index) => {
            return (
              <CheckBox
                key={index}
                handleCheckChieldElement={this.handleCheckChieldElement1}
                {...city}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}
// export const checkeditems = values

export default Check
