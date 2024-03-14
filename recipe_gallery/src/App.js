import logo from './logo.svg';
import React from 'react';
import Gallery from './Gallery';
import { images } from './imageList';

function App() {
  return (
      <div className="App">
        <Gallery images={images} />
      </div>
  );
}

export default App;
