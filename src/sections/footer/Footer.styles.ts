import styled from 'styled-components';

export const FooterStyled = styled.footer`
  width: 100%;
  bottom: 0;
  z-index: -1;
  position: fixed;
`; 

export const MainStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 54px 24px;
  
  @media (min-width: 768px) {
    justify-content: flex-end;
    padding: 100px 100px 80px;
  }

  @media (min-width: 1440px) {
    padding: 220px 100px 120px;
  }
`;

export const ContentStyled = styled.div`
  width: 100%;
 
  @media (min-width: 768px) {
    width: calc(50% + 64px);
  }
`;

export const NavigationStyled = styled.nav`
  margin-top: 32px;

  ul {
    gap: 12px;
    display: flex;
    flex-direction: column;

    li a {
      font-size: 14px;
      font-weight: 500;
    }
  }

  svg {
    height: 22px;
  }
`;

export const CopyrightStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 16px;
`;
