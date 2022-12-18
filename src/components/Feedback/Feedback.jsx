import { FeedbackButton } from './FeedbackButton';
import buttons from '../database/data.json';
import PropTypes from 'prop-types';

export function Feedback({ feedback }) {
  return buttons.map(el => <FeedbackButton name={el} feedback={feedback} key={el} />);
}

Feedback.propTypes = {
  feedback: PropTypes.func.isRequired,
};
