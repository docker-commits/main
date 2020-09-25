import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
// importing routes
import Routes from './routes/Routes'

class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let data = new FormData()
    data.append('user_id', '1')
    axios({
      method: 'post',
      url: 'http://localhost/sample/rest/issuelist/',
      data,
      headers: {
        'content-type': 'application/form-data',
        // 'Access-Control-Allow': '*',
        // 'Access-Control-Allow-Origin': '*',
      },
    })
    // .then((res) => console.log(res.data))
  }

  render() {
    return (
      <div className="app">
        <Routes history={this.props.history} />
      </div>
    )
  }
}

export default App
