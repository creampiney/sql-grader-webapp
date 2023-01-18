import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { searchData } from "./SearchData";
import download from 'downloadjs';

export default function WarningBox() {

    var { id } = useParams();
    var obj = searchData(id)[0];

    return (
        <p className="warning-box">ให้ download ไฟล์ database จาก link : <a href={`https://github.com/creampiney/creampiney.github.io/blob/master/file/sql-db/${obj.db_link}?raw=true`} onClick={async () => {
            /*const res = await fetch(`https://7w47k6.deta.dev/download/${obj.db_link}` ,{
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
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
                
              });
            const blob = await res.blob();
            download(blob, `${obj.db_link}`);
            */
          }}>{obj.db_link}</a></p>
    );

}