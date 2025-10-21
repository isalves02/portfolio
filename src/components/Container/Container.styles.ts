import styled from 'styled-components';

interface ContainerStyledProps {
  pt?: number;
  pb?: number;
  bg?: 'gray-700';
}

const getBgColor = (color: ContainerStyledProps['bg']) => {
  switch(color) {
    case 'gray-700':
      return 'var(--gray-700)';
      
    default:
      return 'transparent';
  }
}

export const ContainerStyled = styled.div<ContainerStyledProps>`
  width: 100%;
  padding-left: 2.5vw;
  padding-right: 2.5vw;
  background: ${({ bg }) => getBgColor(bg)};

  ${({ pt }) => {
    if(pt) { 
      return `
        padding-top: ${pt}px;
      `
    }
  }}
  ${({ pb }) => {
    if(pb) { 
      return `
        padding-bottom: ${pb}px;
      `
    }
  }}

  @media(min-width: 1440px) {
    padding-left: 145px;
    padding-right: 145px;
  }
`;