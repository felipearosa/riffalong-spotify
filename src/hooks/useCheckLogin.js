import { useDispatch, useSelector } from "react-redux";
import { getNewToken } from "../helpers/tokenHelpers";
import { authActions } from "../store/auth";

const useCheckLogin = () => {
  const dispatch = useDispatch();


  setTimeout(() => {
    let accessToken = localStorage.getItem('accessToken');
    let refreshToken = localStorage.getItem('refreshToken');
    let expireDate = localStorage.getItem('expireDate') * 1;
    if(!expireDate) return

    let expiresInSec = (expireDate - Date.now()) / 1000;

    if (expiresInSec < 0) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('expireDate');
    } else if (expiresInSec < 1800) {
      getNewToken(refreshToken, dispatch);
    } else if (expiresInSec < 3600) {
      dispatch(authActions.setTokensAndExpire({ accessToken, refreshToken, expireDate, isLoggedIn: true }))
    }
  }, 50);

}

export default useCheckLogin;
