import LogoImg from "../../../assets/coin-1.png";
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import { Image } from "../../shared";
import * as S from "./styles";

const socials = [
  { name: "Facebook", icon: FaFacebook, url: "#" },
  { name: "LinkedIn", icon: FaLinkedin, url: "#" },
  { name: "YouTube", icon: FaYoutube, url: "#" },
  { name: "Twitter", icon: FaTwitter, url: "#" },
  { name: "Instagram", icon: FaInstagram, url: "#" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <S.Wrapper>
      <S.Logo>
        <Image src={LogoImg} $measure="2rem" alt="Zyphora Crypto logo" />
        <p>Zyphora Crypto</p>
      </S.Logo>

      <p className="text">
        Bitcoin, first released as open-source software, is the first
        decentralized cryptocurrency. Since its release, it has inspired the
        development of thousands of other digital currencies.
      </p>

      <h2>Join the Conversation</h2>

      <S.List aria-label="Social media links">
        {socials.map(({ name, icon: Icon, url }) => (
          <li key={name}>
            <a
              href={url}
              aria-label={`Visit us on ${name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
            </a>
          </li>
        ))}
      </S.List>

      <S.Copyright role="contentinfo">
        <small>© {year} Mark John Allen Nizal. All rights reserved.</small>

        <nav aria-label="Legal links">
          <a href="/#">Support</a> · <a href="/#">Privacy Policy</a>
        </nav>
      </S.Copyright>
    </S.Wrapper>
  );
};

export default Footer;
