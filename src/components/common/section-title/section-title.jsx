import * as S from "./styles";

const SectionTitle = ({ title, subTitle, $align }) => {
  return (
    <S.Wrapper $align={$align}>
      {title && <S.Title>{title}</S.Title>}
      {subTitle && <S.SubTitle>{subTitle}</S.SubTitle>}
    </S.Wrapper>
  );
};

export default SectionTitle;
