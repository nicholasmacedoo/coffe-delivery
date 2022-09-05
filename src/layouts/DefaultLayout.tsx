import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Container, Footer } from './styles'

export function DefaultLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer>
        <p>Desenvolvido com ❤️ por Nicholas Macedo</p>
      </Footer>
    </Container>
  )
}
