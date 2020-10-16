import React from "react";
import {Home} from '../pages/Home'
import {About} from '../pages/About'
import {Blog} from '../pages/Blog'
import Contact from '../pages/Contact'


export default function Page({ id }) {
  return (

      <div id={id}>
           {(() => {
        if (id === 'Home') {
                    return <Home/>;
                  } 
        else if (id === 'About') {
          return <About />;
        } 
        else if (id === 'Blog'){
          return <Blog />;
        }
        else if (id === 'Contact'){
            return <Contact />;
          }
      })()}
      </div>
   
  );
}