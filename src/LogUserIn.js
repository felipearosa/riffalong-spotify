import { Fragment } from "react";
import useAuth from "./hooks/useAuth";

const LogUserIn = props => {
  useAuth(props.code);

  return (
    <Fragment>{props.children}</Fragment>
  )
}

export default LogUserIn
