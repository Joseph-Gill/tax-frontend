import React from 'react'
import documentUpload from '../../assets/icons/stark_upload_document_icon.svg'
import {DocumentUploadArea} from './styles'
import {DocumentUploadAreaText} from '../../style/text'


const DocumentUpload = ({getInputProps, getRootProps}) => {
    return (
        <section className='container'>
            <DocumentUploadArea {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <img alt='document upload' src={documentUpload} />
                <DocumentUploadAreaText>Click or drag and drop to upload</DocumentUploadAreaText>
            </DocumentUploadArea>
        </section>
    )
}

export default DocumentUpload
