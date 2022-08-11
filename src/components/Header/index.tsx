import Image from 'next/image'
import * as S from './styles'

const Header = () => {
  return (
    <div id="header">
      <S.LogoWrapper>
        <div className="container">
          <S.Logo alt="Logo" src="/img/hostgator-logo.svg" />
        </div>
      </S.LogoWrapper>
      <S.PresentationWrapper>
        <S.ContainerBox className="container-fluid">
          <S.ImageHeader className="text-left">
            <Image
              alt="Logo"
              src="/img/img-header-1.svg"
              width={485}
              height={353}
            />
          </S.ImageHeader>
          <div className="text-center">
            <S.PresentationTextBox className="animate__animated animate__backInDown">
              <span data-testid="principal-text">Hospedagem de Sites</span>
              <h1>
                Tenha uma hospedagem de sites estável e evite perder visitantes
                diariamente
              </h1>
              <ul>
                <li>99,9% de disponibilidade: seu site sempre no ar</li>
                <li>Suporte 24h, todos os dias</li>
                <li>Painel de Controle cPanel</li>
              </ul>
            </S.PresentationTextBox>
          </div>
          <S.ImageHeader className="text-right">
            <Image
              alt="Logo"
              src="/img/img-header-2.svg"
              width={439}
              height={347}
            />
          </S.ImageHeader>
        </S.ContainerBox>
      </S.PresentationWrapper>
      <S.PresentationLine>
        <a href="#choose"></a>
      </S.PresentationLine>
    </div>
  )
}

export default Header
