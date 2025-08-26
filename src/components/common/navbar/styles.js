import styled from "@emotion/styled";

import { color, breakpoint, radius } from "../../../styles";
import { Container } from "../../shared";

export const Header = styled.header`
  width: 100%;
  height: 3.75rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;

  background-color: ${({ $scrolled }) =>
    $scrolled ? "#212121" : color.transparent};
  border-bottom: ${({ $scrolled }) => ($scrolled ? "1px solid #333" : "none")};

  transform: translateY(${({ $show }) => ($show ? "0" : "-100%")});
  transition: all 0.3s ease-in-out;
  z-index: 1000;
`;

export const Desktop = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${breakpoint.tablet} {
    padding: 0 2rem;
  }
`;

export const Logo = styled.h2`
  cursor: pointer;
  color: ${color.white};

  &.mobile-logo {
    margin-bottom: 1rem;
  }
`;

export const NavLinks = styled.nav`
  display: none;
  align-items: center;
  gap: 1.5rem;

  .nav-link {
    text-decoration: none;
    font-weight: 400;
    color: ${color.white};
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${color.link};
    }
  }

  ${breakpoint.desktop} {
    display: flex;
  }
`;

export const Actions = styled.div`
  display: none;
  gap: 0.8rem;

  ${breakpoint.desktop} {
    display: flex;
  }
`;

export const MobileActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;

  ${breakpoint.desktop} {
    display: none;
  }
`;

export const MenuIcon = styled.div`
  display: flex;
  font-size: 1.65rem;
  cursor: pointer;
  color: ${color.white};

  ${breakpoint.desktop} {
    display: none;
  }
`;

export const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  height: 100%;
  width: 16rem;

  background: #212121;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  transition: left 0.4s ease-in-out;
  z-index: 1100;
`;

export const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;

  .mobile-link {
    padding: 0.75rem 0;
    border-bottom: 1px solid #555;
    text-decoration: none;
    font-size: 1rem;
    color: ${color.white};
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${color.link};
    }
  }

  .mobile-link:last-of-type {
    border-bottom: none;
  }
`;

export const Overlay = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

export const button = {
  padding: "1rem",
  borderRadius: radius.lg,
  width: "100%",
};
