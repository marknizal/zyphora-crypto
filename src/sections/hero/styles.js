import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { Container, Box as B } from "../../components/shared";
import { color, breakpoint, radius } from "../../styles";

/* ---------- Reusable Styles ---------- */

export const gradient = {
  background: "linear-gradient(-90deg, #ffffff, #859fbc, #3b4f63, #6786ac)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: color.transparent,
  backgroundClip: "text",
  color: color.transparent,
};

export const btn = {
  borderRadius: radius.lg,
  padding: "1.25rem 1.5rem",

  noBg: {
    background: color.transparent,
    color: color.white,
  },
};

const responsiveText = css`
  .title {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .description {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

/* ---------- Components ---------- */

export const Wrapper = styled(Container)`
  min-height: 100dvh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  justify-content: center;
  align-items: center;

  ${breakpoint.tablet} {
    gap: 1rem;
    min-height: inherit;
  }

  ${breakpoint.mobile} {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Box = styled(B)`
  color: ${color.white};

  .title {
    font-size: 4rem;
    font-weight: 700;
    line-height: 4.5rem;
  }

  .description {
    font-size: 1.15rem;
    line-height: 2rem;
  }

  ${breakpoint.tablet} {
    ${responsiveText}
  }

  ${breakpoint.mobile} {
    ${responsiveText}
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 1rem;
`;
