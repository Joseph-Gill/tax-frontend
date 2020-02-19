import styled from 'styled-components/macro';


export const BaseButton = styled.button`
      width: 135px;
      height: 40px;
      background: #eb4820;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
        
    :hover {
       background: rgba(255,78,40,0.87);
    }
    
    :active {
      transform: translateY(4px);
    }
   
`;

export const DisableButton = styled.button`
      width: 135px;
      height: 40px;
      background: rgba(155,155,155,0.25);
      color: white;
      border: none;
      border-radius: 6px;   
`;

export const CloseButton = styled.button`
    width: 30px;
    height: 30px;
    color: #242424;
    cursor: pointer;
    border: none;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    :active {
      transform: translateY(4px);
    }
`;

export const EditButton = styled.button`
      width: 50px;
      height: 28px;
      background: #eb741c;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
        
    :hover {
      background: #eb8f10;
    }
    
    :active {
      transform: translateY(4px);
    }
`;

export const DeleteButton = styled.button`
      width: 50px;
      height: 28px;
      background: #eb3c3f;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
        
    :hover {
      background: #eb3f3f;
    }
    
    :active {
      transform: translateY(4px);
    }
`;
