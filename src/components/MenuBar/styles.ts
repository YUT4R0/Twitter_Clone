import styled, { css } from 'styled-components';
import { Home, Notifications, Email, FavoriteBorder, Person, Wolframlanguage, ExitToApp } from '../../styles/icons'


export const Container = styled.div`
  display: none;

  @media(min-width: 500px) {
    position: sticky;

    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;    
    justify-content: space-between;

    padding: 0.5625rem 1.1875rem 1.25rem;

    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.25rem;

  @media(min-width: 80rem) {
    align-items: flex-start;
  }
`

export const Logo = styled(Wolframlanguage)`
  height: 2.5625rem;
  width: 2.5625rem;

  cursor: pointer;

  fill: var(--twitter);
`

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  cursor: pointer;

  padding: 0.515625rem 0.5rem ;
  outline: 0;
  border-radius: 5px;

  span {
    display: none;
  }

  @media (min-width: 80rem) {
    > span {
     display: inline;
     font-weight: bold;
     font-size: 1.1875rem;
     margin-left: 1.1875rem;
    }
  }

  &:hover {
    background: var(--twitter-dark-hover);
  }

  &:hover, &.active {
    > span, svg {
      color: var(--twitter);
      fill:  var(--twitter);
    }
  }

  & + button:last-child {
    margin-top: 2rem;

    height: 2.5rem;
    width: 2.5rem;

    span {
      display: none;
    }

    @media(min-width: 80rem) {
      width: 100%;
      height: unset;
      
      > span {
        display: inline;
      }
    }
  }

`

const iconCss = css`
  flex-shrink: 0;

  width: 1.875rem;
  height: 1.875rem; 

  color: var(--white);
`

export const HomeIcon = styled(Home)`
  ${iconCss}
`

export const BellIcon = styled(Notifications)`
  ${iconCss}
`

export const EmailIcon = styled(Email)`
  ${iconCss}
`

export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconCss}
`

export const ProfileIcon = styled(Person)`
  ${iconCss}
`

export const BottomSide = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.25rem;

  gap: 0.625rem;

  > img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    flex-shrink: 0;
    background: #bf0254;
  }

  cursor: pointer;
`

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 80rem) {
    display: flex;
    flex-direction: column;

    font-size: 0.8rem;

    > span {
      color: var(--gray);
    }
  }
`

export const ExitIcon = styled(ExitToApp)`
 display: none;

 @media (min-width: 80rem) {
    display: inline-block;
    height: 1.5625rem;
    width: 1.5625rem;
    margin-left: 1.875rem;

    &:hover {
      fill: var(--like);
    }
  }
`


