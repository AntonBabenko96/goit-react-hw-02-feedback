import { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from '../components/Section/Section';

import css from '../components/App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    const result = Math.round((good / total) * 100);
    return result;
  }

  leaveFeedback = name => {
    this.setState(prevState => {
      const value = prevState[name];
      return {
        [name]: value + 1,
      };
    });
  };

  render() {
    return (
      <div className={css.section}>
        <Section title='Please leave feedback'>
           <FeedbackOptions
          leaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title='Statistics'>
          <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
        </Section>
        
      </div>
    );
  }
}
