import React from 'react';
import WorkTiles from '../components/widgets/workTiles';

class Work extends React.Component{
    render(){
        return(
            <div style={{display: 'flex'}}>
                <img src={require('../components/images/Line.svg')} alt='The Long Line'/>
                <WorkTiles />
            </div>
        );
    }
}

export default Work;