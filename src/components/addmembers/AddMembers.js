import React from 'react'
import './AddMembers.css'
import {
  makeStyles,
  TextField,
  Grid,
  Container,
  CssBaseline,
  Button,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
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
}))
function AddMembers() {
  const classes = useStyles()

  function handleChange() {
    var a = document.getElementById('district').value
    if (a === 'Krishna') {
      var arr = ['Vijayawada', 'Gannavaram', 'Hanuman Junction', 'Jaggayyapeta']
    } else if (a === 'Prakasham') {
      arr = ['ongole', 'chirala', 'Kandh kur', 'Markapur', 'Kanigiri']
    } else {
      arr = ['Null']
    }

    var string = ''

    for (let i = 0; i < arr.length; i++) {
      string = string + '<option value=' + arr[i] + '>' + arr[i] + '</option>'
    }
    document.getElementById('output').innerHTML = string
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="add__member">
        <div className="add__memberHeader">
          <h1>Add Members</h1>
        </div>
        <div className="">
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="phoneNumber"
              label="Phone Number"
              type="text"
              id="phoneNumber"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="address"
              label="Address"
              type="text"
              id="address"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="yourName"
              label="Your Name"
              type="text"
              id="yourName"
            />
            <Grid container>
              <div className="create__issueBody">
                <select
                  className="category__tag"
                  id="district"
                  onChange={handleChange}
                >
                  <option value="" disabled selected>
                    District
                  </option>
                  <option value="Krishna">Krishna</option>
                  <option value="Prakasham">Prakasham</option>
                  <option value="Guntur">Guntur</option>
                </select>
                <select id="output" className="category__tag">
                  <option value="" disabled selected>
                    City{' '}
                  </option>
                </select>
              </div>
            </Grid>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="age"
              label="Age"
              type="number"
              id="age"
            />
          </form>
        </div>
        <div className="add__memberFooter">
          <Button variant="contained" size="large" className={classes.margin}>
            Add Issue
          </Button>{' '}
        </div>
      </div>
    </Container>
  )
}

export default AddMembers
