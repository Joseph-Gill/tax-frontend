import styled from 'styled-components/macro'
import {StepFilterInputLabel} from '../../style/labels'


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

export const ProjectFilterInputLabel = styled(StepFilterInputLabel)`
    margin-left: 55px;
`
