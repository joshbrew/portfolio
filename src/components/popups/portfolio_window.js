
import {DOMElement} from 'fragelement';

let component = require('./portfolio_window.html');

//See: https://github.com/brainsatplay/domelement
export class PortfolioWindow extends DOMElement {
    props={
        innerTemplate:''
    } //can specify properties of the element which can be subscribed to for changes.
    
    //set the template string or function (which can input props to return a modified string)
    template=component;

    clickedOut=(ev)=>{
        this.props.div.classList.remove('window-wipe-enter');
        this.props.div.classList.add('window-wipe-exit');
        setTimeout(() => {
            this.delete()
        },1000);
    }

    //DOMElement custom callbacks:
    oncreate=(props)=>{
        //set up the business logic for the component
        
        let div = this.querySelector('div');

        props.div = div;

        div.insertAdjacentHTML('beforeend',props.innerTemplate);

        let c = document.querySelector('canvas');
        if(c) 
            c.addEventListener('click',this.clickedOut);

        // let button = this.querySelector('button');
        // if(button) button.onclick = (ev)=>{
        //     div.innerHTML = 'Clicked!'
        // };
    }
    //onresize=(props)=>{} //on window resize
    //onchanged=(props)=>{} //on props changed
    ondelete=(props)=>{
        let c = document.querySelector('canvas');
        if(c) 
            c.removeEventListener('click',this.clickedOut);
    } //on element deleted. Can remove with this.delete() which runs cleanup functions
}

//window.customElements.define('custom-', Custom);

PortfolioWindow.addElement('portfolio-window');
