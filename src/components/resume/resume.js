import React from 'react';
import './resume.scss';
import PropTypes from 'prop-types';
import SocialIcons from './socialIcons';

function Resume({ formData }) {
  return (
    <>
      {formData && (
        <div className="resume">
          <div className="resume__header">
            <span className="resume__header--logo">
              {/* <img src="" alt="logo" className="logo" /> */}
            </span>

            <span className="resume__label">
              <p className="resume__name">{formData.header.name}</p>
              <p className="resume__profile">{formData.header.designation}</p>
            </span>
          </div>
          <div className="resume__body">
            <div className="resume__body--left">
              <div className="social" >
                {formData.social &&
                  Object.keys(formData.social).map(key => {
                    return (
                      <div className="social-links">
                        <SocialIcons iconName={key} />
                        <span className="social-label">
                          {formData.social[key]}
                        </span>
                      </div>
                    );
                  })}
              </div>
              <div className="skillset">
                <p className="skillset__label">KEY SKILLS</p>
              </div>
              <div className="projects" />
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
