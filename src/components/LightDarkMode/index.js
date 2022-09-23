// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'dark'}

  ChangeMode = () => {
    const {mode} = this.state
    if (mode === 'dark') {
      this.setState(() => ({mode: 'light'}))
    } else {
      this.setState(() => ({mode: 'dark'}))
    }
  }

  render() {
    const {mode} = this.state

    const dark = (
      <div className="blackcontainer">
        <h1>Click To Change Mode</h1>
        <button type="submit" onClick={this.ChangeMode}>
          Light Mode
        </button>
      </div>
    )
    const light = (
      <div className="whitecontainer">
        <h1 className="heading">Click To Change Mode</h1>
        <button type="submit" onClick={this.ChangeMode}>
          Dark Mode
        </button>
      </div>
    )

    return (
      <div className="actualcontainer">{mode === 'dark' ? dark : light}</div>
    )
  }
}

export default LightDarkMode
