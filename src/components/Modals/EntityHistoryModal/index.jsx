import React, {useEffect, useState, useRef} from 'react'
import {useDispatch} from 'react-redux'
import Draggable from 'react-draggable'
import Loading from '../../Loading'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {getAllOfficialHistoriesForEntityAction} from '../../../store/entityHistory/actions'
import {CancelButton} from '../../../style/buttons'
import {
    EntityHistoryBar, EntityHistoryContainer, EntityHistoryDetailsContainer, EntityHistoryInternalContainer,
    EntityHistoryTaxButtonContainer, HistoryNode, HistoryNodeFlipped, ScrollButtonContainer, TaxRateContainer, TaxRateText, TaxRateTitle, TimelineButtonDisplayContainer
} from './styles'
import {createHistoryData} from './historyDataHandler'
import scrollLeft from '../../../assets/icons/tax_cheetah_scroll_left_icon.svg'
import scrollRight from '../../../assets/icons/tax_cheetah_scroll_right_icon.svg'


const EntityHistoryModal = ({entityData, setShowEntityHistory, showEntityHistory}) => {
    const ref = useRef(null)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [historyToDisplay, setHistoryToDisplay] = useState([])
    const [selectedHistoryIndex, setSelectedHistoryIndex] = useState(null)

    useEffect(() => {
        const getHistoriesForEntity = async () => {
            const historyResponse = await dispatch(getAllOfficialHistoriesForEntityAction(entityData.id))
            if (historyResponse.status === 200) {
                setHistoryToDisplay(createHistoryData(historyResponse.data))
            }
        }
        getHistoriesForEntity()
            .then(() => setLoading(false))

    }, [dispatch, entityData])

    const scroll = scrollOffset => {
        ref.current.scrollLeft += scrollOffset
    }

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
                            <span>{historyToDisplay[i].nodeDate.slice(0, 10)}</span>
                            <span>{historyToDisplay[i].nodeText}</span>
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
                            <span>{historyToDisplay[i].nodeDate.slice(0, 10)}</span>
                            <span>{historyToDisplay[i].nodeText}</span>
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
                            <TimelineButtonDisplayContainer>
                                <ScrollButtonContainer onClick={() => scroll(-200)}>
                                    <img alt='scroll left' src={scrollLeft} />
                                </ScrollButtonContainer>
                                <EntityHistoryContainer ref={ref}>
                                    <EntityHistoryBar>
                                        {renderHistoryNodes()}
                                    </EntityHistoryBar>
                                </EntityHistoryContainer>
                                <ScrollButtonContainer onClick={() => scroll(200)}>
                                    <img alt='scroll right' src={scrollRight} />
                                </ScrollButtonContainer>
                            </TimelineButtonDisplayContainer>
                            <EntityHistoryDetailsContainer>
                                {selectedHistoryIndex === null ? 'Please select an event to view...' : (
                                    <>
                                        <div>{`${historyToDisplay[selectedHistoryIndex].cardText}`}</div>
                                        <div>{historyToDisplay[selectedHistoryIndex].chart ? 'Make a button' : 'No Button'}</div>
                                    </>)}
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
