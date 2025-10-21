import { TagStyled } from "./Tag.styles";

export function Tag({
  tagName,
  className,
}: {
  tagName: string;
  className?: string;
}) {
  return (
    <TagStyled {...(className ? { className } : {})}>
      <p>{tagName}</p>
    </TagStyled>
  );
}
