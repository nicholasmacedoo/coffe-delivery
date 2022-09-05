export interface Product {
  id: number
  title: string
  description: string
  img: string
  quantity: number
  price: number
  total: number
  totalCurrency: string
}

export interface DetailsOrder {
  zip_code: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  state: string
  type_payment: string
}
