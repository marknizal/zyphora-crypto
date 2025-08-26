import { Main, Section } from "../components/shared";

import Hero from "../sections/hero";
import Promo from "../sections/promo";
import Stats from "../sections/stats";
import Market from "../sections/market";

const Home = () => {
  return (
    <Main>
      <Section $bg="linear-gradient(70deg, #06121f 0%, #29323c 100%);">
        <Hero />
      </Section>

      <Section $bg="#06121f">
        <Promo />
      </Section>

      <Section $bg="#06121f">
        <Stats />
      </Section>

      <Section $bg="#06121f">
        <Market />
      </Section>
    </Main>
  );
};

export default Home;
