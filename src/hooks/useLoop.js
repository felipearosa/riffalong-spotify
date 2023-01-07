import { useEffect } from "react"
import { useSelector } from 'react-redux';

import { playSolo, pauseSolo } from '../helpers/spotifyReq';

const useLoop = (activeSolo, loopActive) => {
  const accessToken = useSelector(state => state.auth.accessToken);

  useEffect(() => {
    if (!activeSolo) return;
    let interval;
    let timeout;

    playSolo(activeSolo.startingTime, accessToken).then();

    if (loopActive) {
      interval = setInterval(async () => {
        await playSolo(activeSolo.startingTime, accessToken);
      }, activeSolo.endingTime - activeSolo.startingTime);
    } else {
      timeout = setTimeout(async () => {
        await pauseSolo(accessToken)
      }, activeSolo.endingTime - activeSolo.startingTime);
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeSolo, loopActive])
}

export default useLoop;
