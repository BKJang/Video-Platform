import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as AuthAPI from '../../lib/api/auth';
import { Map } from 'immutable';

const CHANGE_INPUT = 'auth/CHANGE_INPUT'; //input 값 변경
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM'; //form 초기화
const LOCAL_REGISTER = 'auth/LOCAL_REGISTER'; // 이메일 가입
const LOCAL_LOGIN = 'auth/LOCAL_LOGIN'; // 이메일 로그인

const SET_ERROR = 'auth/SET_ERROR'; // 오류 설정

export const changeInput = createAction(CHANGE_INPUT); // {form, name, value}
export const initializeForm = createAction(INITIALIZE_FORM); // form
export const localRegister = createAction(LOCAL_REGISTER, AuthAPI.localRegister); // { email, password }
export const localLogin = createAction(LOCAL_LOGIN, AuthAPI.localLogin); // { email, password }

export const setError = createAction(SET_ERROR); // { form, message }

// 초기값 설정
const initialState = Map({
  register: Map({
    form: Map({
      custEmail: '',
      custPasswd: '',
      custPasswdConfirm: '',
    }),
    error: null
  }),
  login: Map({
    form: Map({
      custNo: null,
      custEmail: '',
      custPasswd: '',
    }),
    error: null
  }),

  // }),
  // twoFactor: Map({
  //     form: Map({
  //         validationCode: ''
  //     })
  // }),
  result: Map({})
});

export default handleActions({
  [CHANGE_INPUT]: (state, action) => {
    const { form, name, value } = action.payload;
    return state.setIn([form, 'form', name], value);
  },
  [INITIALIZE_FORM]: (state, action) => {
    const initialForm = initialState.get(action.payload);
    return state.set(action.payload, initialForm);
  },
  [SET_ERROR]: (state, action) => {
    const { form, message } = action.payload;
    return state.setIn([form, 'error'], message);
  },
  ...pender({
    type: LOCAL_LOGIN,
    onSuccess: (state, action) => state.set('result', Map(action.payload.data))
  }),
  ...pender({
    type: LOCAL_REGISTER,
    onSuccess: (state, action) => state.set('result', Map(action.payload.data))
  }),

}, initialState);