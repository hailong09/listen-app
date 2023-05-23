require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const SpotifyWebApi = require('spotify-web-api-node')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.post("/refresh", (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
      redirectUri: `${process.env.URL}`,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken,
    })
  
    spotifyApi
      .refreshAccessToken()
      .then(data => {
        res.json({
          accessToken: data.body.accessToken,
          expiresIn: data.body.expiresIn,
        })
      })
      .catch(err => {
        console.log(err)
        res.sendStatus(400)
      })
  })

  app.post("/login", (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
      redirectUri: `${process.env.URL}`,
      clientId: "aaecb28220b14865b52744934be57ccf",
      clientSecret: "8afca81083254015bffc4b1b74812b0a",
    })
  
    spotifyApi
      .authorizationCodeGrant(code)
      .then(data => {
        res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
        })
      })
      .catch(err => {
        res.sendStatus(400)
      })
  })


  

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Running on port ${PORT} ${process.env.URL}`)
})