import { FeedbackBtn } from './Feedback.styled.js';
import PropTypes from 'prop-types';

export function FeedbackButton({ name, feedback }) {
  return (
    <FeedbackBtn type="button" onClick={() => feedback(name.toLowerCase())}>
      {name}
    </FeedbackBtn>
  );
}

FeedbackButton.propTypes = {
  name: PropTypes.string.isRequired,
  feedback: PropTypes.func.isRequired,
};
