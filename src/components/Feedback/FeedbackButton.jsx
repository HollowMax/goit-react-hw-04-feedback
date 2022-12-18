import { FeedbackBtn } from './Feedback.styled.js';
import PropTypes from 'prop-types';

export function FeedbackButton({ name, onLeaveFeedback }) {
  return (
    <FeedbackBtn type="button" onClick={() => onLeaveFeedback(name.toLowerCase())}>
      {name}
    </FeedbackBtn>
  );
}

FeedbackButton.propTypes = {
  name: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
