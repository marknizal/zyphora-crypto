import styled from "@emotion/styled";
import { color, breakpoint } from "../../../styles";

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background-color: #111;
  color: #fff;
  padding: 4rem 1rem;

  ${breakpoint.desktop} {
    padding: 4rem 1rem 0;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.5rem;
    color: #ddd;
    text-align: center;

    ${breakpoint.tablet} {
      max-width: 700px;
    }

    ${breakpoint.desktop} {
      max-width: 700px;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    margin: 0;
    font-size: 1.25rem;
    font-weight: bold;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0;

  li a {
    svg {
      font-size: 1.5rem;
      transition: color 0.2s ease;

      &:hover,
      &:focus {
        color: ${color.link};
      }
    }
  }
`;

export const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem 1rem 0;
  width: 100%;
  color: #ddd;

  * {
    font-size: 0.8rem;
  }

  nav a {
    color: #ddd;
    margin: 0 0.25rem;

    &:hover,
    &:focus {
      color: ${color.link};
    }
  }

  ${breakpoint.desktop} {
    flex-direction: row;
    justify-content: space-between;
    max-width: 1200px;
    padding: 2rem 1rem 1rem;
  }
`;
