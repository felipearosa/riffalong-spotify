import { useState } from "react";
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

import Player from "../components/Player/Player";
import RecordingButtons from "../components/Song/RecordingButtons";
import SolosTable from "../components/Song/SolosTable";

const Song = () => {

  const [isRecording, setIsRecording] = useState(false);
  const accessToken = useSelector(state => state.auth.accessToken);
  const location = useLocation();
  const track = location.state.track;

  const getTimeHandler = () => {
    //something to get time from player
    setIsRecording(!isRecording)
  }

  return (
    <Container>
      <h1 className="my-4">Song by Artist</h1>
      <div className="my-3">
          <Player accessToken={accessToken} trackUri={track?.uri} isRecording={isRecording} />
          <RecordingButtons setIsRecording={getTimeHandler} />
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-6 p-3">
         <SolosTable />
        </div>
        <div className="col-sm-12 col-md-6">
          <div>this is where the tab goes</div>
        </div>

      </div>
    </Container>
  )
}

export default Song


// const Song = () => {
//   const accessToken = useSelector(state => state.auth.accessToken);
//   const location = useLocation();
//   const track = location.state.track;

//   return (
//     <Fragment>
//       <div><Player accessToken={accessToken} trackUri={track?.uri} /></div>
//     </Fragment>
//   )
// }

// export default Song
