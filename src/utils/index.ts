import fetch from 'isomorphic-fetch'

type Product = {
  name: string
  id: string
  cycle: [
    {
      annually: { priceOrder: number; months: number }
      triennially: { priceOrder: number; months: number }
      monthly: { priceOrder: number; months: number }
    }
  ]
}

export const getProducts = async () => {
  const responseData = await fetch(
    `https://6dd1804f-a914-4c99-a1ed-58adca2bca74.mock.pstmn.io/prices`
  )
  const data = await responseData.json()
  const productsData = data.shared.products

  const products = Object.values(productsData).map(
    (product: any): Product => ({
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
