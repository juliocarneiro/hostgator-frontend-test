import * as S from './styles'
import Plan from './Plan'
import { breakPoints } from '../../utils'

// @ts-ignore-start
import Carousel from 'react-elastic-carousel'
// @ts-ignore-end

import { TPlansProps, TArrowsProps } from './TPlansProps'

const Plans = ({ selectedTime, productsData }: TPlansProps) => {
  function buttonArrows({ type, onClick, isEdge }: TArrowsProps) {
    const classes: string = type === 'PREV' ? 'button-prev' : 'button-next'
    return (
      <button onClick={onClick} className={classes} disabled={isEdge}></button>
    )
  }

  return (
    <S.Wrapper className="container">
      <Carousel
        itemsToShow={3}
        pagination={false}
        showArrows={true}
        breakPoints={breakPoints}
        renderArrow={buttonArrows}
      >
        {productsData.map((e) => (
          <Plan productsData={e} key={e.id} selectedTime={selectedTime} />
        ))}
      </Carousel>
    </S.Wrapper>
  )
}

export default Plans
