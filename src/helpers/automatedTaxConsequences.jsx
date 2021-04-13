import {createNewTaxConsequenceAction} from '../store/taxConsequence/actions'

export const distributionTaxConsequences = async (distributor, recipient, step, dispatch) => {
    let description, location;
    //If distributor location is Switzerland and recipient location is Switzerland
    if (distributor.location === 'Switzerland' && recipient.location === 'Switzerland') {
        description = `CIT: Dividends received by ${recipient.name} from ${distributor.name} should be exempt under the Swiss participation exemption regime if:\\n
                           \u2022 The shareholding represents an interest of at least 10% in the subsidiary, or\\n
                           \u2022 Has a FMV of CHF 1m or more\\n
                           \u2022 Financing and administration costs allocable to investments in subsidiaries are not deductible in years in which subsidiaries distribute dividends.\\n
                           \\n
                           Swiss WHT: Dividend should not be subject to Swiss WHT (notification procedure applies).`
        location = 'Switzerland'
        const newTaxConsequenceData = { location, description }
        return await dispatch(createNewTaxConsequenceAction(newTaxConsequenceData, step.id))
    // If distributor location is Switzerland and recipient location is NOT Switzerland
    } else if (distributor.location === 'Switzerland' && recipient.location !== 'Switzerland') {
        return false
    // If Distributor location is NOT Switzerland and recipient location is Switzerland
    } else if (distributor.location !== 'Switzerland' && recipient.location === 'Switzerland') {
        return false
    } else {
        return true
    }
}
