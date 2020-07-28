import { TMainProducts, TMainSelectedTime } from '../Main/TMainProps'

export type TPlansProps = {
  selectedTime: TMainSelectedTime
  productsData: TMainProducts[]
}

export type TArrowsProps = {
  type: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  isEdge: boolean
}

export type TPlanProps = {
  productsData: {
    name: string
    cycle: [
      {
        annually: { priceOrder: number; months: number }
        triennially: { priceOrder: number; months: number }
        monthly: { priceOrder: number; months: number }
      }
    ]
    id: string
  }
  selectedTime: string
}

export type TPlanBodyProps = {
  midPlan: boolean
  name: string
  id: string
  price: number
  percent: number
  month: number
  selectedTime: string
  promoCode: string
}
