import React from 'react'
import { MDBContainer } from 'mdbreact';
import BlogTitle from '../blogs/blogTitle'
import {API_CALL_DETAIL} from '../cache/api'


export const Blog = () => { return(

    <MDBContainer className="text-center my-5">
   
        <div>
        <br/><br/><br/>
            <p style={{ paddingTop: '10px',fontSize: '24px', fontWeight: '500', color: 'black', display: 'inline-block'}}>
                Blog
                </p> 
                <a href={API_CALL_DETAIL}>
                <p style={{ fontSize: '13px', fontWeight: '400', color: 'gray', display: 'inline-block'}}>
                &nbsp;&nbsp;&nbsp;&nbsp;Click here see rest api   </p></a>
                <br/><br/><br/> 
                        <div align="justify"><BlogTitle/>

</div>

<br/><br/>
<br/><br/><br/> <br/>


        </div>
        </MDBContainer>
    )}

