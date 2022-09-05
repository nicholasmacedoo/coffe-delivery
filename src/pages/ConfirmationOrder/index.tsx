import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  Container,
  Heading,
  Wrapper,
  Details,
  IconBox,
  ImageContainer,
} from './styles'

export function ConfirmationOrder() {
  return (
    <Container>
      <Heading>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Heading>
      <Wrapper>
        <Details>
          <div>
            <IconBox variant="purple">
              <MapPin />
            </IconBox>
            <p>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong> <br />
              Farrapos - Porto Alegre, RS
            </p>
          </div>
          <div>
            <IconBox variant="yellow">
              <Timer />
            </IconBox>
            <p>
              Previsão de entrega <br />
              <strong>20 min - 30 min</strong>
            </p>
          </div>
          <div>
            <IconBox variant="yellow">
              <CurrencyDollar />
            </IconBox>
            <p>
              Pagamento na entrega <br />
              <strong>Cartão de Crédito</strong>
            </p>
          </div>
        </Details>
        <ImageContainer>
          <img src="/confirmation-order.png" alt="" />
        </ImageContainer>
      </Wrapper>
    </Container>
  )
}
