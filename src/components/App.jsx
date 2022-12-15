import { Component } from 'react';
import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';

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
          <Feedback feedback={this.addFeedback} />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics state={this.state} total={total} positivePercentage={percent} />
          ) : (
            <p>No feedback given</p>
          )}
        </Section>
      </>
    );
  }
}
