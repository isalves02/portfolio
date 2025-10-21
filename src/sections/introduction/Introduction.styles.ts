import styled from 'styled-components';

export const SectionStyled = styled.section`
  padding-top: 24px;
  position: relative;
  height: calc(100vh - 60px);
  
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  
  
  @media(min-width: 768px) {
    height: 100vh;
    padding-top: 45px;
  }
  
  @media(min-width: 1440px) {
    padding-top: 90px;
  }
`;

export const BoxStyled = styled.div`
  width: 100%;
`;

export const MainTextStyled = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 100px;
  
  @media(min-width: 768px) {
    padding-top: 150px;
    width: 90%;
  }
  
  @media(min-width: 1440px) {
    width: 58.33%;
  }
`;

export const TagBoxStyled = styled.div`
  gap: 12px;
  bottom: 70px;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  width: calc(100% - 12vw);

  @media (min-width: 768px) {
    bottom: 100px;
  }
`;

export const ContainerBoxStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const DividerStyled = styled.i`
  width: 100%;
  height: 1px;
  position: relative;
  background: var(--gray-600);
  
  @media (min-width: 768px) {
    bottom: 36px;
  }
`;

export const TextBottomStyled = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    bottom: 22px;
  }

  a {
    font-size: 12px;
    font-weight: 400;
    color: var(--secondary);
    
    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const HrefWorkButtonStyled = styled.a`
  gap: 8px;
  display: flex;
  align-items: flex-start;
`;