import { useSelector } from "react-redux";
import useAuth from "./hooks/useAuth";

const LogUserIn = () => {
  const code = useSelector(state => state.auth.code);
  useAuth(code);
}

export default LogUserIn
