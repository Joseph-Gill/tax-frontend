import styled from 'styled-components/macro';
import {CloseButton} from "../../../style/buttons";
import {InputTitle} from "../../../style/titles";


export const EditUserContainerExternal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: rgba(0,0,0,0.68);
`;

export const EditUserContainerInternal = styled.div`
  width: 40%;
  height: 40%;
  background: white;
  border-radius: 4px;
  display: flex;
  padding: 0 0 0 0;
  margin-left: 200px;
  flex-direction: column;
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
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 80%;
  margin: 0;
  padding: 0;
`;

export const ProfileInputTitle = styled(InputTitle)`
  width: 80%;
`;
