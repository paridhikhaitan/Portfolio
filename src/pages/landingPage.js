import React from 'react';
import Typing from 'react-typing-animation';

const mainDiv={
    height: '90vh',
    marginLeft: '3vw'
}

const mainTitle={
    fontSize: '42px',
    fontFamily: 'Roboto Mono',
    fontWeight: 400,
    paddingTop: '10rem',
}

const subHeading={
    fontSize: '30px',
    fontFamily: 'Roboto Mono',
    fontWeight: 200,
    color: '#4d4d4d',
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
                        I develop websites and mobile apps. <br />
                        <Typing.Delay ms={500} />
                        I also design :)
                        </span>
                    </Typing>
                </div>
            </div>
        );
    }
}

export default LandingPage;