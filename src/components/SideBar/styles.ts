import styled from 'styled-components';
import { Search } from '../../styles/icons'

export const Container = styled.div`
  display: none;

  @media(min-width: 62.5rem) {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: min(25rem, 100%);
  }
`;

export const SearchWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;

  background: var(--primary);

  padding: .625rem 1.5rem;
  
  width: min(25rem, 100%);
  max-height: 3.5625rem;
`

export const SearchInput = styled.input`
  width: 100%;
  height: 2.5rem;

  background: var(--search);

  font-size: 0.875rem;
  padding: 0 0.625rem 0 3.25rem;

  border-radius: 25px;

  outline: 0;

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    z-index: 1;
    top: -2.0625rem;
    left: 1rem;

    transition: all 180ms ease-in-out;
  }

  &:focus {
    border: 1px solid var(--twitter);
    ~ svg {
      fill: var(--twitter);
    }
  }
`

export const SearchIcon = styled(Search)`
  height: 1.6875rem;
  width: 1.6875rem;

  fill: var(--gray);
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6875rem 1.5rem 12.5rem;
  margin-top: 2.25rem;
  width: 100%;
  
  > div + div{
    margin-top: 1rem;
  }

`

