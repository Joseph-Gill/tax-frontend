import styled from 'styled-components/macro'
import {device as devices} from '../../style/devices'
import {animated} from 'react-spring'
import {BaseButton, RedLargerButton} from '../../style/buttons'
import {EntityFormSelect} from '../../style/select'
import {ModalDropdownButton, ModalDropdownContentContainer} from '../Dropdowns/styles'


export const AddDeleteModalExternalContainer = styled(animated.div)`
    position: fixed;
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
    overflow: hidden;
 `

export const AddDeleteModalInternalContainer = styled.div`
    //width: 370px;
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

   //  @media ${devices.mobileL} {
   //      width: 30%;
   //      max-width: 450px;
   //      min-width: 350px;
   //      max-height: 180px;
   //      min-height: 150px;
   //      margin: 0;
   //      padding: 6% 3%;
   //      div {
   //          width: 90%;
   //    }
   // }
`
export const AddDeleteModalCloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 13.5px;

    :hover {
        cursor: pointer;
    }
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

export const CompleteProjectModalInternalContainer = styled(AddDeleteModalInternalContainer)`
    width: 370px;
    height: 270px;
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
    margin-left: 23px;
`

export const RemoveLinkEntityInternalContainer = styled(AddDeleteModalInternalContainer)`
    width: 400px;
    height: 230px;
`

export const RemoveLinkEntityDropdown = styled(EntityFormSelect)`
    width: 430px;
`

export const RemoveLinkEntityButton = styled(RedLargerButton)`
    width: 100px;
    margin-left: 23px;
`

export const RemoveLinkEntityButtonContainer = styled.div`
    width: 100%;
    padding-right: 18px;
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

export const EditEntityLinkInternalContainer = styled.div`
    height: 350px;
    width: 700px;
    background: ${props => props.theme.white};
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15.41px 15.41px 34px 34px;
`

export const EditEntityLinkRowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 19px;
`

export const EditEntityLinkModalTitleContainer = styled(AddDeleteModalTitleContainer)`
    justify-content: center;
    padding-left: 0;
`

export const EditEntityLinkButtonContainer = styled.div`
    width: 100%;
    display: flex;
    padding-right: 19px;
    justify-content: flex-end;
`

export const ModalCloseIconContainer = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;

    :hover {
        background: ${props => props.theme.iconHoverBackground};
    }
`

export const PredefinedModalInternalContainer = styled(AddDeleteModalInternalContainer)`
    height: 500px;
`

export const ParticipationOtherAssetsInputPlaceholder = styled.div`
    height: 52px;
    width: 302px;
`

export const PredefinedCheckboxContainer = styled.div`
    display: flex;
    width: 302px;
    justify-content: space-between;
`

export const PredefinedCheckboxTextContainer = styled.div`
    display: flex;
    flex-direction: column;

    span {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 14px;
        font-weight: 600;
        line-height: 19px;
    }
`

export const PredefinedCheckboxCheckmarkContainer = styled.div`
    width: 110px;
    display: flex;
    justify-content: space-between;
`

export const PredefinedCheckboxCheckmarkLabel = styled.label`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.01em;
    font-style: normal;
    font-weight: normal;
    color: ${props => props.theme.grayOne};
    margin-left: 8px;

    :hover {
        cursor: pointer;
        transition: 167ms;
        text-decoration: underline;
    }
`

export const CustomDropdownButton = styled(ModalDropdownButton)`
    margin: 0;
`

export const CustomDropdownContentContainer = styled(ModalDropdownContentContainer)`
    margin-left: 0;
`
