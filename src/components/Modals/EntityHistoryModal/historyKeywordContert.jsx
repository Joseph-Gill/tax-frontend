export const convertHistoryKeyword = history => {
    switch (history) {
        case history.action === 'incorporation':
            return 'Incorporation'
        case 'incorporation_child':
            return 'Incorporation of '
    }
}
