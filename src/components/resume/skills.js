import React, { useState } from 'react';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import propTypes from 'prop-types';

function Skills({ skillName, ratings }) {
  const [star] = useState([1, 2, 3, 4, 5]);
  return (
    <div className="skills">
      <span className="skill-name">{skillName}</span>
      <p className="ratings">
        {star &&
          star.map(str => {
            if (str <= ratings) {
              return (
                <span>
                  <StarRoundedIcon style={{ fill: '#ffbf69' }} />
                </span>
              );
            } else {
              return (
                <span>
                  <StarBorderRoundedIcon />
                </span>
              );
            }
          })}
      </p>
    </div>
  );
}

Skills.propTypes = {
  skillName: propTypes.string,
  ratings: propTypes.number
};
export default Skills;
