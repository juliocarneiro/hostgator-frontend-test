import { useQuery } from '@tanstack/react-query'
import fetch from 'isomorphic-fetch'
import { TMainProducts } from 'handlers/HomeHandler/TMainProps'

export const useProduct = () => {
  const getProducts = async () => {
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
  return useQuery(['get'], () => getProducts(), {
    retry: 2,
    refetchOnWindowFocus: false
  })
}
