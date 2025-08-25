import { LuExternalLink } from "react-icons/lu";
import { promoItems } from "./data";

import SectionTitle from "../../components/common/section-title";
import Grid from "../../components/common/grid";
import Button from "../../components/common/button";

import * as S from "./styles";

const Promo = () => {
  return (
    <S.Wrapper>
      <SectionTitle
        title="Most Trusted Cryptocurrency Platform"
        subTitle="A cryptocurrency is a tradable digital asset or digital form of money, built on blockchain technology that only exists online."
      />

      <Grid columns={{ default: 3, tablet: 3 }} gap="1.5rem">
        {promoItems.map(({ id, title, description, icon: Icon }) => (
          <S.Card key={id}>
            <S.Icon>
              <Icon />
            </S.Icon>

            <h2>{title}</h2>
            <p className="description">{description}</p>

            <Button icon={<LuExternalLink />} type="link" style={S.button}>
              Explore More
            </Button>
          </S.Card>
        ))}
      </Grid>
    </S.Wrapper>
  );
};

export default Promo;
