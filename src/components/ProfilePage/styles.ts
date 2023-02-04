import styled, { css } from 'styled-components';
import { LocationOn, Cake } from '../../styles/icons';
import Button from '../Button';

export const Container = styled.div`
  display: flex; 
  flex-direction: column;

  height: 100%;

  overflow-y: auto;
  ::webkit-scrollbar {
    display: none;
  }
`

export const Banner = styled.div`
  position: relative;

  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 12.5rem);

  background: var(--twitter);

  > img {
      position: absolute;

      bottom: max(-3.75rem, -10vh);
      left: 1rem;

      height: max(2.8125rem, min(8.4375rem, 22vh));
      width: max(2.8125rem, min(8.4375rem, 22vh));

      border-radius: 50%;
      border: 3.75px solid var(--primary);
      background: #bf0254;
      cursor: pointer;

      transition: all .2s ease-in-out;

      &:hover {
        filter: brightness(.7);
      }
  }
`
export const ProfileData = styled.div`
  position: relative;

  padding:
          min(calc(10vw + .5rem), 4.1875rem)
          1rem
          0;
  display: flex;
  flex-direction: column;

  > h1 {
    font-weight: bold;
    font-size: 1.1875rem;
  }

  > h2 {
    font-weight: normal;
    font-size: 0.9375rem;
    color: var(--gray);
  }

`

export const Description = styled.div`
  font-size: .0.9375rem;

  margin-top: 0.6875rem;

  a {
    text-decoration: none;
    color: var(--twitter);

    &:hover {
      text-decoration: underline;
    }
  }
`

export const UserInfo = styled.ul`
  list-style: none;

  margin: 0.625rem 0 0.625rem 0;

  > li {
    font-size: 0.9375rem;
    color: var(--gray);

    display: flex;
    align-items: center;
    gap: .45rem;
  }
`

const IconsCss = css`
  height: 1.25rem;
  width: 1.25rem;
  fill: var(--gray);
`

export const Location = styled(LocationOn)`
${IconsCss}
`
export const CakeIcon = styled(Cake)`
${IconsCss}
`
export const Followage = styled.div`
  display: flex;
  gap: .5rem;

  > span {
    font-size: 0.9375rem;
    color: var(--gray);
    padding: .5rem;
    border-radius: 5px;

    &:hover {
      cursor: pointer;
      background: #080808;
    }
  }
`

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: .5rem;
  padding: 0.25rem 1rem;
  font-size: 0.8125rem;

  @media (min-width: 320px) {
    top: 0.625rem;
    padding: 0.625rem 1.1875rem;
    font-size: 1rem;
  }

`