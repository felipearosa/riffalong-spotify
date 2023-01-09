import React from "react";
import { useDispatch } from "react-redux";

import { authActions } from "../../store/auth";

const Logout = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.setTokensAndExpire({
      accessToken: null,
      refreshToken: null,
      expireDate: null,
      isLoggedIn: false
    }))
    console.log('removing...')
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('expireDate');
    console.log('removed')
  };

  return (
    <div className="d-flex justify-content-end align-items-center" style={{ minHeight: '100vh' }}>
      <a onClick={logoutHandler} className="btn btn-success btn-lg">Logout</a>
    </div>
  )
}

export default Logout
