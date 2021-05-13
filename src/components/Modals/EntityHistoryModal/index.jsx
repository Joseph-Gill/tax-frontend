import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import Draggable from 'react-draggable'
import Loading from '../../Loading'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {getAllOfficialHistoriesForEntityAction} from '../../../store/entityHistory/actions'
import {CancelButton} from '../../../style/buttons'
import {EntityHistoryBar, EntityHistoryContainer, EntityHistoryDetailsContainer, EntityHistoryInternalContainer,
    EntityHistoryTaxButtonContainer, HistoryNode, HistoryNodeFlipped, TaxRateContainer, TaxRateText, TaxRateTitle} from './styles'


const EntityHistoryModal = ({entityData, setShowEntityHistory, showEntityHistory}) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [historyToDisplay, setHistoryToDisplay] = useState([])
    const [selectedHistoryIndex, setSelectedHistoryIndex] = useState(null)

    useEffect(() => {
        const getHistoriesForEntity = async () => {
            const historyResponse = await dispatch(getAllOfficialHistoriesForEntityAction(entityData.id))
            if (historyResponse.status === 200) {
                const result = []
                historyResponse.data.forEach(history => {
                    result.push({
                        date: history.chart ? history.chart.step.effective_date : history.entity.created.slice(0,10),
                        action: history.action,
                        id: history.id,
                        affected_entities: history.affected_entities
                    })
                })
                setHistoryToDisplay([...result])
            }
        }
        getHistoriesForEntity()
            .then(() => setLoading(false))

    }, [dispatch, entityData])

const renderHistoryNodes = () => {
    const result = []
    for (let i = 0; i < historyToDisplay.length; i++) {
        if (i % 2 === 0) {
            result.push(
                <HistoryNodeFlipped
                    key={historyToDisplay[i].id}
                    onClick={() => setSelectedHistoryIndex(i)}
                >
                    <div>
                        <span>{historyToDisplay[i].date}</span>
                        <span>{historyToDisplay[i].action}</span>
                    </div>
                </HistoryNodeFlipped>
            )
        } else {
            result.push(
                <HistoryNode
                    key={historyToDisplay[i].id}
                    onClick={() => setSelectedHistoryIndex(i)}
                >
                    <div>
                        <span>{historyToDisplay[i].date}</span>
                        <span>{historyToDisplay[i].action}</span>
                    </div>
                </HistoryNode>
            )
        }
    }
    return result
}

    return (
        <ModalExternalContainer
            setModalView={setShowEntityHistory}
            showModalView={showEntityHistory}
        >
            <Draggable>
                <EntityHistoryInternalContainer>
                    {loading ? <Loading /> : (
                        <>
                            <ModalClose modalDisplay={setShowEntityHistory} />
                            <ModalTitle title={entityData.name} />
                            <EntityHistoryContainer>
                                <EntityHistoryBar>
                                    {renderHistoryNodes()}
                                </EntityHistoryBar>
                            </EntityHistoryContainer>
                            <EntityHistoryDetailsContainer>
                                {selectedHistoryIndex === null ? 'Please select an event to view...' : `Placeholder view index: ${selectedHistoryIndex}`}
                            </EntityHistoryDetailsContainer>
                            <EntityHistoryTaxButtonContainer>
                                <TaxRateContainer>
                                    <TaxRateTitle>Tax Rate</TaxRateTitle>
                                    <TaxRateText>
                                        {entityData.tax_rate ? `: ${entityData.tax_rate}` : `: N/A`}
                                    </TaxRateText>
                                </TaxRateContainer>
                                <CancelButton onClick={() => setShowEntityHistory(false)}>Cancel</CancelButton>
                            </EntityHistoryTaxButtonContainer>
                        </>)}
                </EntityHistoryInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default EntityHistoryModal
