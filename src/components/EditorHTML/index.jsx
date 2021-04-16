import React, {useEffect} from 'react';
import { EditorState, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './styles.css'


// WYSIWYG Editor used in ProjectAdd
const EditorHTML = ({componentCalling, editorState, setEditorState, textToLoad}) => {

    useEffect(() => {
        if (textToLoad) {
            setEditorState(() => EditorState.createWithContent(ContentState.createFromText(textToLoad)))
        }
    }, [textToLoad, setEditorState])

    const toolbarProps = {
        options: ['inline', 'fontSize', 'list', 'textAlign', 'link', 'embedded', 'remove', 'history']
    }

    const editorStyling = () => {
        switch (componentCalling) {
            case 'ProjectAddEdit': {
                return 'textEditorProjectAddEdit'
            }
            default:
                return 'editor-class'
        }
    }

    const wrapperStyling = () => {
        switch (componentCalling) {
            case 'ProjectAddEdit': {
                return 'editorWrapperProjectAddEdit'
            }
            default:
                return 'wrapper-class'
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
