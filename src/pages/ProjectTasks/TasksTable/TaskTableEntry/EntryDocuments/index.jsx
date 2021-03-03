import React from 'react'
import TaskDocument from '../../../../../components/TaskDocument'
import taskExpand from '../../../../../assets/icons/stark_task_expand_icon.svg'
import taskCollapse from '../../../../../assets/icons/stark_task_collapse_icon.svg'
import {TaskExpandCollapseImgContainer} from './styles'
import {EntryDocumentsContainer, EntryDocumentsTextContainer} from '../../../../../style/containers'



const EntryDocuments = ({documents, expanded, project, setExpanded}) => {
    return (
        <EntryDocumentsContainer>
            <EntryDocumentsTextContainer>
                {documents.map(document => (
                    <TaskDocument
                        key={document.id}
                        project={project}
                        taskDocument={document}
                    /> ))}
            </EntryDocumentsTextContainer>
            {expanded ?
                <TaskExpandCollapseImgContainer>
                    <img alt='collapse' onClick={() => setExpanded(!expanded)} src={taskCollapse} />
                </TaskExpandCollapseImgContainer> :
                <TaskExpandCollapseImgContainer>
                    <img alt='expand' onClick={() => setExpanded(!expanded)} src={taskExpand} />
                </TaskExpandCollapseImgContainer>}
        </EntryDocumentsContainer>
    )
}

export default EntryDocuments
