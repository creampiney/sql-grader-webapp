import React from 'react';
import ReactMarkdown from 'react-markdown'
import { useParams } from "react-router-dom";
import remarkGfm from 'remark-gfm'
import CodeEditorWindow from './CodeEditor';

export default function SubmissionBox() {
    let {id, sub} = useParams();
    return (
        <div className='markdown-body'>
            <br />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                ## Submission
            </ReactMarkdown>
            <CodeEditorWindow id={id} sub={sub} theme="vs-dark" language={"sql"}/>
        </div>
    );
}