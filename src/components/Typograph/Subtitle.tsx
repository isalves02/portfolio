import { ReactNode } from "react";
import styled from 'styled-components';

const SubtitleStyled = styled.h3`
  font-size: 32px;
  font-weight: 400;
  line-height: 1.2;
	
	@media (min-width: 768px) {
		font-size: 40px;
  }

	@media (min-width: 1440px) {
		font-size: 54px;
  }
`;

export function Subtitle({ children }:{ children: ReactNode }) {
	return (
		<SubtitleStyled>
			{children}
		</SubtitleStyled>
	)
}