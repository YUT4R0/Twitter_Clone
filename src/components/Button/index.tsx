import styled from 'styled-components'

interface Props {
  outlinned ? : boolean
}

export default styled.button<Props>`
  background: ${
              (props) => props.outlinned
              ? 'transparent'
              : 'var(--twitter)'
              };
  color: ${
          (props) => props.outlinned
          ? 'var(--twitter)'
          : 'var(--white)'
          };
  border ${
          (props) => props.outlinned
          ? '1px solid var(--twitter)'
          : 'none'
          };
  padding: 1rem;
  border-radius: 50px;
  font-weight: bold;
  font-size: 0.9375rem;
  cursor: pointer;
  outline: 0;

  &:hover {
    background: ${
                (props) => props.outlinned
                ? 'var(--twitter-dark-hover)'
                : 'var(--twitter-light-hover)'
                }
  }

`;