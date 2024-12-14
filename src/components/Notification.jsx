import { useState } from 'react'
import PropTypes from "prop-types";
import './Notification.css';

const Notification = ({total}) => {
  return (
      <div className="notification-container">
            {total < 1 && (
              <p className="note">No feedback yet</p>
            )}
    </div>
  );
};

export default Notification;