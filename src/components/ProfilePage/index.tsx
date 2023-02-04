/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
  Container,
  Banner,
  ProfileData,
  Description,
  UserInfo,
  Location,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';
import Feed from '../Feed';
import profilepic from '../assets/profilepic.svg';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <img src={profilepic}/>
      </Banner>

      <ProfileData>

        <EditButton outlinned>
          Edit profile
        </EditButton>

        <h1>guilherme boulos</h1>
        <h2>@guilherme_boulos</h2>

        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="Youtube.com">meu canal</a>
        </Description>

        <UserInfo>
          <li>
            <Location />
            São Paulo, Brasil
          </li>
          <li> 
            <CakeIcon />
            nascido em 19/01/2004
          </li>
        </UserInfo>

        <Followage>
          <span>
            Seguindo <strong>69</strong>
          </span>
          <span>
          <strong>6969</strong> Seguidores
          </span>
        </Followage>

        <Feed />

      </ProfileData>
    </Container>
  )
}

export default ProfilePage