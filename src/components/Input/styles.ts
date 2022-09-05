import styled, { css } from 'styled-components'

interface ContainerProps {
  isFocused: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  height: 2.625rem;
  width: 100%;
  background: ${({ theme }) => theme['base-input']};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme['base-button']};
  transition: border 0.2s;
  span {
    font-size: 0.75rem;
    color: ${({ theme }) => theme['base-label']};
    margin-right: 0.75rem;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    padding: 0.75rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-text']};
  }

  &::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-color: ${theme['yellow-dark']};
    `}
`
