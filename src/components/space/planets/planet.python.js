import {settings} from '../../../../node_server/server_settings'
import "../../server/sse.component";
import { PhysicsBodyNode } from "../physicsbody.node";
import '../../popups/planet_tag'

let component = require('./planet.python.html');


const TWOPI = Math.PI*2;

export class PlanetPython extends PhysicsBodyNode {

    nClicks=0;
    transmittingSSE = false;

    startTime=Date.now();

    //Python to Earth
    drawPtoE = (input,node,origin,cmd) => {
        //draw line/beaming anim from point A (here)
        //   to point B (planet Node)
        if(this.transmittingSSE) {
            let phere = this.props.div.getBoundingClientRect();
            let pthere = document.querySelector('planet-earth');
            if(pthere) {
                pthere = pthere.props.div.getBoundingClientRect();

                if(this.parentNode?.props?.ctx) {
                    let ctx = this.parentNode.props.ctx;
                    
                    let startx = 0.5*(phere.right+phere.left)-10;
                    let starty = 0.5*(phere.bottom+phere.top)-10;
                    let endx = 0.5*(pthere.right+pthere.left);
                    let endy = 0.5*(pthere.bottom+pthere.top)-5;
                    //ctx.clearRect(0,0,this.parentNode.props.canvas.width,this.parentNode.props.canvas.height);
                    let grad = ctx.createLinearGradient(startx,starty,endx,endy);

                    let curtime = (Math.PI+(Date.now()-this.startTime)*0.0031415) % TWOPI;
                    if(curtime > Math.PI) curtime=0;
                    let clock = Math.abs(Math.tanh(curtime));

                    grad.addColorStop(0,'rgba(0,0,0,0)');
                    let stop2 = clock-0.12;
                    if(stop2 < 0) stop2 = 0;
                    grad.addColorStop(stop2,'rgba(0,0,0,0)');
                    grad.addColorStop(clock,'rgba(255,255,50,0.75)');
                    let stop3 = clock+0.12;
                    if(stop3 > 1) stop3 = 1;
                    grad.addColorStop(stop3,'rgba(0,0,0,0)');
                    grad.addColorStop(1,'rgba(0,0,0,0)');
                    ctx.strokeStyle = grad;
                    ctx.lineWidth=5;
                    ctx.beginPath();
                    ctx.moveTo(startx,starty);
                    ctx.lineTo(endx,endy);    
                    ctx.stroke()
                }
            }
        }
    }

    oncreate=(props)=>{
        let div = this.querySelector('div');

        this.props.div = div;

        if(this.parentNode?.drawFuncs) {
            this.parentNode.drawFuncs.push(this.drawPtoE);
            //this.parentNode.drawFuncs.push(this.drawPtoM);
        }
        
        div.onmouseover = (ev) => {
            //add tag
            props.ptag = document.createElement('planet-tag');
            props.ptag.props.tag = 'Python';
            div.appendChild(props.ptag);
        }
        
        div.onmouseout = (ev) => {
            props.ptag.delete();
        }

        let tri = document.createElement('div');
        let dot = document.createElement('div');

        props.pdot = dot;

        Object.assign(tri.style,{
            position:'absolute',
            width: 0, 
            height: 0, 
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderBottom: '15px solid rgba(50,50,50,0.8)',
            transform:'rotate(25deg)',
            left:this.parentNode.props.px_per_meter*props.radius*1.3+'px',
            top:`-${this.parentNode.props.px_per_meter*props.radius*0.08}px`
        });

        Object.assign(dot.style,{
            position:'absolute',
            width: '6px', 
            height: '6px', 
            borderRadius:'3px',
            backgroundColor:'darkred',
            left:this.parentNode.props.px_per_meter*props.radius*1.43+'px',
            top:`-${this.parentNode.props.px_per_meter*props.radius*0.2}px`
        })

        div.appendChild(tri);
        div.appendChild(dot);

        let earth = document.querySelector('planet-earth');

        div.onclick = (e) => {
            this.nClicks++;
            if(this.nClicks === 1) {
                //make the beacon appear and start beaming messages
                //make the beacon appear and start beaming messages
                dot.style.backgroundColor = 'gold';
                setTimeout(()=>{
                    dot.style.backgroundColor = 'brown';
                },500);
                //subscribe to sse
                let sse = document.createElement('sse-');

                sse.props.protocol = settings.protocol;
                sse.props.host = settings.host;
                sse.props.port = settings.python;

                div.appendChild(sse);

                props.sse=this.querySelector('sse-');

                
                if(props.sse.props.sse) {
                    props.sse.props.sse.addEventListener('message',(ev)=>{
                        if(!this.transmittingSSE) this.transmittingSSE = true;
                        dot.style.backgroundColor = 'gold';
                        if(earth) earth.props.pdot.style.backgroundColor = 'gold';
                        setTimeout(()=>{
                            if(this.transmittingSSE) {
                                if(props.sse) dot.style.backgroundColor = 'brown';
                                if(earth) earth.props.pdot.style.backgroundColor = 'brown';
                            }
                        },500);
                        
                    });

                    props.sse.props.sse.addEventListener('close', ()=>{
                        this.transmittingSSE = false;
                    });
                }
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
                //close the beacon
                dot.style.backgroundColor = 'darkred';
                if(earth) earth.props.pdot.style.backgroundColor = 'darkred';
                this.nClicks = 0;

                if(props.sse) props.sse.delete();
                this.transmittingSSE = false;
                props.sse = undefined;
            }
        }
    }
}

PlanetPython.addElement('planet-python');