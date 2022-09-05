import { createContext, ReactNode, useContext, useState } from 'react'
import { Product, DetailsOrder } from '../types/Cart'

interface CartContextProps {
  cart: Product[]
  addProduct: (productId: number, quantity: number) => Promise<void>
  removeProduct: (productId: number) => Promise<void>
  updateProductAmount: (productId: number, quantity: number) => void
  submitOrder: (detailsOrder: DetailsOrder) => void
}

interface CartProviderProps {
  children: ReactNode
}

const CartContext = createContext<CartContextProps>({} as CartContextProps)

const KEY_STORAGE_CART = '@CoffeDelivery:cart-v:1.0.0'

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>(() => {
    const cartStorage = localStorage.getItem(KEY_STORAGE_CART)
    if (cartStorage) return JSON.parse(cartStorage)
    return []
  })

  async function addProduct(productId: number, quantity: number) {
    try {
      let newCart: Product[]
      const productExists = cart.find((product) => product.id === productId)
      const price = productExists ? productExists.price : 0
      const total = quantity * price
      const totalCurrency = new Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
        style: 'currency',
      }).format(total)

      if (productExists) {
        newCart = cart.map((product) =>
          product.id === productId
            ? {
                ...product,
                quantity: product.quantity + quantity,
                total,
                totalCurrency,
              }
            : product,
        )
      } else {
        const response = await fetch(
          `http://localhost:3333/coffees/${productId}`,
        )
        const product = await response.json()
        const total = quantity * product.price
        const totalCurrency = new Intl.NumberFormat('pt-BR', {
          currency: 'BRL',
          style: 'currency',
        }).format(total)

        const newProduct: Product = {
          ...product,
          quantity,
          total,
          totalCurrency,
        }

        newCart = [...cart, newProduct]
      }

      setCart(newCart)

      localStorage.setItem(KEY_STORAGE_CART, JSON.stringify(newCart))
    } catch (error) {
      alert('Erro na adiçào do produto')
    }
  }

  async function removeProduct(productId: number) {
    const product = cart.find((product) => product.id === productId)

    if (product) {
      const newCart = cart.filter((product) => product.id !== productId)
      setCart(newCart)
      localStorage.setItem(KEY_STORAGE_CART, JSON.stringify(newCart))
    }
  }

  function updateProductAmount(productId: number, quantity: number) {
    const product = cart.find((product) => product.id === productId)

    if (product) {
      const newCart = cart.map((product) => {
        if (product.id === productId) {
          const total = quantity * product.price
          const totalCurrency = new Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          }).format(total)

          return { ...product, quantity, total, totalCurrency }
        }
        return product
      })
      setCart(newCart)
      localStorage.setItem(KEY_STORAGE_CART, JSON.stringify(newCart))
    }
  }

  function submitOrder(data: DetailsOrder) {
    const order = {
      ...data,
      products: cart,
      created_at: new Date(),
    }
    setCart([])
    localStorage.setItem(KEY_STORAGE_CART, '')
    console.log(order)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        updateProductAmount,
        submitOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  return context
}
