import React from 'react'
import TaskDocument from '../../../../../components/TaskDocument'
import taskExpand from '../../../../../assets/icons/stark_task_expand_icon.svg'
import taskCollapse from '../../../../../assets/icons/stark_task_collapse_icon.svg'
import {TaskExpandCollapseImage, TaskExpandCollapseImgContainer} from './styles'
import {EntryDocumentsContainer, EntryDocumentsTextContainer} from '../../../../../style/containers'



const EntryDocuments = ({documents, expanded, project, setExpanded}) => {
    return (
        <EntryDocumentsContainer>
            <EntryDocumentsTextContainer>
                {documents.map(document => (
                    <TaskDocument
                        document={document}
                        key={document.id}
                        project={project}
                    /> ))}
            </EntryDocumentsTextContainer>
            {expanded ?
                <TaskExpandCollapseImgContainer>
                    <TaskExpandCollapseImage alt='collapse' onClick={() => setExpanded(!expanded)} src={taskCollapse} />
                </TaskExpandCollapseImgContainer> :
                <TaskExpandCollapseImgContainer>
                    <TaskExpandCollapseImage alt='expand' onClick={() => setExpanded(!expanded)} src={taskExpand} />
                </TaskExpandCollapseImgContainer>}
        </EntryDocumentsContainer>
    )
}

export default EntryDocuments
