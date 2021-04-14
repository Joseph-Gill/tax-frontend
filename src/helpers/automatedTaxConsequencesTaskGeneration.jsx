import {createNewTaxConsequenceAction} from '../store/taxConsequence/actions'
import {convertDate, createDate} from './index'
import {createTaskAction} from '../store/task/actions'

export const distributionTaxConsequencesTaskGeneration = async (distributor, recipient, step, dispatch, profile) => {
    let description, location;
    const stepEffectiveDate = createDate(step.effective_date)
    const dateToChange = createDate(step.effective_date)

    if (distributor.location === 'Switzerland' && recipient.location === 'Switzerland') {
        const datePlus30Days = new Date(dateToChange.setDate(dateToChange.getDate() + 30))
        // Tax Consequence
        const createTaxConsequence = async () => {
            description = `CIT: Dividends received by ${recipient.name} from ${distributor.name} should be exempt under the Swiss participation exemption regime if:\\n
                           \u2022 The shareholding represents an interest of at least 10% in the subsidiary, or\\n
                           \u2022 Has a FMV of CHF 1m or more\\n
                           \u2022 Financing and administration costs allocable to investments in subsidiaries are not deductible in years in which subsidiaries distribute dividends.\\n
                           Swiss WHT: Dividend should not be subject to Swiss WHT (notification procedure applies).`
            location = 'Switzerland'
            const newTaxConsequenceData = { location, description }
            return await dispatch(createNewTaxConsequenceAction(newTaxConsequenceData, step.id))
        }
        // Task 1
        const createTaskOne = async () => {
            const newTask = {
                title: 'Shareholder Meeting',
                description: `Hold Shareholder Meeting of ${distributor.name} to decide on dividend distribution.`,
                planned_completion_date: convertDate(stepEffectiveDate),
                due_date: convertDate(stepEffectiveDate),
                step_id: step.id,
                documents: [],
                user_profile_id: profile.id,
            }
            return await dispatch(createTaskAction(newTask))
        }
        // Task 2
        const createTaskTwo = async () => {
            const newTask = {
                title: 'WHT tax declaration',
                description: `Preparation of Swiss WHT declaration (Form 103 for an AG / Form 110 for a GmbH / Form 105 in case of extraordinary distribution) in the name of ${distributor.name}.`,
                planned_completion_date: convertDate(datePlus30Days),
                due_date: convertDate(datePlus30Days),
                step_id: step.id,
                documents: [],
                user_profile_id: profile.id
            }
            return await dispatch(createTaskAction(newTask))
        }
        // Task 3
        const createTaskThree = async () => {
            const newTask = {
                title: 'WHT tax notification',
                description: ` Description: Preparation of Swiss WHT notification (Form 106) between ${distributor.name} and ${recipient.name}.`,
                planned_completion_date: convertDate(datePlus30Days),
                due_date: convertDate(datePlus30Days),
                step_id: step.id,
                documents: [],
                user_profile_id: profile.id
            }
            return await dispatch(createTaskAction(newTask))
        }
        // Task 4
        const createTaskFour = async () => {
            const newTask = {
                title: 'CCR declaration',
                description: 'Preparation of Swiss capital contribution reserves declaration (Form 170) in case capital contribution reserves are distributed.',
                planned_completion_date: convertDate(datePlus30Days),
                due_date: convertDate(datePlus30Days),
                step_id: step.id,
                documents: [],
                user_profile_id: profile.id
            }
            return await dispatch(createTaskAction(newTask))
        }
        const asyncFunctions = [createTaxConsequence, createTaskOne, createTaskTwo, createTaskThree, createTaskFour]
        for (let i = 0; i < asyncFunctions.length; i++) {
            await asyncFunctions[i]()
        }

    } else if (distributor.location === 'Switzerland' && recipient.location !== 'Switzerland') {
        description = `The assets need to be distributed at FMV.\\n
                       Distribution of capital contribution reserves:\\n
                       \u2022 Capital contribution reserves can be distributed free of Swiss WHT\\n
                       Distribution of profit brought forwards:\\n
                       \u2022 Distribution is subject to 35% Swiss WHT which can be reduced to 0% provided that the double tax treaty between Switzerland and
                       ${recipient.location} applies, resp. a valid treaty clearance confirmation is in place.`
        location = 'Switzerland'
        const newTaxConsequenceData = { location, description }
        return await dispatch(createNewTaxConsequenceAction(newTaxConsequenceData, step.id))

    } else if (distributor.location !== 'Switzerland' && recipient.location === 'Switzerland') {
        description = `Dividends received by ${recipient.name} from ${distributor.name} should be exempt under the Swiss participation exemption regime if:\\n
                       \u2022 The shareholding represents an interest of at least 10% in the subsidiary, or\\n
                       \u2022 Has a FMV of CHF 1m or more, and\\n
                       \u2022 The dividend is not tax deductible in ${distributor.location}`
        location = 'Switzerland'
        const newTaxConsequenceData = { location, description }
        return await dispatch(createNewTaxConsequenceAction(newTaxConsequenceData, step.id))

    } else {
        return true
    }
}
