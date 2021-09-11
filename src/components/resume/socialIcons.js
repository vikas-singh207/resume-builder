import React from 'react';
import propTypes from 'prop-types';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

function SocialIcons({ iconName }) {
  return (
    <span className="social-icons">
      {iconName == 'phone' && (
        <PhoneIcon style={{ fontSize: '15', fill: '#ffbf69' }} />
      )}
      {iconName == 'email' && (
        <EmailIcon style={{ fontSize: '15', fill: '#ffbf69' }} />
      )}
      {iconName == 'city' && (
        <RoomIcon style={{ fontSize: '15', fill: '#ffbf69' }} />
      )}
      {iconName == 'linkedin' && (
        <LinkedInIcon style={{ fontSize: '15', fill: '#ffbf69' }} />
      )}
      {iconName == 'github' && (
        <GitHubIcon style={{ fontSize: '15', fill: '#ffbf69' }} />
      )}
      {iconName == 'twitter' && (
        <TwitterIcon style={{ fontSize: '15', fill: '#ffbf69' }} />
      )}
    </span>
  );
}

SocialIcons.propTypes = {
  iconName: propTypes.string
};
export default SocialIcons;
