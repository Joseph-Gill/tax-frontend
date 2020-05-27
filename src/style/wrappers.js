import styled from 'styled-components/macro'


export const SuccessWrapper = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    border-radius: 10px;
    position: absolute;
    background: rgba(0,0,0,0.82);
    color: ${props => props.theme.colorSuccess};
    font-size: 25px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    padding: 60px 40px;
    text-align: center;
    z-index: 1;
`

export const ShowPasswordWrapper = styled.div`
  width: 30%;
  height: 30px;
  font-size: 12px;
  display: flex;
  color: black;
  align-items: center;
  justify-content: space-around;
`

