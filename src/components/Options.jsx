import { useState } from 'react'
import PropTypes from "prop-types";

const Options = ({updateFeedback, total}) => {
  return (
    <div className="options-container">
        <button onClick={() => updateFeedback('good')}>Good</button>
        <button onClick={() => updateFeedback('neutral')}>Neutral</button>
        <button onClick={() => updateFeedback('bad')}>Bad</button>
        {total > 0 && ( 
            <button onClick={() => updateFeedback('reset')}>Reset</button>
        )}
    </div>
  );
};

export default Options;