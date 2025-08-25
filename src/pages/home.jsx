import { Main, Section } from "../components/shared";

import Hero from "../sections/hero";

const Home = () => {
  return (
    <Main>
      <Section $bg="linear-gradient(70deg, #06121f 0%, #29323c 100%);">
        <Hero />
      </Section>
    </Main>
  );
};

export default Home;
