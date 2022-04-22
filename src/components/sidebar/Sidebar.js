import React from 'react'
import './_sidebar.scss';
import {
  MdSubscriptions,
  MdThumbUp,
  MdHistory,
  MdHome,
  MdDownload,
  MdLibraryBooks

} from "react-icons/md"
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className=' sidebar'>
      <li >
      <Link to={'/'} className="btn btn_success" style={{ textDecoration: 'none',color:'#fff'  }}>
        <MdHome size={23}/>
        <span>Home</span></Link>
      </li>
      <li>
        <Link to={''} className="btn btn_success" style={{ textDecoration: 'none',color:'#fff'  }}>
        <MdThumbUp size={23}/>
        <span>LikedVideo</span></Link>
      </li>
      <li>
        <Link to={'/feed/subscription'} className="btn btn_success" style={{ textDecoration: 'none',color:'#fff'  }}>
        <MdSubscriptions size={23}/>
        <span>Subscription</span></Link>
      </li>
      <li>
        <Link to={''} className="btn btn_success" style={{ textDecoration: 'none' ,color:'#fff' }}>
        <MdHistory size={24}/>
        <span>History</span></Link>
      </li>
      <li>
        <Link to={''} className="btn btn_success" style={{ textDecoration: 'none',color:'#fff' }}>
        <MdLibraryBooks size={23}/>
        <span>Library</span></Link>
      </li>
      <li>
        <Link to={''} className="btn btn_success" style={{ textDecoration: 'none' ,color:'#fff' }}>
        <MdDownload size={23}/>
        <span>Download</span></Link>
      </li>
    </nav>
  )
}

export default Sidebar