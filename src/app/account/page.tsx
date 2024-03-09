'use client'
import { useSearchParams } from 'next/navigation'
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { Suspense, useEffect } from 'react'

import styles from "./page.module.css";

import {signika} from "../../utils/fonts"
import Loading from './loading';

function LoggedIn(){
  return(
    <div>
      <main>
        <nav className={styles.navMain}>
          <h2 className={signika.className}><a href="/">Playlistify</a></h2>
          <ul>
              <li><Link className={signika.className} href="https://github.com/brandonPlaza">My Github</Link></li>
              <li><button className={signika.className}>Log Out</button></li>
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
