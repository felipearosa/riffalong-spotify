import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SpotifyWebPlayer from "react-spotify-web-playback"


const Player = ({ accessToken, trackUri, isRecording }) => {
  const [play, setPlay] = useState(false);
  const [riffTime, setRiffTime] = useState();

  const stateHandler = state => {
    if (!state.isPlaying) setPlay(true)
  }

  useEffect(() => {

  }, [isRecording])


  if (!accessToken) return null

  return <SpotifyWebPlayer
    token={accessToken}
    showSaveIcon
    callback={stateHandler}
    play={play}
    uris={trackUri ? [trackUri] : []}
  />
}

export default Player
