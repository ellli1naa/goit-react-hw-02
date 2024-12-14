import { useState, useEffect} from 'react'
import './App.css'
import Description from './Description.jsx';
import Options from './Options.jsx';
import Feedback from './Feedback.jsx';
import Notification from './Notification.jsx';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
      const savedFeedback = localStorage.getItem("feedback");
      return savedFeedback
        ? JSON.parse(savedFeedback)
        : { good: 0, neutral: 0, bad: 0 };
    }); 
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const statistics = Math.round((feedback.good / totalFeedback) * 100) + "%";
  
  useEffect(() => {
        localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);
  
  const updateFeedback = feedbackType => {
  if (feedbackType === 'reset') {
    setFeedback({ good: 0, neutral: 0, bad: 0 }); 
    return; 
  }
  setFeedback(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
};

    return (
      <>
        <Description />
        <Options updateFeedback={updateFeedback} total={totalFeedback}/>
        <Feedback feedback={feedback} total={totalFeedback} statistics={statistics} />
        <Notification total={totalFeedback}/>
      
      </>
    )
  }

export default App
