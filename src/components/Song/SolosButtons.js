import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import styles from './SolosButtons.module.css';
import { playSolo } from '../../helpers/spotifyReq';


const SolosButtons = ({ activeSolo }) => {
  const accessToken = useSelector(state => state.auth.accessToken);
  const [loopActive, setLoopActive] = useState(false);

  useEffect(() => {
    if (!activeSolo) return;
    if (loopActive) {
      playSolo(activeSolo.startingTime, activeSolo.endingTime, accessToken, true).then();
    } else {
      playSolo(activeSolo.startingTime, activeSolo.endingTime, accessToken, false).then();
    }
  }, [loopActive, activeSolo])

  const loopHandler = () => {
    setLoopActive(prevState => !prevState);
  }

  const startSoloHandler = async () => {
    if (loopActive) {
      await playSolo(activeSolo.startingTime, activeSolo.endingTime, accessToken, true);
    } else {
      await playSolo(activeSolo.startingTime, activeSolo.endingTime, accessToken, false);
    }
    //await pauseSolo(accessToken, soloTime);
  }

  return (
    <div className={`row ${styles.container}`}>
      <div onClick={startSoloHandler} className={`btn btn-dark btn-lg col-sm-12 col-md-6 p-3`}>
        start over!
      </div>
      <div onClick={loopHandler} className={`${loopActive ? styles.active : ''} btn btn-dark btn-lg col-sm-12 col-md-6 p-3`}>
        loop!
      </div>
    </div>
  )
}

export default SolosButtons
