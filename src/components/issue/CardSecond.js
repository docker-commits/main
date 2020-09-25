import React, { Component } from 'react'
import { Card, CardContent } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import history from '../../routes/history'
import './CardSecond.css'
import { Label, List } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { IssueManage } from '../../util/util'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
export class CardSecond extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Data: [],
    }
  }
  data = new FormData()

  componentDidMount() {
    let data = this.data
    this.data.append('key', 'snaggerindia')
    this.data.append('user_id', '1')
    // console.log('city>>', this.props.id)
    this.data.append('city_id', this.props.id)

    axios({
      method: 'post',
      url: 'http://localhost/sample/rest/issuelist/',
      data,
      headers: {
        'content-type': 'application/form-data',
        // 'Access-Control-Allow': '*',
        // 'Access-Control-Allow-Origin': '*',
      },
    }).then((Data) => {
      console.log(Data.data.output)
      this.setState({ Data: Data.data.output })
    })
  }
  status = 'open'

  onIssueClick(issue) {
    sessionStorage.setItem('myData', JSON.stringify(issue))

    history.push('/manage')
  }

  render() {
    return (
      <div className="cardsecond">
        {this.state.Data.map((item) => (
          <Card
            key={item.id}
            className="secondcard__card"
            onClick={() => {
              this.onIssueClick({ item })
            }}
          >
            <CardContent className="secondcard__cardContent">
              <div className="card__header">
                <div className="card__headerLeft">
                  <div className="card__headerLeft-left">
                    <h1>{item.issue_short_description}</h1>
                  </div>
                  <div className="card__headerLeft-right">
                    <Label color="green" horizontal>
                      {item.type_id}
                    </Label>
                  </div>
                </div>
                <div className="secondcard__headerRight">
                  <MoreVertIcon fontSize="small" />
                </div>
              </div>

              <div className="secondcard__body">
                <div className="id"> ID-{item.sno}</div>
                <div>
                  {' '}
                  {new Date(item.date * 1000).toLocaleDateString('en-US')}
                </div>
                <div>{item.date}</div>
              </div>
              <div className="secondbody__footer">
                <p>
                  <List.Item>
                    <Label color="gray" horizontal>
                      Status
                    </Label>
                    {'-'}
                    {'  '}
                    <Label
                      // className={`label__style ${
                      //   this.status === 'Close' && 'label__style second'
                      // }`}
                      color={item.status === '0' ? 'green' : 'red'}
                      horizontal
                    >
                      {item.status === '0' ? 'Close' : 'Open'}
                    </Label>
                  </List.Item>
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }
}

export default withRouter(CardSecond)

{
  /* <Card
          className="secondcard__card"
          onClick={() => history.push('/manage')}
        >
          <CardContent className="secondcard__cardContent">
            <div className="card__header">
              <div className="card__headerLeft">
                <div className="card__headerLeft-left">
                  <h1> Electricity </h1>
                </div>
                <div className="card__headerLeft-right">
                  <Label color="green" horizontal>
                    #political
                  </Label>
                </div>
              </div>
              <div className="secondcard__headerRight">
                <MoreVertIcon fontSize="small" />
              </div>
            </div>

            <div className="secondcard__body">
              <div className="id"> ID-5442</div>
              <div>2-sep-2020</div>
              <div>4-aug-2020</div>
            </div>
            <div className="secondbody__footer">
              <p>
                <List.Item>
                  <Label color="gray" horizontal>
                    Status
                  </Label>
                  {'-'}
                  {'  '}
                  <Label color="red" horizontal>
                    Open
                  </Label>
                </List.Item>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card
          className="secondcard__card"
          onClick={() => history.push('/manage')}
        >
          <CardContent className="secondcard__cardContent">
            <div className="card__header">
              <div className="secondcard__headerLeft">
                <div className="card__headerLeft-left">
                  <h1>Road Maintainance</h1>
                </div>
                <div className="card__headerLeft-right">
                  <Label color="green" horizontal>
                    #Negative
                  </Label>
                </div>
              </div>
              <div className="secondcard__headerRight">
                <MoreVertIcon fontSize="small" />
              </div>
            </div>

            <div className="secondcard__body">
              <div className="id"> ID-3333</div>
              <div>3-sep-2020</div>
              <div>5-aug-2020</div>
            </div>
            <div className="secondbody__footer">
              <p>
                <List.Item>
                  <Label color="gray" horizontal>
                    Status
                  </Label>
                  {'-'}
                  {'  '}
                  <Label color="green" horizontal>
                    Close
                  </Label>
                </List.Item>
              </p>
            </div>
          </CardContent>
        </Card> */
}
