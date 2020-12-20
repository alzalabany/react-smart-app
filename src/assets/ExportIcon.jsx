import React from 'react';
import PropTypes from 'prop-types';

const ExportIcon = ({ className, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    width="33"
    height="32"
    viewBox="0 0 33 32"
    className={className}
  >
    <g transform="translate(304.08 -8463.052)">
      <g transform="translate(-230 -269)">
        <g transform="translate(-73.58 8735.546)">
          <g transform="translate(0 0)">
            <path
              d="M101.469,48.944c0,4.869-.108,14.494-.108,14.494a1.693,1.693,0,0,1-1.688,1.688H77.281a1.693,1.693,0,0,1-1.688-1.688V41.045a1.693,1.693,0,0,1,1.688-1.688H92.742"
              transform="translate(-75.593 -39.357)"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="1"
            />
          </g>
          <path
            d="M123.168,49.705"
            transform="translate(-102.003 -45.101)"
            fill="none"
            stroke="#bdbdbd"
            strokeMiterlimit="10"
            strokeWidth="1"
          />
        </g>
        <g transform="translate(-61.465 8732.552)">
          <path
            d="M123.168,29.01h9.055v9.055"
            transform="translate(-115.024 -29.01)"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="1"
          />
          <path
            d="M17.2,0,0,17.2"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeWidth="1"
          />
        </g>
      </g>
      <g transform="translate(-303.58 8466.488)">
        <g transform="translate(0 0)">
          <path
            d="M101.527,48.965c0,4.88-.109,14.526-.109,14.526a1.7,1.7,0,0,1-1.692,1.692H77.285a1.7,1.7,0,0,1-1.692-1.692V41.049a1.7,1.7,0,0,1,1.692-1.692h15.5"
            transform="translate(-75.593 -39.357)"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="1"
          />
        </g>
        <path
          d="M123.168,49.705"
          transform="translate(-101.956 -45.091)"
          fill="none"
          stroke={color}
          strokeMiterlimit="10"
          strokeWidth="1"
        />
      </g>
    </g>
  </svg>
);

ExportIcon.defaultProps = {
  color: '#dcdcdc',
  className: 'task-export-icon',
};

ExportIcon.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

export default ExportIcon;
