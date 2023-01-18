import React, { useEffect } from "react"
import Data from "./json/data.json"

export default function Navbar() {
    useEffect(() => {
        
            let arrow = document.querySelectorAll('.arrow');
                    for (let i=0 ; i<arrow.length ; i++){
                        arrow[i].addEventListener("click",(e)=>{                    
                        let arrowParent = e.target.parentElement.parentElement;
                        arrowParent.classList.toggle("showMenu");
                        })
                    }
        
                    let sidebar = document.querySelector('.sidebar');
        
    })
    return (
        <div id="sidebar" className="sidebar">
            <ul className="nav-link">
                {Data.map((data, key) => {
                    return (
                        <li>
                            <div className="iocn-link">
                                <a className="link-container" href={'/'+data.id}>
                                    <div className="link_name-container">
                                        <span className="link_name">{data.header}</span>
                                    </div>
                                </a> 
                                <i className='bx bx-chevron-down arrow'></i>
                            </div>
                            <ul className="sub-menu">
                                <li>
                                    {data.sub.map((sdata, skey) => {
                                        return (
                                            <a href={'/'+data.id+'/'+sdata.id}>
                                                <div className="sub-menu-link">
                                                    <div className="sub-menu-link-name">{sdata.header}</div>
                                                </div>
                                            </a>
                                        );
                                    })}
                                </li>
                            </ul> 
                        </li>
                    );
                })}          
            </ul>
             
            
        </div>
      );
        
}