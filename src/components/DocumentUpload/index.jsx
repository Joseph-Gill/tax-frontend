import React from 'react'
import documentUpload from '../../assets/icons/stark_upload_document_icon.svg'
import {DocumentUploadAreaText} from '../../style/text'
import {DocumentUploadArea} from './styles'


const DocumentUpload = ({getInputProps, getRootProps}) => {
    return (
        //This module is used to create the drag and drop / click to upload file inputs for the app
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
