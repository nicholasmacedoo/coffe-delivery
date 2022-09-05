import { useState, useEffect } from 'react'
import coffeBannerImage from '../../assets/coffe-banner.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { toast } from 'react-toastify'
import {
  ContainerBanner,
  ContentBanner,
  ListFeatures,
  BannerDescription,
  BannerImage,
  ItemFeatureContainer,
  ItemFeatureIconContainer,
  ContainerCoffees,
  ListCoffees,
} from './styles'
import { CardCoffe } from '../../components/CardCoffe'
import { CoffeProps } from '../../types/Coffees'
import { useCart } from '../../hooks/Cart'

export const FEATURES = [
  {
    icon: <ShoppingCart size={16} />,
    title: 'Compra simples e segura',
    color: 'yellow-dark',
  },
  {
    icon: <Package size={16} />,
    title: 'Embalagem mantém o café intacto',
    color: 'dark',
  },
  {
    icon: <Timer size={16} />,
    title: 'Entrega rápida e rastreada',
    color: 'yellow',
  },
  {
    icon: <Coffee size={16} />,
    title: 'O café chega fresquinho até você',
    color: 'purple',
  },
] as const

export function Home() {
  const notify = toast
  const { addProduct } = useCart()
  const [coffees, setCoffees] = useState<CoffeProps[]>([])

  function handleAddCart(productId: number, quantity: number) {
    if (quantity < 1) return alert('Por favor, informe a quantidade do café')
    addProduct(productId, quantity)
    notify.success('Café adicionado ao carrinho')
  }

  useEffect(() => {
    fetch('http://localhost:3333/coffees')
      .then((response) => response.json())
      .then((data: CoffeProps[]) => setCoffees(data))
  }, [])

  return (
    <>
      <ContainerBanner>
        <ContentBanner>
          <BannerDescription>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <ListFeatures>
              {FEATURES.map((feature) => (
                <ItemFeatureContainer key={feature.title}>
                  <ItemFeatureIconContainer colorSchema={feature.color}>
                    {feature.icon}
                  </ItemFeatureIconContainer>
                  <p>{feature.title}</p>
                </ItemFeatureContainer>
              ))}
            </ListFeatures>
          </BannerDescription>
          <BannerImage>
            <img src={coffeBannerImage} alt="" />
          </BannerImage>
        </ContentBanner>
      </ContainerBanner>

      <ContainerCoffees>
        <h2>Nossos cafés</h2>
        <ListCoffees>
          {coffees.map((coffe) => (
            <CardCoffe
              key={coffe.id}
              data={coffe}
              onAddCart={(quantity) => handleAddCart(coffe.id, quantity)}
            />
          ))}
        </ListCoffees>
      </ContainerCoffees>
    </>
  )
}
