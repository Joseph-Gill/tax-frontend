import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components'
import feedback_icon from '../../assets/icons/feedback_icon.png'
import {useDispatch, useSelector} from 'react-redux'
import {addFeedbackAction, resetFeedbackSuccess} from '../../store/feedback/actions'
import {BaseButton, CloseButton} from '../../style/buttons'
import {SubTitle, Title} from '../../style/titles'
import {BaseInput} from '../../style/inputs'


//Not used in the current version of the app, leftover from the template
const FeedbackContainer = styled.div`
    background: ${props => props.showForm ? 'rgba(255,255,255,0.97)' : 'none'};
    height: ${props => props.showForm ? '400px' : '65px'};
    width: ${props => props.showForm ? '600px' : '65px'};
    border-radius: ${props => props.showForm ? '4px' : '100%'};
    position: absolute;
    padding: 20px;
    display: flex;
    flex-direction: ${props => props.showForm ? 'column' : 'row'}; ;
    justify-content: ${props => props.showForm ? 'space-between' : 'center'};
    align-items: center;
    bottom: 16px;
    left: 220px;
    postion: relative;
    box-shadow: -9px 9px 20px 1px rgba(0,0,0,0.14);
    transform: scale(1);
    transition: 0.2s ease-in-out;
    animation: ${props => props.showForm ? 'none' : 'pulse 3s infinite'};
    @keyframes pulse {
      0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0,0,0,0.17);
      }
      70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
      }
      100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      }
    }
    img {
        height: 60px;
        min-height: 60px;
        width: 60px;
        min-width: 60px;
        opacity: 0.8;
        cursor: pointer;
    }
    span {
        border: solid ${props => props.theme.accentColor} 1px;
        border-radius: 8px;
        padding: 0 20px;
        height: 20px;
        opacity: 0;
        width: 120px;
        font-size: 12px;
        font-style: italic;
        background: white;
        position: absolute;
        top: 22px;
        left: 80px;
        z-index: 1;
        transition: 0.4s;
        display: ${props => props.showForm ? 'none' : 'flex'};;
        justify-content: center;
        align-items: center;
        color: ${props => props.theme.accentColor};
        cursor: none;
    }
    form {
        height: 98%;
        width: 90%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }
    p {
        color: ${props => props.theme.colorSuccess};
        position: absolute;
        bottom: 8px;
    }
    div {
        color: ${props => props.theme.colorFail};
        position: absolute;
        bottom: 8px;
    }

  :hover {
    animation: none;
    img {

      opacity: 1;
    }
    span {
      opacity: 1;
    }
  }
`


const Feedback = () => {
    const [openForm, setOpenForm] = useState(false)
    let title = useRef('')
    let content = useRef('')
    const dispatch = useDispatch()
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const feedbackSuccess = useSelector(state => state.feedbackReducer.success)
    const [showError, setShowError] = useState(false)

    const submitFeedback = async e => {
        e.preventDefault()
        const feedback = {
            title: title.current.value,
            content: content.current.value
        }
        if(!feedback.content){
            setShowError(!showError)
        } else {
            setShowError(false)
            await dispatch(addFeedbackAction(feedback))
        }
    }

    useEffect(() => {
        if(feedbackSuccess){
            setShowSuccessMessage(true)
            setTimeout(() => {
                setOpenForm(false)
                dispatch(resetFeedbackSuccess())
                setShowSuccessMessage(false)
            }, 2000)
        }
    }, [feedbackSuccess, dispatch])

    return (
        <FeedbackContainer showForm={openForm}>
            {
                openForm
                    ?
                        <form>
                            <CloseButton onClick={() => setOpenForm(!openForm)}>X</CloseButton>
                            <Title>Feedback</Title>
                            <SubTitle>Subject</SubTitle>
                            <BaseInput
                                name='title'
                                placeholder='Enter a subject for your feedback ...'
                                ref={title}
                                type='text'
                            />
                            <SubTitle>Comments</SubTitle>
                            <BaseInput
                                name='comment'
                                placeholder='Please enter your comments as detailed as possible ...'
                                ref={content}
                                type='text'
                            />
                            <BaseButton onClick={submitFeedback}>Submit</BaseButton>
                            {showSuccessMessage && <p>Thanks! Your feedback has been sent.</p>}
                            {showError && <div>Sorry. Comments can not be empty</div>}
                        </form>
                    :
                        <>
                            <span>Feedback</span>
                            <img
                                alt="feedback"
                                onClick={() => setOpenForm(!openForm)}
                                src={feedback_icon}
                            />
                        </>
            }
        </FeedbackContainer>
    )
}

export default Feedback
