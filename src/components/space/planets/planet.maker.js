import { PhysicsBodyNode } from "../physicsbody.node";
import '../../popups/planet_tag'

let component = require('./planet.maker.html');

export class PlanetMaker extends PhysicsBodyNode {

    nClicks=false;

    oncreate=(props)=>{
        let div = this.querySelector('div');
        
        this.props.div = div;

        let img = this.querySelector('img');
        if(img) img.className='saturate';

        div.onclick = (e) => {
            this.nClicks++;
            if(this.nClicks === 1) {
                //create a data stream from a device, heg or eeg
                //  or audio if unavailable

                //do things on frontend
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
                //close the data stream
                
                this.nClicks = 0;
            }
        }

        div.onmouseover = (ev) => {
            //add tag
            props.ptag = document.createElement('planet-tag');
            props.ptag.props.tag = 'Maker';
            div.appendChild(props.ptag);
        }
        
        div.onmouseout = (ev) => {
            props.ptag.delete();
        }
    }
}

PlanetMaker.addElement('planet-maker');