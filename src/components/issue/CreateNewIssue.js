import React from 'react'
import './CreateNewIssue.css'
import {
  Container,
  CssBaseline,
  TextField,
  Grid,
  makeStyles,
  Button,
} from '@material-ui/core'
import history from '../../routes/history'

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

function CreateNewIssue() {
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
    <div className="create__issue">
      <div className="create__issueHeader">
        <h1>Create New Issue</h1>
      </div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              type="text"
              id="description"
            />

            <Grid container>
              <div className="create__issueBody">
                <select className="category__tag">
                  <option value="Category__Tag" disabled selected>
                    category Tag
                  </option>
                  <option value="Positive">Positive</option>
                  <option value="Negative">Negative</option>
                </select>
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
                  {/* <option value="Vijayawada">Vijayawada</option>
                  <option value="Vizag">Vizag</option>
                  <option value="Tenali">Tenali</option> */}
                </select>
              </div>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Upload Image
            </Button>
          </form>
        </div>
      </Container>
      <div className="create__issueFooter">
        <Button
          variant="contained"
          size="large"
          className={classes.margin}
          onClick={() => history.push('/issue')}
        >
          Add Issue
        </Button>
      </div>
    </div>
  )
}

export default CreateNewIssue
// kjbbk
