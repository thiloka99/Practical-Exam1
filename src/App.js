import React from 'react';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Header from './Pages/Header';
import Destination from './Pages/Destination';
import Experience from './Pages/Experience';
import Offers from './Pages/Offers';
import Footer from './Pages/Footer';

function App() {
  return (
    <div >
      <React.Fragment>
        <Navbar/><br/>
        <Navbar2/>
      </React.Fragment>

      <Header/>
      <Destination/>
      <Experience/>
      <Offers/>
      <Footer/>
     
    </div>
  );
}

export default App;
