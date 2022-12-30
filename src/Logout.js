import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { authActions } from "./store/auth";

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
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <a onClick={logoutHandler} className="btn btn-success btn-lg">Logout</a>
    </Container>
  )
}

export default Logout
