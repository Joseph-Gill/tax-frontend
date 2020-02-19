import React from 'react';
import {SuccessWrapper} from "../../../../style/wrappers";
import check from '../../../../assets/icons/check.svg';
import {IconWrapper, ConfirmationIcon} from "./styles";


const SendResetCodeSuccess = () => {
    return <SuccessWrapper>
        A code has been sent to you email!
        <IconWrapper>
            <ConfirmationIcon src={check}/>
        </IconWrapper>

    </SuccessWrapper>

};

export default SendResetCodeSuccess;
