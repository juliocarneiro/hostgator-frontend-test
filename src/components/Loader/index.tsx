import * as S from './styles'
import { TLoadingProps } from './TLoadingProps'

const Loader = ({ isLoading }: TLoadingProps) => (
  <>
    {isLoading && (
      <S.LoadingStyled
        key="loading"
        className="animate__animated animate__fadeIn"
        data-testid="loader"
        id="loader"
      >
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </S.LoadingStyled>
    )}
  </>
)

export default Loader
