import styles from "../../styles/purpose.css"

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Purpose = () => {
  return (
    <>
    <NavLink to="/"><div className="left-page-icon"><FontAwesomeIcon icon={faChevronLeft} size="2x"/></div></NavLink>
    <div className="purpose">
        <div className="assignment">
          The purpose of this assignment was to create a "mixtape" of four songs, with each song somehow being connected to something I learned in COMM2304.
          It was to give experience in locating and intepreting scholarly peer-reviewed sources, and to give us a chance to reflect over what we had learned in class.
          For each of the songs, we were given the task to connect them individually to a certain topic covered over the course of Communication and Gender.
          <br/>
          <br/>
          With this, I decided to turn this represent this research and writing multimodally in the form of a website.
          In terms of technology, this website is powered by NextJS + React.
        </div>
    </div>
    <NavLink to="/tyler"><div className="right-page-icon"><FontAwesomeIcon icon={faChevronRight} size="2x"/></div></NavLink>
    </>
  )
}

export default Purpose;