import styled from 'styled-components';

export const DetailStyled = styled.span<LineDetailProps>`
  height: 1px;
  display: block;
  background: var(--gray-600);
  width: ${({ width }) => width ? width + '%' : "100%"};
  
  ${({ mt }) => {
    if(mt) { 
      return `
        margin-top: ${mt}px;
      `
    }
  }}
  ${({ mt }) => {
    if(mt) { 
      return `
        margin-bottom: ${mt}px;
      `
    }
  }}
`;

interface LineDetailProps {
  width?: number;
  mt?: number;
  mb?: number;
}
export function LineDetail({ width, mt, mb}: LineDetailProps) {
  return (
    <DetailStyled width={width} mt={mt} mb={mb} />
  )
}