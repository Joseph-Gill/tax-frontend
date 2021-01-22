import styled from 'styled-components/macro'
import {device as devices} from '../../style/devices'
import {animated} from 'react-spring'
import {BaseButton, RedLargerButton} from '../../style/buttons'
import {StatusDropdown} from '../../style/dropdowns'


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
    border: 1px solid ${props => props.theme.grayFour};
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    border-radius: ${props => props.theme.borderRadius};
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
    width: 100%;
    height: 13.5px;
`

export const AddDeleteModalTitleContainer = styled(AddDeleteModalCloseContainer)`
    justify-content: flex-start;
    padding-left: 19px;
    width: 100%;
    height: 29px;
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

export const DeleteStepReviewTaskModalInternalContainer = styled(AddDeleteModalInternalContainer)`
    width: 370px;
    height: 240px;
`

export const BlueConfirmReviewedButton = styled(BaseButton)`
    width: 186px;
    height: 32px;
`

export const AddEntityLinkModalInternalContainer = styled(AddDeleteModalInternalContainer)`
    height: 480px;
`

export const AddEntitySaveButton = styled(BaseButton)`
    width: 92px;
    height: 32px;
    margin-left: 13px;
`

export const RemoveLinkEntityInternalContainer = styled(AddDeleteModalInternalContainer)`
    width: 500px;
    height: 230px;
`

export const RemoveLinkEntityDropdown = styled(StatusDropdown)`
    width: 430px;
`

export const RemoveLinkEntityButton = styled(RedLargerButton)`
    width: 100px;
    margin-left: 23px;
`

export const RemoveLinkEntityButtonContainer = styled.div`
    width: 430px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const EntityErrorContainer = styled.div`
    width: 302px;
    height: 10px;
    display: flex;
    justify-content: center;
`
