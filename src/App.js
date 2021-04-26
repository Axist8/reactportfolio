import React from 'react';
import Header from './Components/Header/Header';
import { Work } from './Components/Work/Work';
import { About } from './Components/About/About';
import { Contact } from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Work />
      <About />
      <Contact />
    </div>
  );
}

export default App;
