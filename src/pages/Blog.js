import React from 'react'
import { MDBContainer } from 'mdbreact';
import Main from '../blogs/Main'


export const Blog = () => { return(

    <MDBContainer className="text-center my-5">
   
        <div>
        <br/><br/><br/>
            <p style={{ paddingTop: '10px',fontSize: '24px', fontWeight: '500', color: 'black'}}>Blog</p><br/>
                        <div align="justify"><Main/>

</div>

<br/><br/>
<br/><br/><br/> <br/><br/><br/> 


        </div>
        </MDBContainer>
    )}

