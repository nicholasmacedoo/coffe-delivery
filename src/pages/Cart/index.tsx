import { useState, useRef } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { useCart } from '../../hooks/Cart'
import { toast } from 'react-toastify'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { Input } from '../../components/Input'
import { InputAmount } from '../../components/InputAmount'
import {
  ButtonConfirmOrder,
  ButtonDeleteProduct,
  ButtonTypePayment,
  Card,
  CardCart,
  CartContainer,
  CartFooter,
  CompleteOrderContainer,
  Container,
  EmptyCart,
  FormContainer,
  GroupTypePayment,
  Heading,
  Product,
  ProductFooter,
} from './styles'

const DELIVERY_PRICE = 5.6

export function Cart() {
  const formRef = useRef<HTMLFormElement>(null)
  const colors = useTheme()
  const navigate = useNavigate()

  const { cart, removeProduct, updateProductAmount, submitOrder } = useCart()
  const [typePayment, setTypePayment] = useState<'credit' | 'debit' | 'money'>(
    'debit',
  )

  const deliveryPriceCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(DELIVERY_PRICE)

  const calcutionTotalItens = cart.reduce(
    (accumulator, currentProduct) => accumulator + currentProduct.total,
    0,
  )
  const totalItens = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(calcutionTotalItens)

  const calculationTotal = calcutionTotalItens + DELIVERY_PRICE

  const total = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(calculationTotal)

  function handleDeleteProduct(id: number) {
    removeProduct(id)
  }

  function handleUpdateQuantity(id: number, quantity: number) {
    updateProductAmount(id, quantity)
  }

  function handleSubmitOrder() {
    if (formRef.current) {
      const formdata = new FormData(formRef.current)
      const data = {
        zip_code: formdata.get('zip_code'),
        street: formdata.get('street'),
        number: formdata.get('number'),
        complement: formdata.get('complement'),
        district: formdata.get('district'),
        city: formdata.get('city'),
        state: formdata.get('state'),
        type_payment: typePayment,
      }
      submitOrder(data)
      navigate('/confirmation-order')
      toast.success(
        'Pedido realizado com sucesso, agora é só aguardar a entrega!',
      )
    }
  }

  return (
    <Container>
      <CompleteOrderContainer>
        <Card>
          <Heading>
            <MapPinLine size={22} color={colors['yellow-dark']} />
            <div>
              <strong>Endereço de Entrega</strong>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Heading>

          <FormContainer ref={formRef}>
            <Input
              name="zip_code"
              placeholder="CEP"
              style={{ maxWidth: 200 }}
              required
            />

            <Input name="street" placeholder="Rua" required />
            <div>
              <Input
                name="number"
                placeholder="Número"
                style={{ maxWidth: 200 }}
                required
              />
              <Input name="complement" placeholder="Complemento" />
            </div>
            <div>
              <Input
                name="district"
                placeholder="Bairro"
                style={{ maxWidth: 200 }}
                required
              />
              <Input name="city" placeholder="Cidade" required />
              <Input
                name="state"
                placeholder="UF"
                style={{ maxWidth: 60 }}
                required
              />
            </div>
          </FormContainer>
        </Card>
        <Card>
          <Heading>
            <CurrencyDollar size={22} color={colors.purple} />
            <div>
              <strong>Pagamento</strong>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </Heading>
          <GroupTypePayment>
            <ButtonTypePayment
              onClick={() => setTypePayment('credit')}
              isActive={typePayment === 'credit'}
            >
              <CreditCard size={16} color={colors.purple} />
              Cartão de crédito
            </ButtonTypePayment>
            <ButtonTypePayment
              onClick={() => setTypePayment('debit')}
              isActive={typePayment === 'debit'}
            >
              <Bank size={16} color={colors.purple} />
              Cartão de débito
            </ButtonTypePayment>
            <ButtonTypePayment
              onClick={() => setTypePayment('money')}
              isActive={typePayment === 'money'}
            >
              <Money size={16} color={colors.purple} />
              Dinheiro
            </ButtonTypePayment>
          </GroupTypePayment>
        </Card>
      </CompleteOrderContainer>
      <CartContainer>
        <CardCart>
          {cart.length > 0 ? (
            cart.map((product) => (
              <Product key={product.id}>
                <div>
                  <img src={product.img} alt={product.title} />
                  <div>
                    <strong>{product.title}</strong>
                    <ProductFooter>
                      <InputAmount
                        name="quantity"
                        onChangeValue={(quantity) =>
                          handleUpdateQuantity(product.id, quantity)
                        }
                        value={product.quantity}
                      />
                      <ButtonDeleteProduct
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        <Trash size={16} color={colors.purple} />
                        Remover
                      </ButtonDeleteProduct>
                    </ProductFooter>
                  </div>
                </div>
                <strong>{product.totalCurrency}</strong>
              </Product>
            ))
          ) : (
            <EmptyCart>
              <p>Nenhum café adicionado ao carrinho.</p>
              <NavLink to="/">Selecione o melhor café para você!</NavLink>
            </EmptyCart>
          )}
          <CartFooter>
            <div>
              <p>Total de itens</p>
              <p>{totalItens}</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>{deliveryPriceCurrency}</p>
            </div>
            <div>
              <strong>Total</strong>
              <strong>{total}</strong>
            </div>
            <ButtonConfirmOrder
              disabled={cart.length === 0}
              onClick={handleSubmitOrder}
            >
              confirmar pedido
            </ButtonConfirmOrder>
          </CartFooter>
        </CardCart>
      </CartContainer>
    </Container>
  )
}
