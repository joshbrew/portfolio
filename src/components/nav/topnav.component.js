
import {DOMElement} from 'fragelement';

let component = require('./topnav.component.html');

let aboutt = require('./about.component.html');

//See: https://github.com/brainsatplay/domelement
export class TopNav extends DOMElement {
    props={} //can specify properties of the element which can be subscribed to for changes.
    
    //set the template string or function (which can input props to return a modified string)
    template=component;

    //DOMElement custom callbacks:
    oncreate=(props)=>{
        //set up the business logic for the component
        
        let divs = this.querySelectorAll('span');

        let about = divs[1];
        let me = divs[2];

        let onclick = (ev) => {
            let pwindow = document.createElement('portfolio-window');
            pwindow.props.innerTemplate = aboutt;
            document.body.appendChild(pwindow);
            about.onclick = (ev) => {
                let win = document.getElementsByTagName('portfolio-window')[0];
                if(win) {
                    pwindow.clickedOut();
                    about.onclick = onclick;
                } else {
                    onclick();
                }
            }
        }

        about.onclick = onclick;

        me.onclick = (ev) => {
            window.open(
                "https://github.com/moothyknight", "_blank");
        }
        
    }
    //onresize=(props)=>{} //on window resize
    //onchanged=(props)=>{} //on props changed
    //ondelete=(props)=>{} //on element deleted. Can remove with this.delete() which runs cleanup functions
}

//window.customElements.define('custom-', Custom);

TopNav.addElement('top-nav');
