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