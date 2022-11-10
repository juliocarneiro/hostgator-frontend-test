import styled from 'styled-components'
import { COLORS } from 'config'

export const Wrapper = styled.div`
  font: Regular 14px/26px Montserrat;
  letter-spacing: 0px;
  color: ${COLORS.cyanCobaltBlue};
`
export const FilterWrapper = styled.div`
  background: ${COLORS.white} 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 4px ${COLORS.cyanBlueAzure};
  border: 1px solid ${COLORS.cyanBlueAzure};
  border-radius: 50px;
  display: inline-block;
  margin-top: 20px;
  font: Regular 16px/23px Montserrat;

  ul {
    display: flex;
    li {
      position: relative;
      &:not(:first-child) {
        margin-left: 0px;
      }
      padding: 10px 20px;
      border-radius: 21px;
      justify-content: center;
      align-items: center;
      display: flex;
      label {
        padding-left: 20px;
        cursor: pointer;
        @media (max-width: 768px) {
          font-size: 12px;
        }
      }
      input {
        cursor: pointer;
        border: 0;
        position: absolute;
        opacity: 0;
        cursor: pointer;
      }
      .radiobtn {
        position: absolute;
        top: 10px;
        left: 13px;
        height: 18px;
        width: 18px;
        background-color: ${COLORS.white};
        border-radius: 50%;
        border: 2px solid ${COLORS.paleCerulean};
        @media (max-width: 768px) {
          top: 8px;
        }
      }

      &.selected {
        background: ${COLORS.cyanBlueAzure} 0% 0% no-repeat padding-box;
        color: ${COLORS.white};
        font-weight: bold;
        .radiobtn {
          border: 2px solid ${COLORS.white};
          background: ${COLORS.cyanBlueAzure};
          &:after {
            content: '';
            position: absolute;
            top: 3px;
            left: 3.3px;
            height: 8px;
            width: 8px;
            background-color: ${COLORS.white};
            border-radius: 50%;
          }
        }
      }
    }
  }
`
