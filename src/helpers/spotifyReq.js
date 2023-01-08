import axios from "axios";

export const getSongTime = async accessToken => {
  const response = await axios({
    method: 'get',
    url: 'https://api.spotify.com/v1/me/player',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  })

  return response.data.progress_ms
}

let timeout;
let interval;

export const playSolo = async (startingTime, endingTime, accessToken, loopActive) => {
  if (timeout) clearTimeout(timeout)
  if (interval) clearInterval(interval)

  await seekPlayReq(startingTime, accessToken);

  if (loopActive) {
    interval = setInterval(async () => {
      await seekPlayReq(startingTime, accessToken);
      console.log(endingTime - startingTime)
    }, (endingTime + 1000) - startingTime);
  } else {
    timeout = setTimeout(async () => {
      await axios({
        method: 'put',
        url: 'https://api.spotify.com/v1/me/player/pause',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      });
    }, endingTime - startingTime);

  }
}

export const pauseSolo = async (accessToken, time) => {
  if (timeout) {
    clearTimeout(timeout)
  }

  timeout = setTimeout(async () => {
    await pauseReq(accessToken)
  }, time);
}


// SPOTIFY REQ'S
const seekPlayReq = async (startTime, accessToken) => {
  await axios({
    method: 'put',
    url: `https://api.spotify.com/v1/me/player/seek?position_ms=${startTime}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  });

  await axios({
    method: 'put',
    url: 'https://api.spotify.com/v1/me/player/play',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  });
}

const pauseReq = async accessToken => {
  await axios({
    method: 'put',
    url: 'https://api.spotify.com/v1/me/player/pause',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  });
}
