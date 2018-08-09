import React from 'react';
import PropTypes from 'prop-types';

import { Container, IssueInfo } from './styles';

const IssueItem = ({ issue }) => (
  <Container>
    <img src={issue.user.avatar_url} alt={issue.user.login} />
    <IssueInfo>
      <strong>{issue.title}</strong>
      <small>{issue.user.login}</small>
      <a href={issue.html_url} target="_blank">
        <i className="fa fa-external-link-alt" /> Abrir issue
      </a>
    </IssueInfo>
  </Container>
);

IssueItem.propTypes = {
  issue: PropTypes.shape({
    title: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    user: PropTypes.shape({
      avatar_url: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default IssueItem;
