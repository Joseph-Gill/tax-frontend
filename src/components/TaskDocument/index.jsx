import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import DeleteDocumentModal from '../Modals/DeleteDocumentModal'
import {deleteTaskDocumentAction} from '../../store/taskDocument/actions'
import {getTasksForProjectAction} from '../../store/task/actions'
import deleteDocument from '../../assets/icons/stark_task_delete_document_icon.svg'
import {TaskDocumentLink} from '../../style/links'
import {DocumentDeleteIconContainer, TaskDocumentDeleteImage, TaskDocumentDeleteImageContainer} from './styles'


const TaskDocument = ({document, project}) => {
    const dispatch = useDispatch()
    const [showDeleteDocumentConfirmation, setShowDeleteDocumentConfirmation] = useState(false)

    const deleteDocumentHandler = async () => {
        const response = await dispatch(deleteTaskDocumentAction(document.id))
        if (response.status === 204) {
            const response = await dispatch(getTasksForProjectAction(project.id))
            if (response) {
                setShowDeleteDocumentConfirmation(false)
            }
        }
    }

    return (
        <DocumentDeleteIconContainer>
            {showDeleteDocumentConfirmation ?
                <DeleteDocumentModal
                    deleteDocumentHandler={deleteDocumentHandler}
                    documentName={document.name}
                    setShowDeleteDocumentConfirmation={setShowDeleteDocumentConfirmation}
                    showDeleteDocumentConfirmation={showDeleteDocumentConfirmation}
                /> : null}
            <TaskDocumentLink
                download
                target='_blank'
                to={document.document}
            >{document.name.length > 18 ? document.name.slice(0, 11).concat('....').concat(document.name.slice(-4)) : document.name}
            </TaskDocumentLink>
            <TaskDocumentDeleteImageContainer>
                <TaskDocumentDeleteImage
                    alt='delete document'
                    onClick={() => setShowDeleteDocumentConfirmation(true)}
                    src={deleteDocument}
                />
            </TaskDocumentDeleteImageContainer>
        </DocumentDeleteIconContainer>
    )
}

export default TaskDocument
