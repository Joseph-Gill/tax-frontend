
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

const historyDataHandler = history => {
    switch (history.action) {
        case 'group_edit_change':
            return ({
                id: history.id,
                nodeDate: history.created,
                nodeText: 'User Edited',
                cardText: `Entity ${history.entity.name} edited in the system.`
            })
        case 'group_edit_add':
            return ({
                id: history.id,
                nodeDate: history.created,
                nodeText: 'User Added',
                cardText: `Entity ${history.entity.name} added in the system.`
            })
        case 'add_entity':
            return ({
                id: history.id,
                nodeDate: history.chart.step.effective_date,
                nodeText: 'Entity Added',
                cardText: `Entity ${history.entity.name} added in the system.`,
                chart: history.chart
            })
        case 'add_entity_child':
            return ({
                id: history.id,
                nodeDate: history.chart.step.effective_date,
                nodeText: 'Subsidiary Added',
                cardText: `Subsidiary ${history.creating_action.entity.name} was added manually with 100% shareholding.`,
                chart: history.chart
            })
        case 'edit_entity':
            return ({
                id: history.id,
                nodeDate: history.chart.step.effective_date,
                nodeText: 'Entity Edited',
                cardText: `Entity ${history.entity.name} was manually edited.`,
                chart: history.chart
            })
        case 'edit_entity_removed_child':
            return ({
                id: history.id,
                nodeDate: history.chart.step.effective_date,
                nodeText: 'Subsidiary Removed',
                cardText: `Subsidiary ${history.creating_action.entity.name} was manually removed.`,
                chart: history.chart
            })
        case 'edit_entity_added_child':
            return ({
                id: history.id,
                nodeDate: history.chart.step.effective_date,
                nodeText: 'Subsidiary Added',
                cardText: `Subsidiary ${history.creating_action.entity.name} was added manually with 100% shareholding.`,
                chart: history.chart
            })
        case 'remove_entity':
            return ({
                id: history.id,
                nodeDate: history.chart.step.effective_date,
                nodeText: 'Entity Removed',
                cardText: `Entity ${history.entity.name} was manually removed.`,
                chart: history.chart
            })
        case 'remove_entity_child':
            return ({
                id: history.id,
                nodeDate: history.chart.step.effective_date,
                nodeText: 'Subsidiary Removed',
                cardText: `Subsidiary ${history.creating_action.entity.name} with 100% shareholding was manually removed.`,
                chart: history.chart
            })
        case 'incorporation':
            return ({
                id: history.id,
                nodeDate: history.chart.step.effective_date,
                nodeText: 'Incorporation',
                cardText: `Incorporation of ${history.entity.name} in ${history.entity.location}.`,
                chart: history.chart
            })
        case 'incorporation_child':
            return ({
                id: history.id,
                nodeDate: history.chart.step.effective_date,
                nodeText: `Incorporation of ${history.creating_action.entity.name}.`,
                cardText: `Incorporation of ${history.creating_action.entity.name} in ${history.creating_action.entity.location}.`,
                chart: history.chart
            })
        case 'change_legal_form':
            return ({
                id: history.id,
                nodeDate: history.chart.step.effective_date,
                nodeText: 'Change of Legal Form',
                cardText: `Change of legal form from ${history.changed_legal_form} to ${getLegalFormFromNodeData(history.chart.nodes, history.entity.id)}.`,
                chart: history.chart
            })
        case 'contribution': {
            const contributionRecipientName = getSpecifiedAffectedEntityName(history.affected_entities, 'contribution_recipient')
            return ({
                id: history.id,
                nodeDate: history.chart.step.effective_date,
                nodeText: `Contribution to ${contributionRecipientName}`,
                cardText: `Contribution of assets to ${contributionRecipientName}. `,
                chart: history.chart
            })
        }
        case 'contribution_recipient':
            return ({
                id: history.id,
                nodeDate: history.chart.step.effective_date,
                nodeText: 'Receiving a Contribution',
                cardText: `Receiving a contribution of assets from ${history.creating_action.entity.name}.`,
                chart: history.chart
            })
        case 'contribution_participant': {
            const contributionContributorName = getSpecifiedAffectedEntityName(history.affected_entities, 'contribution_participant_contributor')
            const contributionRecipientName = getSpecifiedAffectedEntityName(history.affected_entities, 'contribution_participant_recipient')
            return ({
                id: history.id,
                nodeDate: history.chart.step.effective_date,
                nodeText: 'Change of Shareholder',
                cardText: `${history.entity.name} was contributed from ${contributionContributorName} to ${contributionRecipientName}.`,
                chart: history.chart
            })
        }
        case 'contribution_participant_recipient': {
            const contributionContributorName = getSpecifiedAffectedEntityName(history.creating_action.affected_entities, 'contribution_participant_contributor')
            return ({
                id: history.id,
                nodeDate: history.chart.step.effective_date,
                nodeText: 'Receiving a Contribution',
                cardText: `Receiving a contribution of 100% of the shares in ${history.creating_action.entity.name} from ${contributionContributorName}.`,
                chart: history.chart
            })
        }
        case 'contribution_participant_contributor': {
            const contributionRecipientName = getSpecifiedAffectedEntityName(history.creating_action.affected_entities, 'contribution_participant_recipient')
            return ({
                id: history.id,
                nodeDate: history.chart.step.effective_date,
                nodeText: `Contribution to ${contributionRecipientName}`,
                cardText: `Contribution of 100% shares in ${history.creating_action.entity.name} to ${contributionRecipientName}.`,
                chart: history.chart
            })
        }
        case 'distribution':{
            const distributionRecipientName = getSpecifiedAffectedEntityName(history.affected_entities, 'distribution_recipient')
            return ({
                id: history.id,
                nodeDate: history.chart.step.effective_date,
                nodeText: 'Dividend Distribution',
                cardText: `Distribution of assets to ${distributionRecipientName}.`,
                chart: history.chart
            })
        }
        case 'distribution_recipient':
            return ({
                id: history.id,
                nodeDate: history.chart.step.effective_date,
                nodeText: 'Receiving a Distribution',
                cardText: `Receiving a distribution of assets from ${history.creating_action.entity.name}.`,
                chart: history.chart
            })
        case 'distribution_participant': {
            const distributionContributorName = getSpecifiedAffectedEntityName(history.affected_entities, 'distribution_participant_distributor')
            const distributionRecipientName = getSpecifiedAffectedEntityName(history.affected_entities, 'distribution_participant_recipient')
            return ({
                id: history.id,
                nodeDate: history.chart.step.effective_date,
                nodeText: 'Change of Shareholder',
                cardText: `${history.entity.name} was distributed from ${distributionContributorName} to ${distributionRecipientName}.`,
                chart: history.chart
            })
        }
        case 'distribution_participant_recipient': {
            const distributionDistributorName = getSpecifiedAffectedEntityName(history.creating_action.affected_entities, 'distribution_participant_distributor')
            return ({
                id: history.id,
                nodeDate: history.chart.step.effective_date,
                nodeText: `Receiving a Distribution`,
                cardText: `Receiving a distribution of 100% shares in ${history.creating_action.entity.name} from ${distributionDistributorName}.`,
                chart: history.chart
            })
        }
        case 'distribution_participant_distributor': {
            const distributionRecipientName = getSpecifiedAffectedEntityName(history.creating_action.affected_entities, 'distribution_participant_recipient')
            return ({
                id: history.id,
                nodeDate: history.chart.step.effective_date,
                nodeText: 'Dividend Distribution',
                cardText: `Distribution of 100% of the shares in ${history.creating_action.entity.name} to ${distributionRecipientName}.`,
                chart: history.chart
            })
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
