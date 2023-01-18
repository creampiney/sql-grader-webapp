import React from "react"
import { useParams } from "react-router-dom";
import { searchData, searchSubInData } from "./SearchData";

export default function Header(param) {
    
    let {id, sub} = useParams();
    var obj = searchData(id)[0];
    if (sub) {
        obj = searchSubInData(obj, sub)[0];
    }
    return (
        <span className="text">{obj.header}</span>
    );
}