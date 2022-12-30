import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom";
import Player from "../Player";

const Song = () => {
  const location = useLocation();
  const [playingTrack, setPlayingTrack] = useState();
  const accessToken = useSelector(state => state.auth.accessToken);
  const track = location.state.track
  console.log(accessToken)

  useEffect(() => {
    setPlayingTrack(track)
  },[])


  return (
    <Fragment>
      <div><Player accessToken={accessToken} trackUri={playingTrack?.uri} /></div>
    </Fragment>
    // <div onClick={testHandler}>{testcode}</div>
  )
}

export default Song
