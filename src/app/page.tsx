'use client'

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import styles from "./page.module.css";

import {signika} from "../utils/fonts"

import {spotifyAuthorizationRequest} from "../utils/requests"

export default function Home() {
  return (
    <div>
      <main>
        <nav className={styles.navMain}>
            <h2 className={signika.className}><a href="/">Playlistify</a></h2>
            <ul>
                <li><Link className={signika.className} href="https://github.com/brandonPlaza">My Github</Link></li>
                <li><Link href="/account" className={signika.className}>Sign In</Link></li>
            </ul>
        </nav>
      </main>
    </div>
  );
}
