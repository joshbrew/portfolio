import {settings} from '../../../../node_server/server_settings'
import "../../server/socket.component";
import '../../popups/planet_tag'
import { PhysicsBodyNode } from "../physicsbody.node";

let component = require('./planet.nodejs.html');

const TWOPI = Math.PI*2;

export class PlanetNodeJS extends PhysicsBodyNode {

    nClicks=false;
    transmittingWS=false;
    transmittingPyToNode=false;

    startTime=Date.now();
    //Python to Node Planet
    drawPtoN = (input,node,origin,cmd) => {
        //draw line/beaming anim from point A (here)
        //   to point B (planet Node)
        if(this.transmittingPyToNode) {
            let pthere = this.props.div.getBoundingClientRect();
            let phere = document.querySelector('planet-python');
            if(phere) {
                phere = phere.props.div.getBoundingClientRect();

                if(this.parentNode?.props?.ctx) {
                    let ctx = this.parentNode.props.ctx;
                    let startx = 0.5*(phere.right+phere.left)-5;
                    let starty = 0.5*(phere.bottom+phere.top)-20;
                    let endx = 0.5*(pthere.right+pthere.left)-5;
                    let endy = 0.5*(pthere.bottom+pthere.top)-20
                    //ctx.clearRect(0,0,this.parentNode.props.canvas.width,this.parentNode.props.canvas.height);
                    let grad = ctx.createLinearGradient(startx,starty,endx,endy);

                    let curtime = (Date.now()-this.startTime)*0.0031415 % TWOPI;
                    if(curtime > Math.PI) curtime=0;
                    let clock = Math.abs(Math.tanh(curtime));
                    grad.addColorStop(0,'rgba(0,0,0,0)');
                    let stop2 = clock-0.12;
                    if(stop2 < 0) stop2 = 0;
                    grad.addColorStop(stop2,'rgba(0,0,0,0)');
                    grad.addColorStop(clock,'rgba(100,100,255,0.75)');
                    let stop3 = clock+0.12;
                    if(stop3 > 1) stop3 = 1;
                    grad.addColorStop(stop3,'rgba(0,0,0,0)');
                    grad.addColorStop(1,'rgba(0,0,0,0)');
                    ctx.strokeStyle = grad;
                    ctx.lineWidth=5;
                    ctx.beginPath();
                    ctx.moveTo(startx,starty);
                    ctx.lineTo(endx,endy);    
                    //ctx.closePath();
                    ctx.stroke();
                }
            }
        }
    }

