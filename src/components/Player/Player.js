import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SpotifyWebPlayer from "react-spotify-web-playback"


const Player = ({ accessToken, trackUri, isRecording }) => {
  const [play, setPlay] = useState(false);
  const [riffTime, setRiffTime] = useState();

  const stateHandler = state => {
    console.log(state)
    if (!state.isPlaying) setPlay(true)
  }

  useEffect(() => {
    axios({
      method: 'get',
      url:'https://api.spotify.com/v1/me/player',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    }).then(response => {
      console.log(response.data.progress_ms)
    }).catch(err => {
      console.log('ERRRR', err.message)
    })

    axios({
      method: 'put',
      url: 'https://api.spotify.com/v1/me/player/seek?position_ms=100000',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    }).catch(err => {
      console.log('ERRRR', err.message)
    })
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
