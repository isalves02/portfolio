import myself from '../../assets/isa-passos2.jpg';
import { Container } from "../../components/Container/Container";
import { Tag } from "../../components/Tag/Tag";
import { Title } from "../../components/Typograph/Title";
import { Paragraph } from "../../components/Typograph/Text";
import { LineDetail } from "../../components/LineDetail/LineDetail";
import { DataContentProps } from '../../model';

import { 
  BoxImageStyled, 
  IntroStyled, 
  MainTextStyled, 
  MainStyled, 
  BoxTextStyled, 
  BoxSkillsTagsStyled, 
  ButtonStyled,
  SectionStyled
} from "./About.styles";

export function About({ lang, content }:{ lang: string, content: DataContentProps }) {
  return (
    <>
      <SectionStyled id={lang == 'PT' ? 'sobre' : 'about'}>
        <Container key="AboutContainer" pb={220}>
          <MainStyled>
            <IntroStyled>
              <LineDetail key="Title Detail Line" />
              <MainTextStyled>
                <Title key="TitleAbout">{ content.about.title }</Title>
              </MainTextStyled>

              <BoxImageStyled>
                <img src={myself} alt="Isabel Alves" width={553} height={579} />
              </BoxImageStyled>
            </IntroStyled>

            <BoxTextStyled>
              <Paragraph mb={16} color="secondary">{ content.about.aboutSubtitle }</Paragraph>
              {content.about.text.map((p: string) => 
                <Paragraph mb={44} key={p}>{p}</Paragraph>
              )}

              <LineDetail mt={58} key="Skills Detail Line" />
              <Paragraph mt={24} mb={40} size="sm" color="secondary">{ content.about.skillSubtitle }</Paragraph>
              <BoxSkillsTagsStyled>
                {content.about.stacks.map((stack: string) => 
                  <Tag key={stack} tagName={stack}/>
                )}
              </BoxSkillsTagsStyled>

              <ButtonStyled href={content.about.cvURL} target="_blank">
                Download CV
              </ButtonStyled>
            </BoxTextStyled>
          </MainStyled>
        </Container>
      </SectionStyled>
    </>
  )
}