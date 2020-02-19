import React from 'react';
import {SuccessWrapper} from "../../../../style/wrappers";
import thumbsUp from '../../../../assets/icons/thumbs-up.svg'
import {ConfirmationIcon, IconWrapper} from "./styles";


const ValidationSuccess = () => {
    return <SuccessWrapper>
        Congratulations! <br/> Your account was successfully created!
        <IconWrapper>
            <ConfirmationIcon src={thumbsUp}/>
        </IconWrapper>
        You can Login now!

    </SuccessWrapper>

};

export default ValidationSuccess;
