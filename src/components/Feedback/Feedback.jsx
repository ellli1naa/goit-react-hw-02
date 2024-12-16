import { useState } from 'react'
import PropTypes from "prop-types";
import './Feedback.css';

const Feedback = ({feedback, total, statistics}) => {
  return (
      <div className="feedback-container">
        {total >0 && (
        <ul className="stats">
            <li className="stat-item">Good: {feedback.good}</li>
            <li className="stat-item">Neutral: {feedback.neutral}</li>
            <li className="stat-item">Bad: {feedback.bad}</li>
            <li className="stat-item">Total: {total}</li>
            <li className="stat-item">Positive: {statistics}</li>
        </ul>
        )}
    </div>
  );
};

export default Feedback;