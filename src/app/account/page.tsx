'use client'
import { useSearchParams } from 'next/navigation'
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { Suspense, useEffect } from 'react'

import styles from "./page.module.css";

import {signika} from "../../utils/fonts"
import Loading from './loading';

import {spotifyAuthorizationRequest} from "../../utils/requests"

function requestToken(){
  fetch('https://accounts.spotify.com/api/token', {
    method:"POST",
    headers:{
      'content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64'))
    },
    body:{
      code: code,
      redirect_uri: "http://localhost:8080/callback",
      grant_type: 'authorization_code'
    }
  }).then(response =>{
    console.log(response.json)
  });
}

function LoggedIn(){
  useEffect(()=>{
    requestToken()
  }, [])
  return(
    <div>
      <main>
        <nav className={styles.navMain}>
          <h2 className={signika.className}><a href="/">Playlistify</a></h2>
          <ul>
              <li><Link className={signika.className} href="https://github.com/brandonPlaza">My Github</Link></li>
              <li><Link href="/" className={signika.className}>Log Out</Link></li>
          </ul>
        </nav>
      </main>
    </div>
  )
}


export default function AccountPage() {
  return (
    <section>
      <Suspense fallback={<Loading/>}>
        <LoggedIn/>
      </Suspense>
    </section>
  );
}
