import React, { Component } from 'react'
import Chip from '@material-ui/core/Chip'
// import './components/Body.css'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import InputLabel from '@material-ui/core/InputLabel'
// import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import NativeSelect from '@material-ui/core/NativeSelect'

class FakeBody extends Component {
  constructor(props) {
    super(props)

    this.state = {
      updateName: [],
      updateId: [],
      updateImg: [],
      Data: [],
    }
  }
  componentDidMount() {
    fetch('https://quotes15.p.rapidapi.com/quotes/random/?language_code=en', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'quotes15.p.rapidapi.com',
        'x-rapidapi-key': 'ebe3ee84e6msh119c87703a7c068p10e99ajsn9a7e8f054ecd',
      },
    })
      .then((res) => res.json())
      .then((Data) => {
        this.setState({ Data })
      })
  }

  clickMe(item) {
    console.log(item)
    this.setState({ updateName: item.name })
    this.setState({ updateId: item.id })
    this.setState({ updateImg: item.img })
  }

  render() {
    return (
      <div className="body">
        <div className="body__header">
          {this.state.Data.map((item, index) => (
            <Chip
              size="small"
              color="primary"
              // onClick={this.clickMe.bind(this, item)}
              label={item.id}
            />
          ))}
          {/* <h1>{this.state.updateMe}</h1> */}
          {/* <Card className="body__card">
            <CardContent>
              <div className="card__items">
                <Typography>{this.state.updateId}</Typography>

                <FormControl onCha>
                  <InputLabel htmlFor="uncontrolled-native">Status</InputLabel>
                  <NativeSelect
                    defaultValue={10}
                    inputProps={{
                      name: 'name',
                      id: 'uncontrolled-native',
                      // onChange={handleChange}
                    }}
                  >
                    <option value={10} className="red">
                      Pending
                    </option>
                    <option value={20} className="green">
                      {' '}
                      Complete
                    </option>
                  </NativeSelect>
                  {/* <FormHelperText>Uncontrolled</FormHelperText> */}
          {/* </FormControl>

                <MoreVertIcon color="disabled" />
              </div>

              <Typography>{this.state.updateName}</Typography>
              <img src={this.state.updateImg}></img>
            </CardContent>
          </Card>  */}
        </div>
      </div>
    )
  }
}

export default FakeBody
