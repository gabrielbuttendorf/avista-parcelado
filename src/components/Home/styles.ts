import styled from "styled-components";

export const Page = styled.div`
  /* min-height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  background: #c9c9c9;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #ffd6d6;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  span {
    font-size: 1rem;
  }

  input {
    height: 44px;
    padding: 0 12px;
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #a5a5a5;
  }
`;
