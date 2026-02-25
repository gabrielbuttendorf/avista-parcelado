import styled from "styled-components";

interface ResultCardProps {
  variant: "avista" | "parcelado";
}

export const TableContainer = styled.div`
  margin-top: 2rem;
  max-width: 400px;
  overflow-x: auto;

  h2 {
    margin: 2rem 0 1rem 0;
    font-size: 1.2rem;
    font-weight: 600;
  }

  table {
    width: 100%;
    max-width: 100%;
    border-collapse: collapse;
    border-radius: 8px;
    overflow: hidden;
    text-align: center;

    background: #051936;
    box-shadow: 0 2px 4px rgba(5, 25, 54, 0.67);
  }

  th {
    background: #1550c5;

    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #afc1da;
  }

  tbody {
    cursor: default;
  }

  tbody tr:nth-child(even) {
    background: #0f2d58;
    transition: 0.2s ease-in-out;
  }

  tbody tr:hover {
    background: #374f7a;
    transition: 0.2s ease-in-out;
  }

  th,
  td {
    padding: 0.5rem;
    font-size: 0.75rem;
  }
`;

export const MainResult = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ResultCard = styled.span<ResultCardProps>`
  width: 50%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  border: 1px solid;
  cursor: default;
  border-color: ${(props) =>
    props.variant === "avista" ? "#4ba361" : "#5275b6"};

  font-weight: 600;

  background: ${(props) =>
    props.variant === "avista"
      ? "linear-gradient(135deg, #185e34, #207942)"
      : "linear-gradient(135deg, #1e3a8a, #1e40af)"};

  span {
    position: relative;
    width: 100%;
    text-align: center;
    padding-top: 0.25rem; /* espaço entre span e before */
    margin-top: 0.25rem;
  }

  span::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    display: block;

    background: linear-gradient(to right, transparent, #8697af, transparent);
  }
`;
