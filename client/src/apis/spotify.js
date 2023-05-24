import SpotifyWebApi from 'spotify-web-api-js'
const authUrl= "https://accounts.spotify.com/authorize"

export const spotify = new SpotifyWebApi()
const scopes = [
    "user-read-private",
    "user-top-read",
    "user-read-playback-state",
    "user-read-recently-played",
    "user-read-currently-playing",
    "user-modify-playback-state",
    "user-read-playback-position",
    "user-read-email",
    "playlist-read-collaborative",
    "streaming"

]


export const loginUrl = `${authUrl}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&scope=${scopes.join("%20")}&response_type=code`



