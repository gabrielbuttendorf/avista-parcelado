import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 1rem;

  max-width: 720px;
  margin: 0 auto;
`;

export const FormContainer = styled.form`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #0a1e3d;
  border: 1px solid #214274;
  border-radius: 8px;
  margin: 0 auto;

  @media (max-width: 400px) {
    padding: 1rem;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 60px;
  padding: 0 1rem;
  gap: 6px;
  border-radius: 8px;
  background: #051936;

  span {
    font-size: 0.875rem;
    color: #88fda5;
    font-weight: 600;
  }

  input {
    flex: 1;
    min-width: 0;
    text-align: right;

    height: 44px;
    padding: 0 0.75rem;
    border-radius: 8px;
    background: transparent;
    border: none;
    outline: none;

    color: #e2e8f0;
    font-size: 1rem;
    font-weight: 600;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
