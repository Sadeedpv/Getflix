import React from 'react'
import './footer.css'
import { FaGithub, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
        <footer>
            <p className="nowrap">Made with &nbsp;<FaHeart style={{color: "red"}} /> &nbsp;by <strong>Sadeed pv</strong></p>
            <p className="nowrap">Follow me on &nbsp;<a href='https://github.com/Sadeedpv' className='href'><FaGithub /></a></p>
        </footer>
    </div>
  )
}

export default Footer