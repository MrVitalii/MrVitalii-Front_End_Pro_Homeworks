import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import NameApp from './AnimalApp'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)

const newRoot = ReactDOM.createRoot(document.getElementById('newRoot'));
newRoot.render(
    <React.StrictMode>
        <NameApp/>
    </React.StrictMode>
)