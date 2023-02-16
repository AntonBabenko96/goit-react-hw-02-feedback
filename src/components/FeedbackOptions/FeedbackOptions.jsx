import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ leaveFeedback }) => {
  return (
    <div className={css.box}>
          <p className={css.title}>Please leave feedback</p>
          <button
            className={css.btn}
            onClick={() => leaveFeedback('good')}
          >
            Good
          </button>
          <button
            className={css.btn}
            onClick={() => leaveFeedback('neutral')}
          >
            Neutral
          </button>
          <button className={css.btn} onClick={() => leaveFeedback('bad')}>
            Bad
          </button>
        </div>

  )
}
