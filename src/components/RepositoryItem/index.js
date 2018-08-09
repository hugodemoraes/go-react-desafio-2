import React from 'react';
import PropTypes from 'prop-types';

import RepositoryInfo from '../RepositoryInfo';

import { Container } from './styles';

const RepositotyItem = ({ repository, handleGetIssues }) => (
  <Container onClick={e => handleGetIssues(repository)}>
    <RepositoryInfo repository={repository} />
    <i className="fa fa-chevron-right" />
  </Container>
);

RepositotyItem.propTypes = {
  repository: PropTypes.shape().isRequired,
  handleGetIssues: PropTypes.func.isRequired,
};

export default RepositotyItem;
