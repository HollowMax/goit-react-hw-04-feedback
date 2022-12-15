import styled from 'styled-components';

export const FeedbackBtn = styled.button`
  border-radius: 8px;
  border: 1px solid grey;
  padding: 3px;

  background-color: transparent;

  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
