import {
  WrapperContainer,
  Container,
  ButtonCart,
  BadgeCartCount,
  ContainerLocationAndCart,
  Location,
} from './styles'
import logotipo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useCart } from '../../hooks/Cart'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

interface IResultGoogleMaps {
  address_components: {
    long_name: string
    short_name: string
  }[]
}
export function Header() {
  const { cart } = useCart()
  const [location, setLocation] = useState('')

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude

        fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?key=${
            import.meta.env.VITE_KEY_GOOGLEMAPS
          }&latlng=${latitude},${longitude}`,
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.results) {
              const { address_components: address } = data
                .results[0] as IResultGoogleMaps

              setLocation(`${address[2].short_name}, ${address[4].short_name}`)
            }
          })
      })
    }
  }, [])
  return (
    <WrapperContainer>
      <Container>
        <NavLink to={'/'}>
          <img src={logotipo} alt="Coffe Delivery" />
        </NavLink>
        <ContainerLocationAndCart>
          <Location>
            <MapPin weight="fill" size={22} />
            {location}
          </Location>
          <ButtonCart to="/cart">
            {cart.length > 0 && <BadgeCartCount>{cart.length}</BadgeCartCount>}
            <ShoppingCart weight="fill" size={22} />
          </ButtonCart>
        </ContainerLocationAndCart>
      </Container>
    </WrapperContainer>
  )
}
