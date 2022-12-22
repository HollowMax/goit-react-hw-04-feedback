import { useState } from 'react';
import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const addFeedback = name => {
    setFeedback(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  const countTotalFeedback = () => Object.values(feedback).reduce((acc, el) => acc + el, 0);

  const countPositiveFeedbackPercentage = total => parseInt((feedback.good / total) * 100);

  const total = countTotalFeedback();
  const percent = countPositiveFeedbackPercentage(total);
  return (
    <>
      <Section title="Please leave feedback">
        <Feedback options={Object.keys(feedback)} onLeaveFeedback={addFeedback} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={percent}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}
