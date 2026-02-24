import styled from "styled-components";

export const CalculateButton = styled.button`
  width: 100%;
  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  border: none;
  background: transparent;
  border: 1px solid #426daf;

  color: #fff;
  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;

  &:hover,
  &:focus {
    transition: background 0.3s;
    background: #4bcf6c;
    border-color: #4bcf6c;
    color: #051936;
  }
`;
