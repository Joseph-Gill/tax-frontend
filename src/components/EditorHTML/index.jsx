import React from 'react';
import {Editor} from 'react-draft-wysiwyg';
import htmlToDraft from "html-to-draftjs";
import {ContentState, EditorState} from "draft-js";


// Currently not used in the Project, leftover from the Template

const EditorHTML = ({data}) => {
    const blocksFromHtml = htmlToDraft(data);
    const {contentBlocks, entityMap} = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    const editorState = EditorState.createWithContent(contentState);

    return (
        <Editor
            editorState={editorState}
            readOnly
            toolbarHidden
        />)
};

export default EditorHTML;
