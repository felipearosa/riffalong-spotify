import { useDispatch, useSelector } from "react-redux"
import { authActions } from "../store/auth";

const Song = () => {
  const dispatch = useDispatch();
  const testcode = useSelector(state => state.auth.testcode)

  const testHandler = () => {
    dispatch(authActions.testFunc())
  }

  return (

    <div onClick={testHandler}>{testcode}</div>
  )
}

export default Song
