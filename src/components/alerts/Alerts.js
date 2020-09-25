import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core'
import './Alert.css'
class Alerts extends Component {
  state = {
    shadow: 1,
  }

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     Data: [],
  //   }
  // }
  // componentDidMount() {
  //   fetch('https://quotes15.p.rapidapi.com/quotes/random/?language_code=en', {
  //     method: 'GET',
  //     headers: {
  //       'x-rapidapi-host': 'quotes15.p.rapidapi.com',
  //       'x-rapidapi-key': 'ebe3ee84e6msh119c87703a7c068p10e99ajsn9a7e8f054ecd',
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((Data) => {
  //       // var jsonDataFromXml = new XMLParser().parseFromString(Data)
  //       console.log(Data)
  //       this.setState({ Data })
  //     })
  async componentDidMount() {
    const url = 'https://fakerestapi.azurewebsites.net/api/Activities'
    const response = await fetch(url)
    const data = await response.text()
    this.setState({ Data: data, loading: false })
    console.log(data)
  }
  onMouseOver = () => this.setState({ shadow: 5 })

  onMouseOut = () => this.setState({ shadow: 1 })

  render() {
    // const { authors } = this.state
    // console.log(this.state.Data)
    return (
      <div className="alert">
        {/* {this.state.loading || !this.state.Data ? (
          <div>Loading Data..</div>
        ) : (
          <div>
            <h1>
              {this.state.Data.map((item) => (
                <h1> {item.ID}</h1>
              ))}
            </h1>
          </div>
        )}
        {this.state.Data.map((item, index) => (
          <p>{item.content}</p>
        ))} */}
        <a href="https://www.google.com/url?rct=j&sa=t&url=https://timesofindia.indiatimes.com/city/vijayawada/help-construction-workers-js-chief/articleshow/78093925.cms&ct=ga&cd=CAIyHDgzMmMwMDYzODJhZjhkYmE6Y28uaW46ZW46SU4&usg=AFQjCNFL9HE5AZjhNpq3k2b2XchXu9bZ1A">
          <Card
            className="alert__card"
            onMouseOver={this.onMouseOver}
            onMouseOut={this.onMouseOut}
            zDepth={this.state.shadow}
          >
            <CardContent className="alert__cardBody">
              <div className="card__title">
                <h1>SBI ATM Theft Case</h1>
              </div>
              <div className="card__body">
                <p>Times of India</p>
              </div>
              <div className="card__description">
                <p>
                  <span>Vijayawada</span> SBI ATM Theft Case | Six Gang Members
                  Arrested by Police | in <b>Vijayawada</b> (Video). Posted By:
                  Social News XYZ September 14, 2020&nbsp;...
                </p>
              </div>
            </CardContent>
          </Card>
        </a>
        <a href="https://www.google.com/url?rct=j&sa=t&url=https://www.firstpost.com/art-and-culture/from-moscow-to-vijayawada-how-generations-of-telugu-readers-grew-up-on-soviet-childrens-literature-8809591.html&ct=ga&cd=CAIyHDgzMmMwMDYzODJhZjhkYmE6Y28uaW46ZW46SU4&usg=AFQjCNFP0sfLMf94HM_CuLS-Roy5nJnCMw">
          <Card className="alert__card">
            <CardContent className="alert__cardBody">
              <div className="card__title">
                <h1>
                  From Moscow to <b>Vijayawada</b>
                </h1>
              </div>
              <div className="card__body">
                <p>Times of India</p>
              </div>
              <div className="card__description">
                <p>
                  <span>Vijayawada</span> The books are a product of a literary
                  collaboration between Progress Publishers in Moscow and
                  Visalandhra Publishing House in <b>Vijayawada</b>. As
                  a&nbsp;...
                </p>
              </div>
            </CardContent>
          </Card>
        </a>
        <a href="https://www.google.com/url?rct=j&sa=t&url=https://www.socialnews.xyz/%3Fp%3D3033206&ct=ga&cd=CAIyHDgzMmMwMDYzODJhZjhkYmE6Y28uaW46ZW46SU4&usg=AFQjCNGxOsyxhjodyzLKMDTsX7zIPHtB3w">
          <Card className="alert__card">
            <CardContent className="alert__cardBody">
              <div className="card__title">
                <h1>
                  <b>Vijayawada</b> Swarna Palace Fire Incident | Heard by
                  Supreme Court Today (Video)
                </h1>
              </div>
              <div className="card__body">
                <p>Times of India</p>
              </div>
              <div className="card__description">
                <p>
                  <span>Vijayawada</span> <b>Vijayawada</b> Swarna Palace Fire
                  Incident | Heard by Supreme Court Today (Video). Posted By:
                  Social News XYZ September 13, 2020&nbsp;...
                </p>
              </div>
            </CardContent>
          </Card>
        </a>
        <a href=" https://www.google.com/url?rct=j&sa=t&url=https://timesofindia.indiatimes.com/city/vijayawada/covid-stigma-drives-andhra-pradesh-couple-to-suicide/articleshow/78097071.cms&ct=ga&cd=CAIyHDgzMmMwMDYzODJhZjhkYmE6Y28uaW46ZW46SU4&usg=AFQjCNGUbEZB9NmbZvbarYDRFhO9ZTHe6Q">
          <Card className="alert__card">
            <CardContent className="alert__cardBody">
              <div className="card__title">
                <h1>Covid stigma drives Andhra Pradesh couple to suicide</h1>
              </div>
              <div className="card__body">
                <p>Times of India</p>
              </div>
              <div className="card__description">
                <p>
                  <span>Vijayawada</span>City &middot; <b>Vijayawada</b>{' '}
                  &middot; Mumbai &middot; Delhi &middot; Bengaluru ... +. News;
                  /; City News; /; <b>Vijayawada</b> News; /; Covid stigma
                  drives Andhra Pradesh couple to suicide&nbsp;...
                </p>
              </div>
            </CardContent>
          </Card>
        </a>
        <a href="https://www.google.com/url?rct=j&sa=t&url=https://timesofindia.indiatimes.com/city/vijayawada/dgp-calls-for-safety-audit-of-all-places-of-worship-in-ap/articleshow/78093883.cms&ct=ga&cd=CAIyHDgzMmMwMDYzODJhZjhkYmE6Y28uaW46ZW46SU4&usg=AFQjCNGkI1h3dV74SKxttmvPn9JOsb9dNA">
          <Card className="alert__card">
            <CardContent className="alert__cardBody">
              <div className="card__title">
                <h1>
                  DGP calls for safety audit of all places of worship in AP
                </h1>
              </div>
              <div className="card__body">
                <p>Times of India</p>
              </div>
              <div className="card__description">
                <p>
                  <span>Vijayawada</span> <b>Vijayawada</b>: After the Antarvedi
                  chariot fire mishap took a political turn, the police
                  department has launched an operation to conduct safety audits
                  of all&nbsp;...
                </p>
              </div>
            </CardContent>
          </Card>
        </a>
        <a href="https://www.google.com/url?rct=j&sa=t&url=https://timesofindia.indiatimes.com/city/vijayawada/help-construction-workers-js-chief/articleshow/78093925.cms&ct=ga&cd=CAIyHDgzMmMwMDYzODJhZjhkYmE6Y28uaW46ZW46SU4&usg=AFQjCNFL9HE5AZjhNpq3k2b2XchXu9bZ1A">
          <Card className="alert__card">
            <CardContent className="alert__cardBody">
              <div className="card__title">
                <h1>Help construction workers: JS chief</h1>
              </div>
              <div className="card__body">
                <p>Times of India</p>
              </div>
              <div className="card__description">
                <p>
                  <span>Vijayawada</span> <b>Vijayawada</b>: Jana Sena chief
                  Pawan Kalyan on Sunday demanded that the state government
                  support the 22 lakh registered construction workers
                  in&nbsp;...
                </p>
              </div>
            </CardContent>
          </Card>
        </a>
        <a href="https://www.google.com/url?rct=j&sa=t&url=https://timesofindia.indiatimes.com/city/vijayawada/veerraju-rejigs-bjp-state-unit/articleshow/78093871.cms&ct=ga&cd=CAIyHDgzMmMwMDYzODJhZjhkYmE6Y28uaW46ZW46SU4&usg=AFQjCNF0jBp1Ek9XEaT22ve6zAb7cWm3RQ">
          <Card className="alert__card">
            <CardContent className="alert__cardBody">
              <div className="card__title">
                <h1>Veerraju rejigs BJP state unit</h1>
              </div>
              <div className="card__body">
                <p>Times of India</p>
              </div>
              <div className="card__description">
                <p>
                  <span>Vijayawada</span> ... Murthy was named as state
                  treasurer and head quarter in-charge, P Srinivas has been
                  appointed as state party office secretary in <b>Vijayawada</b>
                  .
                </p>
              </div>
            </CardContent>
          </Card>
        </a>
      </div>
    )
  }
}

export default Alerts
