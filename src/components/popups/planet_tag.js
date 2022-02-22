
import {DOMElement} from 'fragelement';

let component = require('./planet_tag.html');

//See: https://github.com/brainsatplay/domelement
export class PlanetTag extends DOMElement {
    props={
        tag:'',
        direction:'top',
        color:'rgba(0,0,0,0.8)'
    } //can specify properties of the element which can be subscribed to for changes.
    
    //set the template string or function (which can input props to return a modified string)
    template=component;

    //DOMElement custom callbacks:
    oncreate=(props)=>{
        //set up the business logic for the component
        let div = this.querySelector('div');
        div.style.backgroundColor = props.color;
        props.div = div;
        let p = this.querySelector('p');
        if(props.tag) p.insertAdjacentHTML('beforebegin',props.tag+'</br>');

        // let arrow = document.createElement('div');

        // if(props.direction === 'up') {
        //     Object.assign(arrow.style,{
        //         position:'absolute',
        //         width: 0, 
        //         height: 0, 
        //         borderLeft: '5px solid transparent',
        //         borderRight: '5px solid transparent',
        //         borderBottom: `15px solid ${props.color}`,
        //         transform:'translateX(50%)'
        //     });
        // } else if (props.direction === 'down') {

        // }

    }
    //onresize=(props)=>{} //on window resize
    //onchanged=(props)=>{} //on props changed
    //ondelete=(props)=>{} //on element deleted. Can remove with this.delete() which runs cleanup functions
}

//window.customElements.define('custom-', Custom);

PlanetTag.addElement('planet-tag');
