import {FeedbackBtn } from './Feedback.styled.js';

export function FeedbackButton({ name, feedback }) {
  return (
    <FeedbackBtn type="button" onClick={() => feedback(name.toLowerCase())}>
      {name}
    </FeedbackBtn>
  );
}
