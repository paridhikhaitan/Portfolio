import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/aboutPage';
import FBUCodepath from '../pages/FBUCodepath';
import InfoPost from '../pages/InfoPost';
import MoreInfo from '../pages/moreInfo';
import Miscellaneous from '../pages/Miscellaneous';
import Work from '../pages/Work';



class Main extends React.Component{
    render(){
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route path='/work' component={Work} />
                    <Route path='/fbu' component={FBUCodepath}/>
                    <Route path='/infopost' component={InfoPost}/>
                    <Route path='/comingsoon' component={MoreInfo}/>
                    <Route path='/misc' component={Miscellaneous}/>
                </Switch>
            </main>
        );

    }
}

export default Main;