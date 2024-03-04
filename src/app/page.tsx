import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import type { InferGetStaticPropsType, GetStaticProps} from "next";

import styles from "./page.module.css";

import {signika} from "../utils/fonts"
import {SPOTIFY_ACCOUNTS_URL} from "../utils/urls"

async function spotifySignIn() {
  const res = await fetch(
    SPOTIFY_ACCOUNTS_URL,{
    method:'POST',
    headers:{
      "Content-Type":"application/x-www-form-urlencoded",
    },
    body:`grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
  });
  const data = res.json();

  return data;
}

export default function Home() {
  return (
    <div>
      <main>
        <nav className={styles.navMain}>
            <h2 className={signika.className}><a href="/">Playlistify</a></h2>
            <ul>
                <li><Link className={signika.className} href="https://github.com/brandonPlaza">My Github</Link></li>
                <li><Link className={signika.className} href="/">Sign In</Link></li>
            </ul>
        </nav>
      </main>
    </div>
  );
}
