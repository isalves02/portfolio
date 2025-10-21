import { Container } from "../../components/Container/Container";
import { Paragraph } from "../../components/Typograph/Text";
import { LineDetail } from "../../components/LineDetail/LineDetail";
import { DataContentProps } from '../../model';
import { 

  ContentStyled,
  CopyrightStyled,
  FooterStyled,
  MainStyled,
  NavigationStyled,

} from "./Footer.styles";
import { Subtitle } from '../../components/Typograph/Subtitle';

export function Footer({ content }:{ content: DataContentProps }) {
  return (
    <>
      <FooterStyled>
        <Container key="FooterContainer" bg="gray-700" >
          <MainStyled>
            <ContentStyled>
              <Subtitle>{ content.contact.title }</Subtitle>
              <a href="mailto:isabel_alves02@hotmail.com">
                <Subtitle>
                  { content.contact.subtitle }
                  <svg width="34" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 16 }}>
                    <path d="M1 2H31V32M31.3536 2.35355L1.70711 32" stroke="#FFB803" strokeWidth="4"/>
                  </svg>
                </Subtitle>
              </a>

              <NavigationStyled>
                <ul>
                  { content.contact.links.map((link) => 
                    <li key={link.name}>
                      <a href={link.url} target="_blank">{link.name}</a>
                    </li>
                  )}
                </ul>
              </NavigationStyled>
            </ContentStyled>
          </MainStyled>
          <LineDetail key="footerline"/>

          <CopyrightStyled>
            <Paragraph size="xs" color="gray">© 2025 Isabel Alves</Paragraph>
            <Paragraph size="xs" color="gray">{ content.copyright.text }</Paragraph>
          </CopyrightStyled>
        </Container>
      </FooterStyled>
    </>
  )
}