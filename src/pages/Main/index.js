import React, { Component } from 'react';
import api from '../../services/api';

import Sidebar from '../../components/Sidebar';
import Content from '../../components/Content';
import { Container } from './styles';

export default class Main extends Component {
  state = {
    loading: false,
    activeState: 'all',
    selectedRepository: {},
    issues: [],
  };

  handleGetIssues = async (repository, activeState = 'all') => {
    try {
      this.setState({ loading: true });

      const { data: issues } = await api.get(`/repos/${repository.full_name}/issues?state=${activeState}`,);

      this.setState({
        issues,
        selectedRepository: repository,
        activeState,
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <Sidebar handleGetIssues={this.handleGetIssues} />
        <Content
          repository={this.state.selectedRepository}
          loading={this.state.loading}
          handleGetIssues={this.handleGetIssues}
          activeState={this.state.activeState}
          issues={this.state.issues}
        />
      </Container>
    );
  }
}
