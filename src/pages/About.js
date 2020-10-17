import React from 'react'
import { MDBContainer } from 'mdbreact';
import AboutText from '../blogs/about'



export const About = () => { 
  

  //style = {{align:'justify'}}
  
  
  return(

    <MDBContainer className="text-center my-5">
  
        <div>
        <br/><br/><br/><br/><br/><br/>
        <p style={{ paddingTop: '10px',fontSize: '24px', fontWeight: '500', color: 'black'}}>About me</p>
        <AboutText/><br/>
        
        <br/><br/><br/> <br/>

        </div>
        </MDBContainer>
    )}

