import styled from "@emotion/styled";

import { color } from "../../styles";
import { Container } from "../../components/shared";

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  color: ${color.white};
  padding: 5rem 1rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: 1.5rem;
  background: linear-gradient(-120deg, #06121f 0%, #29323c 100%);
  border-radius: 1rem;
  height: 100%;

  .description {
    font-size: 0.95rem;
    line-height: 1.5rem;
    color: ${color.grey};
    margin-bottom: 1.5rem;
  }
`;

export const Icon = styled.div`
  background-color: ${color.primary};
  align-self: start;
  border-radius: 50%;
  padding: 0.9rem;

  svg {
    font-size: 2rem;
  }
`;

export const button = {
  alignSelf: "start",
  padding: "0",
  height: "auto",
  marginTop: "auto",
};
