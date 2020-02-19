import React from 'react';
import {SuccessWrapper} from "../../../../style/wrappers";
import check from '../../../../assets/icons/check.svg';
import {ConfirmationIcon, IconWrapper} from "./styles";


const RegistrationSuccess = () => {
    return <SuccessWrapper>
        A verification code has been sent to you email!
        <IconWrapper>
            <ConfirmationIcon src={check}/>
        </IconWrapper>

    </SuccessWrapper>

};

export default RegistrationSuccess;
