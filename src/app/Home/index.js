import styles from "../../styles/home.css"

const Home = () => {
  return (
    <>
    <div className="description-container">
      <span>A mixtape from my paper for COMM2304, Communication and Gender <br/> <br/> in a Multimodal form:</span>
    </div>
    <div className="songs-container">
      <div className="tyler"></div>
      <div className="SZA"></div>
      <div className="frank"></div>
      <div className="CSH"></div>
    </div>
    <div className="mixtape-container">
      <iframe className="mixtape" style={{ borderRadius : "0 0 12px 12px" }} src="https://open.spotify.com/embed/playlist/2yHn6GPB7rLGFTMscpwVPs?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    </>
  )
}

export default Home;