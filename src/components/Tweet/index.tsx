import React from 'react';

import {
  Container,
  Retwitted,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  Dot,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retwitted>
        <p>
          <RetweetIcon />
          Você retwittou
        </p>
      </Retwitted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Jones ManoBrown</strong>
            <span>@gatodogta_sa</span>
            <Dot />
            <time>27 de jun</time>        
          </Header>

          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsum in, nihil commodi modi expedita ab cumque consequatur? Itaque modi alias repudiandae consequatur officiis incidunt magni voluptate temporibus distinctio fugiat!
          </Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
                18
            </Status>
            <Status>
              <RetweetIcon />
              999
            </Status>
            <Status>
              <LikeIcon />
                1
            </Status>
          </Icons>

        </Content>
      </Body>

    </Container>
  );
}

export default Tweet;