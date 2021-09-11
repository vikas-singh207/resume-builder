import React from 'react';
import './header.scss';
import GetAppIcon from '@material-ui/icons/GetApp';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';

function Header({ showsideBar }) {
  const openMenu = () => {
    showsideBar();
  };
  return (
    <div className="header">
      <div className="menu-btn" onClick={openMenu}>
        <span className="menu-icon">
          <MenuIcon />
        </span>
        <span className="logo">Resume Builder</span>
      </div>
      <div className="download-btn">
        <span className="download-icon">
          <GetAppIcon style={{ fill: '#ffbf69', fontSize: '20' }} />
        </span>
        <span>Download</span>
      </div>
    </div>
  );
}
Header.propTypes = {
  showsideBar: PropTypes.func
};

export default Header;
