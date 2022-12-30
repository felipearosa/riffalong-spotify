import { useEffect } from "react";
import { useSelector } from "react-redux"

const WebPlayBack = () => {
  const accessToken = useSelector(state => state.auth.accessToken);

  // useEffect(() => {
  //   let player = new Spotify.Player({
  //     name: 'Carly Rae Jepsen Player',
  //     getOAuthToken: callback => {
  //       // Run code to get a fresh access token
  //       callback(accessToken);
  //     },
  //     volume: 0.5
  //   });

  // }, [])

  let current_track = false

  if(!current_track) return

  return (
    <>
        <div className="container">
            <div className="main-wrapper">
                <img src={current_track.album.images[0].url}
                     className="now-playing__cover" alt="" />

                <div className="now-playing__side">
                    <div className="now-playing__name">{
                                  current_track.name
                                  }</div>

                    <div className="now-playing__artist">{
                                  current_track.artists[0].name
                                  }</div>
                </div>
            </div>
        </div>
     </>
)
}

export default WebPlayBack
