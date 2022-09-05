import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 4.5rem;
  height: 2rem;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme['base-title']};
  border-radius: 6px;
  display: flex;
  align-items: center;

  button {
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.purple};
  }
`

export const Input = styled.input`
  width: 100%;
  border: 0;
  background: transparent;
  padding-left: 0.25rem;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
