import React from 'react';

const Header = () => {
  return <div className='header'>
    <div className='header-div-left'>
      <h1>Task Manager</h1>
    </div>
    <div className='header-div-right'>
      <a href="#" className='header-link'>Settings</a>
      <a href="#" className='header-link'>Calender</a>
      <a href="#" className='header-link'>Logout</a>
    </div>
  </div>;
};

export default Header;
