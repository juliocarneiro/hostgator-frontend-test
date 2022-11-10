import styled from 'styled-components'
import { COLORS } from 'config'

type Props = {
  midPlan: boolean
}

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 50px;
  padding-bottom: 30px;
  @media (max-width: 1200px) {
    display: block;
    > div {
      width: 100%;
      &:nth-child(2) {
        margin: 0px;
      }
    }
  }
`
export const Plan = styled.div<Props>`
  &:nth-child(2) {
    margin: 0 10px;
  }
  padding-top: 30px;
  border-radius: 5px;
  background: white;
  width: 95%;
  text-align: center;
  border: 1px solid ${COLORS.lavender};
  border-top: 10px solid
    ${({ midPlan }) => (midPlan ? COLORS.orangeRed : COLORS.aliceBlue)};
  border-bottom: 5px solid
    ${({ midPlan }) => (midPlan ? COLORS.orangeRed : COLORS.aliceBlue)};
  h1 {
    font: Bold 26px/26px Montserrat;
  }
`

export const PlanBody = styled.div<Props>`
  > div:first-child {
    padding: 10px 10px 30px 10px;
    border-bottom: 1px solid ${COLORS.lavender};
  }
  > div:not(:first-child) {
    padding: 30px 20px;
    border-bottom: 1px solid ${COLORS.lavender};
  }
  > div p:nth-child(1) {
    font-size: 14px;
    color: ${COLORS.darkCharcoal};
    line-height: 1.5em;
    margin-bottom: 5px;
    span {
      text-decoration: line-through;
    }
  }
  > div p:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    span {
      font: Regular 20px/24px Montserrat;
    }
    strong {
      font: Bold 35px/24px Montserrat;
      margin: 0 5px;
    }
  }
  > div a {
    display: block;
    margin: 30px 0;
    padding: 15px;
    background: ${COLORS.cyanBlueAzure} 0% 0% no-repeat padding-box;
    background: ${({ midPlan }) =>
      midPlan ? COLORS.orangeRed : COLORS.cyanBlueAzure};
    border-radius: 26px;
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  > div > div {
    b {
      width: 100%;
      display: block;
      color: black;
      margin-bottom: 10px;
      font: Bold 15px/20px Montserrat;
    }
    span {
      font-size: 14px;
      strong {
        background: ${COLORS.oceanGreen} 0% 0% no-repeat padding-box;
        border-radius: 224px;
        color: ${COLORS.white};
        text-transform: uppercase;
        padding: 5px 10px;
        margin-left: 5px;
      }
    }
  }
`
export const PlanFooter = styled.div`
  padding: 30px 20px;
  border-bottom: 1px solid ${COLORS.lavender};
  p {
    color: ${COLORS.darkCharcoal};
    margin: 10px 0;
    &:last-child {
      margin: 10px 0 0 0;
    }
    &:first-child,
    &:nth-child(3) {
      display: inline;
      border-bottom: 1px dashed ${COLORS.azureishWhite};
    }
  }
`
