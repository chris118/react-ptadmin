import {HEADER_SIDER_TOOGGLE, HEADER_LOGOUT} from '../actions/actions-type'

const initialState = {
  collapsed: false,
  isLogout: false,
};

export default function header(state = initialState, action = {}) {
  // console.log(action)
  switch (action.type){
    case HEADER_SIDER_TOOGGLE:
      return Object.assign({}, state, { collapsed: action.payload.collapsed });
    case HEADER_LOGOUT:
      return Object.assign({}, state, {isLogout: action.payload.isLogout});
    default:
      return state;
  }
}