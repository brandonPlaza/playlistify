"use server"

import { redirect } from 'next/navigation'
import { stringify } from "querystring";
import { SPOTIFY_AUTHORIZE_URL, REDIRECT_URI_PROD, REDIRECT_URI_DEV } from "./urls";
import { cookies } from 'next/headers'

export async function spotifyAuthorizationRequest(){

    var state = (Math.random() * 10).toString(36).replace('.', '');
    var scope = 'user-read-private user-read-email playlist-read-private playlist-modify-private playlist-modify-public user-library-read';

    const cookieStore = cookies();
    cookieStore.set('state', state)

    redirect(SPOTIFY_AUTHORIZE_URL +
    stringify({
      response_type: 'code',
      client_id: process.env.CLIENT_ID,
      scope: scope,
      redirect_uri: REDIRECT_URI_DEV,
      state: state
    }));
}
