import styled from 'styled-components'
import backgroundImage from '../../assets/background.png'

export const ContainerBanner = styled.div`
  width: 100%;
  display: block;
  background-image: url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5.875rem 0 6.75rem;
`

export const ContentBanner = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  gap: 3.5rem;

  h1 {
    font-size: 3rem;
    font-family: 'Baloo 2', cursive;
    line-height: 1.3;
    font-weight: 800;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: 400;
  }
`

export const ListFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 0;
  margin-top: 4.5rem;
`

export const ItemFeatureContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    font-size: 1rem;
    line-height: 1.3;
  }
`
const COLORS_CONTAINER_ICON = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  dark: 'base-title',
  purple: 'purple',
} as const

interface ItemFeatureIconContainerProps {
  colorSchema: keyof typeof COLORS_CONTAINER_ICON
}

export const ItemFeatureIconContainer = styled.div<ItemFeatureIconContainerProps>`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme, colorSchema }) =>
    theme[COLORS_CONTAINER_ICON[colorSchema]]};
`

export const BannerDescription = styled.div`
  flex: 1;
`

export const BannerImage = styled.div`
  width: 100%;
  max-width: 476px;
`

export const ContainerCoffees = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    font-family: 'Baloo 2', cursive;
    line-height: 1.3;
    font-weight: 800;
  }
`

export const ListCoffees = styled.div`
  margin-top: 2rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`
