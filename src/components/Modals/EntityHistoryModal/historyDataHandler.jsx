
// Used to get the new legal form for an entity from within a charts node data
// since the actually data base entry is not updated until the step / project
// is completed.
const getLegalFormFromNodeData = (nodeData, entityId) => {
    const data = JSON.parse(nodeData)
    return data.find(node => node.id === entityId).legal_form
}

// Used to get the name of an Entity from an array of affectedEntities histories
// by a specific action type
const getSpecifiedAffectedEntityName = (affectedEntities, targetAction) => {
    return affectedEntities.find(history => history.action === targetAction).entity.name
}

// Used to get the sister company names from an array of affectedEntities histories
// during a merger into New Company
const getSisterNamesForMergerNewCompany = affectedEntities => {
    const result = []
    for (let i = 0; i < affectedEntities.length || result.length < 2; i++) {
        if (affectedEntities[i].action === 'merger_original_company') {
            result.push(affectedEntities[i].entity.name)
        }
    }
    return result
}

const historyDataHandler = history => {
    const historyObject = {
        id: history.id,
        nodeDate: history.chart ? history.chart.step.effective_date : history.created,
        chart: history.chart ? history.chart : null
    }
    switch (history.action) {
        case 'group_edit_change':
            historyObject.nodeText = 'User Edited'
            historyObject.cardText = `Entity ${history.entity.name} edited in the system.`
            return historyObject
        case 'group_edit_add':
            historyObject.nodeText = 'User Added'
            historyObject.cardText = `Entity ${history.entity.name} added in the system.`
            return historyObject
        case 'add_entity':
            historyObject.nodeText = 'Entity Added'
            historyObject.cardText = `Entity ${history.entity.name} added in the system.`
            return historyObject
        case 'add_entity_child':
            historyObject.nodeText = 'Subsidiary Added'
            historyObject.cardText = `Subsidiary ${history.creating_action.entity.name} was added manually with 100% shareholding.`
            return historyObject
        case 'edit_entity':
            historyObject.nodeText = 'Entity Edited'
            historyObject.cardText = `Entity ${history.entity.name} was manually edited.`
            return historyObject
        case 'edit_entity_removed_child':
            historyObject.nodeText = 'Subsidiary Removed'
            historyObject.cardText = `Subsidiary ${history.creating_action.entity.name} was manually removed.`
            return historyObject
        case 'edit_entity_added_child':
            historyObject.nodeText = 'Subsidiary Added'
            historyObject.cardText = `Subsidiary ${history.creating_action.entity.name} was added manually with 100% shareholding.`
            return historyObject
        case 'remove_entity':
            historyObject.nodeText = 'Entity Removed'
            historyObject.cardText = `Entity ${history.entity.name} was manually removed.`
            return historyObject
        case 'remove_entity_child':
            historyObject.nodeText = 'Subsidiary Removed'
            historyObject.cardText = `Subsidiary ${history.creating_action.entity.name} with 100% shareholding was manually removed.`
            return historyObject
        case 'incorporation':
            historyObject.nodeText = 'Incorporation'
            historyObject.cardText = `Incorporation of ${history.entity.name} in ${history.entity.location}.`
            return historyObject
        case 'incorporation_child':
            historyObject.nodeText = `Incorporation of ${history.creating_action.entity.name}`
            historyObject.cardText = `Incorporation of ${history.creating_action.entity.name} in ${history.creating_action.entity.location}.`
            return historyObject
        case 'change_legal_form':
            historyObject.nodeText = 'Change of Legal Form'
            historyObject.cardText = `Change of legal form from ${history.changed_legal_form} to ${getLegalFormFromNodeData(history.chart.nodes, history.entity.id)}.`
            return historyObject
        case 'contribution': {
            const contributionRecipientName = getSpecifiedAffectedEntityName(history.affected_entities, 'contribution_recipient')
            historyObject.nodeText = `Contribution to ${contributionRecipientName}`
            historyObject.cardText = `Contribution of assets to ${contributionRecipientName}.`
            return historyObject
        }
        case 'contribution_recipient':
            historyObject.nodeText = 'Receiving a Contribution'
            historyObject.cardText = `Receiving a contribution of assets from ${history.creating_action.entity.name}.`
            return historyObject
        case 'contribution_participant': {
            const contributionContributorName = getSpecifiedAffectedEntityName(history.affected_entities, 'contribution_participant_contributor')
            const contributionRecipientName = getSpecifiedAffectedEntityName(history.affected_entities, 'contribution_participant_recipient')
            historyObject.nodeText = 'Change of Shareholder'
            historyObject.cardText = `${history.entity.name} was contributed from ${contributionContributorName} to ${contributionRecipientName}.`
            return historyObject
        }
        case 'contribution_participant_recipient': {
            const contributionContributorName = getSpecifiedAffectedEntityName(history.creating_action.affected_entities, 'contribution_participant_contributor')
            historyObject.nodeText = 'Receiving a Contribution'
            historyObject.cardText = `Receiving a contribution of 100% of the shares in ${history.creating_action.entity.name} from ${contributionContributorName}.`
            return historyObject
        }
        case 'contribution_participant_contributor': {
            const contributionRecipientName = getSpecifiedAffectedEntityName(history.creating_action.affected_entities, 'contribution_participant_recipient')
            historyObject.nodeText = `Contribution to ${contributionRecipientName}`
            historyObject.cardText = `Contribution of 100% shares in ${history.creating_action.entity.name} to ${contributionRecipientName}.`
            return historyObject
        }
        case 'distribution':{
            const distributionRecipientName = getSpecifiedAffectedEntityName(history.affected_entities, 'distribution_recipient')
            historyObject.nodeText = 'Dividend Distribution'
            historyObject.cardText = `Distribution of assets to ${distributionRecipientName}.`
            return historyObject
        }
        case 'distribution_recipient':
            historyObject.nodeText = 'Receiving a Distribution'
            historyObject.cardText = `Receiving a distribution of assets from ${history.creating_action.entity.name}.`
            return historyObject
        case 'distribution_participant': {
            const distributionContributorName = getSpecifiedAffectedEntityName(history.affected_entities, 'distribution_participant_distributor')
            const distributionRecipientName = getSpecifiedAffectedEntityName(history.affected_entities, 'distribution_participant_recipient')
            historyObject.nodeText = 'Change of Shareholder'
            historyObject.cardText = `${history.entity.name} was distributed from ${distributionContributorName} to ${distributionRecipientName}.`
            return historyObject
        }
        case 'distribution_participant_recipient': {
            const distributionDistributorName = getSpecifiedAffectedEntityName(history.creating_action.affected_entities, 'distribution_participant_distributor')
            historyObject.nodeText = `Receiving a Distribution`
            historyObject.cardText = `Receiving a distribution of 100% shares in ${history.creating_action.entity.name} from ${distributionDistributorName}.`
            return historyObject
        }
        case 'distribution_participant_distributor': {
            const distributionRecipientName = getSpecifiedAffectedEntityName(history.creating_action.affected_entities, 'distribution_participant_recipient')
            historyObject.nodeText = 'Dividend Distribution'
            historyObject.cardText = `Distribution of 100% of the shares in ${history.creating_action.entity.name} to ${distributionRecipientName}.`
            return historyObject
        }
        case 'intercompany_sale': {
            const intercompanySaleBuyer = getSpecifiedAffectedEntityName(history.affected_entities, 'intercompany_sale_buyer')
            historyObject.nodeText = 'IC Sale'
            historyObject.cardText = `Sold assets to ${intercompanySaleBuyer}.`
            return historyObject
        }
        case 'intercompany_sale_buyer':
            historyObject.nodeText = 'IC Purchase'
            historyObject.cardText = `Purchased assets from ${history.creating_action.entity.name}.`
            return historyObject
        case 'intercompany_sale_participant': {
            const intercompanySaleBuyer = getSpecifiedAffectedEntityName(history.affected_entities, 'intercompany_sale_participant_buyer')
            const intercompanySaleSeller = getSpecifiedAffectedEntityName(history.affected_entities, 'intercompany_sale_participant_seller')
            historyObject.nodeText = 'Change of Shareholder'
            historyObject.cardText = `${history.entity.name} was sold from ${intercompanySaleSeller} to ${intercompanySaleBuyer}.`
            return historyObject
        }
        case 'intercompany_sale_participant_seller': {
            const intercompanySaleBuyer = getSpecifiedAffectedEntityName(history.creating_action.affected_entities, 'intercompany_sale_participant_buyer')
            historyObject.nodeText = 'IC Sale'
            historyObject.cardText = `Sold 100% of shares in ${history.creating_action.entity.name} to ${intercompanySaleBuyer}.`
            return historyObject
        }
        case 'intercompany_sale_participant_buyer': {
            const intercompanySaleSeller = getSpecifiedAffectedEntityName(history.creating_action.affected_entities, 'intercompany_sale_participant_seller')
            historyObject.nodeText = 'IC Purchase'
            historyObject.cardText = `Purchased 100% of shares in ${history.creating_action.entity.name} to ${intercompanySaleSeller}.`
            return historyObject
        }
        case 'liquidated':
            historyObject.nodeText = 'Liquidation'
            historyObject.cardText = `${history.entity.name} was liquidated.`
            return historyObject
        case 'liquidated_parent': {
            const liquidationNewParent = getSpecifiedAffectedEntityName(history.creating_action.affected_entities, 'liquidated_child')
            historyObject.nodeText = 'Change of Shareholder'
            historyObject.cardText = `${history.entity.name} was distributed as part of the liquidation dividend from ${history.creating_action.entity.name} to ${liquidationNewParent}.`
            return historyObject
        }
        case 'liquidated_child':
            historyObject.nodeText = 'Subsidiary Liquidation'
            historyObject.cardText = `${history.creating_action.entity.name} has been liquidated.`
            return historyObject
        case 'merger':
            historyObject.nodeText = 'Incorporation'
            historyObject.cardText = `${history.entity.name} was incorporated in ${history.entity.location} as a part of a merger.`
            return historyObject
        case 'merger_parent':
            historyObject.nodeText = 'Change of Shareholder'
            historyObject.cardText = `100% of the shares of ${history.entity.name} were transferred to ${history.creating_action.entity.name} as part of a merger.`
            return historyObject
        case 'merger_children_new_company': {
            const sisterNames = getSisterNamesForMergerNewCompany(history.creating_action.affected_entities)
            historyObject.nodeText = 'Change of Subsidiaries'
            historyObject.cardText = `Subsidiaries ${sisterNames[0]} and ${sisterNames[1]} merged into the newly incorporated ${history.creating_action.entity.name}.`
            return historyObject
        }
        case 'merger_original_company':
            historyObject.nodeText = 'Merger with Dissolution'
            historyObject.cardText = `${history.entity.name} was merged into ${history.creating_action.entity.name}.`
            return historyObject
        case 'merged': {
            const mergedInto = getSpecifiedAffectedEntityName(history.affected_entities, 'merged_into')
            historyObject.nodeText = 'Merger with Dissolution'
            historyObject.cardText = `${history.entity.name} was merged into ${mergedInto}.`
            return historyObject
        }
        case 'merged_into':
            historyObject.nodeText = 'Merger'
            historyObject.cardText = `${history.creating_action.entity.name} was merged into ${history.entity.name}.`
            return historyObject
        case 'merged_parent': {
            const mergedInto = getSpecifiedAffectedEntityName(history.creating_action.affected_entities, 'merged_into')
            historyObject.nodeText = 'Change of Shareholder'
            historyObject.cardText = `100% of the shares of ${history.entity.name} were transferred from ${history.creating_action.entity.name} to ${mergedInto}.`
            return historyObject
        }
        case 'merged_child_merged': {
            const mergedInto = getSpecifiedAffectedEntityName(history.creating_action.affected_entities, 'merged_into')
            historyObject.nodeText = 'Change in Subsidiaries'
            historyObject.cardText = `Subsidiaries ${mergedInto} and ${history.creating_action.entity.name} merged with ${mergedInto} surviving.`
            return historyObject
        }
        default:
            return
    }
}

export const createHistoryData = historyResponse => {
    console.log(historyResponse)
    const result = []
    // Create a history object for each relevant history
    historyResponse.forEach(history => {
        const historyData = historyDataHandler(history)
        if (historyData) {
            result.push(historyData)
        }
    })
    // Sort the history to be in chronological order
    result.sort((a, b) => (a.nodeDate > b.nodeDate) ? 1 : ((b.nodeDate > a.nodeDate) ? -1 : 0))
    return result
}
