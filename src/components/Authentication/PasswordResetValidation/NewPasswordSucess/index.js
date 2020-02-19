import React from 'react';
import {SuccessWrapper} from "../../../../style/wrappers";
import check from '../../../../assets/icons/check.svg';
import {ConfirmationIcon, IconWrapper} from "./styles";


const NewPasswordSuccess = () => {
    return <SuccessWrapper style={{zIndex: '4'}}>
        You Password has been updated Successfully!
        <IconWrapper>
            <ConfirmationIcon src={check}/>
        </IconWrapper>

    </SuccessWrapper>

};

export default NewPasswordSuccess;
