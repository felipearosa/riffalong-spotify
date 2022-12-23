import { useSelector } from "react-redux";
import useAuth from "./hooks/useAuth";

const LogUserIn = ({ code }) => {
  useAuth(code);

  return (
    <div>user logged</div>
  )
}

export default LogUserIn
