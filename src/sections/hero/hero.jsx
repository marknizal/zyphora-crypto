import { LuPlay } from "react-icons/lu";
import { Image } from "../../components/shared";

import HeroImg from "../../assets/hero.png";
import Button from "../../components/common/button";

import * as S from "./styles";

const Hero = () => {
  return (
    <S.Wrapper>
      <Image src={HeroImg} alt="hero-banner" $fit="contain" $ratio="3 / 4" />

      <S.Box>
        <h1 className="title">
          <span style={S.gradient}>Trusted & Secure</span> Trading Crypto Wallet
        </h1>

        <p className="description">
          You might wonder why a designer would choose to use Morem text
          Paragraphs in English or their native language.
        </p>

        <S.Actions>
          <Button style={S.btn} type="primary">
            Get Started
          </Button>
          <Button style={{ ...S.btn, ...S.btn.noBg }} icon={<LuPlay />}>
            How it works
          </Button>
        </S.Actions>
      </S.Box>
    </S.Wrapper>
  );
};

export default Hero;
