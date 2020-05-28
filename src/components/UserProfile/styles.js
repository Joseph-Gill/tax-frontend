import styled from 'styled-components/macro';
import {SubTitle} from '../../style/titles'


export const UserDetailsContainer = styled.div`
    box-shadow: -5px 6px 15px -5px rgba(0,0,0,0.49);
    border-radius: 5px;
    width: 30%;
    height: 40%;
    min-height: 260px;
    min-width: 360px;
    display: flex;
    margin-left: 200px;
    justify-content: center;
    align-items: center;
    padding: 2%;
    background: rgba(255,255,255,0.71);
`;

export const UserInfoWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
`;

export const InfoLabel = styled(SubTitle)`
    p {
    font-size: 16px;
    color: rgba(0,0,0,0.71);
    }
`;
