import React, { useState } from "react";

import Editor from "@monaco-editor/react";
import { useParams } from "react-router-dom";
import SQLChecker from "./SQLChecker";

const CodeEditorWindow = ({ id, sub, onChange, language, code, theme }) => {

  const [value, setValue] = useState(code || "");

  const [compileResult, setCompileResult] = useState("Idling");

  const sendSubmit = async () => {
    var new_code = value.replace(/[\r\n]+/g," ").replace(/[\"\']+/g, "\'");
    const data = `{"submitId":"${sub}", "code":"${new_code}"}`;
    console.log(data);
    //await SQLChecker(sub, new_code)
    await fetch('https://7w47k6.deta.dev/submit', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: data // body data type must match "Content-Type" header
    }).then(response => response.json())
    .then(response => {
        if (response.isErr) {
          setCompileResult("Wrong ["+response.errMessage+"]\nCompile Timestamp : "+Date().toLocaleString());
        }
        else if (response.isCorrect) {
          setCompileResult("Correct!\nCompile Timestamp : "+Date().toLocaleString());
        }
        else {
          setCompileResult("Wrong\nCompile Timestamp : "+Date().toLocaleString());
        }
    });
  };

  const handleEditorChange = (value) => {
    setValue(value);
    //onChange("code", value);
  };

  return (
    <div className="centerbox">
      <p className="warning-box">Result : {compileResult}</p>
      <Editor
        height="400px"
        width={`max(500px, 100%)`}
        margin="0 auto"
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue=""
        onChange={handleEditorChange}
      />
      <br />
      <div className="button-container">
        <button onClick={sendSubmit} className="">Submit</button>
      </div>
    </div>
  );
};
export default CodeEditorWindow;