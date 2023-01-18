import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App />
  
);

async function arrowFunction() {
    let arrow = document.querySelectorAll('.arrow');
            for (let i=0 ; i<arrow.length ; i++){
                arrow[i].addEventListener("click",(e)=>{                    
                let arrowParent = e.target.parentElement.parentElement;
                arrowParent.classList.toggle("showMenu");
                })
            }

            let sidebar = document.querySelector('.sidebar');
}

arrowFunction();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
