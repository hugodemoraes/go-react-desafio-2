import React from 'react';
import PropTypes from 'prop-types';

import { List } from './styles';
import RepositoryItem from '../RepositoryItem';

const RepositoriesList = ({ repositories, handleGetIssues }) => (
  <List>
    {repositories.map(repository => (
      <RepositoryItem
        repository={repository}
        key={repository.id}
        handleGetIssues={handleGetIssues}
      />
    ))}
  </List>
);

RepositoriesList.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),).isRequired,
  handleGetIssues: PropTypes.func.isRequired,
};

export default RepositoriesList;
