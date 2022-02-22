import { PhysicsBodyNode } from "../physicsbody.node";
import '../../popups/planet_tag'


let component = require('./planet.startup.html');

export class PlanetStartup extends PhysicsBodyNode {

    nClicks=false;

    oncreate=(props)=>{
        let div = this.querySelector('div');

        this.props.div = div;

        div.onmouseover = (ev) => {
            //add tag
            props.ptag = document.createElement('planet-tag');
            props.ptag.props.tag = 'Startups';
            div.appendChild(props.ptag);
        }
        
        div.onmouseout = (ev) => {
            props.ptag.delete();
        }

        div.onclick = (e) => {
            this.nClicks++;
            if(this.nClicks === 1) {
                //launch a rocket??? (another physics body)
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
    }
}

PlanetStartup.addElement('planet-startup');