export const planTypes = {
  PLANP: 'Plano P',
  PLANM: 'Plano M',
  PLANTURBO: 'Plano Turbo'
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

export default planTypes
