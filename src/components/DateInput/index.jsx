import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {CardInfoText} from '../../style/text'
import calendar from '../../assets/icons/stark_calendar_icon.svg'
import {DateInputAndLabelContainer, DateInputContainer, DateInputLabelText} from './styles'


const DateInput = ({label}) => {
    const [date, setDate] = useState(new Date());

    // eslint-disable-next-line react/no-multi-comp
    const CustomInput = ({ value, onClick }) => (
        <DateInputContainer onClick={onClick}>
            <CardInfoText>{value}</CardInfoText>
            <img alt='calendar' src={calendar} />
        </DateInputContainer>
    )

    return (
        <DateInputAndLabelContainer>
            {label ? <DateInputLabelText>Effective Date:</DateInputLabelText> : null}
            <DatePicker
                customInput={<CustomInput />}
                onChange={date => setDate(date)}
                selected={date}
            />
        </DateInputAndLabelContainer>
    )
}

export default DateInput
