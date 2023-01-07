import { useEffect } from "react"
import { useSelector } from 'react-redux';

import { playSolo, pauseSolo } from '../helpers/spotifyReq';

const useLoop = (activeSolo, loopActive) => {
  const accessToken = useSelector(state => state.auth.accessToken);

  useEffect(() => {
    if (!activeSolo) return;
    let interval;
    const soloTime = activeSolo.endingTime - activeSolo.startingTime

    playSolo(activeSolo.startingTime, accessToken).then();

    if (loopActive) {
      interval = setInterval(async () => {
        await playSolo(activeSolo.startingTime, accessToken);
      }, activeSolo.endingTime - activeSolo.startingTime);
    } else {
      pauseSolo(accessToken, soloTime).then()
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeSolo, loopActive])
}

export default useLoop;
