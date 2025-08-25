import styled from "@emotion/styled";
import { color, breakpoint } from "../../../styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: ${(props) => props.$align || "center"};
  max-width: 700px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const SubTitle = styled.p`
  font-size: 1.15rem;
  line-height: 1.75rem;
  color: ${color.grey20};
`;
