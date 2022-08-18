import React, { children } from 'react'
import * as FiIcons from "react-icons/fi";
import logo from '../assets/logo.jpg'
import Sidebar from './Sidebar';
import Navbar from './tables/Navbar';

const PageLayout = ({children}) => {
  
    return (<>
      <div>
        <Navbar/>
      </div>
        <div style={{display:'flex'}}>
            <div  className='vertical-menu'><Sidebar/></div>
            <div style={{marginLeft:"230px", marginTop:"80px" ,width:"100%"}}>{children}</div>
            
        </div>
        </>
    )
}

export default PageLayout
