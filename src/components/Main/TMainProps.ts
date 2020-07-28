export type TMainProducts = {
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

export type TMainSelectedTime = string
