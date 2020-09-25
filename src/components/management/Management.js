import React, { Component } from 'react'
import { Button, Card, CardHeader, CardContent } from '@material-ui/core'
import SunEditor from 'suneditor-react'
import 'suneditor/dist/css/suneditor.min.css'
import './Management.css'
import { Label } from 'semantic-ui-react'
import { IssueManage } from '../../util/util'
import axios from 'axios'
export class Management extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Data: [],
      Message: [],
      id: [],
    }
  }

  componentDidMount() {
    let data = JSON.parse(sessionStorage.getItem('myData'))

    console.log(this.props.state)
    console.log(this.props.location)
    let id = [...this.state.id, data]
    console.log(id)
    this.setState({ id })
    setTimeout(() => {
      console.log('Receiving data', this.state.id)
    }, 100)
    // let data = new FormData()
    // data.append('user_id', IssueManage()[0])
    // axios({
    //   method: 'post',
    //   url: 'http://localhost/sample/rest/issuelist/',
    //   data,
    //   headers: {
    //     'content-type': 'application/form-data',
    //     // 'Access-Control-Allow': '*',
    //     // 'Access-Control-Allow-Origin': '*',
    //   },
    // }).then((Data) => {
    //   // console.log(Data.data.output)
    //   this.setState({ Data: Data.data.output })
    // })
    const temp = this.state.id.length > 0 ? this.state.id[0].item : []

    let mdata = new FormData()
    mdata.append('user_id', temp.user_id)
    mdata.append('issue_id', temp.sno)

    axios({
      method: 'post',
      url: 'http://15.207.221.155/rest/issuemessagelist/',
      data: mdata,
      headers: {
        'content-type': 'application/form-data',
        // 'Access-Control-Allow': '*',
        // 'Access-Control-Allow-Origin': '*',
      },
    }).then((Data) => {
      console.log(this.Message)
      this.setState({ Message: Data.data.output })
    })
  }
  render() {
    console.log(this.state.Message)
    const temp = this.state.id.length > 0 ? this.state.id[0].item : []
    console.log(temp.state_id)
    // console.log(temp['attachment_path'])
    // this.setState({ id: data })
    // console.log('id data', this.state.id[0].item)
    return (
      <div className="management">
        {/* {this.state.Data[0]((item) => ( */}
        <div className="management__header">
          <div className="management__headerLeft">
            <h1>{temp.issue_short_description}</h1>
            <div className="management__desc">
              <p>{temp.issue_long_description}</p>

              <p className="management__subHeaderMain">
                <div className="management__subHeader">
                  <Label color="teal" horizontal>
                    ID
                  </Label>
                  {/* <span>:</span> */}
                  <Label as="a" color="orange" circular>
                    {temp.sno}
                  </Label>
                </div>
                <div className="management__subHeader subheader--create">
                  <Label color="teal" horizontal>
                    Created on
                  </Label>
                  {/* <span>:-</span> */}
                  <Label as="a" color="orange" tag>
                    {new Date(temp.date * 1000).toLocaleDateString('en-US')}
                  </Label>{' '}
                </div>
                <div className="management__subHeader">
                  <Label color="teal" horizontal>
                    Status
                  </Label>
                  {/* <span>-</span> */}
                  <Label color={temp.status === '0' ? 'green' : 'red'}>
                    Open
                  </Label>
                </div>
              </p>
            </div>
          </div>
          <div className="management__headerRight">
            <Button
              size="medium"
              variant="contained"
              color="primary"
              className="button__styles"
            >
              Escalate
            </Button>
            <Button size="medium" variant="contained" color="secondary">
              Close Issue
            </Button>
          </div>
        </div>
        {/* ))} */}

        <div className="management__body">
          {/* <div className="management__bodyLeft">Prasad</div>
          <div className="management__bodyRight"></div> */}
          <Card className="management__card">
            <CardHeader title="Person Name" subheader="September 14, 2016" />
            <CardContent>
              Drinking water is one of the basic needs for all of us.
              Unfortunately, about 5.76 lakh villages have been facing scarcity
              of water. In Rajasthan, people in certain pockets have to wait for
              hours to collect one bucket of water from water tankers brought by
              the trains, trucks and tractors. In many hilly areas, the
              situation is the same. In many tribal and backward areas
              un-hygienic and unsafe water collected in ponds, tanks etc.,
              during rainy season are the only source of drinking water.
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32
            </CardContent>
          </Card>
        </div>
        <div className="management__bodyFooter">
          <p className="management__suneditor">
            <SunEditor
              lang="en"
              placeholder="Please type here..."
              setOptions={{
                height: 200,
                buttonList: [
                  [
                    'blockquote',
                    /** Submenu */
                    'align',
                    'font',
                    'fontColor',
                    'fontSize',
                    'formatBlock',

                    'paragraphStyle',
                    'table',

                    'textStyle',
                    /** Dialog */
                    'image',
                    'link',
                  ],
                ],
              }}
            />
          </p>
          <div>
            <button>Add Comment</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Management
