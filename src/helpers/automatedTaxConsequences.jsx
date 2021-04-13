import {createNewTaxConsequenceAction} from '../store/taxConsequence/actions'

export const distributionTaxConsequences = async (distributor, recipient, step, dispatch) => {
    let description, location;
    //If distributor location is Switzerland and recipient location is Switzerland
    if (distributor.location === 'Switzerland' && recipient.location === 'Switzerland') {
        description = `CIT: Dividends received by ${recipient.name} from ${distributor.name} should be exempt under the Swiss participation exemption regime if:\\n
                       \u2022 The shareholding represents an interest of at least 10% in the subsidiary, or\\n
                       \u2022 Has a FMV of CHF 1m or more\\n
                       \u2022 Financing and administration costs allocable to investments in subsidiaries are not deductible in years in which subsidiaries distribute dividends.\\n
                       Swiss WHT: Dividend should not be subject to Swiss WHT (notification procedure applies).`
        location = 'Switzerland'
        const newTaxConsequenceData = { location, description }
        return await dispatch(createNewTaxConsequenceAction(newTaxConsequenceData, step.id))
    // If distributor location is Switzerland and recipient location is NOT Switzerland
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
    // If Distributor location is NOT Switzerland and recipient location is Switzerland
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
