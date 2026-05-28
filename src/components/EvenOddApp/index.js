// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const randomNumber = Math.floor(Math.random() * 101)
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const isEven = count % 2 === 0
    const text = isEven ? 'Count is Even' : 'Count is Odd'

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="status">{text}</p>
          <button
            type="button"
            className="increment-button"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 To 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
