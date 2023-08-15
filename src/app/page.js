'use client'
import styles from '../styles/globals.css';
import Image from 'next/image';
import Home from './Home';
import Preloader from './Preloader/';
import Footer from "./Footer/";
import Header from "./Header/";

import Purpose from "./Purpose/"
import Tyler from "./Artists/Tyler/";
import SZA from "./Artists/SZA/";
import Frank from "./Artists/Frank/";
import CSH from "./Artists/CSH/";

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



export default function App() {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  return isClient ? (
    <div id="root">
      <Router>
        <Preloader />
        <Header />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/purpose" element={<Purpose/>} />
            <Route path="/tyler" element={<Tyler/>} />
            <Route path="/sza" element={<SZA/>} />
            <Route path="/frank" element={<Frank/>} />
            <Route path="/csh" element={<CSH/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  ) : null;
}
