import { Title } from "../../components/Typograph/Title"
import { DataContentProps } from "../../model";
import { Container } from "../../components/Container/Container"
import { 
  ContainerStyled, 
  ImageStyled,
  CarouselListStyled,
  ImageContainerStyled,
  ImageDescriptionStyled
} from "./Work.styles"

import { Tag } from "../../components/Tag/Tag";
import { Paragraph } from "../../components/Typograph/Text";
 
export function Work({ lang, content }:{ lang: string, content: DataContentProps }) {
  return (
      <>  
      <section id={lang == 'PT' ? 'trabalhos' : 'works'}>
        <Container key="WorkContainer">
          <ContainerStyled>
            <Title>{ content.works.title }</Title>

            <CarouselListStyled>
              {content.works.works.map((work) => (
                <ImageContainerStyled key={work.name}>
                  <ImageStyled src={work.imgUrl} alt={work.name} />
                  <ImageDescriptionStyled>
                    <div>
                      <div className="tags">
                        {work.tags.map((tag: string) => 
                          <Tag key={tag} tagName={tag} />
                        )}
                      </div>
                      <Paragraph size="xs" color="gray" mt={6}>{work.designedBy}</Paragraph>
                    </div>

                    <a href={work.url} target="_blank" rel="noopener noreferrer">
                      <svg width="12" height="12" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 16 }}>
                        <path d="M1 2H31V32M31.3536 2.35355L1.70711 32" stroke="#1d1d1d" strokeWidth="4"/>
                      </svg>
                      {work.urlDescription}
                    </a>
                  </ImageDescriptionStyled>
                </ImageContainerStyled>
              ))}
            </CarouselListStyled>
          </ContainerStyled>
        </Container>
      </section>
      </>
    )
}