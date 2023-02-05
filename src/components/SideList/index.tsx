import React from 'react';

import { Container, Item, Title, } from './styles';

interface Props {
  title: string;
  elements: React.ReactNode[];
}

const SideList: React.FC<Props> = ({ title, elements }) => {
  return (
    <Container>

      <Item>
        <Title>{title}</Title>
      </Item>

      {
        elements.map(
        (row, i) => (
          <Item key={i}>
            {row}
          </Item>
        )
        )
      }

    </Container>
  );
}

export default SideList;