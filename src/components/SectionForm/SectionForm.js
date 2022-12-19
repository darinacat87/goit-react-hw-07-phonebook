import PropTypes from 'prop-types';
import { Section } from './SectionForm.styled';

export function SectionForm({ children }) {
  return <Section>{children}</Section>;
}

SectionForm.propTypes = {
  children: PropTypes.node,
};