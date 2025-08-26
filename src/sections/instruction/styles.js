import styled from "@emotion/styled";

import { color } from "../../styles";
import { Container } from "../../components/shared";

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  color: ${color.white};
  padding: 5rem 1rem;
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1.25rem;
  padding: 2rem 1.25rem;
  background: linear-gradient(-120deg, #06121f 0%, #29323c 100%);
  border-radius: 1rem;
  height: 100%;

  .title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: auto;
  }

  .desc {
    font-size: 0.95rem;
    line-height: 1.5rem;
    color: #ddd;
  }
`;

export const Icon = styled.div`
  background: linear-gradient(120deg, #0b2036 0%, #445364 100%);
  align-self: start;
  border-radius: 50%;
  padding: 0.9rem;

  svg {
    font-size: 2rem;
  }
`;
