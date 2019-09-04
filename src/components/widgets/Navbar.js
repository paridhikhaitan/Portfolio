import React from 'react'
import './widgets.css'

class Navbar extends React.Component{
    render(){
        return(
            <div className='nav'>
                <div className='namePari'>
                </div>
                <div className='topbar'>
                    <a href='/'>
                        {"< work >"}
                    </a>
                    <a href='/about'>
                        {"< about >"}
                    </a>
                    <a href='https://drive.google.com/file/d/1hV6q58SUGXHcdzsalhhAKKFhF9VrnjyV/view?usp=sharing' target='blank'>
                        {"< resumé >"}
                    </a>
                </div>
                <br />
            </div>
        );
    }
}

export default Navbar;