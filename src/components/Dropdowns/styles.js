import styled from 'styled-components/macro'


export const DropdownContentImgContainer = styled.div`
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${props => props.theme.grayTwo};
    border-radius: 100%;

    :hover {
        transition: 167ms;
        border: 3px solid ${props => props.theme.grayTwo};
    }
`

export const DropdownButtonContainer = styled.div`
    height: 35px;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    cursor: pointer;

    :hover {
        transition: 167ms;
        background: ${props => props.theme.iconHoverBackground};
    }

    :focus {
        background: ${props => props.theme.iconHoverBackground};
    }
`

// export const DropdownContainer = styled.div`
//     position: relative;
//     display: inline-block;
// `
//
// export const DropdownContent = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 12px;
//     cursor: pointer;
//
//     :hover {
//         text-decoration: underline;
//         background-color: ${props => props.theme.grayFive};
//     }
// `
//
// export const DropdownContentContainer = styled.div`
//     display: ${props => props.show ? 'block' : 'none'};
//     border-top-right-radius: ${props => props.theme.borderRadius};
//     border-bottom-right-radius: ${props => props.theme.borderRadius};
//     border-bottom-left-radius: ${props => props.theme.borderRadius};
//     position: absolute;
//     background-color: ${props => props.theme.white};
//     width: 160px;
//     box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
//     z-index: 1;
//
//     ${DropdownContent}:first-child {
//         border-top-right-radius: ${props => props.theme.borderRadius};
//     }
//
//     ${DropdownContent}:last-child {
//         border-bottom-right-radius: ${props => props.theme.borderRadius};
//         border-bottom-left-radius: ${props => props.theme.borderRadius};
//     }
// `

export const DropdownContentText = styled.span`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
    color: ${props => props.theme.grayOne};
`
