import styled from "@emotion/styled";

import { Container, Box as B } from "../../components/shared";
import { color, breakpoint } from "../../styles";

export const Wrapper = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  padding: 5rem 1rem;
  justify-content: center;
  align-items: center;

  ${breakpoint.tablet} {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  ${breakpoint.mobile} {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
`;

export const Box = styled(B)`
  color: ${color.white};
  gap: 2rem;

  .description {
    color: ${color.grey10};
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const Card = styled.div`
  padding: 1rem;
  background: linear-gradient(-140deg, #06121f 0%, #29323c 100%);
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  height: 100%;

  .number {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${color.link};
  }

  .desc {
    font-size: 0.85rem;
    line-height: 1.25rem;
  }
`;
