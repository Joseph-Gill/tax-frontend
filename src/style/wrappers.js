import styled from 'styled-components/macro';

export const FormWrapper = styled.form`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: black;
`;

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
`;

export const ShowPasswordWrapper = styled.div`
  width: 30%;
  height: 30px;
  font-size: 12px;
  display: flex;
  color: black;
  align-items: center;
  justify-content: space-around;
`;

export const CredentialsWrapper = styled.div`
  width: 400px;
  height: 400px;
  background: rgba(255,255,255,0.66);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: -6px 8px 21px -4px rgba(142,142,142,0.73);
  position: relative;
`;

export const EditorWrapper = styled.div`
    height: 300px;
    overflow-y: scroll;
    border: #d1d1d1 solid 2px;
    color: #212121;
    border-radius: 5px;
    width: 80%;
    padding: 4px 8px;
    font-size: 15px;
    
    :hover {
        border-bottom: #ff4f26 solid 2px;
        cursor: pointer;
        transition: 0.5s;
    }
`;
