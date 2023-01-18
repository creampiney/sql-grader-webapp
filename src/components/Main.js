import React from "react"
import Information from "./Information";
import WarningBox from "./WarningBox";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header"
import SubmissionBox from "./SubmissionBox";

export default function Main() {


    
    return (
        <div className="home-section">
            <div className="home-content">
                <div className="home-container">
                    <i className='bx bx-copy-alt logo_home' id="icon-task"></i>
                    <i className='bx bx-chevron-right logo_home' id="icon-back"></i>
                    <div className="text-container">
                        <BrowserRouter>
                            <Routes>
                                <Route path="/:id" element={<Header />}/>
                                <Route path="/:id/:sub" element={<Header />}/>
                            </Routes>
                        </BrowserRouter>
                        
                    </div>
                </div>
    
            </div>
            <div className="home-information-box">
                <div className="home-information-data">
                    
                    <div id="description-container">
                        <div id="description">
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/:id" element={
                                        <div>
                                            <WarningBox />
                                            <Information />
                                        </div>
                                    }/>
                                    <Route path="/:id/:sub" element={
                                        <div>
                                            <Information sub="q1_1"/>
                                            <SubmissionBox />
                                        </div>
                                    }/>
                                </Routes>
                            </BrowserRouter>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}