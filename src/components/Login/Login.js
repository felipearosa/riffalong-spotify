import React from "react";

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=7ea15b8610d0483f946cdf7ea8615253&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

const Login = () => {
  return(
    <div className="d-flex justify-content-end align-items-center" style={{ minHeight: '100vh'}}>
      <a href={AUTH_URL} className="btn btn-success btn-lg">Login With Spotify</a>
    </div>
  )
}

export default Login
