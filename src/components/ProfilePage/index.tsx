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

interface YourUser {
  name: string;
  email: string;
  country: string;
}

export const You:YourUser = {
  name: "guilherme boulos",
  email: "@macarao_com_salsixa",
  country: "Brasil"
}

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

        <h1>{ You.name }</h1>
        <h2>{You.email}</h2>

        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="Youtube.com">meu canal</a>
        </Description>

        <UserInfo>
          <li>
            <Location />
            São Paulo, {You.country}
          </li>
          <li> 
            <CakeIcon />
            nascido em 19/01/2004
          </li>
        </UserInfo>

        <Followage>
          <span>
            Seguindo <strong>{Math.floor(Math.random() * 100)}</strong>
          </span>
          <span>
          <strong>{Math.floor(Math.random() * 10000)}</strong> Seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />

    </Container>
  )
}

export default ProfilePage