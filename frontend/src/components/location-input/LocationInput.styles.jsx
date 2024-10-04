import styled from "styled-components";

export const LocationDropdown = styled.ul`
  position: relative;
  bottom: 0;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  margin: 0;
  width: 100%;
  text-align: left !important;
  font-size: 18px;
  z-index: 1;
  border: 1px solid #000;
  border-radius: 15px;
  list-style: none;
`;

export const LocationDropdownItem = styled.li`
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: #0f2537;
  }
`;
