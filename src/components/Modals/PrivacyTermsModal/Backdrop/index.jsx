import React from 'react';
import {BackdropWrapper} from "./styles";


const backdrop = ({show, clicked}) => (
    show ? <BackdropWrapper onClick={clicked} /> : null
);

export default backdrop;
