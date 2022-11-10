import * as S from './styles'
import Plan from './Plan'
import { TPlansProps } from './TPlansProps'
import { memo } from 'react'

const Plans = ({ selectedTime, productsData }: TPlansProps) => {
  return (
    <S.Wrapper className="container">
      {productsData.map((e) => (
        <Plan productsData={e} key={e.id} selectedTime={selectedTime} />
      ))}
    </S.Wrapper>
  )
}

export default memo(Plans)
