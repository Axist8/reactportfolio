import React from 'react';
import Navbar from '../Navbar/Navbar';

function Header() {
    return (
        <header>
        <div class="content-wrap">
          <div class="thehead">
            <div class="titlename">
              <p class="axe">&lt;Axel Jorgensen | web developer&gt;</p>
            </div>
            <div class="navi">
              <Navbar />
            </div>
          </div>
        </div>
        <div class="hero-wrap">
          <div class="hero">
            <div class="hero-in">
              <h1><br /><br /><br /><br /><br /><br /><br />Let's &nbsp;&nbsp;<span>code</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;something&nbsp;&nbsp; <span>cool</span></h1>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;