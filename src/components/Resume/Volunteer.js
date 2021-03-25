import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const Volunteer = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="volunteer" />
    <div className="title">
      <h3>Volunteer</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Volunteer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Volunteer.defaultProps = {
  data: [],
};

export default Volunteer;
