import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 2.5rem auto 0;
  display: flex;
  gap: 2rem;
  padding-bottom: 4rem;
`

export const CompleteOrderContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
export const CartContainer = styled.div`
  width: 100%;
  max-width: 31.125rem;
`
export const Card = styled.div`
  padding: 2.5rem;
  background-color: ${({ theme }) => theme['base-card']};
  border-radius: 6px;
`
export const CardCart = styled(Card)`
  border-radius: 6px 44px;
`

export const Heading = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  strong {
    font-weight: normal;
    line-height: 1.3;
  }

  p {
    font-size: 0.75rem;
    line-height: 1.3;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    gap: 0.75rem;
  }
`

interface ButtonTypePaymentProps {
  isActive?: boolean
}

export const ButtonTypePayment = styled.button<ButtonTypePaymentProps>`
  height: 3.1875rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme['base-button']};
  border: 1px solid transparent;
  font-size: 0.75rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 6px;

  &:hover {
    background-color: ${({ theme }) => theme['base-hover']};
  }

  ${({ isActive, theme }) =>
    isActive &&
    css`
      border-color: ${theme.purple};
      background-color: ${theme['purple-light']};

      &:hover {
        background-color: ${theme['purple-light']};
      }
    `}
`

export const GroupTypePayment = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 6.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme['base-input']};
  color: ${({ theme }) => theme['base-text']};
  margin-bottom: 1.25rem;
  font-size: 0.875rem;

  a {
    color: ${({ theme }) => theme.purple};
    text-decoration: none;
    margin-top: 0.5rem;

    &:hover {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }
`

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme['base-button']};
  > div {
    display: flex;
    gap: 1.25rem;

    strong {
      font-weight: normal;
      color: ${({ theme }) => theme['base-title']};
    }

    img {
      height: 4rem;
      width: 4rem;
    }
  }

  & + div {
    margin-top: 2rem;
  }
`
export const ProductFooter = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`
export const ButtonDeleteProduct = styled.button`
  height: 2rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border: 0;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme['base-text']};
`

export const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    p {
      font-size: 0.875rem;
      line-height: 1.3;
    }

    strong {
      font-size: 1.25rem;
      color: ${({ theme }) => theme['base-subtitle']};
    }
  }
`
export const ButtonConfirmOrder = styled.button`
  height: 2.875rem;
  width: 100%;
  padding: 0.75rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.yellow};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme['yellow-dark']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
