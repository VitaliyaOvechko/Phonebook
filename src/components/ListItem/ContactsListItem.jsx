import PropTypes from 'prop-types';
import { Text } from '@chakra-ui/react';

export const ContactItem = ({ contact: { name, number } }) => {
  return (
    <Text fontSize="xl">
      {name}: +380{number}
    </Text>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
