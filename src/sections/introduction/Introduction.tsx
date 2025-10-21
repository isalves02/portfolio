// import { motion } f7rom "motion/react";
import { ArrowDown } from 'phosphor-react';
import { Tag } from '../../components/Tag/Tag';
import { Paragraph } from '../../components/Typograph/Text';
import { Title } from '../../components/Typograph/Title';
import { DataContentProps } from '../../model';
import { 
	BoxStyled,  
	DividerStyled, 
	SectionStyled, 
	TagBoxStyled, 
	MainTextStyled,
	TextBottomStyled,
	ContainerBoxStyled, 
	HrefWorkButtonStyled,
} from './Introduction.styles';

export function Introduction({ lang, content }:{ lang: string, content: DataContentProps }) {
	return ( 	
		<SectionStyled>
			<BoxStyled> 
				<MainTextStyled>
					<Title>{ content.intro.title }</Title>
				</MainTextStyled>

				<TagBoxStyled> 
					{content.intro.tags.map((tag: string) => 
						<Tag key={tag} tagName={tag}/>
					)}
				</TagBoxStyled>
			</BoxStyled>
			
			<ContainerBoxStyled>
				<DividerStyled/>
				<TextBottomStyled>
					<Paragraph size="xs">{ content.intro.location }</Paragraph>
					<HrefWorkButtonStyled href={lang === 'EN' ? '#works' : '#trabalhos'}>
						{ content.intro.textButton }
						<ArrowDown size={18} />
					</HrefWorkButtonStyled>
				</TextBottomStyled>
			</ContainerBoxStyled>
		</SectionStyled>
	)   
}