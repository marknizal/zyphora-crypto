import { instructions } from "./data";

import Grid from "../../components/common/grid";
import SectionTitle from "../../components/common/section-title";

import * as S from "./styles";

const Instruction = () => {
  return (
    <S.Wrapper>
      <SectionTitle
        title="Getting Started"
        subTitle="Just a few easy steps to set up your account, secure it, and start exploring the platform with confidence."
      />

      <Grid columns={{ default: 4 }} gap="1.5rem">
        {instructions.map(({ id, title, desc, icon: Icon }) => (
          <S.Card key={id}>
            <S.Icon>
              <Icon />
            </S.Icon>

            <h4 className="title">{title}</h4>
            <p className="desc">{desc}</p>
          </S.Card>
        ))}
      </Grid>
    </S.Wrapper>
  );
};

export default Instruction;
