import React, { useState } from 'react';
import './resume.scss';
import PropTypes from 'prop-types';
import SocialIcons from './socialIcons';
import Skills from './skills';
import Projects from './project';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';

function Resume({ formData }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showDonetBtn, setShowDoneBtn] = useState(false);
  const [Overlay, setOverlay] = useState({
    headerOverlay: false,
    socialOverlay: false
  });
  const [overlayName, setOverlayName] = useState('');

  const resetOverlay = () => {
    setOverlay({
      headerOverlay: false,
      socialOverlay: false
    });
  };
  const showEditBtn = e => {
    if (Overlay.headerOverlay || Overlay.socialOverlay) {
      console.log('do nothing');
    } else {
      resetOverlay();
      let name = e.currentTarget.getAttribute('name');
      setShowOverlay(!showOverlay);
      setOverlayName(name);
    }
  };

  const editBtnClick = e => {
    e.stopPropagation();
    resetOverlay();
    let name = e.currentTarget.getAttribute('name');
    let showoverlay = Overlay[name];
    setShowOverlay(!showOverlay);
    setShowDoneBtn(!showDonetBtn);
    setOverlay(prevState => ({
      ...prevState,
      [name]: !showoverlay
    }));
  };

  const doneBtnClick = e => {
    e.stopPropagation();
    setShowDoneBtn(!showDonetBtn);
    resetOverlay();
  };
  return (
    <>
      {formData && (
        <div className="resume">
          {showOverlay && (
            <div
              className={`${showOverlay ? overlayName : ''}`}
              onClick={showEditBtn}
            >
              {showOverlay && (
                <span name={overlayName} onClick={editBtnClick}>
                  <EditRoundedIcon style={{ fill: '#ffbf69' }} />
                </span>
              )}
            </div>
          )}
          <div
            className="resume__header"
            name="headerOverlay"
            onClick={showEditBtn}
          >
            <span className="resume__header--logo">
              {/* <img src="" alt="logo" className="logo" /> */}
            </span>

            <span className="resume__label">
              <p
                className="resume__name"
                contentEditable={Overlay.headerOverlay}
              >
                {formData.header.name}
              </p>
              <p
                className="resume__profile"
                contentEditable={Overlay.headerOverlay}
              >
                {formData.header.designation}
              </p>
            </span>
            {showDonetBtn && Overlay.headerOverlay && (
              <span name={overlayName} onClick={doneBtnClick}>
                <DoneRoundedIcon style={{ fill: '#ffbf69' }} />
              </span>
            )}
          </div>
          <div className="resume__body">
            <div className="resume__body--left">
              <div
                className="social"
                name="socialOverlay"
                onClick={showEditBtn}
              >
                {formData.social &&
                  Object.keys(formData.social).map(key => {
                    return (
                      <div className="social-links">
                        <SocialIcons iconName={key} />
                        <span
                          className="social-label"
                          contentEditable={Overlay.socialOverlay}
                        >
                          {formData.social[key]}
                        </span>
                      </div>
                    );
                  })}
                {showDonetBtn && Overlay.socialOverlay && (
                  <span name={overlayName} onClick={doneBtnClick}>
                    <DoneRoundedIcon style={{ fill: '#ffbf69' }} />
                  </span>
                )}
              </div>
              <div className="skillset">
                <p className="skillset__label">KEY SKILLS</p>
                {formData.skills &&
                  Object.keys(formData.skills).map(key => {
                    return (
                      <Skills skillName={key} ratings={formData.skills[key]} />
                    );
                  })}
              </div>
              <div className="projects">
                <p className="projects__label">PROJECTS</p>
                {formData.projects &&
                  Object.keys(formData.projects).map(key => {
                    return (
                      <Projects
                        projectName={key}
                        projectUrl={formData.projects[key]}
                      />
                    );
                  })}
              </div>
            </div>
            <div className="resume__body--right" />
          </div>
        </div>
      )}
    </>
  );
}

Resume.propTypes = {
  formData: PropTypes.object
};
export default Resume;
