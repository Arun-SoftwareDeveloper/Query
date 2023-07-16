import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Class from './Components/Class';
import WebCode from './Components/WebCode';
import Capstone from './Components/Capstone';
import Queries from './Components/Queries';
import CreateQuery from './Components/CreateQuery';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Class />} />
          <Route path="/webcode" element={<WebCode />} />
          <Route path="/capstone" element={<Capstone />} />
          <Route path="/queries" element={<Queries />} />
          <Route path="/createquery" element={<CreateQuery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
