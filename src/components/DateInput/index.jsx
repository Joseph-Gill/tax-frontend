import React, {forwardRef} from 'react'
import DatePicker from 'react-datepicker'
import calendar from '../../assets/icons/stark_calendar_icon.svg'
import {CardInfoText, DateInputLabelText} from '../../style/text'
import {DateInputAndLabelContainer, DateInputContainer} from './styles'
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css"


const DateInput = ({date, label, setDate}) => {
    const ref = React.createRef()

    // This enables the ability to style the react-datepicker input component, by styling this component
    // eslint-disable-next-line react/display-name,react/no-multi-comp
    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <DateInputContainer onClick={onClick} ref={ref}>
            <CardInfoText>{value}</CardInfoText>
            <img alt='calendar' src={calendar} />
        </DateInputContainer>
    ))

    return (
        <DateInputAndLabelContainer>
            {label ? <DateInputLabelText>Effective Date:</DateInputLabelText> : null}
            <DatePicker
                // You attach your custom styled input component here to apply it to the datepicker module
                customInput={<CustomInput ref={ref} />}
                dateFormat='yyyy-MM-dd'
                onChange={date => setDate(date)}
                selected={date}
            />
        </DateInputAndLabelContainer>
    )
}

export default DateInput
