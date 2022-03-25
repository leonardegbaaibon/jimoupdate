import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './Pages/smartlux';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from './Pages/Services';
import Project from './Pages/Project';
import About from './Pages/About';
// import ChatRecipientPicker from './testing';
import reportWebVitals from './reportWebVitals';


// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Homepage />}>
//           <Route index element={<Homepage />} />
//           <Route path="Services" element={<Services />} />
//           <Route path="Project" element={<Project />} />
//           <Route path="contact" element={<About />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

ReactDOM.render(
  <React.StrictMode>
    <About />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
