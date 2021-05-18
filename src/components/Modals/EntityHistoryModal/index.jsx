import React, {useEffect, useState, useRef} from 'react'
import {useDispatch} from 'react-redux'
import Draggable from 'react-draggable'
import {useHistory} from 'react-router-dom'
import Loading from '../../Loading'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {getProjectAction} from '../../../store/project/actions'
import {getStepsForProjectAction, skipToSpecifiedStep} from '../../../store/step/actions'
import {getAllOfficialHistoriesForEntityAction} from '../../../store/entityHistory/actions'
import {createHistoryData} from './historyDataHandler'
import {DISPLAY_STEP, GROUPS, PROJECTS, STEPS} from '../../../routes/paths'
import scrollLeft from '../../../assets/icons/tax_cheetah_scroll_left_icon.svg'
import scrollRight from '../../../assets/icons/tax_cheetah_scroll_right_icon.svg'
import {CancelButton} from '../../../style/buttons'
import {
    EntityHistoryBar, EntityHistoryContainer, EntityHistoryDetailsContainer, EntityHistoryInternalContainer,
    EntityHistoryTaxButtonContainer, GoToStepButton, HistoryInfoTitle, HistoryNode, HistoryNodeFlipped, ScrollButtonContainer, TaxRateContainer, TaxRateText,
    TaxRateTitle, TimelineButtonDisplayContainer
} from './styles'


const EntityHistoryModal = ({entityData, setShowEntityHistory, showEntityHistory}) => {
    const ref = useRef(null)
    const dispatch = useDispatch()
    const history = useHistory()
    const [loading, setLoading] = useState(true)
    const [historyToDisplay, setHistoryToDisplay] = useState([])
    const [selectedHistoryIndex, setSelectedHistoryIndex] = useState(null)

    useEffect(() => {
        const getHistoriesForEntity = async () => {
            const historyResponse = await dispatch(getAllOfficialHistoriesForEntityAction(entityData.id))
            if (historyResponse.status === 200) {
                setHistoryToDisplay(createHistoryData(historyResponse.data))
            }
            return historyResponse
        }
        getHistoriesForEntity()
            .then(historyResponse => {
                if (!historyResponse) {
                    setShowEntityHistory(false)
                } else {
                    setLoading(false)
                }
            })

    }, [dispatch, entityData, setShowEntityHistory])

    // Used by scroll buttons on sides of the timeline to move display left / right
    const scroll = scrollOffset => {
        ref.current.scrollLeft += scrollOffset
    }

    const renderHistoryNodes = () => {
        const result = []
        for (let i = 0; i < historyToDisplay.length; i++) {
            // Uses flipped nodes for every even node to oscillate the nodes above / below the bar
            if (i % 2 === 0) {
                result.push(
                    <HistoryNodeFlipped
                        isactive={i === selectedHistoryIndex ? 1 : 0}
                        key={historyToDisplay[i].id}
                    >
                        <div
                            onClick={() => setSelectedHistoryIndex(i)}
                        >
                            <span>{historyToDisplay[i].nodeDate.slice(0, 10)}</span>
                            <span>{historyToDisplay[i].nodeText}</span>
                        </div>
                    </HistoryNodeFlipped>
                )
            } else {
                result.push(
                    <HistoryNode
                        isactive={i === selectedHistoryIndex ? 1 : 0}
                        key={historyToDisplay[i].id}
                    >
                        <div
                            onClick={() => setSelectedHistoryIndex(i)}
                        >
                            <span>{historyToDisplay[i].nodeDate.slice(0, 10)}</span>
                            <span>{historyToDisplay[i].nodeText}</span>
                        </div>
                    </HistoryNode>
                )
            }
        }
        return result
    }

    const goToSpecificStepHandler = async () => {
        setLoading(true)
        await Promise.all([
            await dispatch(getProjectAction(historyToDisplay[selectedHistoryIndex].chart.step.project.id)),
            await dispatch(getStepsForProjectAction(historyToDisplay[selectedHistoryIndex].chart.step.project.id))
        ]).then(() => {
            dispatch(skipToSpecifiedStep(historyToDisplay[selectedHistoryIndex].chart.step.number - 1))
            history.push(`${GROUPS}${PROJECTS}${STEPS}${DISPLAY_STEP}`)
        })
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
                                        <HistoryInfoTitle>
                                            {historyToDisplay[selectedHistoryIndex].chart ?
                                            `Step# ${historyToDisplay[selectedHistoryIndex].chart.step.number} of Project: ${historyToDisplay[selectedHistoryIndex].chart.step.project.name}`
                                            : ''}
                                        </HistoryInfoTitle>
                                        <div>{`${historyToDisplay[selectedHistoryIndex].cardText}`}</div>
                                        <div>{historyToDisplay[selectedHistoryIndex].chart ?
                                            <GoToStepButton
                                                onClick={goToSpecificStepHandler}
                                            >
                                                Go To Step
                                            </GoToStepButton> :
                                            ''}
                                        </div>
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
