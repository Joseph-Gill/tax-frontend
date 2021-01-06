import React from 'react'
import taskExpand from '../../../../../assets/icons/stark_task_expand_icon.svg'
import taskCollapse from '../../../../../assets/icons/stark_task_collapse_icon.svg'
import deleteDocument from '../../../../../assets/icons/stark_task_delete_document_icon.svg'
import {DocumentDeleteIconContainer, EntryDocumentsContainer, EntryDocumentsTextContainer, TaskDocumentLink, TaskExpandCollapseImage} from './styles'


const EntryDocuments = ({documents, expanded, setExpanded}) => {
    return (
        <EntryDocumentsContainer>
            <EntryDocumentsTextContainer>
                {documents.map(document => (
                    <DocumentDeleteIconContainer key={document.id}>
                        <TaskDocumentLink
                            download
                            target='_blank'
                            to={document.document}
                        >{document.name.length > 18 ? document.name.slice(0, 11).concat('....').concat(document.name.slice(-4)) : document.name}
                        </TaskDocumentLink>
                        <img alt='delete document' src={deleteDocument} />
                    </DocumentDeleteIconContainer>
                ))}
            </EntryDocumentsTextContainer>
            {expanded ?
                <TaskExpandCollapseImage alt='collapse' onClick={() => setExpanded(!expanded)} src={taskCollapse} /> :
                <TaskExpandCollapseImage alt='expand' onClick={() => setExpanded(!expanded)} src={taskExpand} />}
        </EntryDocumentsContainer>
    )
}

export default EntryDocuments
