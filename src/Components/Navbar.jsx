import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <>

                
                
                
               
  
                    {/* header section starts  */}
            <header>
                    <a href="#" className="logo">
                        {" "}
                        <span>Dionísio</span> BRAGA{" "}
                    </a>
                    <nav className="navbar">
                        <a href="#home">home</a>
                        <a href="#about">about</a>
                        <a href="#service">service</a>
                        
                        <a href="#portfolio">portfolio</a>
                        <a href="#contact">contact</a>
                    </nav>
                    <div className="follow">
                        <a href="https://www.facebook.com/jhoni.braga/" className="fab fa-facebook-f" />
                        
                        <a href="https://www.instagram.com/john_braga__/" className="fab fa-instagram" />
                        <a href="https://www.linkedin.com/in/dion%C3%ADsio-braga/" className="fab fa-linkedin" />
                    </div>
             
                </header>

            </>
        )
    }
}
