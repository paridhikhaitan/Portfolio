import React from 'react';
import WorkTiles from '../components/widgets/workTiles';


class Work extends React.Component{
    render(){
        return(
            <div style={{display: 'flex'}}>
                <WorkTiles />
            </div>
        );
    }
}

export default Work;