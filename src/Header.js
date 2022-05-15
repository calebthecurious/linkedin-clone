import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
  return (
    <div className="header">


      <div className='header__left'>
        <img src='https://pbs.twimg.com/profile_images/1212841876895813632/4mzarqqS_400x400.jpg' alt='' />

        <div className='header__search'>
          {/* Search Icon */}
          <SearchIcon />
          <input type='text' />
        </div>
      </div>

      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messages' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />

        <HeaderOption avatar="https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/v1503519819/u8xyd1vkeb8vnvku4eji.png" title="me" />

      </div>
    </div>

  )
}

export default Header;
