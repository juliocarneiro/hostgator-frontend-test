import * as S from './styles'
import { percentage, currency, discount } from 'utils'

type PlanBodyType = {
  midPlan: boolean
  name: string
  id: string
  price: number
  percent: number
  month: number
  selectedTime: string
  promoCode: string
}

const PlanBody = ({
  midPlan,
  name,
  id,
  price,
  percent,
  month,
  selectedTime,
  promoCode
}: PlanBodyType) => {
  const divideMonth = price / month
  const discountPrice = percentage(percent, price)
  const percentPrice = percentage(percent, divideMonth)
  const economyPrice = discount(discountPrice, price)

  return (
    <S.PlanBody midPlan={midPlan} className="plan-body">
      <div>
        <h1>{name}</h1>
      </div>
      <div
        className={`animate__animated animate__flipInX ${
          midPlan ? 'animate__delay-1s' : ''
        } ${name === 'Plano Turbo' ? 'animate__delay-2s' : ''}`}
      >
        <p>
          <span>R$ {currency.format(price)}</span>{' '}
          <b>R$ {currency.format(discountPrice)}</b>
          <br />
          equivalente a
        </p>
        <p>
          <span>R$</span>
          <strong>{currency.format(percentPrice)}</strong>
          <span>/mês*</span>
        </p>
        <a
          href={`http://hostgator.com/?a=add&pid=${id}&billingcycle=${selectedTime}&promocode=${promoCode}`}
        >
          Contrate Agora
        </a>
        <div>
          <b>1 ano de Domínio Grátis.</b>
          <span>
            economize R$ {currency.format(economyPrice)}
            <strong>{percent}% off</strong>
          </span>
        </div>
      </div>
    </S.PlanBody>
  )
}

export default PlanBody
