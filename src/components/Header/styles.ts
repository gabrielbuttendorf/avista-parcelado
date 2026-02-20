import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  text-align: center;
  flex-direction: column;
  /* width: 100%; */
  /* background: #0a2040; */

  margin-top: 1rem;

  h1 {
    padding: 0.5rem 2.5rem;
    color: #f4f9ff;
    font-size: 2rem;
    border: none;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;

      background: linear-gradient(
        to right,
        transparent,
        #8697af,
        transparent
      );
    }
  }

  p {
    padding: 1rem 2.5rem;
    color: #e9f0f8;
    font-size: 0.875rem;
  }

  span {
    color: #d5e8ff;
    font-size: 0.75rem;
  }
`;
