import React, {useState} from 'react';
import {BeatLoader} from "react-spinners";
import {LoaderContainer} from "../../../style/containers";


const Loader = () => {
    const [loading] = useState(true);

    return <LoaderContainer>
        <BeatLoader
            size={30}
            color={"#1fce90"}
            loading={loading}
        />
    </LoaderContainer>
};

export default Loader;
