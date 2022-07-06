import React from 'react';
import Sidebar from '../Sidebar';
import './App.css';

function App() {
  return (
  <> 
  <div className='message-list'>
    <Sidebar />
  </div>
  <section className='message-view'></section>
  </>
  );
}
export default App;
