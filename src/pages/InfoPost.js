import React from 'react';
import Navbar from '../components/widgets/Navbar'

class InfoPost extends React.Component{
    render(){
        return(
            <div className="MainPage">
                <Navbar />
                <div className='pageStyles'>
                    <div className='heading'>
                    INFOPOST
                    </div>
                    <p>
                        <b>Overview: </b> A San Diego based startup, 
                    </p>
                </div>
            </div>
        );
    }
}

export default InfoPost;