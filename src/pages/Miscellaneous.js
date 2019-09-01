import React from 'react'
import Navbar from '../components/widgets/Navbar';
import '../App.css'
import ContactFooter from '../components/widgets/ContactFooter';

const designTiles={

}

class Miscellaneous extends React.Component{
    render(){
        return(
            <div className='MainPage'>
                <Navbar />
                <div>
                    <div className='pageStyles'>
                        <div className='heading'>
                            MISCELLANEOUS
                        </div>
                        Random graphic designs projects I've worked on :)
                        <div style={{display: 'flex'}} className='miscTiles'>
                            <div style={{width: '50%'}}>
                                <div>
                                    <img src={require('../components/images/misc/Gazette.jpg')} alt='Gazette'/>
                                    <p>Cover for the Gazette distributed at Mayo College Girls' School Model
                                        United Nations. 
                                    </p>
                                </div>
                                <div>
                                    <img src={require('../components/images/misc/GDOPoster.png')} alt='GDO Poster'/>
                                    <p>Flyer for Girls' Day Out hosted by Women In Computing @ UCSD.</p>
                                </div>
                                <div>
                                    <img src={require('../components/images/misc/cosctachLogo.jpg')} alt='COSTACH'/>
                                    <p>The logo I designed for COSCTACH Conclave to incorporate Science, INTACH and Commerce. </p>
                                </div>
                            </div>
                            <div style={{width: '50%'}}>
                                <div>
                                    <img src={require('../components/images/misc/SilverJubilee.jpg')} alt='Silver Jubilee' />    
                                    <p>Folder design for Silver Jubilee hosted at Mayo College Girls' School.</p>                            
                                </div>
                                <div>
                                    <img src={require('../components/images/misc/ShadowDay.jpg')} alt='Shadow Day'/>
                                    <p>
                                        Flyer for Shadow Day hosted by Women In Computing @UCSD.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <ContactFooter />
            </div>
        );
    }
}

export default Miscellaneous;

