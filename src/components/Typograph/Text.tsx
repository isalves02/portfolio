import { ReactNode } from 'react';
import styled from 'styled-components';

interface ParagraphStyledProps {
  children: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'secondary' | 'gray';
  mt?: number;
  mb?: number;
}

const getFontSize = (size: ParagraphStyledProps['size']) => {
  switch (size) {
    case 'xs':
      return '16px';
    case 'sm':
      return '20px';
    case 'md':
      return '26px';
    case 'lg':
      return '32px';
    default:
      return '26px';
  }
};

const getFontColor = (color: ParagraphStyledProps['color']) => {
  switch(color) {
    case 'secondary':
      return 'var(--secondary)';

    case 'gray':
      return 'var(--gray)';
      
    default:
      return 'var(--white)';
  }
}

const ParagraphStyled = styled.p<ParagraphStyledProps>`
  font-weight: 400;
  color: ${({ color }) => getFontColor(color)};
  margin-top: 16px;
  margin-bottom: 16px;
  
  font-size: ${({ size }) =>
    size === 'lg'
      ? '24px'
      : size === 'md'
      ? '20px'
      : size === 'sm'
      ? '14px'
      : '12px'};

  @media (min-width: 768px) {
    font-size: ${({ size }) =>
      size === 'lg'
        ? '28px'
        : size === 'md'
        ? '24px'
        : size === 'sm'
        ? '16px'
        : '14px'};
    margin-top: ${({ mt }) => mt ? mt+ 'px' : 0 + 'px'};
    margin-bottom: ${({ mb }) => mb ? mb + 'px' : 0 + 'px'};
  }

  @media (min-width: 1024px) {
    font-size: ${({ size }) => getFontSize(size)};
  }
`;

export function Paragraph({ mt, mb, size, color, children}:ParagraphStyledProps) {
  return (
    <>
      <ParagraphStyled mt={mt} mb={mb} size={size} color={color}>
        { children }
      </ParagraphStyled>
    </>
  )
}