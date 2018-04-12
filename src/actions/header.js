import {HEADER_SIDER_TOOGGLE, HEADER_LOGOUT} from './actions-type'

export function toggleSider(collapsed) {
  return {
    type: HEADER_SIDER_TOOGGLE,
    payload: {
      collapsed: collapsed,
    }
  }
}

export function logout(isLogout) {
  return {
    type: HEADER_LOGOUT,
    payload: {
      isLogout: isLogout,
    }
  }
}