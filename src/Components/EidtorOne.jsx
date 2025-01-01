import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';

const EditorOne = (props) => {
    const { displayName, language, value, onChange } = props;

    function handleChange(editor, data, value) {
        if (onChange) {
            onChange(value);
        }    
    }

    return (
        <div className="editor-container  ">
            <div className="editor-title flex justify-between bg-[#232324] rounded-tr-lg rounded-tl-lg text-white text-2xl px-4">
                {displayName}
                <button className=''>
                  <i className="ri-collapse-diagonal-line text-xl "></i>  
                </button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value} 
                className="code-mirror-wrapper rounded-br-lg rounded-bl-lg overflow-hidden "
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true,
                }}
            />
        </div>
    );
};

export default EditorOne;
