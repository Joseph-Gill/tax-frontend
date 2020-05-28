import React, {useState} from 'react'
import {BeatLoader} from 'react-spinners'
import {LoaderContainer} from '../../style/containers'
import styled from 'styled-components/macro'


const SpinnerContainer = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.43);
  border-radius: 8px;
`

const Spinner = () => {
    const [loading] = useState(true)
    return <SpinnerContainer>
        <BeatLoader
            size={30}
            color={'#1fce90'}
            loading={loading}
        />
    </SpinnerContainer>
}

export default Spinner
