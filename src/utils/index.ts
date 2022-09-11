import fetch from 'isomorphic-fetch'
import { TMainProducts } from '../handlers/HomeHandler/TMainProps'

export const planTypes = {
  PLANP: 'Plano P',
  PLANM: 'Plano M',
  PLANTURBO: 'Plano Turbo'
}

export const getProducts = async () => {
  const responseData = await fetch(
    `https://6dd1804f-a914-4c99-a1ed-58adca2bca74.mock.pstmn.io/prices`
  )
  const data = await responseData.json()
  const productsData = data.shared.products as TMainProducts

  const products = Object.values(productsData).map(
    (product): TMainProducts => ({
      id: product.id,
      name: product.name,
      cycle: [product.cycle]
    })
  )
  return { products }
}

export const currency = new Intl.NumberFormat('pt-BR', {
  currency: 'BRL'
})

export function percentage(percent: number, total: number): number {
  const value = (percent / 100) * total
  return Number(value.toFixed(2))
}

export function discount(discount: number, total: number): number {
  const value = total - discount
  return Number(value.toFixed(2))
}

export default getProducts
