import {
  TMainProducts,
  TMainSelectedTime
} from 'handlers/HomeHandler/TMainProps'

export interface TPlansProps {
  selectedTime: TMainSelectedTime
  productsData: TMainProducts[]
}

export interface TPlanProps {
  productsData: TMainProducts
  selectedTime: string
}
export interface TPlanBodyProps {
  midPlan: boolean
  name: string
  id: string
  price: number
  percent: number
  month: number
  selectedTime: string
  promoCode: string
}
