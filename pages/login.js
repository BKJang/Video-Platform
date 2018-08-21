import React, { Component } from 'react';
import { Error } from '../components/Common';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthActions from '../redux/modules/auth';
import PageTemplate from '../components/PageTemplate/PageTemplate';
import { isEmpty, isLength } from 'validator';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      letterLength: 55,
      open: false,
      resultMessage: "",
      isProcess: false,
    };
  }

  componentWillUnmount() {
    const { AuthActions } = this.props;
    AuthActions.initializeForm('login');
  }

  componentDidMount() {
    this.componentWillUnmount();
  }

  handleChange = (e) => {
    const { AuthActions } = this.props;
    const { name, value } = e.target;
    this.setError(null);
    AuthActions.changeInput({
      name,
      value,
      form: 'login'
    });

  };

  setError = (message) => {
    const { AuthActions } = this.props;

    AuthActions.setError({
      form: 'login',
      message
    });

    return false;
  };

  validate = {
    custEmail: (value) => {
      if (isEmpty(value)) {
        this.setError('login_valid_email_empty');
        return false;
      }
      // if (!isEmail(value)) {
      //     this.setError('login_valid_email_format');
      //     return false;
      // }
      if (!isLength(value, { max: this.state.letterLength })) {
        this.setError('login_valid_common_length');
        return false;
      }
      this.setError(null);
      return true;
    },
    custPasswd: (value) => {
      if (isEmpty(value)) {
        this.setError('login_valid_password_empty');
        return false;
      }
      if (!isLength(value, { max: this.state.letterLength })) {
        this.setError('login_valid_common_length');
        return false;
      }
      // if (value !== '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$') {
      //     this.setError('비밀번호는 하나 이상의 숫자 및 대문자와 특수 문자 모두를 포함해야합니다. ');
      //     return false;
      // }
      this.setError(null); // 이메일과 아이디는 에러 null 처리를 중복확인 부분에서 하게 됩니다
      return true;
    }
  };

  handleLogin = () => {
    const { form, AuthActions, error } = this.props;
    const { custEmail, custPasswd } = form.toJS();
    const { validate } = this;

    if (this.state.isProcess) return;

    if (error) return; // 현재 에러가 있는 상태라면 진행하지 않음
    if (!validate['custEmail'](custEmail)
      || !validate['custPasswd'](custPasswd)) {
      // 하나라도 실패하면 진행하지 않음
      return;
    }
    try {
      this.setState({ isProcess: true });
      // await AuthActions.localLogin({
      //   custEmail, custPasswd
      // });

      const loggedInfo = this.props.result.toJS();

      this.setState({ isProcess: false });


    } catch (e) {
      this.setState({ isProcess: false, open: true, resultMessage: 'login_valid_common_error' });
    }
  };

  render() {
    const { custEmail, custPasswd } = this.props.form.toJS(); // form 에서 email 과 password 값을 읽어옴
    const { handleChange, handleLogin } = this;
    const { error } = this.props;

    return (
      <PageTemplate>
        <div className="container-login">
          <div className="wrap-login">
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
                <input className="input100 input-login has-val"
                  type="password"
                  name="custPasswd"
                  value={custPasswd}
                  onChange={handleChange}
                />
                <span className="focus-input100" data-placeholder="Password"></span>
              </div>
              {
                error === null ? null : <Error>{error}</Error>
              }
              <div className="container-login-form-btn">
                <div className="wrap-login-form-btn">
                  <div className="login-form-bgbtn"></div>
                  <button className="login-form-btn button-login" onClick={handleLogin}>
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