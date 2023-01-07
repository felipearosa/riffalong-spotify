import { useSelector } from 'react-redux';
import { useState } from 'react';

import styles from './SolosButtons.module.css';
import { playSolo, pauseSolo } from '../../helpers/spotifyReq';
import useLoop from '../../hooks/useLoop';

let timeOut;

const SolosButtons = ({ activeSolo }) => {
  const accessToken = useSelector(state => state.auth.accessToken);
  const [loopActive, setLoopActive] = useState(false);

  useLoop(activeSolo, loopActive)

  const loopHandler = () => {
    setLoopActive(prevState => !prevState);
  }

  const startSolo = async () => {
    await playSolo(activeSolo.startingTime, accessToken);
    if (timeOut) {
      clearTimeout(timeOut)
    }
    timeOut = setTimeout(async () => {
      await pauseSolo(accessToken);
    }, activeSolo.endingTime - activeSolo.startingTime);

  }

  return (
    <div className={`row ${styles.container}`}>
      <div onClick={startSolo} className={`btn btn-dark btn-lg col-sm-12 col-md-6 p-3`}>
        start over!
      </div>
      <div onClick={loopHandler} className={`${loopActive ? styles.active : ''} btn btn-dark btn-lg col-sm-12 col-md-6 p-3`}>
        loop!
      </div>
    </div>
  )
}

export default SolosButtons
