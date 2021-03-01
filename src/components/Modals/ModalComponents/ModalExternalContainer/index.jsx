import React, {useRef, useEffect} from 'react'
import {AddDeleteModalExternalContainer} from '../../styles'
import {useSpring} from 'react-spring'


const ModalExternalContainer = ({children, setModalView, showModalView}) => {
    //Ref used by external modal container to close if user clicks outside modal
    const node = useRef()

    // Handles closing the modal if the user clicks anywhere outside of the modal
    useEffect(() => {
        const handleClickOutside = e => {
            if (node.current === e.target) {
                setModalView(false);
            }
        }
        //Adds/Removes event listener for user clicking external container
        if (showModalView) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside)
        }
        //Cleans up event listener when modal is closed
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [setModalView, showModalView])

    //From react-spring, causes Modal to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer ref={node} style={props}>
            {children}
        </AddDeleteModalExternalContainer>
    )
}

export default ModalExternalContainer
