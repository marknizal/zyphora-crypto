import Thumbnail from "../../assets/stats-banner.png";
import { stats } from "./data";
import { Image } from "../../components/shared";

import SectionTitle from "../../components/common/section-title";
import Grid from "../../components/common/grid";

import * as S from "./styles";

const Stats = () => {
  return (
    <S.Wrapper>
      <S.Box>
        <SectionTitle
          title="Our Best Users Are all over the Worldwide Coverage"
          $align="left"
        />

        <p className="description">
          We’re proud to serve a diverse community of professionals across the
          globe. With users in North America, Europe, Asia, and beyond, our
          platform helps teams collaborate seamlessly and achieve measurable
          results, no matter where they are.
        </p>

        <Grid columns={{ default: 3 }} gap="1.15rem">
          {stats.map(({ id, number, desc }) => (
            <S.Card key={id}>
              <h1 className="number">{number}</h1>
              <small className="desc">{desc}</small>
            </S.Card>
          ))}
        </Grid>
      </S.Box>

      <Image src={Thumbnail} alt="stats-banner" $fit="contain" $ratio="16/9" />
    </S.Wrapper>
  );
};

export default Stats;
