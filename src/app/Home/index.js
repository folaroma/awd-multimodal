import styles from "../../styles/home.css";
import tylerImg from "../../../public/images/tyler.webp";
import SZAImg from "../../../public/images/sza.jpeg";
import frankImg from "../../../public/images/frank.jpeg";
import CSHImg from "../../../public/images/csh.jpeg";
import Image from 'next/image'

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <>
    <div className="container">

      <div className="mixtape-container">
        <iframe className="mixtape" style={{ borderRadius : "0 0 12px 12px" }} src="https://open.spotify.com/embed/playlist/2yHn6GPB7rLGFTMscpwVPs?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>

      <div className="description-container">
        <span>A mixtape from my paper for COMM2304, Communication and Gender <br/> <br/> in a Multimodal form</span>
      </div>

      <NavLink to="/purpose"><div className="right-page-icon"><FontAwesomeIcon icon={faChevronRight} size="2x"/></div></NavLink>
    </div>
    </>
  )
}

export default Home;