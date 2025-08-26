import { Suspense, lazy } from "react";

import { Main, Section } from "../components/shared";

import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import Loader from "../components/common/loader";

const Hero = lazy(() => import("../sections/hero"));
const Promo = lazy(() => import("../sections/promo"));
const Stats = lazy(() => import("../sections/stats"));
const Market = lazy(() => import("../sections/market"));
const Instruction = lazy(() => import("../sections/instruction"));
const Download = lazy(() => import("../sections/download"));

const Home = () => {
  return (
    <Main>
      <Suspense fallback={<Loader />}>
        <Navbar />

        <Section
          id="home"
          $bg="linear-gradient(70deg, #06121f 0%, #29323c 100%);"
        >
          <Hero />
        </Section>

        <Section id="services" $bg="#06121f">
          <Promo />
        </Section>

        <Section id="resources" $bg="#06121f">
          <Stats />
        </Section>

        <Section id="market" $bg="#06121f">
          <Market />
        </Section>

        <Section id="get-started" $bg="#06121f">
          <Instruction />
        </Section>

        <Section id="download" $bg="#06121f">
          <Download />
        </Section>

        <Footer />
      </Suspense>
    </Main>
  );
};

export default Home;
