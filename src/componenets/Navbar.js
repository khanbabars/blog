import React, { Component } from "react";
import { NavHashLink as Link } from 'react-router-hash-link';

export default class Navbar extends Component {
  state = {
      isOpen: false
  };

  scrollToTop = () => {
    this.setState({ isOpen: !this.setState.isOpen});
  };

  render() {
   
    return (
      <section id = 'nav-bar' >
      <nav className="nav" id="navbar" >
        <div className="nav-content" >
          <div  className="nav-header" >
            <Link to = "/">
               
                </Link>

               
                </div>
          <ul className="nav navbar-right">
            
          <li >

<Link
  
  to="/#Home"
  smooth={true}
  offset={-70}
  duration={100}>

<p style={{ paddingTop: '10px',fontSize: '18px', fontWeight: '400', color: '#434952'}} > Home</p>
</Link>
</li>
            <li >

              <Link
                
                to="/#About"
                smooth={true}
                offset={-70}
                duration={100}>

<p style={{ paddingTop: '10px',fontSize: '18px', fontWeight: '400', color: '#434952'}} >&nbsp;&nbsp;&nbsp;&nbsp; About</p>
              </Link>
            </li>
            <li >
              <Link
                
                to="/#Blog"
                smooth={true}
                offset={-70}
                duration={100}
              
              >
                <p style={{ paddingTop: '10px', fontSize: '18px', fontWeight: '400', color: '#434952'}} >&nbsp;&nbsp;&nbsp;&nbsp; Blog</p>
              </Link>
            </li>
            <li >
              <Link
                
                to="/#Contact"
                smooth={true}
                offset={-70}
                duration={100}
               
              >
                <p style={{paddingTop: '10px', fontSize: '18px', fontWeight: '400', color: '#434952'}} > &nbsp;&nbsp;&nbsp;&nbsp;Contact</p>
              </Link>
            </li>

          </ul>
        </div>
      </nav>
      </section>
    );
  }
}