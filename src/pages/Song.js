import { useState } from "react";
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

import Player from "../components/Player/Player";
import RecordingButtons from "../components/Song/RecordingButtons";
import SolosBox from "../components/Song/SolosBox";

const Song = () => {
  const [soloTimes, setSoloTimes] = useState([]);
  const accessToken = useSelector(state => state.auth.accessToken);
  const location = useLocation();
  const track = location.state.track;

  const getTimeHandler = (startingTime, endingTime) => {
    setSoloTimes(prevState => {
      return [...prevState, {startingTime, endingTime}]
    });
  }

  return (
    <Container>
      <h1 className="my-4">Song by Artist</h1>
      <div className="my-3">
        <Player accessToken={accessToken} trackUri={track?.uri} />
        <RecordingButtons setSoloTime={getTimeHandler} />
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-6 p-3">
          <SolosBox soloTimes={soloTimes} />
        </div>
        <div className="col-sm-12 col-md-6">
          <div>this is where the tab goes</div>
        </div>

      </div>
    </Container>
  )
}

export default Song
