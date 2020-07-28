import PlanBody from './PlanBody'
import * as S from './styles'

import { TPlanProps } from './TPlansProps'

const Plan = ({ productsData, selectedTime }: TPlanProps) => {
  const { name, cycle, id } = productsData

  const cycleData = Object.assign({}, cycle[0])

  const priceTriennially = cycleData.triennially.priceOrder
  const priceAnnually = cycleData.annually.priceOrder
  const priceMonthly = cycleData.monthly.priceOrder

  const monthTriennially = cycleData.triennially.months
  const monthAnnually = cycleData.annually.months
  const monthMonthly = cycleData.monthly.months

  const discountPercent = 40

  return (
    <S.Plan midPlan={name === 'Plano M'} className="plan">
      {name === 'Plano P' ? <img src="/img/1.svg" alt="" /> : null}
      {name === 'Plano M' ? <img src="/img/2.svg" alt="" /> : null}
      {name === 'Plano Turbo' ? <img src="/img/3.svg" alt="" /> : null}

      {selectedTime === 'three_years' ? (
        <PlanBody
          midPlan={name === 'Plano M'}
          price={priceTriennially}
          percent={discountPercent}
          month={monthTriennially}
          selectedTime="triennally"
          promoCode="PROMOHG40"
          id={id}
          name={name}
        />
      ) : null}
      {selectedTime === 'year' ? (
        <PlanBody
          midPlan={name === 'Plano M'}
          price={priceAnnually}
          percent={discountPercent}
          month={monthAnnually}
          selectedTime="annually"
          promoCode="PROMOHG40"
          id={id}
          name={name}
        />
      ) : null}
      {selectedTime === 'month' ? (
        <PlanBody
          midPlan={name === 'Plano M'}
          price={priceMonthly}
          percent={discountPercent}
          promoCode="PROMOHG40"
          month={monthMonthly}
          selectedTime="monthly"
          id={id}
          name={name}
        />
      ) : null}

      <S.PlanFooter className="text-left" data-testid="plan-footer">
        <p>{name === 'Plano P' ? 'Para 1 site' : 'Sites Ilimitados'}</p>
        <p>
          {name === 'Plano Turbo' ? <b>150 GB </b> : <b>100 GB </b>}
          de Armazenamento
        </p>
        <p>
          Contas de E-mail <b>Ilimitadas</b>
        </p>
        <p>
          Criador de Sites <b>Grátis</b>
        </p>
        <p>
          Certificado SSL <b>Grátis</b> (https)
        </p>
      </S.PlanFooter>
    </S.Plan>
  )
}

export default Plan
