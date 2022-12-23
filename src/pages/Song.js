import { useDispatch, useSelector } from "react-redux"
import { authActions } from "../store/auth";

const Song = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const accessToken = useSelector(state => state.auth.accessToken)
  console.log('yoooo', accessToken)

  return (
    <h2>{accessToken}</h2>

    // <div onClick={testHandler}>{testcode}</div>
  )
}

export default Song
