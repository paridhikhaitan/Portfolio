import React from 'react';
import Navbar from '../components/widgets/Navbar';
import GlitchEffect from 'react-glitch-effect';
import '../App.css'
import ContactFooter from '../components/widgets/ContactFooter';

const mainImage={
    width: '70%',
    height: '70%',
    paddingTop: '3vw',
}

class aboutPage extends React.Component{

    render(){
        return(
            <div>
                <Navbar />
                <div style={{marginLeft: '5%', marginRight: '5%', display: 'flex', marginBottom: '5%'}}>
                    <GlitchEffect duration='6s' >
                        <img src={require('../components/images/about/aboutPagePhoto.jpg')} alt='Pari :)' style={mainImage}/>
                    </GlitchEffect>
                    <div className='pageStyles' style={{paddingTop: '2vw'}}>
                        <p style={{color: '#4a4a4a', fontSize: '18px'}}>
                            Hi, I'm Paridhi. I'm currently pursuing a B.S. in Computer Science with a minor in Design at the 
                            University of California, San Diego. 
                            <br />
                            <br />
                            This summer, I served as a Tutor for Android Development at <a href='/fbu'>Facebook University</a>. I currently intern 
                            at a San Deigo based startup, <a href='/infopost'>InfoPost</a>, as a Web Developer and also serve on the board of <a href='/comingsoon'>Design Co. at UCSD</a>. 
                            <br />
                            <br />
                            I'm interested in the intersection of code and design. I work with <a href='https://girlswhocode.com'>Girls' Who Code</a> and <a href='http://wic.ucsd.edu'>Women in Computing @UCSD </a>
                             to promote female representation in Computer Science through outreach events, mentorship and workshops. 
                            <br/>
                            <br />
                            I consume copious amounts of Netflix, coffee and room-decor videos and, on the left, I'm featured holding a Kaddu!
                        </p>
                    </div>
                    
                </div>
                <ContactFooter />
            </div>
        );
    }
}

export default aboutPage;