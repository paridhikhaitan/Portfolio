import React from 'react'

const footer={
    paddingTop: '2vw',
    paddingBottom: '2vw',
    fontFamily: 'Roboto Mono',
    display: 'block',
    fontSize: '14px'
}

class ContactFooter extends React.Component{
    render(){
        return(
            <div style={footer}>
                <div>
                Made by Paridhi 👽
                </div>
                <div style={{float: 'right'}}>
                    <a href="mailto:paridhi4699@gmail.com" target="blank">paridhi4699@gmail.com</a>
                    <a href=''>LinkedIn</a>
                    <a href=''>Github</a>
                </div>
            </div>
        );
    }
}

export default ContactFooter;