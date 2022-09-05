import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const WrapperContainer = styled.header`
  width: 100%;
  padding: 2rem;
`
export const Container = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ContainerLocationAndCart = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border-radius: 0.375rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme['purple-light']};
  color: ${({ theme }) => theme['purple-dark']};
`

export const ButtonCart = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  padding: 0.5rem;

  border: 0;
  background: ${({ theme }) => theme['yellow-light']};
  color: ${({ theme }) => theme['yellow-dark']};
  transition: ease 0.2s;

  position: relative;
  &:hover {
    filter: brightness(0.9);
  }
`

export const BadgeCartCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;

  background: ${({ theme }) => theme['yellow-dark']};
  color: ${({ theme }) => theme.white};

  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
`
