
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
                cardText: `Incorporation of ${history.creating_action.entity.name} in ${history.creating_action.entity.location}.`
            })
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
