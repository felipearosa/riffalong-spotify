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

export const playSolo = async (startTime, endTime, accessToken) => {
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

  setTimeout(async () => {
    await axios({
      method: 'put',
      url: 'https://api.spotify.com/v1/me/player/pause',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });
  }, endTime - startTime);
}
