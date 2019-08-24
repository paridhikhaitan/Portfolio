import React from 'react';
import './widgets.css';

class workTiles extends React.Component{
    state = {
        facebookCardImg: require("../images/FacebookCard.svg"),
        designCardImg: require("../images/DesignCard.svg"),
        itsCardImg:require('../images/ITSCard.svg'),
        infopostImg: require('../images/InfoPostCard.svg'),
        miscImg: require('../images/MiscellaneousCard.svg')
      }

    render(){
        return(
            <div className='workTiles'>
                <div>
                    <img
                        src={this.state.facebookCardImg}
                        onMouseEnter={() => {
                            this.setState({
                            facebookCardImg: require("../images/FacebookHover.svg")
                            })
                        }}

                        onMouseOut={() => {
                            this.setState({
                            facebookCardImg: require("../images/FacebookCard.svg")
                            })
                        }}
                    />

                    <img
                        src={this.state.designCardImg}
                        onMouseEnter={() => {
                            this.setState({
                            designCardImg: require("../images/DesignHover.svg")
                            })
                        }}

                        onMouseOut={() => {
                            this.setState({
                            designCardImg: require("../images/DesignCard.svg")
                            })
                        }}
                    />

                </div>
                <div>
                    <img
                        src={this.state.itsCardImg}
                        onMouseEnter={() => {
                            this.setState({
                            itsCardImg: require("../images/ITSCardHover.svg")
                            })
                        }}

                        onMouseOut={() => {
                            this.setState({
                            itsCardImg: require("../images/ITSCard.svg")
                            })
                        }}
                    />

                    <img
                        src={this.state.infopostImg}
                        onMouseEnter={() => {
                            this.setState({
                                infopostImg: require('../images/InfoPostHover.svg')
                            })
                        }}

                        onMouseOut={() => {
                            this.setState({
                                infopostImg: require('../images/InfoPostCard.svg')
                            })
                        }}
                    />
                </div>
                <div>
                    <img src={require('../images/RandomCard.svg')} alt='Random Card'/>
                    <img
                        src={this.state.miscImg}
                        onMouseEnter={() => {
                            this.setState({
                                miscImg: require('../images/MiscellaneousHover.png')
                            })
                        }}

                        onMouseOut={() => {
                            this.setState({
                                miscImg: require('../images/MiscellaneousCard.png')
                            })
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default workTiles;