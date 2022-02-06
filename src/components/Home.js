import React, { useState } from 'react';
import './home.css'

export default function Home() {
    const [position, setPosition] = useState(true);
    const [cardPosition, setCardPosition] = useState('0%');
    
    const [buttonText, setButtonText] = useState('login');
    const [swipeColor, setSwipeColor] = useState({
        color1:"#FF5911",
        color2:"#05152C",
        
    });
    
    
    
    const swipe = () =>{
        if(position){
            setCardPosition("50%")
            
            setPosition(false)
            setSwipeColor({
                color1:"#05152C",
                color2:"#FF5911"
            })
            setButtonText('login')
            
        }else{
            setCardPosition("0%")
            setPosition(true)
            setSwipeColor({
                color1:"#FF5911",
                color2:"#05152C"
                
            })
            setButtonText('signup')

        }

    }
  return(
      <>
          
    <section>


        <div className="main-container flex-items-only">
            <div className="main-card flex-items-only" style={{"backgroundColor":swipeColor.color2}}>
                <div className="swipe-card" style={{"backgroundColor":swipeColor.color1,left:cardPosition}}> 
                    <button className='swipeBtn' style={{"backgroundColor":swipeColor.color2}} onClick={swipe}>{buttonText}</button>
                </div>
                <div className="cards login signup">
                    <div className="login-items logo signup-logo">
                        sign up
                    </div>
                    <div className="login-items input-items signup-items">
                        <div className="main-input-icons">
                            <div className="icons"><i className="fas fa-user-circle"></i></div>
                            <div className="input"><input placeholder='NAME' type="text" /></div>
                        </div>
                        <div className="main-input-icons">
                            <div className="icons"><i className="fas fa-envelope"></i></div>
                            <div className="input"><input placeholder='EMAIL' type="email"  /></div>
                        </div>
                        <div className="main-input-icons">
                            <div className="icons"><i className="fas fa-unlock-alt"></i></div>
                            <div className="input"><input placeholder='PASSWORD' type="password"  /></div>
                        </div>
                    </div>
                    <div className="login-items login-btn">
                        <button>signup</button>
                    </div>
                    <div className="login-items social-media-icons">
                        <div className="icons-container">
                            <div className="social-icons"><i className="fab fa-facebook"></i></div>
                            <div className="social-icons"><i className="fab fa-instagram"></i></div>
                            <div className="social-icons"><i className="fab fa-google"></i></div>
                        </div>
                    </div>
                </div>



                <div className="cards login">
                    <div className="login-items logo">
                        login
                    </div>
                    <div className="login-items input-items">
                        <div className="main-input-icons">
                            <div className="icons"><i className="fas fa-envelope"></i></div>
                            <div className="input"><input type="email" placeholder='EMAIL' /></div>
                        </div>
                        <div className="main-input-icons">
                            <div className="icons"><i className="fas fa-unlock-alt"></i></div>
                            <div className="input"><input type="password" placeholder='PASSWORD' /></div>
                        </div>
                    </div>
                    <div className="login-items login-btn">
                        <button>login</button>
                    </div>
                    <div className="login-items social-media-icons">
                        <div className="icons-container">
                            <div className="social-icons"><i className="fab fa-facebook"></i></div>
                            <div className="social-icons"><i className="fab fa-instagram"></i></div>
                            <div className="social-icons"><i className="fab fa-google"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </section>

      </>
  )
}
