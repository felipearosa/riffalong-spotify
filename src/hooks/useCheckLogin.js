import { useDispatch } from "react-redux";
import { getNewToken } from "../helpers/tokenHelpers";

const useCheckLogin = () => {
  const dispatch = useDispatch();

  let accessToken = localStorage.getItem('accessToken');
  let refreshToken = localStorage.getItem('refreshToken');
  let expiresInSec;
  setTimeout(() => {
    let expirationDate = localStorage.getItem('expirationDate') * 1;
    expiresInSec = (expirationDate - Date.now()) / 1000;
    console.log(expiresInSec)
    if (expiresInSec < 0) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('expirationDate');
    } else if (expiresInSec < 1800) {
      getNewToken(refreshToken, dispatch);
    }
  }, 1500);


}

export default useCheckLogin;
