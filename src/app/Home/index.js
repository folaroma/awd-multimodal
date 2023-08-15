import styles from "../../styles/home.css";
import tylerImg from "../../../public/images/tyler.webp";
import SZAImg from "../../../public/images/sza.jpeg";
import frankImg from "../../../public/images/frank.jpeg";
import CSHImg from "../../../public/images/csh.jpeg";
import Image from 'next/image'

const Home = () => {
  return (
    <>
    <div className="description-container">
      <span>A mixtape from my paper for COMM2304, Communication and Gender <br/> <br/> in a Multimodal form:</span>
    </div>

    <div className="mixtape-container">
      <iframe className="mixtape" style={{ borderRadius : "0 0 12px 12px" }} src="https://open.spotify.com/embed/playlist/2yHn6GPB7rLGFTMscpwVPs?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>

    <div className="songs-container">
      <a><div className="tyler"><Image src={tylerImg} width={50} height={50}/></div></a>
      <div className="SZA"><Image src={SZAImg} width={50} height={50}/></div>
      <div className="frank"><Image src={frankImg} width={50} height={50}/></div>
      <div className="CSH"><Image src={CSHImg} width={50} height={50}/></div>
    </div>
    </>
  )
}

export default Home;