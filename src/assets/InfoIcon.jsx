import React from 'react';
import PropTypes from 'prop-types';

const InfoIcon = ({ className, color }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="24"
    viewBox="0 0 12 24"
    focusable="false"
  >
    <path
      fill={color}
      d="M7.874 0h-3.6v3.31h3.6zm4.125 21.517h-4.2v-14.9h-7.8V9.1h4.2v12.417h-4.2V24h12z"
      data-name="Path 1465"
    />
  </svg>
);

InfoIcon.defaultProps = {
  color: '#dcdcdc',
  className: 'info-icon',
};

InfoIcon.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

export default InfoIcon;
