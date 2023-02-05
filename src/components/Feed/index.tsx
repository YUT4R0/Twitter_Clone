import React from 'react';
import { Container, Tab, Tweets } from './styles';
import Tweet from '../Tweet';

export const tweet_count = 5

const Feed: React.FC = () => {

  const tweetsArray = Array.from( Array(tweet_count) ).map((tweet, i) => (
    <Tweet key={i}/>
  ))

  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>{tweetsArray}</Tweets>

    </Container>
  );
}

export default Feed;