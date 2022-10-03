import React, { useEffect } from 'react';
import { useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState, convertFromHTML } from 'draft-js'
import draftToHtml from 'draftjs-to-html';
import { Card } from '@mui/material';

const CustomEditor = ({ height = "50vh", getContent, defaultValue }) => {
    const [editorState, seteditorState] = useState(EditorState.createEmpty());
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())), "editorState");

    useEffect(() => {
        getContent(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    }, [editorState])

    useEffect(() => {
        if (defaultValue) {
            seteditorState(
                EditorState.createWithContent(
                    ContentState.createFromBlockArray(
                        convertFromHTML(defaultValue)
                    )
                )
            )
        }
    }, [])



    const onEditorStateChange = (editorState) => {
        seteditorState(editorState)
    }

    return (
        <Card sx={{ height }}>
            <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange}
            />
        </Card>
    )
}

export default CustomEditor