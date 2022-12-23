import { useDispatch } from "react-redux";
import { getNewToken } from "../helpers/tokenHelpers";
import { authActions } from "../store/auth";

const useCheckLogin = () => {
  const dispatch = useDispatch();

  setTimeout(() => {
    let accessToken = localStorage.getItem('accessToken');
    let refreshToken = localStorage.getItem('refreshToken');
    let expirationDate = localStorage.getItem('expirationDate') * 1;
    let expiresInSec = (expirationDate - Date.now()) / 1000;
    console.log(expiresInSec)
    if (expiresInSec < 0) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('expirationDate');
    } else if (expiresInSec < 1800) {
      getNewToken(refreshToken, dispatch);
    } else if (expiresInSec) {
      dispatch(authActions.setTokensAndExpire({accessToken, refreshToken, expirationDate, isLoggedIn: true}))
    }
  }, 1500);

}

export default useCheckLogin;
