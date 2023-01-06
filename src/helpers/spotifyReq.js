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
