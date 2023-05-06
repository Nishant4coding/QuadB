import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ShowList from './Components/ShowList';
import ShowSummary from './Components/ShowSummary';

function App() {
  return (
    <Router>
      <div>
        {/* <ShowList/>
        <ShowSummary/> */}
        <Routes>
        <Route exact path="/" element={<ShowList/>} ></Route>
        <Route path="/show/:id" element={<ShowSummary/>} ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
