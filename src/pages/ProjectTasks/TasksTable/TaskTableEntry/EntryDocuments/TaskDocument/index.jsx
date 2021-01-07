import React, {useState} from 'react'
import deleteDocument from '../../../../../../assets/icons/stark_task_delete_document_icon.svg'
import {DocumentDeleteIconContainer, TaskDocumentDeleteImage, TaskDocumentLink} from './styles'
import DeleteDocumentModal from '../../../../../../components/DeleteAccountModal/DeleteDocumentModal'
import {useDispatch} from 'react-redux'


const TaskDocument = ({document}) => {
    const dispatch = useDispatch()
    const [showDeleteDocumentConfirmation, setShowDeleteDocumentConfirmation] = useState(false)

    const deleteDocumentHandler = async () => {
    }

    return (
        <DocumentDeleteIconContainer>
            {showDeleteDocumentConfirmation ?
                <DeleteDocumentModal
                    deleteDocumentHandler={deleteDocumentHandler}
                    documentName={document.name}
                    setShowDeleteDocumentConfirmation={setShowDeleteDocumentConfirmation}
                /> : null}
            <TaskDocumentLink
                download
                target='_blank'
                to={document.document}
            >{document.name.length > 18 ? document.name.slice(0, 11).concat('....').concat(document.name.slice(-4)) : document.name}
            </TaskDocumentLink>
            <TaskDocumentDeleteImage
                alt='delete document'
                onClick={() => setShowDeleteDocumentConfirmation(true)}
                src={deleteDocument}
            />
        </DocumentDeleteIconContainer>
    )
}

export default TaskDocument
