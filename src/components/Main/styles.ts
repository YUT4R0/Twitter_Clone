import { ArrowLeft, Home, Search, Notifications, Email } from '../../styles/icons';
import styled, { css } from 'styled-components';



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(601px, 100%);

  @media(min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-left: 1px solid var(--outline);
  }

`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  text-align: left;

  background: var(--primary);
  border-bottom: 1px solid var(--outline);
  
  padding: .5rem 0 0.5625rem 0.8125rem;

  > button {
    padding: .5rem;
    border-radius: 50%;
    outline: 0;
    cursor: pointer;

    &:hover {
      background: var(--twitter-dark-hover);
    }
  }

`
export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  > strong {
    font-size: 1.1875rem;
    font-weight: 700;
  }

  > span {
    font-size: 0.9375rem;
    color: var(--gray)
  }

`

export const BackIcon = styled(ArrowLeft)`
  width: 1.5rem;
  height: 1.5rem;
  fill: var(--twitter);
`

export const BottomMenu = styled.div`
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;

  background: var(--primary);
  border-top: 1px solid var(--outline);

  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: .5rem min(3rem, max(10vw, .625rem));

  @media(min-width: 500px) {
    display: none;
     
  }
`

const IconsCss = css`
  height: 1.875rem;
  width: 1.875rem;
  fill: var(--gray);
  cursor: pointer;
  background: none;
  border-radius: 50%;

  &:hover {
    fill: var(--twitter);
  }
  &.active {
    fill: var(--twitter);
    background: var(--twitter-dark-hover);
  }
`

export const HomeIcon = styled(Home)`
  ${IconsCss}
`
export const SearchIcon = styled(Search)`
  ${IconsCss}
`
export const BellIcon = styled(Notifications)`
  ${IconsCss}
`
export const EmailIcon = styled(Email)`
  ${IconsCss}
`