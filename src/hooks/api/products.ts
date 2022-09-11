import { useQuery } from '@tanstack/react-query'
import getProducts from 'utils'

export const useProduct = () => {
  return useQuery(['get'], () => getProducts(), {
    retry: 2,
    refetchOnWindowFocus: false
  })
}
