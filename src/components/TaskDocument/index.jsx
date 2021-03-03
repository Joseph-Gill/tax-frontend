import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import DeleteDocumentModal from '../Modals/DeleteDocumentModal'
import {deleteTaskDocumentAction} from '../../store/taskDocument/actions'
import {getTasksForProjectAction} from '../../store/task/actions'
import deleteDocument from '../../assets/icons/stark_task_delete_document_icon.svg'
import {TaskDocumentLink} from '../../style/links'
import {DocumentDeleteIconContainer, TaskDocumentDeleteImage, TaskDocumentDeleteImageContainer} from './styles'


const TaskDocument = ({taskDocument, project}) => {
    const dispatch = useDispatch()
    const [showDeleteDocumentConfirmation, setShowDeleteDocumentConfirmation] = useState(false)

    const deleteDocumentHandler = async () => {
        const response = await dispatch(deleteTaskDocumentAction(taskDocument.id))
        if (response.status === 204) {
            const response = await dispatch(getTasksForProjectAction(project.id))
            if (response) {
                setShowDeleteDocumentConfirmation(false)
            }
        }
    }

    const downloadDocumentHandler = () => {
        fetch(taskDocument.document)
            .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = taskDocument.name;
                    a.click()
                })
            })

    }

    return (
        <DocumentDeleteIconContainer>
            {showDeleteDocumentConfirmation ?
                <DeleteDocumentModal
                    deleteDocumentHandler={deleteDocumentHandler}
                    documentName={taskDocument.name}
                    setShowDeleteDocumentConfirmation={setShowDeleteDocumentConfirmation}
                    showDeleteDocumentConfirmation={showDeleteDocumentConfirmation}
                /> : null}
            <TaskDocumentLink
                onClick={downloadDocumentHandler}
            >{taskDocument.name.length > 18 ? taskDocument.name.slice(0, 11).concat('....').concat(taskDocument.name.slice(-4)) : taskDocument.name}
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
