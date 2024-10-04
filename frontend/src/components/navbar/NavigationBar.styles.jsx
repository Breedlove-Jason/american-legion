import styled from "styled-components";

export const MessageCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: ${({ $isSuccess }) => ($isSuccess ? "#327BB8" : "#25B856")};
  color: #ffffff;
  font-weight: bold;
  border-radius: 10px;
  text-align: center;
  max-width: 600px;
  margin: auto;
`;
