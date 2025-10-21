import styled from 'styled-components';

interface MenuStyledProps {
  isMenuActive?: boolean;
}


export const NavStyled = styled.nav`
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 900;
  position: fixed;
  padding: 0 20px;
  backdrop-filter: blur(3px);
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media(min-width: 425px) {
    padding: 0 40px;
  }

  @media(min-width: 768px) {
    height: 80px;
    padding: 0 80px;
  }
  
  @media(min-width: 1440px) {
    padding: 0 100px;
  }

  img {
    width: 18px;
    height: auto;
    
    
    @media(min-width: 768px) {
      width: 24px;
    }
  }
`;

export const MenuListStyled = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media(min-width: 425px) {
    gap: 24px;
  }
	
  @media (min-width: 768px) {
    gap: 32px;
  }
`;

export const ButtonLangStyled = styled.button`
  font-size: 12px;
  color: var(--white);
  
  &:hover {
    text-transform: underline;
  }
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const MenuToggleStyled = styled.button<MenuStyledProps>`
  width: 24px;
  height: 16px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  z-index: 9999;

  span {
    width: 100%;
    height: 2px;
    background: var(--white);
    transition: transform .3s ease; 
  }

  ${({ isMenuActive }) => {
    if(isMenuActive) { 
      return `
        span {
          top: 50%;
          position: absolute;
          transform: rotate(-45deg);

          &:first-child {
            transform: rotate(45deg);
          }

          &:last-child {
            display: none;
          }
        }
      `
    }
  }}
`;

export const MenuOpenedStyled = styled.div<MenuStyledProps>`
  inset: 0;
  z-index: 100;
  height: 100vh;
  position: fixed;
  background-color: var(--primary);
  transition: transform .3s ease; 

  display: flex;
  justify-content: center;
  transform: ${({ isMenuActive }) => isMenuActive ? 'translateX(0%)' : 'translateX(100%)'};

  .nav {
    gap: 14px;
    height: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    
    a {
      font-size: 16px;
      
      @media (min-width: 768px) {
        font-size: 32px;
      }
    }
    
    @media (min-width: 768px) {
      gap: 20px;
    }
  }

  footer {
    bottom: 60px;
    position: absolute;

    ul {
      display: flex;
      text-align: center;
      flex-direction: column;
      
      a {
        color: var(--gray);
        font-size: 12px;
        
        @media(min-width: 425px) {
          font-size: 14px;
        }
        
        @media (min-width: 768px) {
          font-size: 18px;
        }
      }
      
      @media (min-width: 425px) {
        gap: 8px;
      }

      @media (min-width: 768px) {
        gap: 32px;
        flex-direction: row;
      }
    }
  }

`