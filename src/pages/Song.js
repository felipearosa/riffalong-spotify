import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom";
import Player from "../Player";

const Song = () => {
  const accessToken = useSelector(state => state.auth.accessToken);
  const location = useLocation();
  const track = location.state.track;

  return (
    <Fragment>
      <div><Player accessToken={accessToken} trackUri={track?.uri} /></div>
    </Fragment>
    // <div onClick={testHandler}>{testcode}</div>
  )
}

export default Song
