import React from 'react'
import './widgets.css'

class ContactFooter extends React.Component{
    render(){
        return(
            <div className='footer'>
                <div style={{float: 'left'}}>
                Made by Paridhi 👽
                </div>
                <div style={{float: 'right'}}>
                    <a href="mailto:paridhi4699@gmail.com" target="blank">E-mail</a>
                    <a href='https://www.linkedin.com/in/paridhi4699/'>LinkedIn</a>
                    <a href='https://github.com/paridhikhaitan'>Github</a>
                </div>
            </div>
        );
    }
}

export default ContactFooter;