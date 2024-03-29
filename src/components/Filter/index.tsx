import * as S from './styles'
import { TFilterProps } from './TFilterProps'

const Filter = ({ selectedTime, setSelectedTime }: TFilterProps) => {
  return (
    <S.Wrapper className="container text-center" id="choose">
      <p data-testid="choice-text">Quero pagar a cada:</p>
      <S.FilterWrapper>
        <ul>
          <li
            className={
              selectedTime === 'three_years'
                ? 'selected animate__animated animate__wobble'
                : ''
            }
          >
            <input
              type="radio"
              id="three_years"
              aria-label="three_years"
              checked={selectedTime === 'three_years'}
              value="three_years"
              onChange={(ev): void => {
                setSelectedTime(ev.target.value)
              }}
            />
            <span className="radiobtn"></span>
            <label htmlFor="three_years">3 anos</label>
          </li>
          <li
            className={
              selectedTime === 'year'
                ? 'selected animate__animated animate__wobble'
                : ''
            }
          >
            <input
              type="radio"
              id="year"
              aria-label="year"
              checked={selectedTime === 'year'}
              value="year"
              onChange={(ev): void => {
                setSelectedTime(ev.target.value)
              }}
            />
            <span className="radiobtn"></span>
            <label htmlFor="year">1 ano</label>
          </li>
          <li
            className={
              selectedTime === 'month'
                ? 'selected animate__animated animate__wobble'
                : ''
            }
          >
            <input
              type="radio"
              id="month"
              aria-label="month"
              checked={selectedTime === 'month'}
              value="month"
              onChange={(ev): void => {
                setSelectedTime(ev.target.value)
              }}
            />
            <span className="radiobtn"></span>
            <label htmlFor="month">1 mês</label>
          </li>
        </ul>
      </S.FilterWrapper>
    </S.Wrapper>
  )
}

export default Filter
