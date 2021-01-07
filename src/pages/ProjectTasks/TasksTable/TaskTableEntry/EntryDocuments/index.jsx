import React from 'react'
import taskExpand from '../../../../../assets/icons/stark_task_expand_icon.svg'
import taskCollapse from '../../../../../assets/icons/stark_task_collapse_icon.svg'
import {EntryDocumentsContainer, EntryDocumentsTextContainer, TaskExpandCollapseImage} from './styles'
import TaskDocument from './TaskDocument'


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
                <TaskExpandCollapseImage alt='collapse' onClick={() => setExpanded(!expanded)} src={taskCollapse} /> :
                <TaskExpandCollapseImage alt='expand' onClick={() => setExpanded(!expanded)} src={taskExpand} />}
        </EntryDocumentsContainer>
    )
}

export default EntryDocuments
