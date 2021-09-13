import React from 'react';
import propTypes from 'prop-types';
import './projects.scss';

function Projects({ projectName, projectUrl }) {
  return (
    <div className="projects_div">
      <span className="projects_div__label">{projectName}</span>
    </div>
  );
}

Projects.propTypes = {
  projectName: propTypes.string,
  projectUrl: propTypes.string
};
export default Projects;
