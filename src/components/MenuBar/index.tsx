/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  BottomSide,
  ProfileData,
  ExitIcon,
} from './styles';
import Button from '../Button'
import profilepic from '../assets/profilepic.svg'

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
          <Logo title="OwO" />

          <MenuButton>
            <HomeIcon />
            <span>Página inicial</span>
          </MenuButton>

          <MenuButton>
            <BellIcon />
            <span>Notificações</span>
          </MenuButton>

          <MenuButton>
            <EmailIcon />
            <span>Mensagens</span>
          </MenuButton>

          <MenuButton>
            <FavoriteIcon />
            <span>Favoritos</span>
          </MenuButton>
          
          <MenuButton className="active">
            <ProfileIcon />
            <span>Perfil</span>
          </MenuButton>

          <Button>
            <span>Tweetar</span>
          </Button>
      </TopSide>

      <BottomSide>
        
        <img src={profilepic} />

        <ProfileData>
          <strong>guilhereme boulos</strong>
          <span>@guilherme boulos</span>
        </ProfileData>

        <ExitIcon title="Exit Account"/>

      </BottomSide>

    </Container>
  );
}

export default MenuBar;