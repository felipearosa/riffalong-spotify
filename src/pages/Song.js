import { Fragment, useState } from "react";
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom";
import Player from "../components/Player/Player";
import { Container } from "react-bootstrap";

const Song = () => {

  const [isRecording, setIsRecording] = useState(false);
  const accessToken = useSelector(state => state.auth.accessToken);
  const location = useLocation();
  const track = location.state.track;

  const getTimeHandler = () => {
    //something to get time from player
  }

  return (
    <Fragment>
      <Container>

        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div>
              <Player accessToken={accessToken} trackUri={track?.uri} isRecording={isRecording} />
            </div>
            <div className="btn btn-success btn-lg" onClick={getTimeHandler}>
              Test!
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div>this is where the table goes</div>
          </div>

        </div>
      </Container>

    </Fragment>
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
