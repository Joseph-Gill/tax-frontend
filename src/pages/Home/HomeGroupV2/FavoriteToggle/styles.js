import styled from 'styled-components/macro'


export const FavoriteToggleControl = styled.label`
    --toggle-width: 50px;
    --toggle-height: 25px;
    --toggle-gutter: 2.5px;
    --toggled-radius: 50%;
    --toggle-control-speed: .15s;
    --toggle-control-ease: ease-in;
    //--toggle-radius: var(--toggle-height) / 2; 12.5px
    //--toggle-control-size: var(--toggle-height) - (var(toggle-gutter) * 2); 20px

    display: block;
    position: relative;
    padding-left: 100px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    user-select: none;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    input:checked ~ .control {
        background-color: ${props => props.theme.greenDark};

        &:after {
            //left: var(--toggle-width) - var(--toggle-control-size) - var(--toggle-gutter);
            left: 27px;
        }
    }

    .control {
        position: absolute;
        top: 0;
        left: 0;
        //height: var(--toggle-height);
        height: 25px;
        //width: var(--toggle-width);
        width: 50px;
        //border-radius: var(--toggle-radius);
        border-radius: 12.5px;
        background-color: ${props => props.theme.grayTwo};
        transition: background-color .15s ease-in;

        &:after {
            content: '';
            position: absolute;
            //left: var(--toggle-gutter);
            left: 2.5px;
            //top: var(--toggle-gutter);
            top: 2.5px;
            //width: var(--toggle-control-size);
            width: 20px;
            //height: var(--toggle-control-size);
            height: 20px;
            //border-radius: var(--toggle-radius);
            border-radius: 12.5px;
            background-color: ${props => props.theme.white};
            transition: left .15s ease-in;
        }
    }
`

export const FavoriteContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`
