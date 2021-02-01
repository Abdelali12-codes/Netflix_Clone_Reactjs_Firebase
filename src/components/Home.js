import React from 'react'
import {NavLink} from 'react-router-dom'
import './Home.css'
const Home = () => {
    return (
        <>
            <div class="navbar">
              <li class="logo"><img src="https://www.searchpng.com/wp-content/uploads/2019/02/Netflix-Logo-PNG-image-200x200.png"/></li>
              <li class="buttons">
                  <NavLink to='/signin' style={{width:'100%' , height:'100%'}}>
                   Sign In
                  </NavLink>
              </li>
             </div>
             <div class="main">
                <div class="area">
               <h1>Unlimited movies, TV <br/>shows, and more.</h1>
               <h3>Watch anywhere. Cancel anytime.</h3>
                  <div class="search">
                    {/* <input type="text" class="box" placeholder="Email"/> */}
                
                    <span class="try">
                    <NavLink to='/signup' style={{width:'100%' , height:'100%',
                       display:'flex' , alignItems:'center' , justifyContent:'center'
                }}>
                  Strat <i class="fas fa-chevron-right" style={{padding:'5px' , marginLeft:'10px'}}></i>
                  </NavLink>
                    </span>
                
                  </div>
                  <h4>Ready to watch? Enter your email to create or access your account
                    </h4>
                </div>
            </div>
        <div class="container1">
         <div class="text">
          <h1>Enjoy on your TV.</h1>
            <p>
                Watchx on Smart TVs, Playstation, Xbox, <br/>
                Chromecast, Apple TV, Blu-ray players, and<br/>
                 more.
            </p>
         </div>
        <div class="image">
   <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"/>
        </div>
      </div>
      <div class="container1">
          <div class="image">
    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile.png"/>
          </div>
          <div class="text">
              <h1>Download your shows to watch on the go.
                </h1>
                <p>
                    Save your data and watch all your favorites offline.
                </p>
            </div>
            
        </div>
        {/* last container */}
            
        <div class="container1">
            <div class="text">
              <h1>Watch everywhere.</h1>
                <p>
                    Stream unlimited movies and TV shows on <br/>your phone, tablet, laptop, and TV without paying more.

                </p>
            </div>
            <div class="image">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"/>
            </div>
        </div>
        <div class="question">
            <h1>Frequently Asked Questions</h1>
              <div class="quest">
                <div class="textbox">What is Netflix?</div>
                <i class="las la-plus"></i>
              </div>
              <div class="quest">
                  <div class="textbox">How much does Netflix cost?</div>
                  <i class="las la-plus"></i>
             </div>             
             <div class="quest">
                    <div class="textbox">Where can I watch?</div>
                    <i class="las la-plus"></i>
            </div>                 
            <div class="quest">
                    <div class="textbox">How do I cancel?</div>
                    <i class="las la-plus"></i>
            </div>               
            <div class="quest">
                      <div class="textbox">What can I watch on Netflix??</div>
                      <i class="las la-plus"></i>
            </div>
            <div class="quest">
                        <div class="textbox">What is Netflix?</div>
                        <i class="las la-plus"></i>                   
            </div>    
            <div class="search1">
                    <input type="text" class="box1" placeholder="Email"/>
                          <span class="try1">
                    Try 30 days free <i class="fas fa-chevron-right"></i>
                          </span>
                          
            </div>      
              <h4>Ready to watch? Enter your email to create or access your account </h4>
        </div>
        <div class="footer">
            <div class="footercon">
                <div class="flex1">
                        
                            <h5></h5>
                </div>       
               <ul class="list1">
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Investor Relation</a></li>
                        <li><a href="">Ways to Watch</a></li>
                        <li><a href="">Corporate Information</a></li>
                        <li><a href="">Netflix Originals</a></li>
                </ul>
                <ul class="list1">
                            <li><a href="">Home</a></li>
                            <li><a href="">Jobs</a></li>
                            <li><a href="">Terms of Use</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">#</a></li>
                </ul>
                <ul class="list1">
                                <li><a href="">Account</a></li>
                                <li><a href="">Redeem Gift Cards</a></li>
                                <li><a href="">Privacy</a></li>
                                <li><a href="">Speed Test</a></li>
                                <li><a href="">#</a></li>
                </ul>
                <ul class="list1">
                                    <li><a href="">Media Center</a></li>
                                    <li><a href="">Buy Gift Cards</a></li>
                                    <li><a href="">Cookie Preferences</a></li>
                                    <li><a href="">Legal Notices</a></li>
                                    <li><a href="">#</a></li>
                </ul>
                                 
            </div>

        </div>
        <div class="end">
                <h2>Made by Abdelali jad</h2> 
                <h2>Instagram @abdelali.codes</h2>                   
        </div>
        </>
    )
}

export default Home
