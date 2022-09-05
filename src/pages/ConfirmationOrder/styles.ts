import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 2.5rem auto 0;
`

export const Heading = styled.div`
  margin-bottom: 2.5rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
    margin-bottom: 0.25rem;
    color: ${({ theme }) => theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding-bottom: 4rem;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
  border-radius: 6px 36px;
  border: 1px solid transparent;
  position: relative;
  background-color: ${({ theme }) => theme.background};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -2px;
    border-radius: inherit;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.yellow},
      ${({ theme }) => theme.purple}
    );
  }

  > div {
    display: flex;
    gap: 0.75rem;
  }
`
interface IconProps {
  variant: 'purple' | 'yellow' | 'yellow-dark'
}

export const IconBox = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme, variant }) => theme[variant]};

  p {
    color: ${({ theme }) => theme['base-text']};
  }
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 293px;
  }
`
