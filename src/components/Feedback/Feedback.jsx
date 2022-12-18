import { FeedbackButton } from './FeedbackButton';
import PropTypes from 'prop-types';

const capitalize = function (value) {
  return `${value[0].toUpperCase()}${value.slice(1)}`;
};

export function Feedback({ options, onLeaveFeedback }) {
  return options.map(el => (
    <FeedbackButton name={capitalize(el)} onLeaveFeedback={onLeaveFeedback} key={el} />
  ));
}

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
