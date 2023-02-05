import styled from 'styled-components';
import Button from '../Button'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  height: 3.0625rem;
  width: 3.0625rem;
  border-radius: 50%;
  background: var(--gray);
  margin-right: 0.625rem;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;

  > span {
    color: var(--gray);
  }
`

export const FollowButton = styled(Button)`
  padding: 0.375rem 1rem;
`

