import styled from 'styled-components';

export const MessageWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 10px;
  background-color: ${({ isSuccess }) => (isSuccess ? '#327BB8' : '#d9534f')};
  color: #ffffff;
  border-radius: 5px;
  text-align: center;
`;
