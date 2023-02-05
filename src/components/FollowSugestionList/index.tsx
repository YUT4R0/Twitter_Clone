import React from 'react';
import { Container, Avatar, UserInfo, FollowButton, } from './styles';

interface Props {
  name: string;
  email: string;
}

const FollowSugestionList: React.FC<Props> = ({ name, email }) => {
  return (
    <Container>
      <div>
        <Avatar />
        <UserInfo>
          <strong>{name}</strong>
          <span>{email}</span>
        </UserInfo>
      </div>

        <FollowButton outlinned>Seguir</FollowButton>
    </Container>
  );
}

export default FollowSugestionList;