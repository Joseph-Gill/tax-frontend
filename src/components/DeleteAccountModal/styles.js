import styled from 'styled-components/macro'
import {device as devices} from '../../style/devices'
import {animated} from 'react-spring'
import {BaseButton} from '../../style/buttons'


export const AddDeleteModalExternalContainer = styled(animated.div)`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 500;
    background-color: rgba(0,0,0,0.68);
 `

export const AddDeleteModalInternalContainer = styled.div`
    width: 370px;
    height: 313px;
    background: ${props => props.theme.white};
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    margin-left: 200px;
    padding: 15.41px 15.41px 36px 15.41px;

    @media ${devices.mobileL} {
        width: 30%;
        max-width: 450px;
        min-width: 350px;
        max-height: 180px;
        min-height: 150px;
        margin: 0;
        padding: 6% 3%;
        div {
            width: 90%;
      }
   }
`
export const AddDeleteModalCloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 339px;
`

export const AddDeleteModalTitleContainer = styled(AddDeleteModalCloseContainer)`
    justify-content: flex-start;
    padding-left: 19px;
`
export const AddDeleteModalTextContainer = styled(AddDeleteModalTitleContainer)`
    align-items: center;
`

export const AddDeleteModalButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 302px;
`

export const AddDeleteModalErrorContainer = styled.div`
    height: 10px;
    margin-bottom: 10px;
`

export const DeleteStepReviewModalInternalContainer = styled(AddDeleteModalInternalContainer)`
    width: 370px;
    height: 240px;
`

export const BlueConfirmReviewedButton = styled(BaseButton)`
    width: 186px;
    height: 32px;
`
