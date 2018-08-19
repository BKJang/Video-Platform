import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Alert, Button } from 'react-bootstrap';
import PageTemplate from 'components/PageTemplate/PageTemplate';
import axios from 'axios';
import { isEmpty, isLength, isEmail } from 'validator';
import * as AuthActions from '../redux/modules/auth';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isProcess: false,
    };
  }

  handleChange = (e) => {
    const { AuthActions } = this.props;
    const { name, value } = e.target;
    AuthActions.changeInput({
      name,
      value,
      form: 'login'
    });
  };

  render() {
    const { custEmail, custPasswd } = this.props.form.toJS(); // form 에서 email 과 password 값을 읽어옴
    const { handleChange } = this;
    return (
      <PageTemplate>
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">
              <span className="login-form-title">
                Login
      </span>
              <div className="wrap-input100">
                <input className="input100 input-login has-val"
                  type="text"
                  name="custEmail"
                  value={custEmail}
                  onChange={handleChange}
                  autoFocus
                />
                <span className="focus-input100" data-placeholder="Email" ></span>
              </div>
              <div className="wrap-input100">
                <input className="input100 input-login has-val" type="password" name="password" />
                <span className="focus-input100" data-placeholder="Password"></span>
              </div>
              <div className="container-login-form-btn">
                <div className="wrap-login-form-btn">
                  <div className="login-form-bgbtn"></div>
                  <button className="login-form-btn button-login">
                    Login
          </button>
                </div>
              </div>

              <div className="login-bottom-text">
                <span className="login-bottom-span">
                  Don’t have an account?
        </span>
                <a href="#">
                  Sign Up
        </a>
              </div>
            </form>
          </div>
        </div>
      </PageTemplate>
    );
  }
}

export default connect(
  (state) => ({
    form: state.auth.getIn(['login', 'form']),
    error: state.auth.getIn(['login', 'error']),
    result: state.auth.get('result')
  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(AuthActions, dispatch),
  })
)(Login);