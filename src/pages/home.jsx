import { Main, Section } from "../components/shared";

import Hero from "../sections/hero";
import Promo from "../sections/promo";

const Home = () => {
  return (
    <Main>
      <Section $bg="linear-gradient(70deg, #06121f 0%, #29323c 100%);">
        <Hero />
      </Section>

      <Section $bg="#06121f">
        <Promo />
      </Section>
    </Main>
  );
};

export default Home;
