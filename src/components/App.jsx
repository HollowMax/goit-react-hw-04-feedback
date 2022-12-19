import { Component } from 'react';
import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = name => {
    this.setState(prevState => (prevState[name] += 1));
  };

  countTotalFeedback = () => Object.values(this.state).reduce((acc, el) => acc + el, 0);

  countPositiveFeedbackPercentage = total => parseInt((this.state.good / total) * 100);

  render() {
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage(total);
    return (
      <>
        <Section title="Please leave feedback">
          <Feedback options={Object.keys(this.state)} onLeaveFeedback={this.addFeedback} />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
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
}
