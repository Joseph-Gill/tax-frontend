import React, {useState, forwardRef} from 'react'
import DatePicker, {CalendarContainer} from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css"
import {CardInfoText} from '../../style/text'
import calendar from '../../assets/icons/stark_calendar_icon.svg'
import {DateInputAndLabelContainer, DateInputContainer, DateInputLabelText} from './styles'


const DateInput = ({label}) => {
    const [date, setDate] = useState(new Date());
    const ref = React.createRef()

    // eslint-disable-next-line react/display-name,react/no-multi-comp
    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <DateInputContainer onClick={onClick} ref={ref}>
            <CardInfoText>{value}</CardInfoText>
            <img alt='calendar' src={calendar} />
        </DateInputContainer>
    ))

    // eslint-disable-next-line react/no-multi-comp
    // const CustomerCalendarContainer = ({className, children}) => {
    //     return (
    //         <div style={{fontFamily: 'Nunito Sans, sans-serif'}}>
    //             {/* eslint-disable-next-line react/forbid-component-props */}
    //             <CalendarContainer className={className}>
    //                 {children}
    //             </CalendarContainer>
    //         </div>
    //     )
    // }

    return (
        <DateInputAndLabelContainer>
            {label ? <DateInputLabelText>Effective Date:</DateInputLabelText> : null}
            <DatePicker
                // calendarContainer={CustomerCalendarContainer}
                customInput={<CustomInput ref={ref} />}
                dateFormat='dd/MM/yyyy'
                onChange={date => setDate(date)}
                selected={date}
            />
        </DateInputAndLabelContainer>
    )
}

export default DateInput
