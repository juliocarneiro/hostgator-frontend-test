import * as S from './styles'
import { percentage, currency, discount, planTypes } from 'utils'
import { TPlanBodyProps } from './TPlansProps'
import Image from 'next/image'

const PlanBody = ({
  midPlan,
  name,
  id,
  price,
  percent,
  month,
  selectedTime,
  promoCode
}: TPlanBodyProps) => {
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
        className={`animate__animated animate__flipInX animate__fast ${
          midPlan ? 'animate__delay-1s' : ''
        } ${name === planTypes.PLANTURBO ? 'animate__delay-2s' : ''}`}
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
          <b>
            1 ano de Domínio Grátis.{' '}
            <Image
              src="/img/i.svg"
              width={15.2}
              height={15.2}
              alt="1 ano de Domínio Grátis."
            />
          </b>

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
