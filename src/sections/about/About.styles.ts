import styled from 'styled-components';

export const SectionStyled = styled.section`
  margin-bottom: 465px;
  
  @media(min-width: 768px) {
    margin-bottom: 520px;
  }

  @media(min-width: 1440px) {
    margin-bottom: 710px;
  }
`;

export const MainTextStyled = styled.div`
  padding: 32px 0;
  
  @media(min-width: 768px) {
    padding: 32px 0 64px;
  } 
      
  @media(min-width: 1024px) {
    padding: 32px 0 80px;
  }
`;

export const BoxImageStyled = styled.div`
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 20px;
  }
`;

export const MainStyled = styled.div`
  gap: 24px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  
  @media (min-width: 768px) {
    gap: 44px;
    flex-direction: row;
  }
`;

export const IntroStyled = styled.div`
  @media (min-width: 768px) {
    top: 100px;
    width: calc(100% + 750px);
    position: sticky;
    height: min-content;
  }
`;

export const BoxTextStyled = styled.div`
  @media (min-width: 768px) {
    padding-top: 180px;
  }
`;

export const BoxSkillsTagsStyled = styled.div`
  gap: 12px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 32px;
`;

export const ButtonStyled = styled.a`
  font-size: 14px;
  font-weight: 500;
  padding: 12px 24px;
  
  color: #000000;
  border-radius: 64px;
  background: var(--yellow);
  
  @media(min-width: 768px) {
    font-size: 16px;
  }

  @media(min-width: 992px) {
    font-size: 18px;
  }
`;