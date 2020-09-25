import React, { Component } from 'react'
import './CardR.css'
import Chip from '@material-ui/core/Chip'
import Header from '../header/Header'
import Data from './data.json'
import { makeStyles } from '@material-ui/core/styles'
import CardSecond from './CardSecond'
import axios from 'axios'

export class CardR extends Component {
  useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  }))

  constructor(props) {
    super(props)

    this.state = {
      updateName: [],
      updateId: '',
      updateImg: [],
      Data: [],
      UserLocation: [],
    }
  }
  componentDidMount() {
    let data = new FormData()
    data.append('userid', '1')
    axios({
      method: 'post',
      url: 'http://localhost/sample/rest/userlocationlist/',
      data,
      headers: {
        'content-type': 'application/form-data',
        // 'Access-Control-Allow': '*',
        // 'Access-Control-Allow-Origin': '*',
      },
    }).then((Data) => {
      console.log(Data.data.output)
      this.setState({ UserLocation: Data.data.output })
    })
  }

  clickMe() {
    this.setState({
      updateId: 3,
    })

    this.forceUpdate()
  }

  getColor() {
    const colors = ['#4CB6AC', '#F06192', '#4FC3F7', '#BA68C8']
    var randomNum = Math.floor(Math.random() * colors.length)
    var color = colors[randomNum]
    colors.splice(1)
    return color
  }
  render() {
    return (
      <div>
        <Header />
        <div className="card">
          <div className="card__chipsHeader">
            {this.state.UserLocation.map((item, index) => (
              <Chip
                key={index}
                onClick={() => {
                  this.clickMe()
                }}
                label={item.location_id}
                style={{ backgroundColor: this.getColor(), color: 'white' }}
                // className={this.useStyles.chip}
              />
            ))}
          </div>
          <CardSecond id={this.state.updateId} />
        </div>
      </div>
    )
  }
}

export default CardR
