import styled from 'styled-components/macro'


export const PreviousNextStepHeaderContainer = styled.div`
    width: 860px;
    display: flex;
    justify-content: space-between;
    margin-top: 23px;
`

export const ImageTextStepHeaderContainer = styled.div`
    display: flex;

    ${props => {
        if (props.active) {
            return `
                    : hover {
                        cursor: pointer;
                    }
                    `
            }
        }
    };
`

export const PreviousNextArrowLeft = styled.img`
    margin-right: 20px;
`

export const PreviousNextArrowRight = styled.img`
    margin-left: 20px;
`



export const PreviousNextActiveText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: ${props => props.theme.grayFour};

    ${props => {
        if (props.active) {
            return `color: ${props.theme.primaryBlue}`
            }
        }
    };
`
