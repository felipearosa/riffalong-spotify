import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";
import { useNavigate } from "react-router-dom";


const useAuth = (code) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector(state => state.auth.accessToken)
  const refreshToken = useSelector(state => state.auth.refreshToken)
  const expireDate = useSelector(state => state.auth.expireDate);
  const [expiresIn, setExpiresIn] = useState();


  useEffect(() => {
    axios.post("http://localhost:3001/login/", {
      code,
    }).then(res => {
      const newExpireDate = Date.now() + res.data.expiresIn * 1000;
      window.localStorage.setItem('accessToken', res.data.accessToken);
      window.localStorage.setItem('expirationDate', newExpireDate);

      dispatch(authActions.setAccessToken({ accessToken: res.data.accessToken }));
      dispatch(authActions.setRefreshToken({ refreshToken: res.data.refreshToken }));
      dispatch(authActions.setExpireDate({ expireDate: newExpireDate }));

      //navigate(-1)
      //window.history.pushState({}, null, "/");
    }).catch((err) => {
      console.log(err)
      //window.location = '/'
    })
  }, [code])

  useEffect(() => {
    if (!refreshToken || !expireDate) return

    const interval = setInterval(() => {
      console.log('changed')
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
    }, 1800 * 1000);

    return () => clearInterval(interval)
  }, [refreshToken, expireDate])
}

export default useAuth
