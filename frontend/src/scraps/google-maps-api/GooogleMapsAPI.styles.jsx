import styled from "styled-components";
import { Form } from "react-bootstrap";

export const Label = styled(Form.Label)`
  color: #fff;
`;

export const Input = styled(Form.Control)`
  background-color: #fff;
  border: 1px solid #ced4da;
  color: #000;
  border-radius: 4px;
  &:focus {
    background-color: #fff;
    color: #000;
  }
`;
