import React from 'react'
import Navbar from '../components/widgets/Navbar';

class moreInfo extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className='pageStyles' style={{fontSize: '22px'}}>
                    👀 More information coming soon!
                </div>
            </div>
        );
    }
}

export default moreInfo;