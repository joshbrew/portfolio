import { PhysicsBodyNode } from "../physicsbody.node";
import '../../popups/planet_tag'

const TWOPI = Math.PI*2;

export class PlanetEarth extends PhysicsBodyNode {

    nClicks=false;

    startTime=Date.now();

    oncreate=(props)=>{
        let div = this.querySelector('div');

        this.props.div = div;

        //add antennas
        let tri = document.createElement('div');
        let dot = document.createElement('div');

        props.ndot = dot;

        Object.assign(tri.style,{
            position:'absolute',
            width: 0, 
            height: 0, 
            borderLeft: '3px solid transparent',
            borderRight: '3px solid transparent',
            borderBottom: '15px solid rgba(50,50,50,0.8)',
            transform:'rotate(-30deg)',
            left:this.parentNode.props.px_per_meter*props.radius*-0.5+'px',
            top:`-${this.parentNode.props.px_per_meter*props.radius*1.75}px`
        });

        Object.assign(dot.style,{
            position:'absolute',
            width: '6px', 
            height: '6px', 
            borderRadius:'3px',
            backgroundColor:'darkred',
            left:this.parentNode.props.px_per_meter*props.radius*-1.3+'px',
            top:`-${this.parentNode.props.px_per_meter*props.radius*2.5}px`
        })

        div.appendChild(tri);
        div.appendChild(dot);

        
        let tri2 = document.createElement('div');
        let dot2 = document.createElement('div');

        props.pdot = dot2;

        Object.assign(tri2.style,{
            position:'absolute',
            width: 0, 
            height: 0, 
            borderLeft: '3px solid transparent',
            borderRight: '3px solid transparent',
            borderBottom: '15px solid rgba(50,50,50,0.8)',
            transform:'rotate(-210deg)',
            left:this.parentNode.props.px_per_meter*props.radius*1.4+'px',
            top:`${this.parentNode.props.px_per_meter*props.radius*1.5}px`
        });

        Object.assign(dot2.style,{
            position:'absolute',
            width: '6px', 
            height: '6px', 
            borderRadius:'3px',
            backgroundColor:'darkred',
            left:this.parentNode.props.px_per_meter*props.radius*2.2+'px',
            top:`${this.parentNode.props.px_per_meter*props.radius*3.5}px`
        })

        div.appendChild(tri2);
        div.appendChild(dot2);

        let tri3 = document.createElement('div');
        let dot3 = document.createElement('div');

        props.npdot = dot3;

        Object.assign(tri3.style,{
            position:'absolute',
            width: 0, 
            height: 0, 
            borderLeft: '3px solid transparent',
            borderRight: '3px solid transparent',
            borderBottom: '15px solid rgba(50,50,50,0.8)',
            transform:'rotate(-130deg)',
            left:this.parentNode.props.px_per_meter*props.radius*-0.8+'px',
            top:`${this.parentNode.props.px_per_meter*props.radius}px`
        });

        Object.assign(dot3.style,{
            position:'absolute',
            width: '6px', 
            height: '6px', 
            borderRadius:'3px',
            backgroundColor:'darkred',
            left:this.parentNode.props.px_per_meter*props.radius*-1.75+'px',
            top:`${this.parentNode.props.px_per_meter*props.radius*2.5}px`
        })

        div.appendChild(tri3);
        div.appendChild(dot3);
        

        div.onclick = (e) => {
            this.nClicks++;
            if(this.nClicks === 1) {
                //make a cool thing happen
            }
            else if (this.nClicks === 2) {
                //open a description popup with
                //   links and stuff
            }
            else {
                //close the beacon
                
                this.nClicks = 0;
            }
        }

        div.onmouseover = (ev) => {
            //add tag
            // props.ptag = document.createElement('planet-tag');
            // props.ptag.props.tag = 'Earth';
            // div.appendChild(props.ptag);
        }
        
        div.onmouseout = (ev) => {
            //props.ptag.delete();
        }
    }
}

PlanetEarth.addElement('planet-earth');