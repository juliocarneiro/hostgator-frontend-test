import { useEffect, useState } from 'react'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import getProducts, { planTypes } from 'utils'
import { useProduct } from 'hooks/api/products'

import Header from 'components/Header'
import Filter from 'components/Filter'
import Plans from 'components/Plans'
import Loader from 'components/Loader'

import { TMainProducts, TMainSelectedTime } from './TMainProps'

const HomeHandler = () => {
  const { data, isLoading } = useProduct()
  const [productsData, setProductsData] = useState<TMainProducts[] | []>([])
  const [selectedTime, setSelectedTime] =
    useState<TMainSelectedTime>('three_years')

  useEffect(() => {
    const productsFilter = data
      ? data.products.filter(
          (e: { name: string }) =>
            e.name === planTypes.PLANP ||
            e.name === planTypes.PLANM ||
            e.name === planTypes.PLANTURBO
        )
      : []
    setProductsData(productsFilter)
  }, [data])

  useEffect(() => {
    setSelectedTime(selectedTime)
  }, [selectedTime])

  if (isLoading) return <Loader isLoading={isLoading} />
  return (
    <div
      className="animate__animated animate__fadeIn"
      data-testid="home-handler"
    >
      <Header />
      <Filter selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
      <Plans selectedTime={selectedTime} productsData={productsData} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.fetchQuery(['get'], () => getProducts())
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default HomeHandler
