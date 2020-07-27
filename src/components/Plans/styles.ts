import styled from 'styled-components'

type Props = {
  midPlan: boolean
}

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 30px;
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
  border-radius: 5px;
  background: white;
  width: 95%;
  text-align: center;
  border: 1px solid #dfecff;
  > img {
    display: inline-block;
    margin-top: 30px;
    height: 40px;
    width: 42px;
  }
  border-top: 10px solid ${({ midPlan }) => (midPlan ? '#ff6a17' : '#F1F6FB ')};
  border-bottom: 5px solid
    ${({ midPlan }) => (midPlan ? '#ff6a17' : '#F1F6FB ')};
  h1 {
    font: Bold 26px/26px Montserrat;
  }
`

export const PlanBody = styled.div<Props>`
  > div:first-child {
    padding: 10px 10px 30px 10px;
    border-bottom: 1px solid #dfecff;
  }
  > div:not(:first-child) {
    padding: 30px 20px;
    border-bottom: 1px solid #dfecff;
  }
  > div p:nth-child(1) {
    font-size: 14px;
    color: #333333;
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
    background: #4480c5 0% 0% no-repeat padding-box;
    background: ${({ midPlan }) => (midPlan ? '#ff6a17' : '#4480c5 ')};
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
        background: #51c99c 0% 0% no-repeat padding-box;
        border-radius: 224px;
        color: #ffffff;
        text-transform: uppercase;
        padding: 5px 10px;
        margin-left: 5px;
      }
    }
  }
`
export const PlanFooter = styled.div`
  padding: 30px 20px;
  border-bottom: 1px solid #dfecff;
  p {
    color: #333333;
    margin: 10px 0;
    &:last-child {
      margin: 10px 0 0 0;
    }
    &:first-child,
    &:nth-child(3) {
      display: inline;
      border-bottom: 1px dashed #d1deee;
    }
  }
`
