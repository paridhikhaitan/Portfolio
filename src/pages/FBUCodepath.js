import React from 'react';
import Navbar from '../components/widgets/Navbar';
import '../App.css'
import ContactFooter from '../components/widgets/ContactFooter';

const mainImage={
    width: '75%',
    height: 'auto',
    display: 'block', 
    marginLeft: 'auto', 
    marginRight: 'auto', 
    marginTop: '3vw',
    marginBottom: '3vw',
}

const roleRow={
    display: 'flex',
    fontSize: '14px',
    color: '#4d4d4d',
    paddingLeft: '10%',
    paddingRight: '10%', 
    alignItems: 'center',
    justifyContent: 'center',
}

const secondImage={
    width: '60%',
    height: 'auto',
    display: 'block', 
    marginLeft: 'auto', 
    marginRight: 'auto', 
    marginTop: '3vw',
    marginBottom: '3vw',
}

class FBUCodepath extends React.Component{
    render(){
        return(
            <div className="MainPage">
                <Navbar />
                <div className='pageStyles'>
                    <div className='heading'>
                        FACEBOOK UNIVERSITY x CODEPATH
                    </div>
                    <div>
                        <b>Overview: </b> This summer, I had the opportunity to mentor at the Facebook University for Engineering as a Tutor for 
                        Android Development. Under the Codepath cohort, we led an Android Development bootcamp for the first three weeks of the 
                        FBU program. During this period, we wanted the interns to feel accustomed to Android Development and empower them 
                        to create their own apps. Our class consisted of 60 students from diverse ethnic and academic backgrounds. I led breakout sessions on 
                        special topics like API/JSON requests, Fragments vs. Intents, view integration and Parse Server. 
                        <br />
                        <br />
                    </div>
                    <div style={roleRow}>
                        <div style={{marginLeft: '2vw'}}>
                            <b>Role: </b>Tutor
                        </div>
                        <div style={{marginLeft: '2vw'}}>
                            <b>Tools: </b>Java, Android Studio, Parse
                        </div>
                        <div style={{marginLeft: '2vw'}}>
                            <b>Date: </b> May 2019-July 2019
                        </div>
                    </div>

                    <img src={require('../components/images/FBUCodepath/FBUCodepath1.jpg')} alt='Class Photo' style={mainImage}/>

                    <div>
                        <b>Preparation: </b> The goal of the Codepath bootcamp was for the interns to feel accustomed to Android Development and empower
                        them to create their own applications. In preparation of our mentorship position, I created four applications on
                        Android Studio: <br />
                        <ul>
                            <li>
                                <a href='https://github.com/paridhikhaitan/FBUInstagram' target='blank'> Instagram</a>
                            </li>
                            <br />
                            <li>
                                <a href='https://github.com/paridhikhaitan/TwitterFBU' target='blank'> Twitter</a>
                            </li>
                            <br />
                            <li>
                                <a href='https://github.com/paridhikhaitan/Flicks' target='blank'> Flixster</a>
                            </li>
                            <br />
                            <li>
                                <a href='https://github.com/paridhikhaitan/SimpleToDoApp' target='blank'> Simple To-Do App</a>
                            </li>
                        </ul>
                        Along with this, we solved several labs pertaining to Material UI, Parse Chat, integration of Google Maps and custom search 
                        within the app. 
                        <br />
                        <br />
                    </div>
                    <img src={require('../components/images/FBUCodepath/FBUCodepath2.jpg')} alt='Class Photo' style={secondImage} />
                    <div>
                        <b>Outcome: </b> Through the course of the program, I grew as both, a developer and a mentor. I came into this program completely 
                        unfamiliar with Android Studio, and rigourously practiced the curriculum. <br />
                        90% of our class at Android Menlo Park successfully received return offers from Facebook for a Summer 2020 internship. Most of 
                        the students had never worked on either App Development or Android Studio before the start of the program, however, after the 3 week
                        bootcamp, they were successfully able to produce their own Android Applications through the course of their internship. 

                    </div>
                </div>
                <ContactFooter />
            </div>
        );
    }
}

export default FBUCodepath;