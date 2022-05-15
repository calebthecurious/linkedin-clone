import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {

  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src="https://i.pinimg.com/originals/49/ac/10/49ac108f60d5ebb8819720adb7297bb7.jpg" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Caleb tc</h2>
        <h4>calebthecurious@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">5023</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on post</p>
          <p></p>
          <p className='sidebar__statNumber'>2421</p>
        </div>
      </div>

      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineer')}
        {recentItem('design')}
        {recentItem('development')}
      </div>


    </div>
  )
}

export default Sidebar;