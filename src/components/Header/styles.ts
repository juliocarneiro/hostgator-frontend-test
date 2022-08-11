import styled from 'styled-components'

export const LogoWrapper = styled.div`
  background: white;
  padding: 17px 0;
`
export const PresentationLine = styled.div`
  height: 34px;
  width: 100%;
  background: #e0efe3;
  position: relative;
  margin-bottom: 50px;
  z-index: 0;

  &::after {
    content: '';
    display: block;
    height: 34px;
    width: 100%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 70 500 60' preserveAspectRatio='none'%3E%3Crect x='0' y='0' width='500' height='500' style='stroke: none; fill: %23F1F6FB;' /%3E%3Cpath d='M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z' style='stroke: none; fill: %231d5297;'%3E%3C/path%3E%3C/svg%3E");
    background-size: 100% 100%;
  }
  a {
    background: url('/img/arrow-bottom.svg') center center no-repeat;
    width: 40px;
    height: 40px;
    display: inline-block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    cursor: pointer;
  }
`
export const PresentationWrapper = styled.div`
  background: #1d5297;
  width: 100%;
  color: white;
`
export const Logo = styled.img`
  width: 198px;
  height: 35px;
`
export const PresentationTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 65px 0 52px 0;
  @media (max-width: 768px) {
    padding: 20px 0;
  }
  span {
    font: SemiBold 16px/27px Montserrat;
    letter-spacing: 1.6px;
    margin-bottom: 10px;
  }
  h1 {
    font: Bold 30px/45px Montserrat;
    letter-spacing: 0px;
    margin-bottom: 30px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    width: 85%;
    justify-content: center;
    align-items: center;
    @media (max-width: 1315px) {
      width: 100%;
    }
    li {
      font: Regular 16px/22px Montserrat;
      letter-spacing: 0px;
      color: #b9d0ef;
      padding: 10px 20px 10px 20px;
      background: url('/img/icon-check.svg') center left no-repeat;
    }
  }
`
export const ContainerBox = styled.div`
  display: flex;

  @media (max-width: 1315px) {
    > div {
      padding: 20px;
    }
  }
`
export const ImageHeader = styled.div`
  z-index: 9999;
  width: 50%;
  display: flex;
  justify-content: center;
  span {
    width: 75%;
    height: 313px;
    position: relative;
    top: 85px;
    &:first-child {
      margin-left: 40px;
    }
    &:last-child {
      margin-right: 40px;
    }
  }
  @media (max-width: 1180px) {
    display: none;
  }
`
