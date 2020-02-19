import React from 'react';
import styled from "styled-components/macro";
import location_icon from '../../../assets/icons/location_icon.svg';
import astronaut from '../../../assets/icons/astronaut.svg';
import {useSelector} from "react-redux";

const AdminCardContainer = styled.div`
    border: solid rgba(226,226,226,0.8) 2px;
    ${props => {
    if (props.selected) {
        return `
            border: ${props.theme.accentColor} solid 2px;
            box-shadow: -5px 6px 15px -5px rgba(0,0,0,0.49);
            `
    }
}};
    height: 320px;
    width: 250px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background: rgba(255,255,255,0.82);
    
    img {
      border: solid rgba(211,211,211,0.86) 1px;
      width: 86px;
      height: 86px;
      border-radius: 100%;
    }

`;

const CardUserName = styled.p`
    font-size: 20px;
    color: #8f8f8f;
    font-weight: bold;

`;
const CardUserLocationWrapper = styled.div`
  display: flex;
  width: 65%;
  justify-content: space-around;
  img {
    height: 20px;
    width: 20px;
    border: none;
  }
  label {
    color: #606060;
    font-size: 12px;
  }
`;


const CardButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardStatisticsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  height: 50px; 
`;

const CardUserStatistic = styled.div`
  height: 100%;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-right: ${props => props.middle ? "solid rgba(211,211,211,0.86) 1px" : null};
  border-left: ${props => props.middle ? "solid rgba(211,211,211,0.86) 1px" : null};
  
  p {
    font-size: 16px;
    font-style: normal;
    color: rgba(32,32,32,0.73);
    font-weight: bold;
  }
  
  label {
    font-size: 12px;
    font-style: normal;
    color: #adadad;
  }
`;

const WorkingTitle = styled.span`
    font-size: 16px;
    font-style: normal;
    color: ${props => props.working ? "rgba(0,183,0,0.85)" : 'rgba(32,32,32,0.73)'};
    font-weight: bold;
`;

const CardButton = styled.button`
   border: 1px solid ${props => props.theme.accentColor};
   height: 32px;
   width: 100px;
   border-radius: 25px;
   background: white;
   font-size: 14px;
   color: ${props => props.theme.accentColor};
   cursor: pointer;
   
   a {
       font-size: 14px;
       color: ${props => props.theme.accentColor};
       text-decoration: none;
   }

  ${props => {
    if (props.dashboard) {
        return `
        background: ${props.theme.accentColor};
        color: white;
      `
    }
}
};
`;


const UserProfileCard = ({user, handleUserSelected}) => {
    const currentUserSelected = useSelector(state => state.jobsReducer.displayedUser.id);
    const userId = user.id;
    const working = user.is_working;

    return <AdminCardContainer working={working} selected={currentUserSelected === userId}>
        <img src={!user.avatar ? astronaut : user.avatar}/>
        <CardUserName>{user.first_name} {user.last_name}</CardUserName>
        <CardUserLocationWrapper>
            <img src={location_icon}/>
            <label>{user.location}</label>
        </CardUserLocationWrapper>
        {!user.is_admin && <>
            <CardStatisticsWrapper>
                <CardUserStatistic><p>{user.jobs_count}</p><label>Total Jobs</label></CardUserStatistic>
                <CardUserStatistic middle><p>{user.interviews_count}</p><label>Interviews</label></CardUserStatistic>
                <CardUserStatistic><WorkingTitle
                    working={working}>{user.is_working ? 'Yes' : 'No'}</WorkingTitle><label>Working?</label></CardUserStatistic>
            </CardStatisticsWrapper>
        </>}

        <CardButtonWrapper>
            {!user.is_admin ? <>
                <CardButton>Full Profile</CardButton>
                <CardButton dashboard onClick={(e) => handleUserSelected(e, user.id)}>Dashboard</CardButton>
            </> : <>
                <CardButton><a href={`mailto: ${user.email}`}>Send Email</a></CardButton>
                <CardButton dashboard onClick={(e) => handleUserSelected(e, user.id)}>Profile</CardButton>
            </>
            }


        </CardButtonWrapper>

    </AdminCardContainer>

};

export default UserProfileCard;
