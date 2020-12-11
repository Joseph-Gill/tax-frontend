import styled from 'styled-components/macro'
import {CardInfoText} from '../../style/text'


export const NoAccessContainer = styled.div`
      width: 860px;
      margin-top: 38px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      p {
        margin-bottom: 20px;
      }
`

export const ProjectAccessContainer = styled(NoAccessContainer)`
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 30px;
`

export const NoFilterResultsContainer = styled.div`
    width: 860px;
    height: 462px;
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const NoFilterTextContainer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const NoFilterResultText = styled(CardInfoText)`
    color: ${props => props.theme.grayTwo}
`
