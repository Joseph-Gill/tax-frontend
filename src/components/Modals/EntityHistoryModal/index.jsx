import React, {useEffect, useState} from 'react'
import Draggable from 'react-draggable'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import styled from 'styled-components/macro'
import {AddDeleteModalInternalContainer} from '../styles'
import {useDispatch} from 'react-redux'
import {getAllOfficialHistoriesForEntityAction} from '../../../store/entityHistory/actions'
import Loading from '../../Loading'


const EntityHistoryInternalContainer = styled(AddDeleteModalInternalContainer)`
    width: 800px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const EntityHistoryContainer = styled.div`
    width: 769px;
    height: 104px;
    max-width: 769px;
    overflow-x: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HistoryNode = styled.div`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.grayOne};
    list-style-type: none;
    width: 120px;
    position: relative;
    text-align: center;

    :before {
        content: '';
        width: 13px;
        height: 25px;
        border-radius: ${props => props.theme.borderRadius};
        background: ${props => props.theme.primaryBlue};
        display: block;
        margin: 0 auto 3px auto;
    }

    :after {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        background: ${props => props.theme.primaryBlue};
        top: 12.5px;
        left: -50%;
    }

    :first-child:after {
        content: none;
    }

    :hover {
        cursor: pointer;
        transition: 167ms;
        text-decoration: underline;
    }

    div {
        display: flex;
        flex-direction: column;
        background: red;
        position: absolute;
    }
`

const HistoryNodeFlipped = styled(HistoryNode)`
    div {
        background: rebeccapurple;
        top: -40px;
    }
`

const EntityHistoryBar = styled.ul`
    display: flex;
`


const EntityHistoryModal = ({entityData, setShowEntityHistory, showEntityHistory}) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [historyToDisplay, setHistoryToDisplay] = useState([])

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
    console.log(historyToDisplay)
    for (let i = 0; i < historyToDisplay.length; i++) {
        console.log(historyToDisplay[i])
        if (i % 2 === 0) {
            result.push(
                <HistoryNodeFlipped
                    key={historyToDisplay[i].id}
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
                            <div>{entityData.name}</div>
                            <EntityHistoryContainer>
                                <EntityHistoryBar>
                                    {renderHistoryNodes()}
                                </EntityHistoryBar>
                            </EntityHistoryContainer>
                        </>
                    )}
                </EntityHistoryInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default EntityHistoryModal
