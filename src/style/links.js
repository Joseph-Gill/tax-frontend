import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'


export const LinkBase = styled(Link)`
    cursor: pointer;
    
    :hover {
      font-weight: bold;
      color: dodgerblue;
    }
`
