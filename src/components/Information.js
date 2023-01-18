import React, { useState, useEffect } from "react"
import ReactMarkdown from 'react-markdown'
import { useParams } from "react-router-dom";
import remarkGfm from 'remark-gfm'
import './github-markdown-light.css';

export default function Information(param) {

    let [ content, setContent] = useState('');

    let { id, sub } = useParams();

    var importfile = id;
    if (sub) {
        importfile = sub;
    }
    
    useEffect(() => {
        import('./md/'+importfile+'.md')
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setContent(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });


    if (sub) {
        return (
            <div className='markdown-body table-adapt'>
                <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
            </div>
        );
    }
    return (
        <div className='markdown-body'>
            <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
        </div>
    );
}