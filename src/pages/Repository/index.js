import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';

import Container from '../../components/Container';
import {
  Loading,
  Owner,
  IssueList,
  IssueFilter,
  BoxPagination,
} from './styles';

export default class Repository extends Component {
  constructor(props) {
    super(props);

    Repository.propTypes = {
      match: PropTypes.shape({
        params: PropTypes.shape({
          repository: PropTypes.string,
        }),
      }).isRequired,
    };

    this.state = {
      repository: {},
      issues: [],
      loading: true,
      filterIndex: 0,
      page: 1,
      filters: [
        { state: 'all', label: 'Todas', active: true },
        { state: 'open', label: 'Abertas', active: false },
        { state: 'close', label: 'Fechadas', active: false },
      ],
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`repos/${repoName}`),
      api.get(`repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  // Função responsável por carregar as Issues
  loadIssues = async () => {
    const { match } = this.props;
    const { filters, filterIndex, page } = this.state;

    const repoName = decodeURIComponent(match.params.repository);
    const response = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: filters[filterIndex].state,
        per_page: 5,
        page,
      },
    });

    this.setState({ issues: response.data });
  };

  // Função responsável pela filtragem
  handleClick = (filterIndex) => {
    this.setState({ filterIndex });
    this.loadIssues();
  };

  // Função responsável pela paginação
  handlePage = (action) => {
    const { page } = this.state;
    this.setState({ page: action === 'back' ? page - 1 : page + 1 });
    this.loadIssues();
  };

  render() {
    const { repository, issues, loading, filters } = this.state;

    if (loading) return <Loading>Carregando</Loading>;

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <IssueList>
          <IssueFilter>
            {filters.map((filter, index) => (
              <button
                type="button"
                key={filter.label}
                onClick={() => this.handleClick(index)}
              >
                {filter.label}
              </button>
            ))}
          </IssueFilter>

          {issues.map((issue) => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map((label) => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}

          <BoxPagination>
            <button type="button" onClick={() => this.handlePage('back')}>
              Previous
            </button>
            <button type="button" onClick={() => this.handlePage('next')}>
              Next
            </button>
          </BoxPagination>
        </IssueList>
      </Container>
    );
  }
}
