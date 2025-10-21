import { ReactNode } from "react";
import styled from 'styled-components';

const TitleStyled = styled.h2`
	font-size: 26px;
  line-height: 1.2;
	
	@media(min-width: 425px) {
		font-size: 44px;
  }
	
	@media(min-width: 768px) {
		line-height: 1.1;
		font-size: 54px;
  }
  
  @media(min-width: 1440px) {
		font-size: 64px;
  }
`;

export function Title({ children }:{ children: ReactNode }) {
	return (
		<TitleStyled>
			{children}
		</TitleStyled>
	)
}