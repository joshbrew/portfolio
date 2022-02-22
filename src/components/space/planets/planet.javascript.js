import { PhysicsBodyNode } from "../physicsbody.node";
import '../../popups/planet_tag'
import '../../popups/portfolio_window'

let component = require('./planet.javascript.html');

export class PlanetJavascript extends PhysicsBodyNode {

    nClicks=false;

    oncreate=(props)=>{
        let div = this.querySelector('div');

        this.props.div = div;

        div.onclick = (e) => {
            this.nClicks++;
            if(this.nClicks === 1) {
                //make a cool thing happen
            }
            else if (this.nClicks === 2) {
                //open a description popup with
                //   links and stuff
                let pwindow = document.createElement('portfolio-window');
                
                pwindow.props.innerTemplate = component;

                document.body.appendChild(pwindow);
                let windows = document.querySelectorAll('portfolio-window'); 
                props.pwindow = windows[windows.length-1];
            }
            else {
                //close the beacon
                this.nClicks = 0;
            }
        }

        div.onmouseover = (ev) => {
            //add tag
            props.ptag = document.createElement('planet-tag');
            props.ptag.props.tag = 'Javascript';
            div.appendChild(props.ptag);
        }
        
        div.onmouseout = (ev) => {
            props.ptag.delete();
        }
    }
}

PlanetJavascript.addElement('planet-javascript');