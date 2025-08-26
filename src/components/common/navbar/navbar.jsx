import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { TbMenu } from "react-icons/tb";

import Button from "../button";
import * as S from "./styles";

const NAV_ITEMS = [
  { id: 1, path: "#home", label: "Home" },
  { id: 2, path: "#services", label: "Services" },
  { id: 3, path: "#resources", label: "Resources" },
  { id: 4, path: "#market", label: "Market" },
  { id: 5, path: "#contacts", label: "Contacts" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/zyphora-crypto/");
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const threshold = 50;

      setShowHeader(currentScroll < lastScrollY || currentScroll < threshold);
      setScrolled(currentScroll > threshold);
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <S.Header $show={showHeader} $scrolled={scrolled}>
        <S.Desktop>
          <S.Logo onClick={handleLogoClick}>Zyphora</S.Logo>

          <S.NavLinks>
            {NAV_ITEMS.map(({ id, path, label }) => (
              <HashLink key={id} to={path} smooth className="nav-link">
                {label}
              </HashLink>
            ))}
          </S.NavLinks>

          <S.Actions>
            <Button style={S.button}>Sign In</Button>
            <HashLink to="#get-started" smooth>
              <Button type="primary" style={S.button}>
                Get Started
              </Button>
            </HashLink>
          </S.Actions>

          <S.MenuIcon onClick={() => setIsOpen(true)}>
            <TbMenu />
          </S.MenuIcon>
        </S.Desktop>
      </S.Header>

      <S.Sidebar $isOpen={isOpen}>
        <S.MobileNav>
          <S.Logo className="mobile-logo" onClick={handleLogoClick}>
            Zyphora
          </S.Logo>

          {NAV_ITEMS.map(({ id, path, label }) => (
            <HashLink
              key={id}
              to={path}
              smooth
              onClick={() => setIsOpen(false)}
              className="mobile-link"
            >
              {label}
            </HashLink>
          ))}

          <S.MobileActions>
            <Button style={S.button}>Sign In</Button>
            <HashLink to="#get-started" smooth onClick={() => setIsOpen(false)}>
              <Button type="primary" style={S.button}>
                Get Started
              </Button>
            </HashLink>
          </S.MobileActions>
        </S.MobileNav>
      </S.Sidebar>

      <S.Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
