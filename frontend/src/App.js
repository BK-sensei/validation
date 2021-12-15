import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:slug" element={<User />} />
        <Route path="/create-user" element={<CreateUser />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;