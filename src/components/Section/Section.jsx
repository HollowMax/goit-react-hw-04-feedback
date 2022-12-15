import { SectionItem } from './Section.styled';

export function Section({ children, title }) {
  return (
    <SectionItem>
      <h2>{title}</h2>
      {children}
    </SectionItem>
  );
}
