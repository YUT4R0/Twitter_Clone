import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--secondary);
  border-radius: .75rem;

`;

export const Item = styled.div`
  padding: 0.625rem 1rem;

  &:first-child {
    padding-top: 0.8125rem;
  }

  & + div {
    border-top: 1px solid var(--outline);
    cursor: pointer;
    transition: background .1s ease-in-out;

    &:hover {
      background: #0f1114;
    }
  }

  &:last-child {
    padding-bottom: 1rem;
  }

`

export const Title = styled.span`
  font-weight: bold;
  font-size: 1.1875rem;
`

