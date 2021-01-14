import styled from 'styled-components/macro'


export const CommentTable = styled.table`
    width: 100%;
    border: 1px solid ${props => props.theme.grayFour};
    border-collapse: collapse;
    border-radius: ${props => props.theme.borderRadius};
    animation: fadein 0.5s;
    -moz-animation: fadein 0.5s; /* Firefox */
    -webkit-animation: fadein 0.5s; /* Safari and Chrome */
    -o-animation: fadein 0.5s; /* Opera */

    @keyframes fadein {
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-moz-keyframes fadein { /* Firefox */
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-webkit-keyframes fadein { /* Safari and Chrome */
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-o-keyframes fadein { /* Opera */
        from {
            opacity:0;
        }
        to {
            opacity: 1;
        }
    }
`

export const TableTitleRow = styled.tr`
    height: 48px;
    border: 1px solid ${props => props.theme.grayFour};
`

export const TableDataRow = styled.tr`
    height: 77px;
    border: 1px solid ${props => props.theme.grayFour};
`

export const TableHeader = styled.th`
    border-right: 1px solid ${props => props.theme.grayFour};
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    color: ${props => props.theme.grayTwo};
    padding-top: 24px;
`

export const TableData = styled.td`
    border-right: 1px solid ${props => props.theme.grayFour};
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 12px;
    line-height: 16px;
    color: ${props => props.theme.black};
    padding: 0 16px;
`
