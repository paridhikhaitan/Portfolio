import React from 'react';
import Navbar from '../components/widgets/Navbar';

const mainImage={
    width: '30%',
    height: '30%',
    paddingTop: '2vw',
}

class aboutPage extends React.Component{

    render(){
        return(
            <div>
                <Navbar />
                <div style={{marginLeft: '5%', marginRight: '5%', display: 'flex'}}>
                    <img src={require('../components/images/about/aboutPagePhoto.jpg')} alt='Pari :)' style={mainImage}/>
                    <div className='pageStyles'>
                        <p style={{color: '#4a4a4a', fontSize: '18px'}}>
                            Hi, I'm Paridhi. I'm currently pursuing a B.S. in Computer Science with a minor in Design at the 
                            University of California, San Diego. 
                            <br />
                            <br />
                            This summer, I served as a Tutor for Android Development at <a href='#'>Facebook University</a>. I currently intern 
                            at a San Deigo based startup, <a href='#'>InfoPost</a>, as a Web Developer and also serve on the board of <a href='#'>Design Co. at UCSD</a>. 
                            <br />
                            <br />
                            I'm interested in the intersection of code and design. I work with <a href='#'>Girls' Who Code</a> and <a href='#'>Women in Computing @UCSD</a>
                            to promote female representation in Computer Science through outreach events, mentorship and workshops. 
                            <br/>
                            <br />
                            I consume copious amounts of Netflix, coffee and room-decor videos and, on the left, I'm featured holding a Kaddu!
                        </p>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default aboutPage;