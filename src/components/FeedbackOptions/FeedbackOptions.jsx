import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ leaveFeedback }) => {
  return (
    <>
      <button className={css.btn} onClick={() => leaveFeedback('good')}>
        Good
      </button>
      <button className={css.btn} onClick={() => leaveFeedback('neutral')}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => leaveFeedback('bad')}>
        Bad
      </button>
    </>
  );
};
FeedbackOptions.propType = {
  LeaveFeedback: PropTypes.func.isRequired,
};
