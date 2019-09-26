import React from 'react';
import './widgets.css';

class workTiles extends React.Component{
    state = {
        facebookCardImg: require("../images/tiles/FacebookCard.svg"),
        designCardImg: require("../images/tiles/DesignCard.svg"),
        itsCardImg:require('../images/tiles/ITSCard.svg'),
        infopostImg: require('../images/tiles/InfoPostCard.svg'),
        sparrowImg: require('../images/tiles/Sparrow.svg'),
        miscImg: require('../images/tiles/MiscellaneousCard.svg')
      }

    render(){
        return(
            <div className='workTiles'>
                <div>
                    <a href="/fbu">
                    <img
                        src={this.state.facebookCardImg}
                    /></a>

                    <a href="/comingsoon">
                    <img
                        src={this.state.designCardImg}
                    /></a>

                </div>
                <div>
                    <a href="/comingsoon">
                    <img
                        src={this.state.itsCardImg}
                    /></a>

                    <a href="/infopost">
                    <img
                        src={this.state.infopostImg}
                    /></a>
                </div>
                <div>

                    <a href="/comingsoon">
                    <img
                        src={this.state.sparrowImg}
                    />
                    </a>

                    <a href="/misc">
                    <img
                        src={this.state.miscImg}
                    />
                    </a>
                </div>
            </div>
        );
    }
}

export default workTiles;