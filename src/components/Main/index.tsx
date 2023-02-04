import React from 'react';
import {
  Container,
  Header,
  ProfileInfo,
  BackIcon,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';
import ProfilePage from '../ProfilePage'

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>guilherme boulos</strong>
          <span>666 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
        <HomeIcon className='active' />
        <SearchIcon/>
        <BellIcon/>
        <EmailIcon/>
      </BottomMenu>

    </Container>
  )
}

export default Main;