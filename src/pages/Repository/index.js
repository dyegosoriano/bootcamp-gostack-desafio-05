import React from 'react';

import { Container } from './styles';

export default function Repository({ match }) {
  return (
    <Container>
      <h1>Repository {decodeURIComponent(match.params.repository)}</h1>
    </Container>
  );
}
