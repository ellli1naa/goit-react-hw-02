import { useState, useEffect} from 'react'
import './App.css'
import Description from '../Description/Description.jsx';
import Options from '../Options/Options.jsx';
import Feedback from '../Feedback/Feedback.jsx';
import Notification from '../Notification/Notification.jsx';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
      const savedFeedback = localStorage.getItem("feedback");
      return savedFeedback
        ? JSON.parse(savedFeedback)
        : { good: 0, neutral: 0, bad: 0 };
    }); 
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const statistics = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) + "%" : "0%";
  
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
        {totalFeedback > 0 && (
        <Feedback feedback={feedback} total={totalFeedback} statistics={statistics} />
        )}
        {totalFeedback === 0 && <Notification total={totalFeedback} />}
      </>
    )
  }

export default App