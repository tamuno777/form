
import React from 'react';
import LeftForm from './components/leftForm';
import Rightbox from './components/Rightbox';
import '../src/App.css';




function App() {
  // const {width} 
  return (
    <div>
      <header>
        <Rightbox></Rightbox>
      </header>
     <div  className='  full' bg="light">
      

        <LeftForm></LeftForm>
     </div>
    </div>
  );
}

export default App;
