import { ShoppingCart } from 'phosphor-react'
import { FormEvent } from 'react'
import { CoffeProps } from '../../types/Coffees'
import { InputAmount } from '../InputAmount'
import {
  ButtonCart,
  Categories,
  Category,
  Container,
  Content,
  Footer,
  ImageCoffe,
  Price,
} from './styles'

interface CardCoffeProps {
  data: CoffeProps
  onAddCart: (quantity: number) => void
}
export function CardCoffe({ data, onAddCart }: CardCoffeProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formdata = new FormData(event.target as HTMLFormElement)
    const quantity = formdata.get('quantity')
    onAddCart(Number(quantity || 0))
  }

  return (
    <Container>
      <Content>
        <ImageCoffe src={data.img} />
        <Categories>
          {data.categories.map((category) => (
            <Category key={category}>{category}</Category>
          ))}
        </Categories>
        <strong>{data.title}</strong>
        <p>{data.description}</p>
      </Content>
      <Footer>
        <Price>
          <span>R$</span>
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              minimumFractionDigits: 2,
            }).format(data.price)}
          </strong>
        </Price>
        <form action="" onSubmit={handleSubmit}>
          <InputAmount name="quantity" min={0} />
          <ButtonCart>
            <ShoppingCart size={16} />
          </ButtonCart>
        </form>
      </Footer>
    </Container>
  )
}
