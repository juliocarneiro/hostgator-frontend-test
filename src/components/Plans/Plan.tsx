import Image from 'next/image'
import PlanBody from './PlanBody'
import { planTypes } from 'utils'
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

  const renderImagePlan = () => {
    switch (name) {
      case planTypes.PLANP:
        return <Image src="/img/1.svg" width={42} height={40} alt="" />
      case planTypes.PLANM:
        return <Image src="/img/2.svg" width={42} height={40} alt="" />
      case planTypes.PLANTURBO:
        return <Image src="/img/3.svg" width={42} height={40} alt="" />
      default:
        throw new Error(`Error: Got ${name} when trying to read a value `)
    }
  }

  return (
    <S.Plan midPlan={name === planTypes.PLANM} className="plan">
      {renderImagePlan()}
      {selectedTime === 'three_years' ? (
        <PlanBody
          midPlan={name === planTypes.PLANM}
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
          midPlan={name === planTypes.PLANM}
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
          midPlan={name === planTypes.PLANM}
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
        <p>{name === planTypes.PLANP ? 'Para 1 site' : 'Sites Ilimitados'}</p>
        <p>
          {name === planTypes.PLANTURBO ? <b>150 GB </b> : <b>100 GB </b>}
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
