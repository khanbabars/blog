import React from 'react';
import Navigationbar from '../src/components/Navigationbar'
import Page from './components/Page'
import {Provider} from 'react-redux'
import store from './cache/store'


 

function App() {
  return (
    
  <React.Fragment>
    <Provider store = {store}>
      <Navigationbar/>
        <Page   id="About"/>
        <Page   id="Blog"/>
        <Page   id="Contact"/> 
      </Provider>
  </React.Fragment>



  );

  
}

export default App;
