import { SPOTIFY_AUTHORIZE_URL, REDIRECT_URI_PROD, REDIRECT_URI_DEV } from "./urls";

async function spotifyAuthorization(){
    var state = generateRandomString(16)
    
    redirect(SPOTIFY_AUTHORIZE_URL +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.CLIENT_ID,
      scope: "playlist-read-private playlist-modify-private playlist-modify-public user-library-read",
      redirect_uri: REDIRECT_URI_DEV,
      state: state
    }));
}