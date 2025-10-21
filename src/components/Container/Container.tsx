import { ReactNode } from "react";
import { ContainerStyled } from "./Container.styles";

export function Container({ 
  children, 
  pt, 
  pb, 
  bg 
}:{ children: ReactNode, pt?: number, pb?: number, bg?: 'gray-700' }) {
  return (
    <ContainerStyled pt={pt} pb={pb} bg={bg}>
      { children }
    </ContainerStyled>
  )
}