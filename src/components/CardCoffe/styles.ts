import styled from 'styled-components'

export const Container = styled.div`
  height: 19.5rem;
  width: 16rem;
  border-radius: 6px 36px;
  background: ${({ theme }) => theme['base-card']};
  padding: 1.25rem 1.5rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: -2.5rem;

  strong {
    font-size: 1.25rem;
    font-family: 'Baloo 2', cursive;
    line-height: 1.3;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    text-align: center;
    color: ${({ theme }) => theme['base-label']};
  }
`

export const ImageCoffe = styled.img`
  height: 7.5rem;
  width: 7.5rem;
  object-fit: cover;
`

export const Categories = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin: 0.75rem 0 1rem;
`

export const Category = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  background: ${({ theme }) => theme['yellow-light']};
  color: ${({ theme }) => theme['yellow-dark']};
  text-transform: uppercase;

  font-size: 0.625rem;
  font-weight: bold;
  border-radius: 6.25rem;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  form {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const Price = styled.div`
  display: flex;

  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme['base-text']};

  span {
    font-size: 0.875rem;
    line-height: 1.3;
  }

  strong {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.3;
  }
`

export const ButtonCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  padding: 0.5rem;

  border: 0;
  background: ${({ theme }) => theme['purple-dark']};
  color: ${({ theme }) => theme.white};
  transition: ease 0.2s;
  box-shadow: 0 0 0 2px ${(props) => props.theme.purple};

  &:hover {
    background: ${({ theme }) => theme.purple};
  }
`
