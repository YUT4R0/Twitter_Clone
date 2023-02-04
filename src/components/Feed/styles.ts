import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  margin-top: 0.625rem;
  padding: 0.6875rem 0 1rem;
  text-align: center;

  font-size: 1rem;
  font-weight: bold;
  outline: 0;

  border-bottom: .125rem solid var(--twitter);
  color: var(--twitter);
  background: var(--primary);

  cursor: pointer;
  transition: background .2s ease-in-out;

  &:hover {
    background: var(--twitter-dark-hover)
  }
`

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`