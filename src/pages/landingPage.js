import React from 'react';
import Typing from 'react-typing-animation';

const mainDiv={
    height: '90vh',
    marginLeft: '6vw'
}

const mainTitle={
    fontSize: '42px',
    fontFamily: 'Roboto Mono',
    fontWeight: 400,
    paddingTop: '10rem',
}

const subHeading={
    fontSize: '26px',
    fontFamily: 'Roboto Mono',
    fontWeight: 300,
    color: '#383838',
    paddingTop: '3rem',
}

class LandingPage extends React.Component{
    render(){
        return(
            <div style={mainDiv}>
                <div style={mainTitle}>
                    Hi, I'm Paridhi!
                </div>
                <div style={subHeading}> 
                    <Typing speed={40}>
                        <span>
                        I develop websites + mobile apps;
                        <br />
                        <Typing.Delay ms={500} />
                        I also design!
                        </span>
                    </Typing>
                </div>
            </div>
        );
    }
}

export default LandingPage;