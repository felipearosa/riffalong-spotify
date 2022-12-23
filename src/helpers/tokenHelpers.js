import axios from "axios";
import { authActions } from "../store/auth";

export const logUser = (code, dispatch) => {
  axios.post("http://localhost:3001/login/", {
    code,
  }).then(res => {
    const newExpireDate = Date.now() + res.data.expiresIn * 1000;
    window.localStorage.setItem('accessToken', res.data.accessToken);
    window.localStorage.setItem('refreshToken', res.data.refreshToken);
    window.localStorage.setItem('expirationDate', newExpireDate);
    console.log(res.data.expiresIn * 1000)

    dispatch(authActions.setAccessToken({ accessToken: res.data.accessToken }));
    dispatch(authActions.setRefreshToken({ refreshToken: res.data.refreshToken }));
    dispatch(authActions.setExpireDate({ expireDate: newExpireDate }));

    //navigate(-1)
    //window.history.pushState({}, null, "/");
  }).catch((err) => {
    console.log('ERROR: ', err)
    //window.location = '/'
  })
}

export const getNewToken = (refreshToken, dispatch) => {
  axios.post("http://localhost:3001/refresh", {
    refreshToken,
  }).then(res => {
    const newExpireDate = Date.now() + res.data.expiresIn * 1000;
    window.localStorage.setItem('accessToken', res.data.accessToken);
    window.localStorage.setItem('expirationDate', newExpireDate);

    dispatch(authActions.setAccessToken({ accessToken: res.data.accessToken }));
    dispatch(authActions.setExpireDate({ expireDate: newExpireDate }));
  }).catch(() => {
    window.location = '/'
  })
}
