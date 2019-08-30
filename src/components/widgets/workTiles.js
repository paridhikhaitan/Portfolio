import React from 'react';
import './widgets.css';

class workTiles extends React.Component{
    state = {
        facebookCardImg: require("../images/tiles/FacebookCard.svg"),
        designCardImg: require("../images/tiles/DesignCard.svg"),
        itsCardImg:require('../images/tiles/ITSCard.svg'),
        infopostImg: require('../images/tiles/InfoPostCard.svg'),
        miscImg: require('../images/tiles/MiscellaneousCard.svg')
      }

    render(){
        return(
            <div className='workTiles'>
                <div>
            
                    <img
                        src={this.state.facebookCardImg}
                        onMouseEnter={() => {
                            this.setState({
                            facebookCardImg: require("../images/tiles/FacebookHover.svg")
                            })
                        }}

                        onMouseOut={() => {
                            this.setState({
                            facebookCardImg: require("../images/tiles/FacebookCard.svg")
                            })
                        }}
                    />

                    <img
                        src={this.state.designCardImg}
                        onMouseEnter={() => {
                            this.setState({
                            designCardImg: require("../images/tiles/DesignHover.svg")
                            })
                        }}

                        onMouseOut={() => {
                            this.setState({
                            designCardImg: require("../images/tiles/DesignCard.svg")
                            })
                        }}
                    />

                </div>
                <div>
                    <img
                        src={this.state.itsCardImg}
                        onMouseEnter={() => {
                            this.setState({
                            itsCardImg: require("../images/tiles/ITSCardHover.svg")
                            })
                        }}

                        onMouseOut={() => {
                            this.setState({
                            itsCardImg: require("../images/tiles/ITSCard.svg")
                            })
                        }}
                    />

                    <img
                        src={this.state.infopostImg}
                        onMouseEnter={() => {
                            this.setState({
                                infopostImg: require('../images/tiles/InfoPostHover.svg')
                            })
                        }}

                        onMouseOut={() => {
                            this.setState({
                                infopostImg: require('../images/tiles/InfoPostCard.svg')
                            })
                        }}
                    />
                </div>
                <div>
                    <img src={require('../images/tiles/RandomCard.svg')} alt='Random Card'/>
                    <img
                        src={this.state.miscImg}
                        onMouseEnter={() => {
                            this.setState({
                                miscImg: require('../images/tiles/MiscellaneousHover.png')
                            })
                        }}

                        onMouseOut={() => {
                            this.setState({
                                miscImg: require('../images/tiles/MiscellaneousCard.png')
                            })
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default workTiles;