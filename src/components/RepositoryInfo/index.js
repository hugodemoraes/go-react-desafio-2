import React from 'react';
import PropTypes from 'prop-types';

import { Container, Details } from './styles';

const RepositotyItem = ({ repository }) => (
  <Container>
    <img src={repository.owner.avatar_url} alt={repository.owner.login} />
    <Details>
      <strong>{repository.name}</strong>
      <small>{repository.owner.login}</small>
    </Details>
  </Container>
);

RepositotyItem.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
  }).isRequired,
};

export default RepositotyItem;
