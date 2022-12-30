import { useState, useEffect } from "react";
import SpotifyWebPlayer from "react-spotify-web-playback"

const Player = ({ accessToken, trackUri }) => {
  const [play, setPlay] = useState(false);

  if(!accessToken) return null

  return <SpotifyWebPlayer
    token={accessToken}
    showSaveIcon
    callback={state => {
      if(!state.isPlaying) setPlay(true)
    }}
    play={play}
    uris={trackUri ? [trackUri] : []}
  />
}

export default Player
