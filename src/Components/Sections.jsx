import React, { Component } from 'react';
import cv from '../assets/Cv-new.pdf'
import img1 from '../assets/images/img-1.jpeg'
import img2 from '../assets/images/img-2.jpeg'
import img3 from '../assets/images/img-3.jpeg'
import img4 from '../assets/images/img-4.jpeg'
import img5 from '../assets/images/img-5.jpeg'
import img6 from '../assets/images/img-6.jpeg'
import img7 from '../assets/images/img-7.jpeg'
import img8 from '../assets/images/img-8.jpeg'
import about from '../assets/images/about-img.jpg'
 
 




class Sections extends Component {
    render() {
        return (
    
            <>
      
         
            <section className="home" id="home">
              <div className="content">
                <span className="hi"> hi there... </span>
                <h3>
                  {" "}
                  i am <span> Dionísio Braga </span>{" "}
                </h3>
                <p className="info"> i am a front-end developer </p>
                <p className="text">
                  {" "}
                  Welcome to My World. Here Is Where I Show All My Experiences And<br></br> My Passion, Which Is Programming. Always Ready to Exchange<br></br> Knowledge{" "}
                </p>
                <a href="#about" className="btn">
                  about me
                </a>
              </div>
              
            </section>
            {/* home section ends */}
            {/* about section starts  */}
            <section className="about" id="about">
              <h1 className="heading">
                {" "}
                about <span> me </span>{" "}
              </h1>
              <div className="row-1">
                <div className="image">
                  <img src={about} alt="" />
                </div>
                <div className="content">
                  <h3> my name is Dionísio Braga &amp; i am a font-end developer </h3>
                  <p>
                  Front-End Developer with 2+ years of significant contributions to projects of various
scopes. With my results-oriented mindset, seeking, learning and innovating new and
efficient technologies to make aggressive deadlines consistently achievable.
                  </p>
                  <div className="box-container">
                    <div className="box">
                      <p>
                        {" "}
                        <span> age : </span> 20{" "}
                      </p>
                      <p>
                        {" "}
                        <span> gender : </span> male{" "}
                      </p>
                      <p>
                        {" "}
                        <span> language : </span> Portuguese, english(B1){" "}
                      </p>
                      <p>
                        {" "}
                        <span> work : </span> front-end developer{" "}
                      </p>
                    </div>
                    <div className="box">
                      <p>
                        {" "}
                        <span> freelance : </span> available{" "}
                      </p>
                      <p>
                        {" "}
                        <span> Whatsapp : </span> +244 996 754 465{" "}
                      </p>
                      <p>
                        {" "}
                        <span> email : </span> dionisiobraga551@gmail.com{" "}
                      </p>
                      <p>
                        {" "}
                        <span> country : </span> Angola{" "}
                      </p>
                    </div>
                  </div>
                  <a  download='CV.pdf' href={cv} className="btn">
                    download CV
                  </a>
                  <a href="https://wa.me/+244996754465" className="btn">
                    hire me
                  </a>
                </div>
              </div>
              <h1 className="heading">
                {" "}
                <span> my </span> skills{" "}
              </h1>
              <div className="row-2">
                <div className="skills">
                  <div className="progress">
                    <h3>
                      {" "}
                      Html5 <span> 95% </span>{" "}
                    </h3>
                    <div className="bar">
                      {" "}
                      <span />{" "}
                    </div>
                  </div>
                  <div className="progress">
                    <h3>
                      {" "}
                      Css3 <span> 80% </span>{" "}
                    </h3>
                    <div className="bar">
                      {" "}
                      <span />{" "}
                    </div>
                  </div>
                  <div className="progress">
                    <h3>
                      Bootstrap <span> 70% </span>{" "}
                    </h3>
                    <div className="bar">
                      {" "}
                      <span />{" "}
                    </div>
                  </div>
                  <div className="progress">
                    <h3>
                      {" "}
                      JavaScript (ES6 + OO) <span> 50% </span>{" "}
                    </h3>
                    <div className="bar">
                      {" "}
                      <span />{" "}
                    </div>
                  </div>
                  <div className="progress">
                    <h3>
                      {" "}
                      C/C# <span> 50% </span>{" "}
                    </h3>
                    <div className="bar">
                      {" "}
                      <span />{" "}
                    </div>
                  </div>
                  <div className="progress">
                    <h3>
                      {" "}
                      MySql <span> 60% </span>{" "}
                    </h3>
                    <div className="bar">
                      {" "}
                      <span />{" "}
                    </div>
                  </div>
                  <div className="progress">
                    <h3>
                      {" "}
                      Git-GitHub <span> 65% </span>{" "}
                    </h3>
                    <div className="bar">
                      {" "}
                      <span />{" "}
                    </div>
                  </div>
                  <div className="progress">
                    <h3>
                      {" "}
                      ReactJs <span> 40% </span>{" "}
                    </h3>
                    <div className="bar">
                      {" "}
                      <span />{" "}
                    </div>
                  </div>
                </div>
                <div className="box-container">
                  <div className="box">
                    <h3> &gt;&gt; 2+ </h3>
                    <p>years of experience</p>
                  </div>
                  <div className="box">
                    <h3> &gt;&gt; 15+ </h3>
                    <p>projects completed</p>
                  </div>
                </div>
              </div>
            </section>
            {/* about section ends */}
            {/* service section starts  */}
            <section className="service" id="service">
              <h1 className="heading">
                {" "}
                <span> my </span> services{" "}
              </h1>
              <div className="box-container">
                <div className="box">
                  <i className="fas fa-code" />
                  <h3>web design</h3>
                  <p>
                  Proficiency in HTML, CSS and JavaScript for rapid prototyping
                  </p>
                </div>
                 
                <div className="box">
                  <i className="fas fa-mobile" />
                  <h3>responsive design</h3>
                  <p>
                  1. SEO Improvement
2. A Single Site Version
3. Easier Management
4. Brand Awareness
                  </p>
                </div>
                
                <div className="box">
                  <i className="fas fa-chart-line" />
                  <h3>digital marketing</h3>
                  <p>
                  plan, analyze, set goals that can be achieved
                  </p>
                </div>
                <div className="box">
                  <i className="fas fa-envelope" />
                  <h3>email marketing</h3>
                  <p>
                  direct communication, via email, that takes place between the company and the contacts or customers
                  </p>
                </div>
              </div>
            </section>
            {/* service section ends */}
            {/* experience section starts  */}
            {/* portfolio section starts  */}
            <section className="portfolio" id="portfolio">
              <h1 className="heading">
                {" "}
                <span> my </span> portfolio{" "}
              </h1>
              <div className="box-container">
                <div className="box">
                  <img src={img1} alt="" />
                  <h3> Netflix-Clone </h3>
                  <div className="icons">
                    <a href="https://lnkd.in/dNDGRAS3" className="fas fa-link" />
                     
                  </div>
                </div>
                <div className="box">
                  <img src={img2} alt="" />
                  <h3> Africell-Site </h3>
                  <div className="icons">
                    <a href="https://www.linkedin.com/feed/update/urn:li:activity:6928444717294587904/" className="fas fa-link" />
                     
                  </div>
                </div>
                <div className="box">
                  <img src={img3} alt="" />
                  <h3> game kill flies </h3>
                  <div className="icons">
                    <a href="https://lnkd.in/dqMxZ3EJ" className="fas fa-link" />
                     
                  </div>
                </div>
                <div className="box">
                  <img src={img4} alt="" />
                  <h3> finance website </h3>
                  <div className="icons">
                    <a href="https://johnbraga45.github.io/Site_financeiro/" className="fas fa-link" />
                     
                  </div>
                </div>
                <div className="box">
                  <img src={img5} alt="" />
                  <h3> personal budget </h3>
                  <div className="icons">
                    <a href="https://lnkd.in/dH_xeFC9" className="fas fa-link" />
                     
                  </div>
                </div>
                <div className="box">
                  <img src={img6} alt="" />
                  <h3> BackOffice </h3>
                  <div className="icons">
                    <a href="https://github.com/JohnBraga45/backoffice" className="fas fa-link" />
                     
                  </div>
                </div>
                <div className="box">
                  <img src={img7} alt="" />
                  <h3> E-learning </h3>
                  <div className="icons">
                    <a onClick={'Demo não disponível'} className="fas fa-link" />
                     
                  </div>
                </div>
                <div className="box">
                  <img src={img8} alt="" />
                  <h3> Travel Agency </h3>
                  <div className="icons">
                    <a href="https://lnkd.in/eQQPAgxc" className="fas fa-link" />
                     
                  </div>
                </div>
              </div>
            </section>
            {/* portfolio section ends */}
            {/* contact section starts  */}
            <section className="contact" id="contact">
              <h1 className="heading">
                {" "}
                contact <span> me </span>{" "}
              </h1>
              <div className="icons-container">
                <div className="icons">
                  <i className="fas fa-envelope" />
                  <h3>my email</h3>
                  <p>dionisiobraga551@gmail.com</p>
                   
                </div>
                <div className="icons">
                  <i className="fas fa-phone" />
                  <h3>my number</h3>
                  <p>+244 996 754 465</p>
                  <p>+244 929 579 520</p>
                </div>
                <div className="icons">
                  <i className="fas fa-map-marker-alt" />
                  <h3>my address</h3>
                  <p>Luanda-Angola</p>
                </div>
              </div>
              <div className="row">
                 
              </div>
            </section>
            {/* contact section ends */}
            {/* footer section  */}
            <footer className="footer">
              {" "}
              created by <span> Dionísio Braga </span> | all rights reserved!{" "}
            </footer>
            {/* custom js file link  */}
          </>
          
    
    
            );
    }
}

export default Sections;
