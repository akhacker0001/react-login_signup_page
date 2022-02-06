import React from 'react';
import './navbar.css'
export default function Navbar() {
  return(
      <>
           <section>
        <nav className="flex-between">
            <div className="content flex-between">
                <h3>react <span className="orange">app</span></h3>
                <ul className="flex-between">
                    <li>home</li>
                    <li>about</li>
                </ul>
            </div>
            <div className="dropdown">
            </div>
        </nav>
    </section>
      </>
  )
}
