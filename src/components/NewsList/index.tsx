import React from 'react';
import { Container } from './styles';
import { You } from '../ProfilePage'

const NewsList: React.FC = () => {
  return (
    <Container>
      <span>
        Assuntos do momento no {You.country}
      </span>
      <strong>Bolonaro is dead</strong>
    </Container>
  );
}

export default NewsList;