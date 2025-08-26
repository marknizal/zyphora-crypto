import styled from "@emotion/styled";

import { Container, Image as I, Box as B } from "../../components/shared";
import { color, breakpoint, radius } from "../../styles";

export const Wrapper = styled(Container)`
  color: ${color.white};
`;

export const Card = styled.figure`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 4rem;
  background-color: #212121;
  border-radius: 1rem;
  margin-bottom: 5rem;

  ${breakpoint.tablet} {
    padding: 2rem;
    gap: 2rem;
  }

  ${breakpoint.mobile} {
    padding: 1.5rem;
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

export const Box = styled(B)`
  .title {
    font-size: 2.5rem;
    font-weight: 700;
  }

  .desc {
    font-size: 1rem;
    line-height: 1.5rem;
    color: #ddd;
  }

  ${breakpoint.tablet} {
    .title {
      font-size: 2rem;
    }
  }

  ${breakpoint.mobile} {
    .title {
      font-size: 2rem;
    }
  }
`;

export const Image = styled(I)`
  aspect-ratio: 4 / 3;
  object-fit: contain;

  ${breakpoint.tablet} {
    aspect-ratio: 1 / 1;
  }

  ${breakpoint.mobile} {
    aspect-ratio: 1 / 1;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 1rem;

  ${breakpoint.mobile} {
    flex-direction: column;
    gap: 1.25rem;
  }
`;

export const btn = {
  borderRadius: radius.lg,
  padding: "1.5rem",
  fontSize: "1rem",

  noBg: {
    background: color.transparent,
    color: color.white,
  },
};
