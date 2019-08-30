import React from 'react';
import WorkTiles from '../components/widgets/workTiles';
import StickyFooter from 'react-sticky-footer';


class Work extends React.Component{
    render(){
        return(
            <div style={{display: 'flex', marginBottom: '2vw'}}>
                <WorkTiles />
            </div>
        );
    }
}

export default Work;