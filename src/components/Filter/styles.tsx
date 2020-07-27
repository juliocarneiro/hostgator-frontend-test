import styled from 'styled-components'

export const Wrapper = styled.div`
  font: Regular 14px/26px Montserrat;
  letter-spacing: 0px;
  color: #1d5297;
`
export const FilterWrapper = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 4px #4480c570;
  border: 1px solid #4480c5;
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
        background-color: white;
        border-radius: 50%;
        border: 2px solid #9eb8dc;
        @media (max-width: 768px) {
          top: 8px;
        }
      }

      &.selected {
        background: #4480c5 0% 0% no-repeat padding-box;
        color: white;
        font-weight: bold;
        .radiobtn {
          border: 2px solid white;
          background: #4480c5;
          &:after {
            content: '';
            position: absolute;
            top: 3px;
            left: 3.5px;
            height: 8px;
            width: 8px;
            background-color: white;
            border-radius: 50%;
          }
        }
      }
    }
  }
`
