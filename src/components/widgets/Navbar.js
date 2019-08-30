import React from 'react'
import './widgets.css'

class Navbar extends React.Component{
    render(){
        return(
            <div className='nav'>
                <div>
                </div>
                <div className='topbar'>
                    <a href='/'>
                        {"< work >"}
                    </a>
                    <a href='/about'>
                        {"< about >"}
                    </a>
                    <a href='#'>
                        {"< resumé >"}
                    </a>
                </div>
                <br />
            </div>
        );
    }
}

export default Navbar;