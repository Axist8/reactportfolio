import React from 'react';
import Navbar from '../Navbar/Navbar';

function Header() {
    return (
        <div>
            <div className="fullscreen">
                <div class="halfscreen">
                    <p>&lt;Axel Jorgensen | web developer&gt;</p>
                </div>
                <div class="halfscreen">
                    <Navbar />
                </div>
            </div>
        </div>
    )
}

export default Header;