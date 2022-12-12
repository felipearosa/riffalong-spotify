const express = require('express');
const dotenv = require('dotenv');
const SpotifyWebApi = require('spotify-web-api-node');

dotenv.config({path: './../config.env'})

const app = express();
app.use(express.json());


app.post('/login', (req, res) => {
  const code = req.body.code

  const sportifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: '7ea15b8610d0483f946cdf7ea8615253',
    clientSecret: process.env.CLIENT_SECRET
  })

  sportifyApi.authorizationCodeGrant(code).then(data => {
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in,

    }).catch(() => {
      res.sendStatus(400)
    })
  })
});

app.listen(3001, () => {
  console.log('listening on port 3001')
})