    //Node to Earth
    drawNPtoE = (input,node,origin,cmd) => {
        //draw line/beaming anim from point A (here)
        //   to point B (planet Node)
        if(this.transmittingPyToNode) {
            let phere = this.props.div.getBoundingClientRect();
            let pthere = document.querySelector('planet-earth');
            if(pthere) {
                pthere = pthere.props.div.getBoundingClientRect();

                if(this.parentNode?.props?.ctx) {
                    let ctx = this.parentNode.props.ctx;
                    
                    let startx = 0.5*(phere.right+phere.left)-10;
                    let starty = 0.5*(phere.bottom+phere.top)+10;
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
                    grad.addColorStop(clock,'rgba(100,100,255,0.75)');
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
    //Node to Earth
    drawNtoE = (input,node,origin,cmd) => {
        //draw line/beaming anim from point A (here)
        //   to point B (planet Node)
        if(this.transmittingWS) {
            let phere = this.props.div.getBoundingClientRect();
            let pthere = document.querySelector('planet-earth');
            if(pthere) {
                pthere = pthere.props.div.getBoundingClientRect();

                if(this.parentNode?.props?.ctx) {
                    let ctx = this.parentNode.props.ctx;
                    
                    let startx = 0.5*(phere.right+phere.left)-10;
                    let starty = 0.5*(phere.bottom+phere.top)-40;
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
                    grad.addColorStop(clock,'rgba(100,255,100,0.75)');
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
            this.parentNode.drawFuncs.push(this.drawNtoE);
            this.parentNode.drawFuncs.push(this.drawPtoN);
            this.parentNode.drawFuncs.push(this.drawNPtoE);
        }

        div.onmouseover = (ev) => {
            //add tag
            props.ptag = document.createElement('planet-tag');
            props.ptag.props.tag = 'NodeJS';
            div.appendChild(props.ptag);
        }
        
        div.onmouseout = (ev) => {
            props.ptag.delete();
        }

        //add antennas
        let tri = document.createElement('div');
        let dot = document.createElement('div');

        props.ndot = dot;

        Object.assign(tri.style,{
            position:'absolute',
            width: 0, 
            height: 0, 
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderBottom: '15px solid rgba(50,50,50,0.8)',
            transform:'rotate(-30deg)',
            left:this.parentNode.props.px_per_meter*props.radius*0.4+'px',
            top:`-${this.parentNode.props.px_per_meter*props.radius*-0.1}px`
        });

        Object.assign(dot.style,{
            position:'absolute',
            width: '6px', 
            height: '6px', 
            borderRadius:'3px',
            backgroundColor:'darkred',
            left:this.parentNode.props.px_per_meter*props.radius*0.34+'px',
            top:`-${this.parentNode.props.px_per_meter*props.radius*0.1}px`
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
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderBottom: '15px solid rgba(50,50,50,0.8)',
            transform:'rotate(-210deg)',
            left:this.parentNode.props.px_per_meter*props.radius*1.4+'px',
            top:`${this.parentNode.props.px_per_meter*props.radius*1.6}px`
        });

        Object.assign(dot2.style,{
            position:'absolute',
            width: '6px', 
            height: '6px', 
            borderRadius:'3px',
            backgroundColor:'darkred',
            left:this.parentNode.props.px_per_meter*props.radius*1.54+'px',
            top:`${this.parentNode.props.px_per_meter*props.radius*1.87}px`
        })

        div.appendChild(tri2);
        div.appendChild(dot2);

        
        let pysocketdiv = document.createElement('socket-');

        pysocketdiv.props.host = settings.host;
        pysocketdiv.props.port = settings.port;

        div.appendChild(pysocketdiv);

        props.pysocket=this.querySelector('socket-');

        let socket = props.pysocket.props.ws;

        let earth = document.querySelector('planet-earth');


        if( socket ) {
            socket.addEventListener('open', () => {
                dot2.style.backgroundColor = 'cyan';
                setTimeout(()=>{
                    if(!props.pysocket_closed) dot2.style.backgroundColor = 'darkblue';
                },500);
            });

            socket.addEventListener('close', () => {
                this.transmittingPyToNode = false;
                dot2.style.backgroundColor = 'darkred';
                if(earth) {
                    earth.props.npdot.style.backgroundColor = 'darkred';
                }
                props.pysocket_closed = true;
            });

            socket.addEventListener('message',(ev)=>{
                if(!this.transmittingPyToNode) this.transmittingPyToNode = true;
                dot2.style.backgroundColor = 'cyan';
                if(earth) {
                    earth.props.npdot.style.backgroundColor = 'cyan';
                }
                setTimeout(()=>{
                    if(this.transmittingPyToNode) {
                        if(!props.pysocket_closed) dot2.style.backgroundColor = 'darkblue';
                        if(earth) {
                            earth.props.npdot.style.backgroundColor = 'darkblue';
                        }
                    }
                },500);
            });

            socket.onmessage = async (event) => {
                let ts = new Date(Date.now());
                let tsm = ts.getHours()+':'+ts.getMinutes()+':'+ts.getSeconds();
        
                let msg = event.data;
        
                if(event.data.constructor.name === 'Blob') msg = await event.data.text();
        
                let message = `${tsm}:: ${settings.host}:${settings.port} received:\n ${msg}`; //we can request from port 8000 or port 7001
                let template = `<tr><td style='color:cyan;'>${message}</tr></td>`;
        
                if(props.pysocket.props.logger) props.pysocket.props.logger.props.log(message,template);
                else console.log(message);
            }
        }

        div.onclick = (e) => {
            this.nClicks++;
            if(this.nClicks === 1) {
                //make the beacon appear and start beaming messages

                //subscribe to sse
                let socketdiv = document.createElement('socket-');

                // if(settings.protocol === 'http') socketdiv.props.protocol = 'wss';
                // else socketdiv.props.protocol = 'ws';
                socketdiv.props.host = settings.host;
                socketdiv.props.port = settings.python_node; 

                div.appendChild(socketdiv);

                props.socket=this.querySelectorAll('socket-')[1];

                if(props.socket.props.ws) {
                    props.socket.props.ws.addEventListener('message',(ev)=>{
                        if(!this.transmittingWS) this.transmittingWS = true;
                        dot.style.backgroundColor = 'lightgreen';
                        if(earth) {
                            earth.props.ndot.style.backgroundColor = 'lightgreen';
                        }
                        setTimeout(()=>{
                            if(this.transmittingWS) {
                                if(props.socket) dot.style.backgroundColor = 'darkgreen';
                                if(earth) {
                                    earth.props.ndot.style.backgroundColor = 'darkgreen';
                                }
                            }
                        },500);
                    });

                    
                    props.socket.props.ws.addEventListener('close', ()=>{
                        this.transmittingWS = false;
                         //close the beacon
                        dot.style.backgroundColor = 'darkred';
                        if(earth) {
                            earth.props.ndot.style.backgroundColor = 'darkred';
                        }
                    });
                }


                //do things on frontend
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
                if(earth) {
                    earth.props.ndot.style.backgroundColor = 'darkred';
                }
                this.nClicks = 0;
                if(props.socket) props.socket.delete();
                this.transmittingWS = false;
                props.socket = undefined;
            }
        }
    }

    ondelete = (props=this.props) => {
        if(props.socket) props.socket.delete();
        if(props.pysocket) props.pysocket.delete();
        props.pysocket = undefined;
    }
}

PlanetNodeJS.addElement('planet-nodejs');