import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

import { faHome} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const Navbar = () => {
  return (
    <div className='wrapper'>
      <div className='sidebar'>
        <img src="./images/img.jpg" alt="" />

        <ul>
          <li>
            <div className='text_icone'>
              <FontAwesomeIcon icon={faHome} className='fa'/>
              <Link to='/' className='text'>Home</Link>
            </div>
           
            
          </li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
        </ul>
      </div>
      

    </div>
  )
}

export default Navbar