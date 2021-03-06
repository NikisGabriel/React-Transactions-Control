import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    height: 3rem;
  }
  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: none;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;
    &:hover {
      //tag para aplicação de filtros
      filter: brightness(0.9);
    }
  }
  @media (max-width: 400px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
