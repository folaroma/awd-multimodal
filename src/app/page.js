'use client'
import styles from '../styles/globals.css'
import Image from 'next/image'
import Home from './Home'
import Preloader from './Preloader/'
import Footer from "./Footer/"
import Header from "./Header/"

export default function App() {
  return (
    <div className={styles}>
      <Preloader />
      <Header />
      <Home />
      <Footer/>
    </div>
  )
}
