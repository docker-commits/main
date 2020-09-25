import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Check from '../checkbox/check'
// import history from '../../routes/history'
import { withStyles } from '@material-ui/core/styles'
import axios from 'axios'
import qs from 'qs'
import CheckBox from '../checkbox/CheckBox'

const useStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    backgroundColor: '#1377E5',
    color: 'white',

    margin: theme.spacing(3, 0, 2),
    '&:hover': {
      backgroundColor: 'none',
      color: '#FFF',
    },
  },
})

class UserControlSignup extends Component {
  constructor(props) {
    super(props)
    this.onChangeFirstName = this.onChangeFirstName.bind(this)
    this.onChangeLastName = this.onChangeLastName.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onChangeRole = this.onChangeRole.bind(this)
    this.onSubmitf = this.onSubmitf.bind(this)

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      age: '',
      role: [],
      designation: '',
      role_id: '',
      date: '',
      status: '',
      fruites: [
        { id: 1, value: 'Vijayawada', isChecked: false },
        { id: 2, value: 'Machilipatnam', isChecked: false },
        { id: 3, value: 'Gudivada', isChecked: false },
        { id: 4, value: 'Nuzvid', isChecked: false },
      ],
      prakasam: [
        { id: 1, value: 'Kandukur', isChecked: false },
        { id: 2, value: 'Markapur', isChecked: false },
        { id: 3, value: 'Ongole', isChecked: false },
      ],
    }
  }

  // checked

  handleAllChecked = (event) => {
    let fruites = this.state.fruites
    fruites.forEach((fruite) => {
      fruite.isChecked = event.target.checked
    })
    this.setState({ fruites: fruites })
  }

  handleAllChecked1 = (event) => {
    let prakasam = this.state.prakasam
    prakasam.forEach((city) => {
      city.isChecked = event.target.checked
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
  // checked

  onChangeFirstName(e) {
    this.setState({
      first_name: e.target.value,
    })
  }
  onChangeLastName(e) {
    this.setState({
      last_name: e.target.value,
    })
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    })
  }

  onChangePassword(e) {
    this.setState({
      phone: e.target.value,
    })
  }
  onChangeRole(e) {
    this.setState({
      role: e.target.value,
    })
  }
  locations = []

  onSubmitf(e) {
    e.preventDefault()

    this.state.fruites.forEach((fruite) => {
      if (fruite.isChecked) {
        this.locations.push(fruite.value)
      }
    })

    this.state.prakasam.forEach((city) => {
      if (city.isChecked) {
        this.locations.push(city.value)
      }
    })

    let data = new FormData()

    const obj = {
      key: 'snaggerindia',
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      phone: this.state.phone,
      role: this.state.role,
      designation: 'Developer',
      age: '20',
      role_id: '1',
      location: this.locations,
      password: this.password,
    }

    data.append('key', obj.key)
    data.append('first_name', obj.first_name)
    data.append('last_name', obj.last_name)
    data.append('email', obj.email)
    data.append('phone', obj.phone)
    data.append('role', obj.role)
    data.append('designation', obj.designation)
    data.append('age', obj.age)
    data.append('role_id', obj.role_id)
    data.append('location', obj.location)
    data.append('password', obj.password)

    console.log(obj)
    // axios.post('https://belligerent-panels.000webhostapp.com/rest/userlist/', {
    //   key: 'snaggerindia',
    //   first_name: this.state.first_name,
    //   last_name: this.state.last_name,
    //   email: this.state.email,
    //   phone: this.state.phone,
    //   role: this.state.role,
    //   designation: 'Developer',
    //   age: '20',
    //   role_id: '1',
    //   location: 'vij',
    // })
    // fetch('https://my-json-server.typicode.com/docker-commits/testjson/db', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'multipart/form-data',
    //   },
    //   body: JSON.stringify({
    //     sno: 3,
    //     first_name: 'pranathi',
    //     last_name: 'dande',
    //     email: 'pr',
    //     phone: '9705510135',
    //     age: '100',
    //     role: 'Super Admin',
    //     designation: 'test',
    //     role_id: '1',
    //     date: '1600071431',
    //     status: '1',
    //   }),
    // }).then((res) => console.log(res.data))

    axios({
      method: 'post',
      url: 'http://localhost/sample/rest/userdelete/16/',
      // data,
      headers: {
        'content-type': 'application/form-data',
        // 'Access-Control-Allow': '*',
        // 'Access-Control-Allow-Origin': '*',
      },
    }).then((res) => console.log(res.data))
    this.locations = []
  }

  render() {
    const { classes } = this.props

    return (
      <div className="usercontrolsgnup">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
            <Typography component="h1" variant="h5">
              User Control
            </Typography>
            <form className={classes.form} onSubmit={this.onSubmitf}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    value={this.state.first_name}
                    onChange={this.onChangeFirstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    value={this.state.last_name}
                    onChange={this.onChangeLastName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={this.state.phone}
                    onChange={this.onChangePassword}
                  />
                </Grid>
                <Grid className="select__grid">
                  <select
                    value={this.state.role}
                    onChange={this.onChangeRole}
                    className="category__tag"
                  >
                    <option value="Super Admin">Super Admin </option>
                    <option value="Coordinator">Coordinator</option>
                    <option value="Lead">Lead</option>
                  </select>
                </Grid>
                <Grid item xs={12}>
                  {/* check boxes */}

                  <div>
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
                            handleCheckChieldElement={
                              this.handleCheckChieldElement
                            }
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
                            handleCheckChieldElement={
                              this.handleCheckChieldElement1
                            }
                            {...city}
                          />
                        )
                      })}
                    </ul>
                  </div>

                  {/* check boxes */}
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                // onSubmit={this.onSubmitf}
                // onClick={() => history.push('/createnewissue')}
              >
                Add User
              </Button>
              <buttton type="submit" onClick={this.onSubmitf}>
                submit
              </buttton>
            </form>
          </div>
        </Container>
      </div>
    )
  }
}

export default withStyles(useStyles)(UserControlSignup)
