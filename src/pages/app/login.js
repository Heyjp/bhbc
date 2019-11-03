import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../../services/auth"

class Login extends React.Component {
  state = {
    password: `1940`,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/`)
    }

    return (
      <div className="container">
          <div className="columns form-wrap is-centered is-vcentered">
            <div className="column is-two-fifths">
              <div className="box ">    
                <div className="field ">
                  <label className="label">Member Area</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="Enter Password" name="password" onChange={this.handleUpdate} />
                  </div>
                  <p className="help">Enter member password</p>
                </div>
                <button className="button is-primary is-fullwidth is-small"
                  onClick={event => {
                    this.handleSubmit(event)
                    navigate(`/app/minutes`)
                  }}
                >Login</button>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Login