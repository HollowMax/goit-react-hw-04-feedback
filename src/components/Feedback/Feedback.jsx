import { FeedbackButton } from './FeedbackButton';
import buttons from '../database/data.json';

export function Feedback({ feedback }) {
  return buttons.map(el => <FeedbackButton name={el} feedback={feedback} key={el} />);
}
