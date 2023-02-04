import styled, { css } from 'styled-components';
import { ChatDots, Favorite, Retweet } from '../../styles/icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.875rem 1rem;
  max-width: 100%;

  border-bottom: 1px solid var(--outline);
`

export const Retwitted = styled.div`
  display: flex;
  align-itens: center;

  border-radius: 25px;

  margin-left: 2.1875rem;

  > p {
    background-color: none;
    color: var(--gray);

    padding: .5rem .5rem .5rem .25rem;
    border-radius: 50px;

    font-size: 0.8125rem;
    font-weight: bold;

    cursor: pointer;

    &:hover {
      text-decoration: underline;
      background: var(--twitter-dark-hover);
    }
  }
`

export const RetweetIcon = styled(Retweet)`
  height: 1.25rem;
  width: 1.25rem;
  
  margin-right: 0.25rem;

  > path {
    fill: var(--gray);
  }
`

export const Body = styled.div`
  display: flex;

  margin-top: .1rem;

  position: relative;
`

export const Avatar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  
  background-color: var(--gray);

  width: 3rem;
  height: 3rem;

  border-radius: 50%;

  flex-shrink: 0;

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: .6;
  }

`
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding-left: 3.75rem;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  
  font-size: 1rem;
  white-space: nowrap;

  > strong {
    margin-right: .5rem;
  }

  > span, time {
    color: var(--gray);
  }

  > strong, span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const Dot = styled.div`
  background-color: var(--gray);

  height: .2rem;
  width: .2rem;

  flex-shrink: 0;

  margin: .2rem .75rem 0 .75rem;

  border-radius: 50%;  
`

export const Description = styled.p`
  font-size: 0.875rem;
  margin-top: .25rem;
`
export const ImageContent = styled.div`
  background-color: var(--gray);

  margin-top: .75rem;

  width: 100%;
  height: min(17.8125rem, max(10.9375rem, 41vw));

  cursor: pointer;

  border-radius: .875rem;

  transition: all 0.1s ease-in-out;

  &:hover {
    opacity: .7;
  }
`
export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  margin: .75rem auto 0;
  width: 100%;

  @media (min-width: 330px) {
    width: 65%;
  }

  > div {
    cursor: pointer;
    
    &:hover {
      opacity: .7;
    }
  }

`

const IconCss = css`
  width: 1.1875rem;
  height: 1.1875rem;
`

export const Status = styled.div`
  display: flex;
  align-items: center;

  color: var(--gray);

  font-size: .875rem;

  > svg {
    margin-right: .25rem;
  }

  &:first-child {
    &, > svg path {
      color: var(--gray);
    }
  }

  &:nth-child(2) {
    color: var(--retweet);

    > svg, svg path {
      width: 1.75rem;
      height: 1.75rem;
      fill: var(--retweet);
    }    
  }

  &:last-child {
    color: var(--like);

    > svg path {
      fill: var(--like);
    }
  }
`

export const CommentIcon = styled(ChatDots)`
  ${IconCss}  
`

export const LikeIcon = styled(Favorite)`
  ${IconCss}
`