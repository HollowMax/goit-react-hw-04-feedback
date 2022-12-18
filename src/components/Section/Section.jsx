import { SectionItem } from './Section.styled';
import PropTypes from 'prop-types';

export function Section({ children, title }) {
  return (
    <SectionItem>
      <h2>{title}</h2>
      {children}
    </SectionItem>
  );
}

Section.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};
