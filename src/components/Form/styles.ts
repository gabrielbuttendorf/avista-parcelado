import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #0a1e3d;
  border: 1px solid #214274;
  border-radius: 8px;
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
    width: 150px;
    text-align: right;
    height: 44px;
    padding: 0 0.75rem;
    border-radius: 8px;
    background: transparent;
    border: none;
    outline: none;

    color: #fff;
    font-size: 1rem;
    font-weight: 600;

    &:focus {
      /* outline: 1px solid #75f795; */
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
