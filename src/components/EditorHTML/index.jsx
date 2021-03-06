import React, {useEffect} from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { stateFromHTML } from 'draft-js-import-html'
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'


// WYSIWYG Editor used in ProjectAdd/Edit, TaskAdd/Edit, StepDetails, and TaxConsequenceCard
const EditorHTML = ({componentCalling, editorState, setEditorState, textToLoad}) => {

    useEffect(() => {
        if (textToLoad) {
            setEditorState(() => EditorState.createWithContent(stateFromHTML(textToLoad)))
        }
    }, [textToLoad, setEditorState])

    const toolbarProps = {
        options: ['inline', 'fontSize', 'list', 'history'],
        inline: {
            options: ['bold', 'italic', 'underline', 'monospace'],
        },
        list : {
            options: ['unordered', 'ordered'],
        },
    }

    const editorStyling = () => {
        switch (componentCalling) {
            case 'ProjectAddEdit': {
                return 'textEditorProjectAddEdit'
            }
            case 'TaskAddEdit': {
                return 'textEditorTaskAddEdit'
            }
            case 'TaxConsequenceCard': {
                return 'textEditorTaxConsequence'
            }
            default:
                return 'textEditorStepDisplay'
        }
    }

    const wrapperStyling = () => {
        switch (componentCalling) {
            case 'ProjectAddEdit': {
                return 'editorWrapperProjectAddEdit'
            }
            case 'TaskAddEdit': {
                return 'editorWrapperTaskAddEdit'
            }
            case 'TaxConsequenceCard': {
                return 'editorWrapperTaxConsequence'
            }
            default:
                return 'editorWrapperStepDisplay'
        }
    }

    const handleEditorChange = state => {
        setEditorState(state)
    }


    return (
        <Editor
            editorClassName={editorStyling()}
            editorState={editorState}
            onEditorStateChange={handleEditorChange}
            toolbar={toolbarProps}
            toolbarClassName='textEditorToolbar'
            wrapperClassName={wrapperStyling()}
        />
    )
};

export default EditorHTML;
