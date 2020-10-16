import React from 'react';
import Navigationbar from '../src/componenets/Navigationbar'
import Page from './componenets/Page'


 

function App() {
  return (
    <React.Fragment>
<Navigationbar/>
<Page   id="About"/>
<Page  id="Blog"/>
<Page   id="Contact"/> 





    </React.Fragment>



  );

  
}

export default App;
