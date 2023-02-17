import { Notification } from 'components/Notification/Notification';

import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {total !== 0 ? 
        <>
          <p className={css.statistics}>Good: {good}</p>
          <p className={css.statistics}>Neutral: {neutral}</p>
          <p className={css.statistics}>Bad: {bad}</p>
          <p className={css.statistics}>Total: {total}</p>
          <p className={css.statistics}>Positive feedback: {positivePercentage}%</p>
        </>
       : 
        <Notification message={'No feedback given'} />
      }
    </>
  );
};

Statistics.PropType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
}