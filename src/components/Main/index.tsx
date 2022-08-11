import { useEffect, useState } from 'react'
import getProducts from 'utils'

import Header from '../Header'
import Filter from '../Filter'
import Plans from '../Plans'
import Loader from '../Loader'

import { TMainProducts, TMainSelectedTime } from './TMainProps'

const Main = () => {
  const [productsData, setProductsData] = useState<TMainProducts[] | []>([])
  const [selectedTime, setSelectedTime] =
    useState<TMainSelectedTime>('three_years')
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    async function fetchData() {
      const { products } = await getProducts()

      const productsFilter = products.filter(
        (e: { name: string }) =>
          e.name === 'Plano P' ||
          e.name === 'Plano M' ||
          e.name === 'Plano Turbo'
      )

      setProductsData(productsFilter)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  useEffect(() => {
    setSelectedTime(selectedTime)
  }, [selectedTime])

  return (
    <>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <div className="animate__animated animate__fadeIn">
          <Header />
          <Filter
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
          <Plans selectedTime={selectedTime} productsData={productsData} />
        </div>
      )}
    </>
  )
}

export default Main
