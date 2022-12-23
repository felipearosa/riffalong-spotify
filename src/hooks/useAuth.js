import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";


const useAuth = (code) => {

  const dispatch = useDispatch()
  const accessToken = useSelector(state => state.auth.accessToken)
  const refreshToken = useSelector(state => state.auth.refreshToken)
  const expiresIn = useSelector(state => state.auth.expiresIn)


  useEffect(() => {
    axios.post("http://localhost:3001/login/", {
      code,
    }).then(res => {
      //setAccessToken(res.data.accessToken);
      dispatch(authActions.setAccessToken({ accessToken: res.data.accessToken }));
      dispatch(authActions.setRefreshToken({ refreshToken: res.data.refreshToken }));
      dispatch(authActions.setExpiresIn({ expiresIn: res.data.expiresIn }));

      const expiresDate = Date.now() + res.data.expiresIn * 1000
      // console.log(Date.now());
      // console.log(expiresDate)

      console.log(typeof (window.localStorage.getItem('expirationDate') * 1))
      window.localStorage.setItem('code', code);
      window.localStorage.setItem('expirationDate', expiresDate);


      window.history.pushState({}, null, "/");
    }).catch((err) => {
      console.log(err)
      window.location = '/'
    })
  }, [code])

  useEffect(() => {
    if (!refreshToken || !expiresIn) return

    const interval = setInterval(() => {
      axios.post("http://localhost:3001/refresh", {
        refreshToken,
      }).then(res => {
        dispatch(authActions.setAccessToken({ accessToken: res.data.accessToken }));
        dispatch(authActions.setExpiresIn({ expiresIn: res.data.expiresIn }));
      }).catch(() => {
        window.location = '/'
      })
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval)
  }, [refreshToken, expiresIn])
}

export default useAuth
