import PropTypes from 'prop-types';
import { Section } from './SectionForm.styled';

function SectionForm({ children }) {
  return <Section>{children}</Section>;
}

Section.propTypes = {
  children: PropTypes.node,
};

export default SectionForm;
