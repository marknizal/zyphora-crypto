import { IoLogoGooglePlaystore, IoLogoApple } from "react-icons/io5";

import Button from "../../components/common/button";
import Thumbnail from "../../assets/download-banner.png";

import * as S from "./styles";

const Download = () => {
  return (
    <S.Wrapper>
      <S.Card>
        <S.Box>
          <h1 className="title">Also Available on iOS & Android</h1>

          <p className="desc">
            This site regularly and would like to help keep the site on the
            Internet please consider donating a small.
          </p>

          <S.Actions>
            <Button
              style={S.btn}
              icon={<IoLogoGooglePlaystore />}
              type="primary"
            >
              Play Store
            </Button>
            <Button style={{ ...S.btn, ...S.btn.noBg }} icon={<IoLogoApple />}>
              Apple Store
            </Button>
          </S.Actions>
        </S.Box>

        <S.Image src={Thumbnail} alt="download-banner" />
      </S.Card>
    </S.Wrapper>
  );
};

export default Download;
