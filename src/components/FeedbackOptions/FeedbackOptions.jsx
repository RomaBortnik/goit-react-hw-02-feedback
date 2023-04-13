import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  const { feedbackWidgetBtnList, feedbackWidgetBtn } = css;
  return (
    <ul className={feedbackWidgetBtnList}>
      <li>
        <button
          className={feedbackWidgetBtn}
          onClick={() => onLeaveFeedback('good')}
        >
          Good
        </button>
      </li>
      <li>
        <button
          className={feedbackWidgetBtn}
          onClick={() => onLeaveFeedback('neutral')}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          className={feedbackWidgetBtn}
          onClick={() => onLeaveFeedback('bad')}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
