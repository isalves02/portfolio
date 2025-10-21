import { TagStyled } from "./Tag.styles"

export function Tag({ tagName }:{ tagName: string }) {
	return (
		<TagStyled>
			<p>{tagName}</p>
		</TagStyled>
	)
}