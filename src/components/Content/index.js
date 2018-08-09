import React from 'react';
import PropTypes from 'prop-types';

import RepositoryInfo from '../RepositoryInfo';
import IssueItem from '../IssueItem';

import { Container, Header, Select, Loading, IssuesList } from './styles';

const Content = ({
  repository,
  activeState,
  loading,
  handleGetIssues,
  issues,
}) => (
  <Container>
    <Header>
      {Object.keys(repository).length > 0 ? (
        <RepositoryInfo repository={repository} />
      ) : (
        <div />
      )}
      <Select
        onChange={e => handleGetIssues(repository, e.target.value)}
        value={activeState}
        disabled={Object.keys(repository).length === 0}
      >
        <option value="all">Todas</option>
        <option value="open">Abertas</option>
        <option value="closed">Fechadas</option>
      </Select>
    </Header>
    {loading ? (
      <Loading>
        <i className="fa fa-5x fa-spinner fa-pulse" />
      </Loading>
    ) : (
      <IssuesList>
        {issues.map(issue => (
          <IssueItem issue={issue} key={issue.id} />
        ))}
      </IssuesList>
    )}
  </Container>
);

Content.propTypes = {
  repository: PropTypes.shape().isRequired,
  activeState: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  handleGetIssues: PropTypes.func.isRequired,
  issues: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Content;
