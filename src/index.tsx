import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import HowToHostWebsite from './Pages/Hosting/HowToHostWebsite';
import HelloWorld from "./Pages/OpenGL/HelloWorld";
import OpenGlIndex from "./Pages/OpenGL/OpenGlIndex";


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home/>}/>
					<Route path="HowToHostWebsite" element={<HowToHostWebsite/>}/>
				</Route>
				<Route path="/OpenGL">
					<Route index element={<OpenGlIndex/>}/>
					<Route path="HelloWorld" element={<HelloWorld/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
