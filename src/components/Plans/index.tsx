import * as S from './styles'
import Plan from './Plan'

// @ts-ignore-start
import Carousel from 'react-elastic-carousel'
// @ts-ignore-end

type Products = {
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
type Props = {
  selectedTime: string
  productsData: Products[]
}
type Arrows = {
  type: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  isEdge: boolean
}

const Plans = ({ selectedTime, productsData }: Props) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 920, itemsToShow: 3 }
  ]

  function buttonArrows({ type, onClick, isEdge }: Arrows) {
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
