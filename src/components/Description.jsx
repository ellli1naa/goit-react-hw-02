import { useState } from 'react'
import PropTypes from "prop-types";
import './Description.css';

const Description = () => {
  return (
    <div className="description-container">
        <h1 className="name">Sip Happens Café</h1>
        <p className="text">Please leave your feedback about our service by selecting one of the options below.</p>
    </div>
  );
};

export default Description;