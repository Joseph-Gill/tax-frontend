import styled from 'styled-components/macro'


export const BasePageContainer = styled.div`
    width: 100%;
    height: 100vh;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const AuthenticatedPageContainer = styled(BasePageContainer)`
    background-color: ${props => props.theme.grayFive};
    padding-left: 200px;
`

export const AuthenticatedPageTitleContainer = styled.div`
    width: 860px;
    border-bottom: 1px solid ${props => props.theme.grayFour};
    padding-bottom: 10px;
`

export const LinkContainer = styled.div`
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 600;
    font-family: ${props => props.theme.nunitoFontFamily};
    margin-right: 10px;
`

export const LoginLogoContainer = styled.div`
  position: absolute;
  top: 23px;
  width: 50%;
  display: flex;
  justify-content: start;
`

export const GroupCommentTaskNumberContainer = styled.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.nunitoFontFamily};
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  margin-right: 10px;
`

export const GroupCommentTaskContainer = styled.div`
  display: flex;
`

export const TableContainer = styled.div`
  background: ${props => props.theme.white};
  border-radius: ${props => props.theme.borderRadius};
  max-height: 202px;
  overflow: scroll;
  overflow-x: hidden;
  width: 779px;
  margin-top: 11px;
  margin-bottom: 20px;

      /* width */
    ::-webkit-scrollbar {
      width: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${props => props.theme.grayFive};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.grayFour};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${props => props.theme.grayTwo};
    }
`











// Template Containers

export const ModalExternalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: rgba(0,0,0,0.68);
`

// if needed to create an internal div in the modal
export const ModalInternalContainer = styled.div`
  width: 50%;
  height: 50%;
  background: white;
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  animation: open 0.4s;
  @keyframes open {
      from {
        width: 0;
        opacity: 0;
      }
      to {
        width: 35%;
        opacity: 1;
      }
    }
`
