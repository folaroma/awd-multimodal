import styles from '../../styles/preloader.css'
import { useEffect, useState } from 'react'

export default function Preloader() {
  const [show, setShow] = useState(true);
  useEffect(()=>{
    setTimeout(function() {
      setShow(false)
         }, 3000);
       },
   [])
  return (
    <>
    { show ?
      <div className="preloader">
        <div className="preloader-text">
          AWD
        </div>
      </div>
      : <></>
    }
    </>
  )
}