import React, {forwardRef} from 'react'
import DatePicker from 'react-datepicker'
import calendar from '../../assets/icons/stark_calendar_icon.svg'
import {CardInfoText, DateInputLabelText} from '../../style/text'
import {DateInputAndLabelContainer, DateInputContainer} from './styles'
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css"


const DateInput = ({date, label, setDate}) => {
    const ref = React.createRef()

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
                customInput={<CustomInput ref={ref} />}
                dateFormat='yyyy-MM-dd'
                onChange={date => setDate(date)}
                selected={date}
            />
        </DateInputAndLabelContainer>
    )
}

export default DateInput
