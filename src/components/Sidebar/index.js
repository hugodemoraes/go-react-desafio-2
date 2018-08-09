import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

import { Container, Form } from './styles';
import RepositoriesList from '../RepositoriesList';

class Sidebar extends Component {
  static propTypes = {
    handleGetIssues: PropTypes.func.isRequired,
  };

  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(`repos/${this.state.repositoryInput}`,);

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
        repositoryError: false,
      });
    } catch (error) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { handleGetIssues } = this.props;

    return (
      <Container>
        <Form
          withError={this.state.repositoryError}
          onSubmit={this.handleAddRepository}
        >
          <input
            type="text"
            placeholder="Novo repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button>
            <i
              className={`fa ${
                this.state.loading ? 'fa-spinner fa-pulse' : 'fa-plus-circle'
              }`}
            />
          </button>
        </Form>

        <RepositoriesList
          repositories={this.state.repositories}
          handleGetIssues={handleGetIssues}
        />
      </Container>
    );
  }
}

export default Sidebar;
