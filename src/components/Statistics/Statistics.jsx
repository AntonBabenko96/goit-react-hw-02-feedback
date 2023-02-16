import { Notification } from 'components/Notification/Notification';

import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statistics}>
      <p className={css.title}>Statistics</p>
      {total !== 0 ? 
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </>
       : 
        <Notification message={'No feedback given'} />
      }
    </div>
  );
};
