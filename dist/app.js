(()=>{var Mt=Object.create;var G=Object.defineProperty;var jt=Object.getOwnPropertyDescriptor;var Ft=Object.getOwnPropertyNames;var Ot=Object.getPrototypeOf,Gt=Object.prototype.hasOwnProperty;var Rt=(c,t,e)=>t in c?G(c,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[t]=e;var It=c=>G(c,"__esModule",{value:!0});var k=(c,t)=>()=>(t||c((t={exports:{}}).exports,t),t.exports);var Wt=(c,t,e,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Ft(t))!Gt.call(c,i)&&(e||i!=="default")&&G(c,i,{get:()=>t[i],enumerable:!(s=jt(t,i))||s.enumerable});return c},R=(c,t)=>Wt(It(G(c!=null?Mt(Ot(c)):{},"default",!t&&c&&c.__esModule?{get:()=>c.default,enumerable:!0}:{value:c,enumerable:!0})),c);var n=(c,t,e)=>(Rt(c,typeof t!="symbol"?t+"":t,e),e);var x=(c,t,e)=>new Promise((s,i)=>{var r=a=>{try{h(e.next(a))}catch(d){i(d)}},o=a=>{try{h(e.throw(a))}catch(d){i(d)}},h=a=>a.done?s(a.value):Promise.resolve(a.value).then(r,o);h((e=e.apply(c,t)).next())});var Z=k((Fe,qt)=>{qt.exports=""});var V=k((We,Lt)=>{Lt.exports=`<div>\r
    Check Console\r
    <button>Run</button>\r
</div>`});var U=k((He,$t)=>{$t.exports='<canvas height="100%" width="100%"></canvas>'});var Q=k((Ze,Zt)=>{Zt.exports="<button>Click</button>"});var tt=k((Ue,Yt)=>{Yt.exports="<input></input>"});var st=k((es,Xt)=>{Xt.exports=`<div>Test worked!</div>\r
<button>Clickme</button>`});var rt=k((rs,Kt)=>{Kt.exports="<table></table>"});var F=k(ot=>{var ee={debug:!1,protocol:"http",host:"localhost",port:8080,socket_protocol:"ws",hotreload:5e3,python:7e3,python_node:7001,startpage:"src/index.html",errpage:"src/other/404.html",certpath:"node_server/ssl/cert.pem",keypath:"node_server/ssl/key.pem"};ot.settings=ee});var nt=k((ds,se)=>{se.exports=`\r
`});var ht=k((cs,re)=>{re.exports=""});var ct=k((fs,oe)=>{oe.exports='<canvas height="100%" width="100%"></canvas>'});var gt=k((xs,de)=>{de.exports='<canvas height="100%" width="100%" style="position:absolute;"></canvas>'});var mt=k((Cs,le)=>{le.exports=`<div class="planet-tag wipe-enter">\r
    <p style="color:white;">Double click for portfolio</p>\r
</div>`});var yt=k((Fs,pe)=>{pe.exports=`<!-- Body of planet window popup -->\r
<div class="pwindow-inner">\r
    <span width="100%"><span style="font-size:xx-large;">Python Portfolio</span>\r
    <img style="float:right;" height="75px" width="75px"     src="src/assets/icons/qt.png">\r
    <img style="float:right;" height="75px" width="75px"     src="src/assets/icons/blender.png">\r
    <img style="float:right; background-color:white; border-radius:50%;" height="75px" width="75px" src="src/assets/icons/quart.png">\r
    <img style="float:right;" height="75px" width="75px" src="src/assets/python.png">\r
    </span>\r
    <br><hr width="50%" style="float:left;">\r
    <br>\r
    <h2>Applications:</h2>\r
    <table  class="ptable">\r
        <tr class="trr trtop">\r
            <td class="td1">\r
                Portfolio App\r
            </td>\r
            <td width="20%"><a target="_blank" href="https://github.com/moothyknight"><img class="ptdlink" height="70px" width="70px" alt="Github" src="src/assets/icons/ghub.png"></a>\r
            </td>\r
            <td width="40%"  class="tdtext">\r
                This app takes the esbuild + python base and uses it for practical demonstration. It serves python in production\r
                with hypercorn, and the PWA features are demonstrated with an https server. The server-server and server-client communications\r
                simply trigger a radio animation to visualize the process occurring in a fun way. \r
            </td>\r
            <td>\r
                <img src="src/assets/screenshots/myapp.png" width="100%">\r
            </td>\r
        </tr>\r
        <tr class="trr">\r
            <td  class="ptdtitle">Python + esbuild<br>App Base</td>\r
            <td width="20%"><a target="_blank" href="https://github.com/moothyknight/esbuild_base_python"><img class="ptdlink" height="70px" width="70px" alt="Github" src="src/assets/icons/ghub.png"></a>\r
            </td>\r
            <td width="40%"  style="text-align: left;">\r
                A stripped down base for creating wicked fast web applications with esbuild,\r
                Demonstrates dual server support for building webapps with NodeJS and data streaming\r
                with Quart's ASGI framework.\r
            </td>\r
            <td>\r
                <img src="src/assets/icons/esbuild.png" width="100%">\r
            </td>\r
        </tr>\r
        <tr class="trr">\r
            <td  class="td1">Roboanimator Suite (demo)</td>\r
            <td width="20%"><a target="_blank" href="https://github.com/moothyknight/robo-animator"><img class="ptdlink" height="70px" width="70px" alt="Github" src="src/assets/icons/ghub.png"></a>\r
            </td>\r
            <td width="40%"  style="text-align: left;">\r
                A PyQT5 Framework that lets you launch directly into \r
                blender, animate something with a rigged model, pull the \r
                animation data, and pass it to a Raspberry PI to animate \r
                servos. This was a robotics demo. \r
            </td>\r
            <td>\r
                <img src="src/assets/screenshots/bones.png" width="100%">\r
            </td>\r
        </tr>\r
        \r
    </table>\r
    <hr/>\r
    <br/>\r
    <h2>Data & Modeling</h2>\r
    Example:<br> \r
    Modeling a Prandtl Wing using python (and some matlab) to generate datasets from equations. Graphed in Google Sheets. \r
    <img src="src/assets/screenshots/prandtl.png" width="100%">\r
</div>`});var xt=k((Ws,me)=>{me.exports=`<!-- Body of planet window popup -->\r
<div class="pwindow-inner">\r
    <span><span style="font-size:xx-large;">NodeJS Portfolio</span>\r
    <img style="float:right;" height="50px" width="50px" src="src/assets/icons/chromium.png">\r
    <img style="float:right;" height="50px" width="50px" src="src/assets/icons/electron.png">\r
    <img style="float:right;" height="50px" width="50px" src="src/assets/icons/cordova.png">\r
    <img style="float:right;" height="50px" width="50px" src="src/assets/icons/mongo.png">\r
    <img style="float:right; transform:translateY(15px); padding-left:5px;" height="20px" width="50px" src="src/assets/icons/pwa.png">\r
    <img style="float:right; background-color:ghostwhite; border-radius:20%;" \r
         height="50px" width="50px" src="src/assets/icons/network.png">\r
    <img style="float:right;" height="50px" width="50px" src="src/assets/icons/esbuild.png">\r
    <a style="float:right; transform:translateY(10px);" target="_blank" href="https://www.npmjs.com/~moothyknight"><img height="35" width="60px" alt="NPM" src="src/assets/icons/npm.png"></a>\r
    <img style="float:right;" height="50px" width="50px" src="src/assets/node.png">\r
    </span>\r
    <br><hr width="50%" style="float:left;">\r
    <br><br>\r
        \r
    <span><span style="font-size:xx-large; font-weight:bold;">Applications built with NodeJS       </span>(all pre-alpha demos)</span>\r
        <hr/>\r
        <table  class="ptable">\r
            <tr class="trr trtop">\r
                <td class="td1">\r
                    Brains@Play PWA\r
                </td>\r
                <td width="20%"><a target="_blank" href="https://app.brainsatplay.com"><img class="ptdlink" height="70px" width="70px" alt="Github" src="src/assets/bap.png"></a>\r
                </td>\r
                <td width="40%"  class="tdtext">\r
                    Real time sensing platform for open EEG, FNIRS, eye tracking, and more hardware co-developed with \r
                    Garrett Flynn and a little help from our small but growing community. This is a long term project.\r
                    Features tileable applications with dynamically loaded resources, multiplayer, device connectivity,\r
                    data visualization, multithreading, etc.\r
                </td>\r
                <td>\r
                    <img src="src/assets/bap.png" width="100%">\r
                </td>\r
            </tr>\r
            <tr class="trr">\r
                <td class="td1">\r
                    Portfolio App\r
                </td>\r
                <td width="20%"><a target="_blank" href="https://github.com/moothyknight"><img class="ptdlink" height="70px" width="70px" alt="Github" src="src/assets/icons/ghub.png"></a>\r
                </td>\r
                <td width="40%"  class="tdtext">\r
                    This app takes the esbuild + python base and uses it for practical demonstration. It serves python in production\r
                    with hypercorn, and the PWA features are demonstrated with an https server. The server-server and server-client communications\r
                    simply trigger a radio animation to visualize the process occurring in a fun way. \r
                </td>\r
                <td>\r
                    <img src="src/assets/screenshots/myapp.png" width="100%">\r
                </td>\r
            </tr>\r
            <tr class="trr">\r
                <td  class="ptdtitle">HEGAlpha PWA</td>\r
                <td width="20%"><a target="_blank" href="https://hegalomania.netlify.app"><img class="ptdlink" height="70px" width="70px" alt="Github" src="src/assets/icons/ghub.png"></a>\r
                </td>\r
                <td width="40%"  style="text-align: left;">\r
                    Simple webapp for my HEGduino project. This app is so small it can serve from an ESP32 web server!\r
                </td>\r
                <td>\r
                    <img src="src/assets/screenshots/sunrise.png" width="100%">\r
                </td>\r
            </tr>\r
            <tr class="trr">\r
                <td  class="ptdtitle">EEG PWA</td>\r
                <td width="20%"><a target="_blank" href="https://github.com/moothyknight/eegpwa"><img class="ptdlink" height="70px" width="70px" alt="Github" src="src/assets/icons/ghub.png"></a>\r
                </td>\r
                <td width="40%"  style="text-align: left;">\r
                    Pre-Brains@Play web demo built with help from Dovydas Stirpeika. Features GPUjs FFTs to analyze FreeEEG32 data in the browser in real time!.\r
                </td>\r
                <td>\r
                    <img src="src/assets/screenshots/EEGpFNIRS.png" width="100%">\r
                </td>\r
            </tr>\r
            <tr class="trr">\r
                <td  class="ptdtitle">esbuild App Base</td>\r
                <td width="20%"><a target="_blank" href="https://github.com/moothyknight/esbuild_base_webcomponents"><img class="ptdlink" height="70px" width="70px" alt="Github" src="src/assets/icons/ghub.png"></a>\r
                </td>\r
                <td width="40%"  style="text-align: left;">\r
                    esbuild is the latest build tool for web applications. It's fast and easily customizable for js, ts, react, etc. \r
                    It's easy to step into a production setting and not overburden your dev tools. Includes custom hot reloading and PWA presets.\r
                </td>\r
                <td>\r
                    <img src="src/assets/icons/esbuild.png" width="100%">\r
                </td>\r
            </tr>\r
            <tr class="trr">\r
                <td  class="ptdtitle">esbuild + Web Components<br>App Base</td>\r
                <td width="20%"><a target="_blank" href="https://github.com/moothyknight/esbuild_base_webcomponents"><img class="ptdlink" height="70px" width="70px" alt="Github" src="src/assets/icons/ghub.png"></a>\r
                </td>\r
                <td width="40%"  style="text-align: left;">\r
                    esbuild app base plus my web components library! Includes custom hot reloading and PWA presets.\r
                </td>\r
                <td>\r
                    <img src="src/assets/icons/esbuild.png" width="100%">\r
                </td>\r
            </tr>\r
            <tr class="trr">\r
                <td  class="ptdtitle">Python + esbuild <br>App Base</td>\r
                <td width="20%"><a target="_blank" href="https://github.com/moothyknight/esbuild_base_python"><img class="ptdlink" height="70px" width="70px" alt="Github" src="src/assets/icons/ghub.png"></a>\r
                </td>\r
                <td width="40%"  style="text-align: left;">\r
                    A stripped down base for creating wicked fast web applications with esbuild,\r
                    Demonstrates dual server support for building webapps with NodeJS and data streaming\r
                    with Quart's ASGI framework.\r
                </td>\r
                <td>\r
                    <img src="src/assets/icons/esbuild.png" width="100%">\r
                </td>\r
            </tr>\r
        </table>\r
        <br/>\r
        <span style="font-size:xx-large; font-weight:bold;">Other Examples</span>\r
        <hr/>\r
        <table class="ptable">\r
            <tr class="trr trtop">\r
                <td  class="td1">Brains@Play in Cordova and Electron</td>\r
                <td width="20%"><a target="_blank" href="https://github.com/moothyknight/esbuild_base_python"><img class="ptdlink" height="70px" width="70px" alt="Github" src="src/assets/icons/ghub.png"></a>\r
                </td>\r
                <td width="40%"   class="tdtext">\r
                    Builds a single page app built in Brains@Play Studio via cordova and electron. Just a test.\r
                </td>\r
                <td>\r
                    <img src="src/assets/bap.png" width="100%">\r
                </td>\r
            </tr>\r
        </table>\r
</div>`});var kt=k(($s,be)=>{be.exports=`<!-- Body of planet window popup -->\r
<div class="pwindow-inner">\r
    <span><span style="font-size:xx-large;">Maker Portfolio</span>\r
    <img style="float:right;" height="50px" width="50px" src="src/assets/icons/rpi.png">\r
    <img style="float:right; padding-left:5px; padding-right:5px;" height="50px" width="30px" src="src/assets/icons/bt.png">\r
    <img style="float:right;" height="50px" width="50px" src="src/assets/icons/arm.png">\r
    <img style="float:right;" height="50px" width="50px" src="src/assets/icons/nordic.png">\r
    <img style="float:right;" height="50px" width="50px" src="src/assets/icons/maxim.png">\r
    <img style="float:right;" height="50px" width="50px" src="src/assets/icons/espressif.png">\r
    <br><br>\r
    <img style="float:right; transform:translateY(5px);" height="40px" width="50px" src="src/assets/icons/st.png">\r
    <img style="float:right; transform:translateY(17.5px);" height="15px" width="50px" src="src/assets/icons/analog.png">\r
    <img style="float:right;" height="50px" width="50px" src="src/assets/icons/ti.png">\r
    <img style="float:right; transform:translateY(15px)" height="20px" width="50px" src="src/assets/icons/zephyr.png">\r
    <img style="float:right;" height="50px" width="50px" src="src/assets/icons/platformio.svg">\r
    <img style="float:right;" height="50px" width="50px" src="src/assets/icons/arduino.png">\r
    </span>\r
    <br><hr width="50%" style="float:left;">\r
    <br>\r
    <br>\r
    \r
    <table width="100%">\r
        <tr>\r
            <td class="pimg">\r
                <img width="100vw" style="min-width:380px;" src="src/assets/screenshots/smoothie.png">\r
            </td>\r
            <td class="pimg">\r
                <img width="100vw" style="min-width:380px;" src="src/assets/screenshots/uplot.png">\r
            </td>\r
        </tr>\r
    </table>\r
\r
    <h2>Hardware Projects:</h2>\r
    <div style="text-align:center; vertical-align: middle; background-color:white; padding-top:5px; padding-left: 5px; border-radius: 5px;">\r
        <img height="50px" width="50px" src="src/assets/icons/hosp.png">\r
        <img height="50px" width="50px" src="src/assets/icons/edu.png">\r
        <img height="50px" width="50px" src="src/assets/icons/iot.png">\r
        <img height="50px" width="50px" src="src/assets/icons/rsrch.png">\r
        <img height="50px" width="50px" src="src/assets/icons/audio.png">\r
        <img height="50px" width="50px" src="src/assets/icons/network.png">\r
        <img style="transform:translateY(-10px);" height="30px" width="100px" src="src/assets/icons/adc.png">\r
        <img height="50px" width="50px" src="src/assets/icons/eeg.png">\r
        <img height="50px" width="50px" src="src/assets/icons/emg.png">\r
        <img height="50px" width="50px" src="src/assets/icons/gyro.png">\r
        <img height="50px" width="50px" src="src/assets/icons/lightsens.png">\r
        <img height="50px" width="50px" src="src/assets/icons/gauge.png">\r
        <img height="50px" width="50px" src="src/assets/icons/heart.png">\r
    </div>\r
    <br>\r
    <table  class="ptable">\r
        <tr class="trr">\r
            <td class="td1">\r
                HEGduino V1 and 2\r
            </td>\r
            <td width="20%"><a target="_blank" href="https://github.com/moothyknight/HEG_ESP32_Delobotomizer"><img class="ptdlink" height="70px" width="70px" alt="Github" src="src/assets/icons/ghub.png"></a>\r
            </td>\r
            <td width="40%"  class="tdtext">\r
                DIY Hemoencephalography, made to bring this obscure form of biofeedback into the maker world. \r
                Inspired by Hershel Toomim and Bob Marsh's original patent 5995857. \r
                I crowdfunded both versions modestly and have sold somewhere over 500 units total between both versions. It's my first\r
                real hardware project that I led and built mostly out of my cabin in Alaska with a little help from my friends.<br>\r
                <a target="_blank" href="https://hegalpha.com/">HEG Alpha Site</a>\r
            </td>\r
            <td>\r
                <img src="src/assets/screenshots/headband.jpg" width="100%">\r
            </td>\r
        </tr>\r
        <tr class="trr">\r
            <td class="td1">\r
                nRF52 Biosensing Boards\r
            </td>\r
            <td width="20%"><a target="_blank" href="https://github.com/brainsatplay/nrf52-biosensing-boards"><img class="ptdlink" height="70px" width="70px" alt="Github" src="src/assets/icons/ghub.png"></a>\r
            </td>\r
            <td width="40%"  class="tdtext">\r
                Ongoing project to utilise Fanstel nRF52 chips and Zephyr RTOS. Our first prototypes work and with Jacob Tinkhauser \r
                and Bojan Jovanovich we developed several drivers in Zephyr. Our first prototype did 500sps and 2M BLE PHY in less than 24KB on a BT832A! \r
            </td>\r
            <td>\r
                <img src="src/assets/screenshots/nrf.png" width="100%">\r
            </td>\r
        </tr>\r
        <tr class="trr">\r
            <td class="td1">\r
                MAX86141 Arduino\r
            </td>\r
            <td width="20%"><a target="_blank" href="https://github.com/moothyknight/MAX86141_Arduino"><img class="ptdlink" height="70px" width="70px" alt="Github" src="src/assets/icons/ghub.png"></a>\r
            </td>\r
            <td width="40%"  class="tdtext">\r
                Arduino driver for the MAX86141\r
            </td>\r
            <td>\r
                <img src="src/assets/screenshots/hegfiltered.png" width="100%">\r
            </td>\r
        </tr>\r
        <tr class="trr">\r
            <td class="td1">\r
                ADS131M08 Arduino\r
            </td>\r
            <td width="20%"><a target="_blank" href="https://github.com/moothyknight/ads131m08_arduino"><img class="ptdlink" height="70px" width="70px" alt="Github" src="src/assets/icons/ghub.png"></a>\r
            </td>\r
            <td width="40%"  class="tdtext">\r
                Arduino driver and breakout board CAD files for the ADS131M08, a 24 bit sigma delta converter. \r
                Tested ~350nV noise on my breakout board with an ESP32. Dmitry (FreeEEG32) designed a working \r
                low cost 128 channel EEG prototype with this chip, while we based our nRF design with it.\r
            </td>\r
            <td>\r
                <img src="src/assets/screenshots/ads131.png" width="100%">\r
            </td>\r
        </tr>\r
        <tr class="trr">\r
            <td class="td1">\r
                FreeEEG32 Crowdfunding\r
            </td>\r
            <td width="20%"><a target="_blank" href="https://github.com/moothyknight/HEG_ESP32_Delobotomizer"><img class="ptdlink" height="70px" width="70px" alt="Github" src="src/assets/icons/ghub.png"></a>\r
            </td>\r
            <td width="40%"  class="tdtext">\r
                I helped Dmitry Sukhoruchkin and Bernard Markus crowdfund the FreeEEG32, which they developed hardware and custom 3D printed headsets\r
                for over the past several years. We are dealing with part shortages but otherwise have the lowest cost clinical-grade EEG\r
                ever made! We've had contacts worldwide with interesting scientists and investors in the space. AGPLv3\r
            </td>\r
            <td>\r
                <img src="src/assets/screenshots/beta-bot.png" width="100%">\r
            </td>\r
        </tr>\r
        <tr class="trr">\r
            <td class="td1">\r
                More PCB work\r
            </td>\r
            <td width="20%"><a target="_blank" href="https://github.com/moothyknight/"><img class="ptdlink" height="70px" width="70px" alt="Github" src="src/assets/icons/ghub.png"></a>\r
            </td>\r
            <td width="40%"  class="tdtext">\r
                I love open source DIY! I've made several HEG prototypes, several ADC breakout boards, high frequency antennas with Eric Nichols, and my favorite WIP project: DIY Diffuse Optical Tomography.\r
            </td>\r
            <td>\r
                <img src="src/assets/screenshots/PCB_Collage.jpg" width="100%">\r
            </td>\r
        </tr>\r
    </table>\r
    <br><br>\r
    <div width="100%" class="pimg">\r
        <img width="100vw" style="min-width:380px;" src="src/assets/millers_maxi_buns/hardwarestack.png">\r
    </div>\r
\r
    \r
    <span style="font-size:xx-large; font-weight:bold;">Other Examples</span>\r
    <hr/>\r
    <table  class="ptable">\r
        <tr class="trr">\r
            <td class="td1">\r
                3DS Record Animation\r
            </td>\r
            <td width="20%"><a target="_blank" href="https://github.com/moothyknight/3dsrecordanimation"><img class="ptdlink" height="70px" width="70px" alt="Github" src="src/assets/icons/ghub.png"></a>\r
            </td>\r
            <td width="40%"   class="tdtext">\r
                Simple Maxscript GUI for extracting and reimporting position and rotation data from 3DS Max\r
            </td>\r
            <td>\r
                <img src="src/assets/icons/3ds.png" width="100%">\r
            </td>\r
        </tr>\r
    </table>\r
</div>`});var Et=k((Ys,we)=>{we.exports=`<div class="pwindow window-wipe-enter">\r
</div>`});var Nt=k((Qs,ve)=>{ve.exports=`<!-- Body of planet window popup -->\r
<div class="pwindow-inner">\r
    <p>\r
        <span><span style="font-size:xx-large;">Javascript Portfolio</span>\r
        <img style="float:right;" height="50px" width="50px" src="src/assets/icons/sass.png">\r
        <img style="float:right;" height="50px" width="50px" src="src/assets/icons/css3.png">\r
        <img style="float:right;" height="50px" width="50px" src="src/assets/icons/chromium.png">\r
        <img style="float:right;" height="50px" width="50px" src="src/assets/icons/react.png">\r
        <img style="float:right;" height="50px" width="50px" src="src/assets/icons/three.png">\r
        <img style="float:right;" height="50px" width="50px" src="src/assets/icons/html5.png">\r
        <img style="float:right;" height="50px" width="50px" src="src/assets/icons/typescript.png">\r
        <img style="float:right; padding-right:2px; border-radius:5px;" height="50px" width="50px" src="src/assets/icons/javascript.png">\r
        </span>\r
        <br><hr width="50%" style="float:left;">\r
        <br><br>\r
        \r
        \r
        <table width="100%">\r
            <tr>\r
                <td class="pimg">\r
                    <img width="100vw" style="min-width:380px; height:182px;" src="src/assets/screenshots/threeshaders.png">\r
                </td>\r
                <td class="pimg">\r
                    <img width="100vw" style="min-width:380px; height:182px;" src="src/assets/screenshots/breathcapture.png">\r
                </td>\r
            </tr>\r
        </table>\r
\r
        <span><span style="font-size:xx-large; font-weight:bold;">Applications        </span>(all demos)</span>\r
        <hr/>\r
        <table  class="ptable">\r
            <tr class="trr trtop">\r
                <td class="td1">\r
                    Brains@Play PWA\r
                </td>\r
                <td width="20%"><a target="_blank" href="https://app.brainsatplay.com/"><img class="ptdlink" height="70px" width="70px" alt="PWA" src="src/assets/bap.png"></a>\r
                </td>\r
                <td width="40%"  class="tdtext">\r
                    Real time sensing platform for open EEG, FNIRS, eye tracking, and more hardware co-developed with \r
                    Garrett Flynn and a little help from our small but growing community. This is a long term project.\r
                    Features tileable applications with dynamically loaded resources, multiplayer, device connectivity,\r
                    data visualization, multithreading, etc.\r
                </td>\r
                <td>\r
                    <img src="src/assets/screenshots/brainsatplay.png" width="100%">\r
                </td>\r
            </tr>\r
            <tr class="trr">\r
                <td class="td1">\r
                    Portfolio App\r
                </td>\r
                <td width="20%"><a target="_blank" href="https://github.com/moothyknight"><img class="ptdlink" height="70px" width="70px" alt="Github" src="src/assets/icons/ghub.png"></a>\r
                </td>\r
                <td width="40%"  class="tdtext">\r
                    This app takes the esbuild + python base and uses it for practical demonstration. It serves python in production\r
                    with hypercorn, and the PWA features are demonstrated with an https server. The server-server and server-client communications\r
                    simply trigger a radio animation to visualize the process occurring in a fun way. \r
                </td>\r
                <td>\r
                    <img src="src/assets/screenshots/myapp.png" width="100%">\r
                </td>\r
            </tr>\r
            <tr class="trr">\r
                <td  class="ptdtitle">HEGAlpha PWA</td>\r
                <td width="20%"><a target="_blank" href="https://hegalomania.netlify.app"><img class="ptdlink" height="70px" width="70px" alt="Github" src="src/assets/icons/netlify.png"></a>\r
                </td>\r
                <td width="40%"  style="text-align: left;">\r
                    Simple webapp for my HEGduino project. This app is so small it can serve from an ESP32 web server!\r
                </td>\r
                <td>\r
                    <img src="src/assets/screenshots/sunrise.png" width="100%">\r
                </td>\r
            </tr>\r
            <tr class="trr">\r
                <td  class="ptdtitle">EEG PWA</td>\r
                <td width="20%"><a target="_blank" href="https://github.com/moothyknight/eegpwa"><img class="ptdlink" height="70px" width="70px" alt="Github" src="src/assets/icons/ghub.png"></a>\r
                </td>\r
                <td width="40%"  style="text-align: left;">\r
                    Pre-Brains@Play web demo built with help from Dovydas Stirpeika. Features GPUjs FFTs to analyze FreeEEG32 data in the browser in real time!.\r
                </td>\r
                <td>\r
                    <img src="src/assets/screenshots/EEGpFNIRS.png" width="100%">\r
                </td>\r
            </tr>\r
            <tr class="trr">\r
                <td  class="ptdtitle">esbuild App Base</td>\r
                <td width="20%"><a target="_blank" href="https://github.com/moothyknight/esbuild_base_webcomponents"><img class="ptdlink" height="70px" width="70px" alt="Github" src="src/assets/icons/ghub.png"></a>\r
                </td>\r
                <td width="40%"  style="text-align: left;">\r
                    esbuild is the latest build tool for web applications. It's fast and easily customizable for js, ts, react, etc. \r
                    It's easy to step into a production setting and not overburden your dev tools. Includes custom hot reloading and PWA presets.\r
                </td>\r
                <td>\r
                    <img src="src/assets/icons/esbuild.png" width="100%">\r
                </td>\r
            </tr>\r
            <tr class="trr">\r
                <td  class="ptdtitle">esbuild + Web Components<br>App Base</td>\r
                <td width="20%"><a target="_blank" href="https://github.com/moothyknight/esbuild_base_webcomponents"><img class="ptdlink" height="70px" width="70px" alt="Github" src="src/assets/icons/ghub.png"></a>\r
                </td>\r
                <td width="40%"  style="text-align: left;">\r
                    esbuild app base plus my web components library! Includes custom hot reloading and PWA presets.\r
                </td>\r
                <td>\r
                    <img src="src/assets/icons/esbuild.png" width="100%">\r
                </td>\r
            </tr>\r
            <tr class="trr">\r
                <td  class="ptdtitle">Python + esbuild <br>App Base</td>\r
                <td width="20%"><a target="_blank" href="https://github.com/moothyknight/esbuild_base_python"><img class="ptdlink" height="70px" width="70px" alt="Github" src="src/assets/icons/ghub.png"></a>\r
                </td>\r
                <td width="40%"  style="text-align: left;">\r
                    A stripped down base for creating wicked fast web applications with esbuild,\r
                    Demonstrates dual server support for building webapps with NodeJS and data streaming\r
                    with Quart's ASGI framework.\r
                </td>\r
                <td>\r
                    <img src="src/assets/icons/esbuild.png" width="100%">\r
                </td>\r
            </tr>\r
        </table>\r
\r
        \r
        <table width="100%">\r
            <tr>\r
                <td class="pimg">\r
                    <img width="100vw" style="min-width:380px; " src="src/assets/screenshots/birdmoney.png">\r
                </td>\r
                <td class="pimg">\r
                    <img width="100vw" style="min-width:380px;" src="src/assets/screenshots/spectrogram.jpg">\r
                </td>\r
            </tr>\r
        </table>\r
\r
\r
        <hr/>\r
        <h1>Libraries</h1>\r
            \r
        <h2>Computation/Performance</h2>\r
        <hr>\r
            <table  class="ptable">\r
                <tr class="trr trtop">\r
                    <td class="td1">\r
                        magicworker\r
                    </td>\r
                    <td width="20%"><a target="_blank" href="https://github.com/moothyknight/acyclicgraph.js"><img class="ptdlink" height="70px" width="70px" alt="PWA" src="src/assets/icons/ghub.png"></a>\r
                    </td>\r
                    <td width="40%"  class="tdtext">\r
                        Convenient webpacked web worker utilities, including writing arbitrary functions to threads, \r
                        transferring classes, worker-based canvas and threejs rendering, piping, proxies, and more.<br>\r
                        A version of this is in our liveserver library as well for creating front and \r
                        backend threaded server applications. Garrett Flynn did the webpacking and lots of testing.\r
                    </td>\r
                    <td>\r
                        <img src="https://img.shields.io/npm/v/magicworker"><br>\r
                        <img src="https://img.shields.io/npm/dt/magicworker"><br>\r
                    </td>\r
                </tr>\r
                <tr class="trr">\r
                    <td class="td1">\r
                        gpujsutils\r
                    </td>\r
                    <td width="20%"><a target="_blank" href="https://github.com/moothyknight/gpujsutils"><img class="ptdlink" height="70px" width="70px" alt="PWA" src="src/assets/icons/ghub.png"></a>\r
                    </td>\r
                    <td width="40%"  class="tdtext">\r
                        Write GPU kernels in js!<br>\r
                        Wrapper with a stable webpacked build of the awesome gpu.js library. It integrates some utilities with premade functions \r
                        and makes it easy to write persistent, dynamic kernels or canvas kernels to the gpu without messing with gpu.js as much.\r
                    </td>\r
                    <td>\r
                        <img src="https://img.shields.io/npm/v/gpujsutils"><br>\r
                        <img src="https://img.shields.io/npm/dt/gpujsutils"><br>\r
                    </td>\r
                </tr>\r
            </table>\r
        <br>\r
        <h2>Scripting & Data</h2>\r
        <hr>\r
        <table  class="ptable">\r
            <tr class="trr trtop">\r
                <td class="td1">\r
                    acyclicgraph\r
                </td>\r
                <td width="20%"><a target="_blank" href="https://github.com/moothyknight/acyclicgraph.js"><img class="ptdlink" height="70px" width="70px" alt="PWA" src="src/assets/icons/ghub.png"></a>\r
                </td>\r
                <td width="40%"  class="tdtext">\r
                    Easy async graph node operation tree scripting utility.<br> \r
                    Featured in this webapp to handle the physics tree.\r
                </td>\r
                <td>\r
                    <img src="https://img.shields.io/npm/v/acyclicgraph"><br>\r
                    <img src="https://img.shields.io/npm/dt/acyclicgraph"><br>\r
                    <img src="https://img.shields.io/github/size/moothyknight/acyclicgraph.js/acyclicgraph.js"><br>\r
                </td>\r
            </tr>\r
            <tr class="trr">\r
                <td class="td1">\r
                    anotherstatemanager\r
                </td>\r
                <td width="20%"><a target="_blank" href="https://github.com/moothyknight/statemanager"><img class="ptdlink" height="70px" width="70px" alt="PWA" src="src/assets/icons/ghub.png"></a>\r
                </td>\r
                <td width="40%"  class="tdtext">\r
                    Multi-tiered state manager including fast checking large objects/arrays for animation<br> \r
                    A lot of work was put into this with Garrett Flynn to make it appropriate for large real time dataset animations.\r
                </td>\r
                <td>\r
                    <img src="https://img.shields.io/npm/v/anotherstatemanager"><br>\r
                    <img src="https://img.shields.io/npm/dt/anotherstatemanager"><br>\r
                    <img src="https://img.shields.io/github/size/moothyknight/StateManager/StateManager.js"><br>\r
                </td>\r
            </tr>\r
            <tr class="trr">\r
                <td class="td1">\r
                    anothersequencer\r
                </td>\r
                <td width="20%"><a target="_blank" href="https://github.com/moothyknight/sequencer.js"><img class="ptdlink" height="70px" width="70px" alt="PWA" src="src/assets/icons/ghub.png"></a>\r
                </td>\r
                <td width="40%"  class="tdtext">\r
                    Simple function sequencing with async and animations. \r
                </td>\r
                <td>\r
                    <img src="https://img.shields.io/npm/v/anothersequencer"><br>\r
                    <img src="https://img.shields.io/npm/dt/anothersequencer"><br>\r
                    <img src="https://img.shields.io/github/size/moothyknight/sequencer.js/sequencer.js"><br>\r
                </td>\r
            </tr>\r
            <tr class="trr">\r
                <td class="td1">\r
                    objectlisteners\r
                </td>\r
                <td width="20%"><a target="_blank" href="https://github.com/moothyknight/objectlistener"><img class="ptdlink" height="70px" width="70px" alt="PWA" src="src/assets/icons/ghub.png"></a>\r
                </td>\r
                <td width="40%"  class="tdtext">\r
                    This is an arbitrary object listener for checking large objects and specific properties \r
                    for changes in a loop e.g. for animation updates, it forms the base of my state management library. \r
                </td>\r
                <td>\r
                    <img src="https://img.shields.io/npm/v/objectlisteners"><br>\r
                    <img src="https://img.shields.io/npm/dt/objectlisteners"><br>\r
                    <img src="https://img.shields.io/github/size/moothyknight/ObjectListener/ObjectListener.js"><br>\r
                </td>\r
            </tr>\r
            <tr class="trr">\r
                <td class="td1">\r
                    brainsatplay-data\r
                </td>\r
                <td width="20%"><a target="_blank" href="https://github.com/brainsatplay/brainsatplay-data"><img class="ptdlink" height="70px" width="70px" alt="PWA" src="src/assets/icons/ghub.png"></a>\r
                </td>\r
                <td width="40%"  class="tdtext">\r
                    Data Structures & Algorithms for Brains@Play environment. Working repo.\r
                </td>\r
                <td>\r
                    <img src="https://img.shields.io/npm/v/brainsatplay-data"><br>\r
                </td>\r
            </tr>\r
            <tr class="trr">\r
                <td class="td1">\r
                    brainsatplay-storage\r
                </td>\r
                <td width="20%"><a target="_blank" href="https://github.com/brainsatplay/brainsatplay-storage"><img class="ptdlink" height="70px" width="70px" alt="PWA" src="src/assets/icons/ghub.png"></a>\r
                </td>\r
                <td width="40%"  class="tdtext">\r
                    Storage functions for Brains@Play. Includes minimongo, browserfs, google drive, & csv utilities.\r
                </td>\r
                <td>\r
                    <img src="https://img.shields.io/npm/v/brainsatplay-storage"><br>\r
                </td>\r
            </tr>\r
        </table>\r
\r
        <br>\r
        <h2>Visual</h2>\r
        <hr>\r
            <table  class="ptable">\r
                <tr class="trr trtop">\r
                    <td class="td1">\r
                        fragelement\r
                    </td>\r
                    <td width="20%"><a target="_blank" href="https://github.com/moothyknight/DOMElement"><img class="ptdlink" height="70px" width="70px" alt="PWA" src="src/assets/icons/ghub.png"></a>\r
                    </td>\r
                    <td width="40%"  class="tdtext">\r
                        Minimally abstracted HTMLElement for responsive web components and easier scripting. <br>\r
                        Used it to write this application it super fast with raw html/js/css!\r
                    </td>\r
                    <td>\r
                        <img src="https://img.shields.io/npm/v/fragelement"><br>\r
                        <img src="https://img.shields.io/npm/dt/fragelement"><br>\r
                        <img src="https://img.shields.io/github/size/moothyknight/DOMElement/DOMElement.js"><br>\r
                    </td>\r
                </tr>\r
                <tr class="trr">\r
                    <td class="td1">\r
                        threeshaderhelper\r
                    </td>\r
                    <td width="20%"><a target="_blank" href="https://github.com/moothyknight/threeshaderhelper"><img class="ptdlink" height="70px" width="70px" alt="PWA" src="src/assets/icons/ghub.png"></a>\r
                    </td>\r
                    <td width="40%"  class="tdtext">\r
                        Wrapper for conveniently editing THREEShaderMaterials and properties. <br>\r
                        Automatically generate sliders in a GUI from uniform declarations detected in the glsl shader text.\r
                        Made with Garrett Flynn. Used for biofeedback in Brains@Play, idea suggested by Stephanie DuPont \r
                        at the Biofeedback Institue of Los Angeles.\r
                    </td>\r
                    <td>\r
                        <img src="https://img.shields.io/npm/v/threeshaderhelper"><br>\r
                        <img src="https://img.shields.io/npm/dt/threeshaderhelper"><br>\r
                        <img src="https://img.shields.io/github/size/moothyknight/threeshaderhelper/THREEShaderHelper.js"><br>\r
                    </td>\r
                </tr>\r
                <tr class="trr">\r
                    <td class="td1">\r
                        dynamicparticles\r
                    </td>\r
                    <td width="20%"><a target="_blank" href="https://github.com/moothyknight/DynamicParticles.js"><img class="ptdlink" height="70px" width="70px" alt="PWA" src="src/assets/icons/ghub.png"></a>\r
                    </td>\r
                    <td width="40%"  class="tdtext">\r
                        Simple particle rendering class. I even made a multithreaded example for it with magicworker.<br> \r
                        Includes a fairly optimized boids algorithm (you can see orbiting planet javascript) using limited a random proximity search where the behaviors remain \r
                        consistent even checking only one random neighbor per frame in large groups. I intend to expand on this over time.\r
                    </td>\r
                    <td>\r
                        <img src="https://img.shields.io/npm/v/dynamicparticles"><br>\r
                        <img src="https://img.shields.io/npm/dt/dynamicparticles"><br>\r
                        <img src="https://img.shields.io/github/size/moothyknight/DynamicParticles.js/DynamicParticles.js"><br>\r
                    </td>\r
                </tr>\r
                <tr class="trr">\r
                    <td class="td1">\r
                        webglplotutils\r
                    </td>\r
                    <td width="20%"><a target="_blank" href="https://github.com/moothyknight/webgl-plot-utils"><img class="ptdlink" height="70px" width="70px" alt="PWA" src="src/assets/icons/ghub.png"></a>\r
                    </td>\r
                    <td width="40%"  class="tdtext">\r
                        A simple stacking/resizing utility for time series data with webgl-plot's line plot utilities.<br>\r
                        It performs interpolation automatically if you supply variable sized data sets, thought at the expense of performance.<br>\r
                        Consistent data sets can be rendered at millions of lines per frame at 60fps, though with minimal styling. ThreeJS or something is better for styling. Smoothiejs or uPlot are great minimal/performant plotting libraries, too, with different tradeoffs.\r
                    </td>\r
                    <td>\r
                        <img src="https://img.shields.io/npm/v/webgl-plot-utils"><br>\r
                        <img src="https://img.shields.io/npm/dt/webgl-plot-utils"><br>\r
                        <img src="https://img.shields.io/github/size/moothyknight/webgl-plot-utils/webgl-plot-utils.js"><br>\r
                    </td>\r
                </tr>\r
                <tr class="trr">\r
                    <td class="td1">\r
                        brainsatplay-math\r
                    </td>\r
                    <td width="20%"><a target="_blank" href="https://github.com/brainsatplay/brainsatplay-math"><img class="ptdlink" height="70px" width="70px" alt="PWA" src="src/assets/icons/ghub.png"></a>\r
                    </td>\r
                    <td width="40%"  class="tdtext">\r
                        A bunch of math for linear algebra, 2d and 3d transforms, covariance, cross-correlation, calculus, etc. Some e.g. the power iteration is borrowed from other FOSS libs and rewritten for clarity or generalization (with sources).\r
                    </td>\r
                    <td>\r
                        <img src="https://img.shields.io/npm/v/brainsatplay-math"><br>\r
                        <img src="https://img.shields.io/npm/dt/brainsatplay-math"><br>\r
                    </td>\r
                </tr>\r
            </table>\r
\r
        <br>\r
        <h2>Server</h2>\r
        <hr>\r
            <table  class="ptable">\r
                <tr class="trr trtop">\r
                    <td class="td1">\r
                        liveserver-router<br>\r
                        liveserver-frontend<br>\r
                        liverserver-backend\r
                    </td>\r
                    <td width="20%"><a target="_blank" href="https://github.com/brainsatplay/liveserver"><img class="ptdlink" height="70px" width="70px" alt="PWA" src="src/assets/icons/ghub.png"></a>\r
                    </td>\r
                    <td width="40%"  class="tdtext">\r
                        Typescript library made with Garrett Flynn that handles a ton of abstraction for real time servers, \r
                        including user databases and streaming with peer2peer (incl. webrtc) or dedicated servers, dynamic routing,\r
                        web workers (which can run their own servers), mongodb hooks, and more.\r
                    </td>\r
                    <td>\r
                        <img src="https://img.shields.io/npm/v/liveserver-router"><br>\r
                        <img src="https://img.shields.io/npm/dt/liveserver-router"><br>\r
                    </td>\r
                </tr>\r
            </table>\r
\r
            <br>\r
            <h2>Drivers</h2>\r
            <hr>\r
            <table  class="ptable">\r
                <tr class="trr trtop">\r
                    <td class="td1">\r
                        biquadjs\r
                    </td>\r
                    <td width="20%"><a target="_blank" href="https://github.com/moothyknight/BiquadFilters.js"><img class="ptdlink" height="70px" width="70px" alt="PWA" src="src/assets/icons/ghub.png"></a>\r
                    </td>\r
                    <td width="40%"  class="tdtext">\r
                        Feed-forward digital biquad filters for real time signal processing. Very common and useful filtering scheme.<br>\r
                        Translated from an arachnoid.com python tutorial while unsuccessfully trying to build a phase-locked loop.\r
                    </td>\r
                    <td>\r
                        <img src="https://img.shields.io/npm/v/biquadjs"><br>\r
                        <img src="https://img.shields.io/npm/dt/biquadjs"><br>\r
                        <img src="https://img.shields.io/github/size/moothyknight/BiquadFilters.js/BiquadFilters.js"><br>\r
                    </td>\r
                </tr>\r
                <tr class="trr">\r
                    <td class="td1">\r
                        hegduinojs\r
                    </td>\r
                    <td width="20%"><a target="_blank" href="https://github.com/moothyknight/hegduino.js"><img class="ptdlink" height="70px" width="70px" alt="PWA" src="src/assets/icons/ghub.png"></a>\r
                    </td>\r
                    <td width="40%"  class="tdtext">\r
                        USB Serial, Bluetooth LE, and WiFi Event Source drivers for the HEGduino ESP32-based device.\r
                    </td>\r
                    <td>\r
                        <img src="https://img.shields.io/npm/v/hegduinojs"><br>\r
                        <img src="https://img.shields.io/npm/dt/hegduinojs"><br>\r
                        <img src="https://img.shields.io/github/size/moothyknight/hegduino.js/hegduino.js"><br>\r
                    </td>\r
                </tr>\r
                <tr class="trr">\r
                    <td class="td1">\r
                        cytonjs\r
                    </td>\r
                    <td width="20%"><a target="_blank" href="https://github.com/moothyknight/cyton.js"><img class="ptdlink" height="70px" width="70px" alt="PWA" src="src/assets/icons/ghub.png"></a>\r
                    </td>\r
                    <td width="40%"  class="tdtext">\r
                        USB Serial drivers or the OpenBCI Cyton. Includes rollover buffers for the latest data.\r
                    </td>\r
                    <td>\r
                        <img src="https://img.shields.io/npm/v/cytonjs"><br>\r
                        <img src="https://img.shields.io/npm/dt/cytonjs"><br>\r
                        <img src="https://img.shields.io/github/size/moothyknight/cyton.js/cyton.js"><br>\r
                    </td>\r
                </tr>\r
                <tr class="trr">\r
                    <td class="td1">\r
                        freeeeg32js\r
                    </td>\r
                    <td width="20%"><a target="_blank" href="https://github.com/moothyknight/freeeeg32.js"><img class="ptdlink" height="70px" width="70px" alt="PWA" src="src/assets/icons/ghub.png"></a>\r
                    </td>\r
                    <td width="40%"  class="tdtext">\r
                        USB Serial drivers for the FreeEEG32. Includes rollover buffers for the latest data.\r
                    </td>\r
                    <td>\r
                        <img src="https://img.shields.io/npm/v/freeeeg32js"><br>\r
                        <img src="https://img.shields.io/npm/dt/freeeeg32js"><br>\r
                        <img src="https://img.shields.io/github/size/moothyknight/freeeeg32.js/freeeeg32.js"><br>\r
                    </td>\r
                </tr>\r
                <tr class="trr">\r
                    <td class="td1">\r
                        BreathCapture\r
                    </td>\r
                    <td width="20%"><a target="_blank" href="https://github.com/moothyknight/BreathCapture.js"><img class="ptdlink" height="70px" width="70px" alt="PWA" src="src/assets/icons/ghub.png"></a>\r
                    </td>\r
                    <td width="40%"  class="tdtext">\r
                        Audio capture with basic smoothed peak-finding based breath detection and phase locking. \r
                        It works like half of the time but it works nonetheless. Made for the 2020 XR Brain Jam by Games For Change with a VR demo.\r
                    </td>\r
                    <td>\r
                        <img src="https://img.shields.io/npm/v/breathcapture"><br>\r
                        <img src="https://img.shields.io/npm/dt/breathcapture"><br>\r
                        <img src="https://img.shields.io/github/size/moothyknight/BreathCapture.js/BreathCapture.js"><br>\r
                    </td>\r
                </tr>\r
                <tr class="trr">\r
                    <td class="td1">\r
                        Chrome Serial Utils\r
                    </td>\r
                    <td width="20%"><a target="_blank" href="https://github.com/moothyknight/chrome-serialutils.js"><img class="ptdlink" height="70px" width="70px" alt="PWA" src="src/assets/icons/ghub.png"></a>\r
                    </td>\r
                    <td width="40%"  class="tdtext">\r
                        Simple Serial USB utilities for chrome extensions (which had their own serial port library pre-chromium integration).\r
                    </td>\r
                    <td>\r
                        <img src="https://img.shields.io/github/size/moothyknight/chrome-serial-utils/serialUtils.js"><br>\r
                    </td>\r
                </tr>\r
            </table>\r
        <br>\r
\r
        <table width="100%">\r
            <tr>\r
                <td class="pimg">\r
                    <img width="100vw" style="min-width:380px; " src="src/assets/millers_maxi_buns/stack.png">\r
                </td>\r
                <td class="pimg">\r
                    <img width="100vw" style="min-width:380px;" src="src/assets/millers_maxi_buns/bapstack.png">\r
                </td>\r
            </tr>\r
        </table>\r
        \r
        <h1>More Info</h1>\r
        <hr/>\r
            Javascript is currently my primary software engineering language.\r
            It holds some of the most promise as it continues to \r
            gain more updates every year as the base of all web software, and as more people see the \r
            value in open, unified, interoperable frameworks. My hope is that \r
            as more mature web frameworks like WebGPU come along, we'll see more \r
            browser engines that are lighter weight and easier\r
            for coding frontends. This brings the cost of development down significantly\r
            so a larger shared creative engineering space can continue to open up and \r
            reach larger audiences. \r
            <br/><br/>\r
            My favorite thing about javascript has to be that it helped me grasp\r
            systems engineering so much better than I could with C/C++ or Python, etc.  \r
            That's because it's more playful and designed for boneheads like me to combine\r
            fairly complex features like Bluetooth, audio, graphics, etc. into a frontend with good \r
            cross-platform performance. It's getting easier to build flexible, high performance applications \r
            with minimal code, something I had given up on trying to do for several years until \r
            these past few. Now I can say I enjoy doing this, if this site is any evidence.\r
    </p>\r
</div>`});var Ct=k((ii,ze)=>{ze.exports=`<!-- Body of planet window popup -->\r
<div class="pwindow-inner">\r
    <span><span style="font-size:xx-large;">Startup Portfolio</span>\r
    </span>\r
    <br><hr width="50%" style="float:left;">\r
    <br><br>\r
    \r
    <span><span style="font-size:xx-large; font-weight:bold;">Current Startups        </span></span>\r
    <hr/>\r
    <table  class="ptable">\r
        <tr class="trr trtop">\r
            <td class="td1">\r
                Brains@Play\r
            </td>\r
            <td width="20%"><a target="_blank" href="https://brainsatplay.com/"><img style="border-radius:50%;" height="100px" width="100px" alt="PWA" src="src/assets/maskedent.png"></a>\r
            </td>\r
            <td width="40%"  class="tdtext">\r
                <br>\r
                In partnership with Garrett Flynn, Jacob Tinkhauser, and a small community, Brains@Play is seeking to be \r
                the base for open source real time physiological sensing on the web. \r
                <br><br>\r
                From the ground up we are building accessible, open source AGPLv3, high performance web and IoT tools. \r
                This includes custom hardware and a community web software platform. We are taking advantage of all of the latest \r
                tools made for the open web and using them for modernized physiological sensing interfaces for research and education, \r
                as well as home neurofeedback. We are nearing our Alpha stage software with a solid hardware prototype that we will bring to market.\r
                <br><br>\r
            </td>\r
            <td>\r
                <img src="src/assets/bap.png" width="100%">\r
            </td>\r
        </tr>\r
        <tr class="trr">\r
            <td class="td1">\r
                MyAlyce\r
            </td>\r
            <td width="20%"><a target="_blank" href="https://myalyce.com/"><img style="border-radius:50%;" height="90px" width="90px" alt="Github" src="src/assets/icons/alyce.png"></a>\r
            </td>\r
            <td width="40%"  class="tdtext">\r
                <br>\r
                Combining custom real time sensing wearables, consumer wearables, and web-based communications software,\r
                MyAlyce seeks to provide data to the mental health and drug recovery process for individuals and help them\r
                build powerful, private or selectively sharable medical profiles that can inform them and their support networks\r
                on their health. We are building open source psychometric and vital sign profiling tools for individuals in \r
                recovery or coping with chronic conditions.\r
                <br/><br/>\r
                Our proof of concept MVP will attempt to alert support teams in the case of an opiate overdose, \r
                which can occur even within rehab centers or right next to support or loved ones without them being\r
                aware, when the person could likely be saved. We have been through the Whatif VC accelerator in LA and were just \r
                accepted into another accelerator competition at USC. <br><br>\r
                We are partnered with the Evergreen Fund and Red Door Life 501(c)(3) organizations to test our MVPs with real clients in rehab.\r
                <br><br>\r
            </td>\r
            <td>\r
                <img src="src/assets/screenshots/myalycelogo.png" width="100%">\r
            </td>\r
        </tr>\r
    </table>\r
    <br>\r
    <table width="100%">\r
        <tr>\r
            <td class="pimg">\r
                <img \r
                    width="100vw" \r
                    style="min-width:380px;" \r
                    src="src/assets/millers_maxi_buns/bapstack.png"\r
                >\r
            </td>\r
            <td class="pimg">\r
                <img \r
                    width="100vw" \r
                    style="min-width:380px;" \r
                    src="src/assets/millers_maxi_buns/myalyce.png"\r
                >\r
            </td>\r
        </tr>\r
    </table>\r
\r
    <h1>More Info</h1>\r
    <hr/>\r
    I have written a few whitepapers.\r
    <br>\r
    <a target="_blank" href="https://github.com/moothyknight/HEG_ESP32_Delobotomizer/blob/main/Guides/Open%20Source%20HEG_FNIRS%20Whitepaper.pdf">Open Source, Low Cost, Scalable fNIRS/HEG Whitepaper</a>\r
    <br><a target="_blank" href="https://github.com/moothyknight/HEG_ESP32/blob/master/Guides/HEG%20Whitepaper%20(heavily%20outdated).pdf">Older HEG v1 Whitepaper</a>\r
    <br><a target="_blank" href="https://docs.google.com/document/d/1RAk8pQR_hl_Mfs5gM2Efzo4oGJoBeFrI4V7QB_AwVaI/edit?usp=sharing">Human Systems Organization Whitepaper (unfinished, needs contributors)</a>\r
    <br><br>\r
    Also check out my blog:<br>\r
    <a target="_blank" href="https://hegalpha.com/blog">HEG Alpha Blog</a>\r
    <br><br>\r
</div>`});var Pt=k((ni,Se)=>{Se.exports=`<div style="position:absolute; color:white; width:100%; z-index:1000; font-size:x-large; font-weight:bolder; font-family:'Courier New', Courier, monospace;">\r
    <span><span style="cursor:pointer; border-radius:5px; padding:10px;">About</span><span style="cursor:pointer; float:right; padding:10px;">Joshua Brewster - 2022 (AGPLv3)</span></span>\r
</div>`});var Bt=k((di,Ne)=>{Ne.exports=`<div class="pwindow-inner">\r
    <span style="font-size:xxlarge;">Hello I'm Joshua Brewster, this is my portfolio!</span>\r
    <hr>\r
    <table width="100%">\r
        <tr>\r
            <td width="70%">\r
                <p style="font-size:16px; font-weight: bold;">\r
                    Click twice on the major planets to see more of my work!\r
                    <br>\r
                </p>\r
                <p>\r
                    Get in touch if you need help with a Web, IoT, and/or Biosensing project! Otherwise I am evangelizing with open source, working on startups, and planning my return to school!\r
                    <hr>\r
                    Contact: <span style="font-weight:bold;">brewster.joshua1@gmail.com</span><br>\r
                    Resum\xE9: <a target="_blank" href="https://docs.google.com/document/d/1Xyqome4IQYsw4o7V152CkCTPPZr6AxuyCe1TA7AFayU/edit?usp=sharing">Google Drive Link</a>\r
                </p>\r
                <div style="background-color:white; padding-top:5px; padding-left: 5px; border-radius: 5px;">\r
                    <a target="_blank" href="https://www.linkedin.com/in/joshua-brewster93/"><img height="40px" width="40px" alt="LinkedIn" src="src/assets/icons/linkedin.png"></a>\r
                    <a target="_blank" href="https://discord.gg/xhnV5Svrta"><img height="40px" width="40px" alt="Brains@Play Discord" src="src/assets/icons/discord.png"></a>\r
                    <a target="_blank" href="https://brainsatplay.com"><img height="40px" width="40px" alt="Brains@Play" src="src/assets/bap.png"></a>\r
                    <a target="_blank" href="https://github.com/moothyknight"><img height="40px" width="40px" style="border-radius:15px; background-color:ghostwhite;" alt="Github" src="src/assets/icons/ghub.png"></a>\r
                    <a target="_blank" href="https://www.npmjs.com/~moothyknight"><img height="35" width="60px" alt="NPM" src="src/assets/icons/npm.png"></a>\r
                </div>\r
            </td>\r
            <td width="30%" class="pimg">\r
                <img width="100vw" src="src/assets/images/me.jpg" style="border-radius:400px; min-width:200px; min-height:200px; transform: translateY(2.5%);"></img>\r
            </td>\r
            \r
        </tr>\r
    </table>\r
    <hr>\r
    <p style="font-size:14px;">\r
        The webapp you're using to read this was programmed from scratch in 1 week with a mix of pure Javascript, HTML5, and CSS. Minus images, this app comes in at about 500kb with about 24MB of build tools!<br><br>\r
        The app simulates particles, boids, newtonian mechanics in 3D for planetary motion, and basic spherical collisions on an acyclic graph, then is made interactive and quickly programmable with web components. \r
        It also demonstrates server-client and server-server communications with an asynchronous, multithreaded python server (via Quart) and a hot-reloading Node backend. \r
        Either server can serve the final build compiled by esbuild, and it can run as a PWA if hosted. You can reload one server without interrupting the other, too, e.g. for development.\r
    </p>\r
    <hr>\r
    <table width="100%">\r
        <tr>\r
            <td class="pimg" colspan="2">\r
                <img width="100vw" style="min-width:400px;" src="src/assets/maskedent.png">\r
            </td>\r
        </tr>   \r
        <tr>\r
            <td class="pimg">\r
                <img width="100vw" style="min-width:380px; " src="src/assets/images/ice.jpg">\r
            </td>\r
            <td class="pimg">\r
                <img width="100vw" style="min-width:380px;" src="src/assets/images/crystal1.jpg">\r
            </td>\r
        </tr>\r
        <tr>\r
            <td class="pimg" colspan="2">\r
                <img width="100vw" style="min-width:780px;" src="src/assets/images/hericium2.jpg">\r
            </td>\r
        </tr>\r
        <tr>\r
            <td class="pimg">\r
                <img width="100vw" style="min-width:380px;" src="src/assets/images/crystal2.jpg">\r
            </td>\r
            <td class="pimg">\r
                <img width="100vw" style="min-width:380px;" src="src/assets/images/icecave.jpg">\r
            </td>\r
        </tr>   \r
        <tr>\r
            <td class="pimg" colspan="2">\r
                <img width="100vw" style="min-width:780px;" src="src/assets/images/hericium.jpg">\r
            </td>\r
        </tr>  \r
        <tr>\r
            <td class="pimg">\r
                <img width="100vw" style="min-width:380px;" src="src/assets/images/ice2.jpg">\r
            </td>\r
            <td class="pimg">\r
                <img width="100vw" style="min-width:380px;" src="src/assets/images/tree.jpg">\r
            </td>\r
        </tr>   \r
        <tr>\r
            <td class="pimg" colspan="2">\r
                <img width="100vw" style="min-width:780px;" src="src/assets/images/hericium3.jpg">\r
            </td>\r
        </tr>\r
        <tr>\r
            <td class="pimg" colspan="2">\r
                <img width="100vw" style="min-width:780px;" src="src/assets/images/dragonfly.jpg">\r
            </td>\r
        </tr>\r
    </table>\r
</div>`});var z=class extends HTMLElement{constructor(){super();n(this,"template",t=>`<div> Custom Fragment Props: ${JSON.stringify(t)} </div>`);n(this,"props",{test:!0});n(this,"useShadow",!1);n(this,"oncreate");n(this,"onresize");n(this,"ondelete");n(this,"onchanged");n(this,"FRAGMENT");n(this,"attachedShadow",!1);n(this,"obsAttributes",["props","options","onchanged","onresize","ondelete","oncreate","template"]);n(this,"delete",()=>{this.remove(),typeof this.ondelete=="function"&&this.ondelete(this.props)});n(this,"render",(t=this.props)=>{typeof this.template=="function"?this.templateString=this.template(t):this.templateString=this.template;let e=document.createElement("template");e.innerHTML=this.templateString;let s=e.content;this.FRAGMENT&&(this.useShadow?this.shadowRoot.removeChild(this.FRAGMENT):this.removeChild(this.FRAGMENT)),this.useShadow?(this.attachedShadow||this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(s),this.FRAGMENT=this.shadowRoot.childNodes[this.shadowRoot.childNodes.length-1]):this.appendChild(s),this.FRAGMENT=this.childNodes[this.childNodes.length-1],this.oncreate&&this.oncreate(t)});n(this,"state",{pushToState:{},data:{},triggers:{},setState(t){if(Object.assign(this.pushToState,t),Object.keys(this.triggers).length>0)for(let e of Object.getOwnPropertyNames(this.triggers))this.pushToState[e]&&(this.data[e]=this.pushToState[e],delete this.pushToState[e],this.triggers[e].forEach(s=>{s.onchanged(this.data[e])}));return this.pushToState},subscribeTrigger(t,e=s=>{}){if(t){this.triggers[t]||(this.triggers[t]=[]);let s=this.triggers[t].length;return this.triggers[t].push({idx:s,onchanged:e}),this.triggers[t].length-1}else return},unsubscribeTrigger(t,e){let s,i=this.triggers[t];if(i)if(!e)delete this.triggers[t];else return i.find(o=>{if(o.idx===e)return!0})&&i.splice(s,1),!0},subscribeTriggerOnce(t=void 0,e=s=>{}){let s,i=r=>{e(r),this.unsubscribeTrigger(t,s)};s=this.subscribeTrigger(t,i)}})}get observedAttributes(){return this.obsAttributes}get obsAttributes(){return this.obsAttributes}set obsAttributes(t){typeof t=="string"?this.obsAttributes.push(t):Array.isArray(t)&&(this.obsAttributes=t)}static get tag(){return this.name.toLowerCase()+"-"}static addElement(t=this.tag,e=this,s=void 0){A(e,t,s)}attributeChangedCallback(t,e,s){if(t==="onchanged"){let i=s;if(typeof i=="string"&&(i=M(i)),typeof i=="function"){this.onchanged=i,this.state.data.props=this.props,this.state.unsubscribeTrigger("props"),this.state.subscribeTrigger("props",this.onchanged);let r=new CustomEvent("changed",{detail:{props:this.props}});this.state.subscribeTrigger("props",()=>{this.dispatchEvent(r)})}}else if(t==="onresize"){let i=s;if(typeof i=="string"&&(i=M(i)),typeof i=="function"){if(this.ONRESIZE)try{window.removeEventListener("resize",this.ONRESIZE)}catch(r){}this.ONRESIZE=r=>{this.onresize(this.props)},this.onresize=i,window.addEventListener("resize",this.ONRESIZE)}}else if(t==="ondelete"){let i=s;typeof i=="string"&&(i=M(i)),typeof i=="function"&&(this.ondelete=()=>{this.ONRESIZE&&window.removeEventListener("resize",this.ONRESIZE),this.state.unsubscribeTrigger("props"),i&&i(this.props)})}else if(t==="oncreate"){let i=s;typeof i=="string"&&(i=M(i)),typeof i=="function"&&(this.oncreate=i)}else if(t==="props"){let i=s;typeof i=="string"&&(i=JSON.parse(i)),Object.assign(this.props,i),this.state.setState({props:this.props})}else if(t==="template"){let i=s;this.template=options.template,typeof i=="function"?this.templateString=this.template(this.props):this.templateString=i,this.render(this.props);let r=new CustomEvent("created",{detail:{props:this.props}});this.dispatchEvent(r)}else{let i=s;if(t.includes("eval_"))t=t.split("_"),t.shift(),t=t.join(),i=M(s);else if(typeof s=="string")try{i=JSON.parse(s)}catch(r){i=s}this[t]=i,this.props[t]=i}}connectedCallback(){let t=this.getAttribute("props");typeof t=="string"&&(t=JSON.parse(t)),Object.assign(this.props,t),this.state.setState({props:this.props}),Array.from(this.attributes).forEach(o=>{let h=o.name,a=o.value;if(h.includes("eval_"))h=h.split("_"),h.shift(),h=h.join(),a=M(o.value);else if(typeof o.value=="string")try{a=JSON.parse(o.value)}catch(d){a=o.value}this[h]||Object.defineProperties(this,o,{value:a,writable:!0,get(){return this[h]},set(d){this.setAttribute(h,d)}}),this[h]=a,this.props[h]=a,this.obsAttributes.push(h)});let e=new CustomEvent("resized",{detail:{props:this.props}}),s=new CustomEvent("changed",{detail:{props:this.props}}),i=new CustomEvent("deleted",{detail:{props:this.props}}),r=new CustomEvent("created",{detail:{props:this.props}});if(this.render(this.props),this.dispatchEvent(r),this.state.subscribeTrigger("props",()=>{this.dispatchEvent(s)}),typeof this.onresize=="function"){if(this.ONRESIZE)try{window.removeEventListener("resize",this.ONRESIZE)}catch(o){}this.ONRESIZE=o=>{this.onresize(this.props)},window.addEventListener("resize",this.ONRESIZE)}if(typeof this.ondelete=="function"){let o=this.ondelete;this.ondelete=(h=this.props)=>{this.ONRESIZE&&window.removeEventListener("resize",this.ONRESIZE),this.state.unsubscribeTrigger("props"),o(h)}}typeof this.onchanged=="function"&&(this.state.data.props=this.props,this.state.subscribeTrigger("props",this.onchanged))}get props(){return this.props}set props(t={}){this.setAttribute("props",t)}get template(){return this.template}set template(t){this.setAttribute("template",t)}get render(){return this.render}get delete(){return this.delete}get state(){return this.state}get onchanged(){return this.onchanged}set onchanged(t){this.setAttribute("onchanged",t)}get onresize(){return this.props}set onresize(t){this.setAttribute("onresize",t)}get ondelete(){return this.props}set ondelete(t){this.setAttribute("ondelete",t)}get oncreate(){return this.oncreate}set oncreate(t){this.setAttribute("oncreated",t)}};function A(c,t,e=null){try{e?t?window.customElements.define(t,c,{extends:e}):window.customElements.define(c.name.toLowerCase()+"-",c,{extends:e}):t?window.customElements.define(t,c):window.customElements.define(c.name.toLowerCase()+"-",c)}catch(s){}}function Pe(c=""){return c+Math.floor(Math.random()*1e15)}function M(method){let getFunctionBody=c=>c.replace(/^\W*(function[^{]+\{([\s\S]*)\}|[^=]+=>[^{]*\{([\s\S]*)\}|[^=]+=>(.+))/i,"$2$3$4"),getFunctionHead=c=>{let t=c.indexOf(")");return c.slice(0,c.indexOf("{",t)+1)},newFuncHead=getFunctionHead(method),newFuncBody=getFunctionBody(method),newFunc;try{if(newFuncHead.includes("function ")){let c=newFuncHead.split("(")[1].split(")")[0];newFunc=new Function(c,newFuncBody)}else if(newFuncHead.substring(0,6)===newFuncBody.substring(0,6)){let c=newFuncHead.split("(")[1].split(")")[0];newFunc=new Function(c,newFuncBody.substring(newFuncBody.indexOf("{")+1,newFuncBody.length-1))}else try{newFunc=eval(newFuncHead+newFuncBody+"}")}catch(err){newFunc=eval(method)}}catch(c){}return newFunc}var J={pushToState:{},data:{},triggers:{},setState(c){if(Object.assign(this.pushToState,c),Object.keys(this.triggers).length>0)for(let t of Object.getOwnPropertyNames(this.triggers))this.pushToState[t]&&(this.data[t]=this.pushToState[t],delete this.pushToState[t],this.triggers[t].forEach(e=>{e.onchange(this.data[t])}));return this.pushToState},subscribeTrigger(c,t=e=>{}){if(c){this.triggers[c]||(this.triggers[c]=[]);let e=this.triggers[c].length;return this.triggers[c].push({idx:e,onchange:t}),this.triggers[c].length-1}else return},unsubscribeTrigger(c,t){let e,s=this.triggers[c];if(s)if(!t)delete this.triggers[c];else return s.find(r=>{if(r.idx===t)return!0})&&s.splice(e,1),!0},subscribeTriggerOnce(c=void 0,t=e=>{}){let e,s=i=>{t(i),this.unsubscribeTrigger(c,e)};e=this.subscribeTrigger(c,s)}},L=class{constructor(){n(this,"state",J);n(this,"nodes",new Map);n(this,"nNodes",0)}convertChildrenToNodes(t){t.convertChildrenToNodes(t)}addNode(t={}){return new P(t,void 0,this)}getNode(t){return this.nodes.get(t)}run(t,e,s){if(typeof t=="string"&&(t=this.nodes.get(t)),t)return t.run(e,t,s)}removeTree(t){if(typeof t=="string"&&(t=this.nodes.get(t)),t){let e=function(s){s.children&&(Array.isArray(s.children)?s.children.forEach(i=>{i.stopNode&&i.stopNode(),i.tag&&this.nodes.get(i.tag)&&this.nodes.delete(i.tag),this.nodes.forEach(r=>{r.nodes.get(i.tag)&&r.nodes.delete(i.tag)}),e(i)}):typeof s.children=="object"&&(s.stopNode&&s.stopNode(),s.tag&&this.nodes.get(s.tag)&&this.nodes.delete(s.tag),this.nodes.forEach(i=>{i.nodes.get(s.tag)&&i.nodes.delete(s.tag)}),e(s)))};t.stopNode&&t.stopNode(),t.tag&&(this.nodes.delete(t.tag),this.nodes.forEach(s=>{s.nodes.get(t.tag)&&s.nodes.delete(t.tag)}),e(t))}}removeNode(t){typeof t=="string"&&(t=this.nodes.get(t)),(t==null?void 0:t.tag)&&this.nodes.delete(t.tag),(t==null?void 0:t.tag)&&this.nodes.get(t.tag)&&(this.nodes.delete(t.tag),this.graph&&this.graph.nodes.delete(t.tag),this.nodes.forEach(e=>{e.nodes.get(t.tag)&&e.nodes.delete(t.tag)}))}appendNode(t={},e){e.addChildren(t)}callParent(r,o){return x(this,arguments,function*(t,e,s=t,i){if(t==null?void 0:t.parent)return yield t.callParent(e,t.parent,s,i)})}callChildren(o,h){return x(this,arguments,function*(t,e,s=t,i,r){if(t==null?void 0:t.children)return yield t.callChildren(e,s,i,r)})}subscribe(t,e=s=>{}){return this.state.subscribeTrigger(t,e)}unsubscribe(t,e){this.state.unsubscribeTrigger(t,e)}},P=class{constructor(t={},e,s){n(this,"tag");n(this,"parent");n(this,"children");n(this,"graph");n(this,"state",J);n(this,"nodes",new Map);!t.tag&&s?t.tag=`node${s.nNodes}`:t.tag||(t.tag=`node${Math.floor(Math.random()*1e10)}`),Object.assign(this,t),this.parent=e,this.graph=s,s&&(s.nNodes++,s.nodes.set(t.tag,this)),this.children&&this.convertChildrenToNodes(this)}operator(t,e=this,s,i){return t}runOp(r){return x(this,arguments,function*(t,e=this,s,i){let o=yield this.operator(t,e,s,i);return this.tag&&this.state.setState({[this.tag]:o}),o})}runNode(t,e,s){if(typeof t=="string"&&(t=this.nodes.get(t)),t)return t.run(e,t,s)}run(t,e=this,s){if(typeof e=="string"){let i;if(this.graph&&(i=this.graph.nodes.get(e)),i||(i=this.nodes.get(e)),e=i,!e)return}return new Promise(i=>x(this,null,function*(){if(e){let r=(h,a,d=0)=>new Promise(f=>x(this,null,function*(){d++;let l=yield h.runOp(a,h,s,d);if(typeof h.repeat=="number"){for(;d<h.repeat;){if(h.delay){setTimeout(()=>x(this,null,function*(){f(yield r(h,a,d))}),h.delay);break}else if(h.frame&&requestAnimationFrame){requestAnimationFrame(()=>x(this,null,function*(){f(yield r(h,a,d))}));break}else l=yield h.runOp(a,h,s,d);d++}if(d===h.repeat){f(l);return}}else if(typeof h.recursive=="number"){for(;d<h.recursive;){if(h.delay){setTimeout(()=>x(this,null,function*(){f(yield r(h,l,d))}),h.delay);break}else if(h.frame&&requestAnimationFrame){requestAnimationFrame(()=>x(this,null,function*(){f(yield r(h,l,d))}));break}else l=yield h.runOp(l,h,s,d);d++}if(d===h.recursive){f(l);return}}else{f(l);return}})),o=()=>x(this,null,function*(){let h=yield r(e,t);if(e.backward&&e.parent&&(yield this.runNode(e.parent,h,e)),e.children&&e.forward)if(Array.isArray(e.children))for(let a=0;a<e.children.length;a++)yield this.runNode(e.children[a],h,e);else yield this.runNode(e.children,h,e);return e.animate&&!e.isAnimating&&this.runAnimation(t,e,s),typeof e.loop=="number"&&!e.isLooping&&this.runLoop(t,e,s),h});e.delay?setTimeout(()=>x(this,null,function*(){i(yield o())}),e.delay):e.frame&&requestAnimationFrame?requestAnimationFrame(()=>x(this,null,function*(){i(yield o())})):i(yield o())}else i(void 0)}))}runAnimation(t,e=this,s){if(e.animate&&!e.isAnimating){e.isAnimating=!0;let i=()=>x(this,null,function*(){e.isAnimating&&(yield e.runOp(t,e,s,"animate"),requestAnimationFrame(()=>x(this,null,function*(){yield i()})))});requestAnimationFrame(i)}}runLoop(t,e=this,s){if(typeof e.loop=="number"&&!e.isLooping){e.isLooping=!0;let i=()=>x(this,null,function*(){e.looping&&(yield e.runOp(t,e,s,"loop"),setTimeout(()=>x(this,null,function*(){yield i()}),e.loop))})}}setOperator(t=function(s,i=this,r,o){return s}){this.operator=t}setParent(t){this.parent=t}setChildren(t){this.children=t}removeTree(t){if(typeof t=="string"&&(t=this.nodes.get(t)),t){let e=function(s){s.children&&(Array.isArray(s.children)?s.children.forEach(i=>{i.stopNode&&i.stopNode(),i.tag&&this.nodes.get(i.tag)&&this.nodes.delete(i.tag),this.nodes.forEach(r=>{r.nodes.get(i.tag)&&r.nodes.delete(i.tag)}),e(i)}):typeof s.children=="object"&&(s.stopNode&&s.stopNode(),s.tag&&this.nodes.get(s.tag)&&this.nodes.delete(s.tag),this.nodes.forEach(i=>{i.nodes.get(s.tag)&&i.nodes.delete(s.tag)}),e(s)))};t.stopNode&&t.stopNode(),t.tag&&(this.nodes.delete(t.tag),this.nodes.forEach(s=>{s.nodes.get(t.tag)&&s.nodes.delete(t.tag)}),e(t),this.graph&&this.graph.nodes.removeTree(t))}}addNode(t={}){let e=new P(t,this,this.graph);return this.nodes.set(e),this.graph&&this.graph.nodes.set(e),e}removeNode(t){typeof t=="string"&&(t=this.nodes.get(t)),(t==null?void 0:t.tag)&&this.nodes.delete(t.tag),(t==null?void 0:t.tag)&&this.nodes.get(t.tag)&&(this.nodes.delete(t.tag),this.graph&&this.graph.nodes.delete(t.tag),this.nodes.forEach(e=>{e.nodes.get(t.tag)&&e.nodes.delete(t.tag)}))}appendNode(t,e=this){typeof t=="string"&&(t=this.nodes.get(t)),t&&e.addChildren(t)}getNode(t){return this.nodes.get(t)}stopLooping(){node.isLooping=!1}stopAnimating(){node.isAnimating=!1}stopNode(){this.stopAnimating(),this.stopLooping()}addChildren(t){this.children||(this.children=[]),!Array.isArray(this.children)&&this.children?this.children=[this.children]:Array.isArray(t)?this.children.push(...t):this.children.push(t)}convertChildrenToNodes(t=this){var e,s,i;if(((e=t.children)==null?void 0:e.name)==="GraphNode")((s=this.graph)==null?void 0:s.nodes.get(t.tag))||this.graph.nodes.set(t.tag),this.nodes.get(t.tag)||this.nodes.set(t.tag);else if(Array.isArray(t.children))for(let r=0;r<t.children.length;r++)if(t.children[r].name==="GraphNode"){((i=this.graph)==null?void 0:i.nodes.get(t.children[r].tag))||this.graph.nodes.set(t.children[r].tag),this.nodes.get(t.children[r].tag)||this.nodes.set(t.children[r].tag);continue}else typeof t.children[r]=="object"?(t.children[r]=new P(t.children[r],t,this.graph),this.nodes.set(t.children[r].tag),this.convertChildrenToNodes(t.children[r])):typeof t.children[r]=="string"&&(this.graph&&(t.children[r]=this.graph.getNode(t.children[r]),this.nodes.get(t.children[r].tag)||this.nodes.set(t.children[r])),t.children[r]||(t.children[r]=this.nodes.get(t.children[r])));else typeof t.children=="object"?(t.children=new P(t.children,t,this.graph),this.nodes.set(t.children.tag),this.convertChildrenToNodes(t.children)):typeof t.children=="string"&&(this.graph&&(t.children=this.graph.getNode(t.children),this.nodes.get(t.children.tag)||this.nodes.set(t.children)),t.children||(t.children=this.nodes.get(t.children)));return t.children}callParent(i){return x(this,arguments,function*(t,e=this,s){var r;if(typeof((r=this.parent)==null?void 0:r.operator)=="function")return yield this.parent.runOp(t,this.parent,e,s)})}callChildren(r){return x(this,arguments,function*(t,e=this,s,i){var h,a;let o;if(Array.isArray(this.children))if(i)o=yield(h=this.children[i])==null?void 0:h.runOp(t,this.children[i],e,s);else{o=[];for(let d=0;d<this.children.length;d++)o.push(yield(a=this.children[d])==null?void 0:a.runOp(t,this.children[d],e,s))}else this.children&&(o=yield this.children.runOp(t,this.children,e,s));return o})}setProps(t={}){Object.assign(this,t)}subscribe(t=this.tag,e=s=>{}){return this.state.subscribeTrigger(t,e)}unsubscribe(t=this.tag,e){this.state.unsubscribeTrigger(t,e)}};var Dt=Z(),N=class extends z{constructor(){super(...arguments);n(this,"props",{operator:(t,e,s,i)=>(console.log(t),t),forward:!0,backward:!1,children:void 0,parent:void 0,delay:!1,repeat:!1,recursive:!1,animate:!1,loop:void 0,tag:void 0,input:void 0,graph:void 0,node:void 0});n(this,"input_delay",1);n(this,"template",Dt);n(this,"render",(t=this.props)=>{typeof this.template=="function"?this.templateString=this.template(t):this.templateString=this.template;let e=document.createElement("template");e.innerHTML=this.templateString;let s=e.content;this.fragment&&this.removeChild(this.fragment),this.fragment=s,this.appendChild(s),this.setupNode(this.props),this.props.input&&setTimeout(()=>x(this,null,function*(){this.props.node.runNode(this.props.node,this.props.input,this.props.graph)}),this.input_delay),this.oncreate&&this.oncreate(t)})}setupNode(t){var s,i,r,o;let e=this.parentNode;if(((s=e.props)==null?void 0:s.operator)&&((i=e.props)==null?void 0:i.node)&&(t.parent=e.props.node),!t.graph){for(;!((r=e.props)==null?void 0:r.nodes)&&!(e.constructor.name==="HTMLBodyElement"||e.constructor.name==="HTMLHeadElement"||e.constructor.name==="HTMLHtmlElement"||e.constructor.name==="HTMLDocument");)e=e.parentNode;((o=e.props)==null?void 0:o.nodes)&&(t.graph=e.props.graph,t.input_delay=e.props.input_delay)}this.id&&!t.tag&&(t.tag=this.id),t.graph&&!t.node&&t.tag?t.node=t.graph.nodes.get(t.tag):t.graph&&typeof t.node=="string"&&(t.node=t.graph.nodes.get(t.node)),t.node||(t.node=new P(t,t.parent,t.graph)),t.tag=t.node.tag,this.id||(this.id=t.tag),t.parent&&t.parent.addChildren(t.node)}};N.addElement("graph-node");var Ht=V(),Y=class extends z{constructor(){super();n(this,"props",{graph:new L,nodes:[]});n(this,"input_delay",1);n(this,"template",Ht);setTimeout(()=>{let t=Array.from(this.children),e=[];(t==null?void 0:t.length)>0&&t.forEach(s=>{s.props&&this.props.nodes.push(s.props.node),s.props&&s.parentNode.tagName===this.tagName&&e.push(s)}),this.children_ready(t,e)},this.input_delay)}children_ready(t=[],e=[]){this.querySelector("button").onclick=()=>{e.forEach(s=>{s.props.node.runNode(s.props.node)})}}};Y.addElement("acyclic-graph");var Jt=U(),X=class extends N{constructor(){super(...arguments);n(this,"props",{operator:(t,e,s,i)=>{if(i==="animate"){this.draw(t,e,s,i);for(let r=0;r<this.drawFuncs.length;r++){let o=this.drawFuncs[r];typeof o=="function"&&o(t,e,s,i)}}},forward:!0,backward:!1,children:void 0,parent:void 0,delay:!1,repeat:!1,recursive:!1,animate:!0,loop:void 0,tag:void 0,input:void 0,graph:void 0,node:void 0});n(this,"template",Jt);n(this,"drawFuncs",[]);n(this,"oncreate",t=>{this.canvas=this.querySelector("canvas"),t.width&&(this.canvas.width=t.width,this.canvas.style.height=t.height),t.height&&(this.canvas.height=t.height,this.canvas.style.height=t.height),t.style&&(this.canvas.style=t.style,setTimeout(()=>{this.canvas.height=this.canvas.clientHeight,this.canvas.width=this.canvas.clientWidth},10)),t.canvas=this.canvas,t.context?t.context=this.canvas.getContext(t.context):t.context=this.canvas.getContext("2d"),this.context=t.context,this.ctx=this.context,t.ctx=this.context,setTimeout(()=>{t.animate&&t.node.runAnimation()},10)});n(this,"onresize",t=>{this.canvas&&(this.canvas.width=this.canvas.clientWidth,this.canvas.height=this.canvas.clientHeight,this.canvas.style.width=this.canvas.clientWidth,this.canvas.style.height=this.canvas.clientHeight)})}draw(t,e,s,i){let r=this.props.canvas,o=this.props.ctx}addDraw(t){typeof t=="function"&&this.drawFuncs.push(t)}};X.addElement("canvas-node");var Vt=Q(),K=class extends N{constructor(){super(...arguments);n(this,"props",{operator:(t,e,s,i)=>(t&&(this.props.input=t),this.props.input),forward:!0,backward:!1,children:void 0,delay:!1,repeat:!1,recursive:!1,animate:!1,loop:void 0,tag:void 0,input:void 0,graph:void 0,node:void 0});n(this,"template",Vt);n(this,"oncreate",t=>{let e=this.querySelector("button");e.onclick=s=>{t.node.run(t.input)}})}};K.addElement("button-node");var Ut=tt(),et=class extends N{constructor(){super(...arguments);n(this,"props",{operator:(t,e,s,i)=>(this.props.input=t,t),forward:!0,backward:!1,children:void 0,delay:!1,repeat:!1,recursive:!1,animate:!1,loop:void 0,tag:void 0,input:void 0,graph:void 0,node:void 0});n(this,"template",Ut);n(this,"oncreate",t=>{let e=this.querySelector("input");e.type=this.type,e.oninput=s=>{t.node&&t.node.callChildren(s.target.value)}})}};et.addElement("input-node");var Qt=st(),it=class extends z{constructor(){super(...arguments);n(this,"props",{});n(this,"template",Qt);n(this,"oncreate",t=>{let e=this.querySelector("button"),s=this.querySelector("div");e&&(e.onclick=i=>{s.innerHTML="Clicked!"})})}};it.addElement("custom-");var te=rt(),at=class extends N{constructor(){super(...arguments);n(this,"log",(t,e=`<tr><td>${t}</td></tr>`)=>{let s=document.createElement("template");s.innerHTML=e;let i=s.content;this.props.div||(this.props.div=this.querySelector("table"),this.props.scrollable&&(this.props.div.style.overflow="hidden")),this.props.messages.length>=this.props.max&&(this.props.messages.shift(),this.props.messagedivs[0].remove(),this.props.messagedivs.shift()),this.props.messages.push(t),this.props.div.appendChild(i);let r=this.querySelectorAll("tr");this.props.messagedivs.push(r[r.length-1]),this.props.messagedivs.length+2>=this.props.max&&(this.props.messagedivs[this.props.max-3]&&this.props.messagedivs.length===this.props.max&&(this.props.messagedivs[0].style.opacity="0.25"),this.props.messagedivs[this.props.max-2]&&(this.props.messagedivs.length===this.props.max?this.props.messagedivs[1].style.opacity="0.5":this.props.messagedivs[0].style.opacity="0.5"),this.props.messagedivs.length===this.props.max?this.props.messagedivs[2].style.opacity="0.75":this.props.messagedivs.length+1>=this.props.max?this.props.messagedivs[1].style.opacity="0.75":this.props.messagedivs[0].style.opacity="0.75")});n(this,"props",{messages:[],messagedivs:[],max:5,scrollable:!1,div:void 0,log:this.log,operator:(t,e,s,i)=>(console.log(t),t),forward:!0,backward:!1,children:void 0,parent:void 0,delay:!1,repeat:!1,recursive:!1,animate:!1,loop:void 0,tag:void 0,input:void 0,graph:void 0,node:void 0});n(this,"template",te);n(this,"oncreate",t=>{})}};at.addElement("logger-");var I=R(F()),ie=nt(),dt=class extends z{constructor(){super();n(this,"props",{protocol:I.settings.socket_protocol,host:I.settings.host,port:I.settings.python,subdomain:"",ws:void 0,logger:void 0});n(this,"template",ie);n(this,"onmessage",t=>x(this,null,function*(){let e=new Date(Date.now()),s=e.getHours()+":"+e.getMinutes()+":"+e.getSeconds(),i=t.data;t.data.constructor.name==="Blob"&&(i=yield t.data.text());let r=`${s}:: WS ${this.props.host}:${this.props.port} message:
 ${i}`,o=`<tr><td style='color:lightgreen;'>${r}</tr></td>`;this.props.logger?this.props.logger.props.log(r,o):console.log(r)}));n(this,"onopen");n(this,"onclose");n(this,"oncreate",t=>{t.logger?typeof t.logger=="string"&&(t.logger=document.getElementById(t.logger)):t.logger=document.querySelector("logger-");try{t.ws=new WebSocket(`${t.protocol}://${t.host}:${t.port}/${t.subdomain}`),t.ws.onmessage=this.onmessage,this.ws=t.ws,this.onopen&&t.ws.addEventListener("open",this.onopen),this.onclose&&t.ws.addEventListener("close",this.onclose),t.ws.onerror=e=>{t.ws.close()}}catch(e){}});n(this,"ondelete",t=>{t.ws.close()})}};A(dt,"socket-");var W=R(F()),ae=ht(),lt=class extends z{constructor(){super();n(this,"props",{protocol:W.settings.protocol,host:W.settings.host,port:W.settings.python,subdomain:"sse",sse:void 0,logger:void 0});n(this,"template",ae);n(this,"onmessage",t=>x(this,null,function*(){let e=new Date(Date.now()),s=e.getHours()+":"+e.getMinutes()+":"+e.getSeconds(),i=t.data;t.data.constructor.name==="Blob"&&(i=yield t.data.text());let r=`${s}:: SSE ${this.props.host}:${this.props.port} message:
 ${i}`,o=`<tr><td style='color:yellow;'>${r}</tr></td>`;this.props.logger?this.props.logger.props.log(r,o):console.log(r)}));n(this,"oncreate",t=>{t.logger?typeof t.logger=="string"&&(t.logger=document.getElementById(t.logger)):t.logger=document.querySelector("logger-");try{t.sse=new EventSource(`${t.protocol}://${t.host}:${t.port}/${t.subdomain}`),this.sse=t.sse,t.sse&&(t.sse.onmessage=this.onmessage),t.sse.onerror=e=>{console.error(e),t.sse.close()}}catch(e){console.error(e)}});n(this,"ondelete",t=>{t.sse.close()})}};A(lt,"sse-");var ne=ct(),pt=class extends N{constructor(){super(...arguments);n(this,"props",{radius:20,triggered:!1,operator:(t,e,s,i)=>{if(this.props.triggered||(this.props.radius+=Math.random()-.5),i==="animate"){this.draw();for(let r=0;r<this.drawFuncs.length;r++){let o=this.drawFuncs[r];typeof o=="function"&&o(t,e,s,i)}}else typeof t=="object"?(t.radius&&(this.props.radius+=t.radius),this.props.triggered=!0):typeof t=="number"?(this.props.radius+=t,this.props.triggered=!0):typeof t=="string"?(this.props.radius+=parseFloat(t),this.props.triggered=!0):(this.props.radius+=Math.random()-.5,this.props.triggered=!0)},forward:!0,backward:!1,children:void 0,parent:void 0,delay:!1,repeat:!1,recursive:!1,animate:!0,loop:void 0,tag:void 0,input:void 0,graph:void 0,node:void 0});n(this,"template",ne);n(this,"drawFuncs",[]);n(this,"oncreate",t=>{this.canvas=this.querySelector("canvas"),t.width&&(this.canvas.width=t.width,this.canvas.style.height=t.height),t.height&&(this.canvas.height=t.height,this.canvas.style.height=t.height),t.style&&(this.canvas.style=t.style,setTimeout(()=>{this.canvas.height=this.canvas.clientHeight,this.canvas.width=this.canvas.clientWidth},10)),t.canvas=this.canvas,t.context?t.context=this.canvas.getContext(t.context):t.context=this.canvas.getContext("2d"),this.context=t.context,this.ctx=this.context,t.ctx=this.context,setTimeout(()=>{t.animate&&t.node.runAnimation()},10)});n(this,"onresize",t=>{this.canvas&&(this.canvas.width=this.canvas.clientWidth,this.canvas.height=this.canvas.clientHeight,this.canvas.style.width=this.canvas.clientWidth,this.canvas.style.height=this.canvas.clientHeight)})}draw(t,e,s,i){let r=this.props.canvas,o=this.props.ctx;this.props.radius<=1&&(this.props.radius=1),o.clearRect(0,0,r.width,r.height),this.drawCircle(r.width*.5,r.height*.5,this.props.radius,"green",5,"#003300")}addDraw(t){typeof t=="function"&&this.drawFuncs.push(t)}drawCircle(t,e,s,i="green",r=5,o="#003300"){this.props.ctx.beginPath(),this.props.ctx.arc(t,e,s,0,2*Math.PI,!1),this.props.ctx.fillStyle=i,this.props.ctx.fill(),this.props.ctx.lineWidth=r,this.props.ctx.strokeStyle=o,this.props.ctx.stroke()}drawLine(t={x:0,y:0},e={x:1,y:1},s=5,i="#003300"){this.props.ctx.beginPath(),this.props.ctx.lineWidth=s,this.props.ctx.strokeStyle=i,this.props.ctx.moveTo(t.x,t.y),this.props.ctx.lineTo(e.x,e.y),this.props.ctx.stroke()}};pt.addElement("circlecanvas-node");var H=class{constructor(t=[["boids",100],["boids",50]],e=void 0,s=!0,i=!0){n(this,"init",(t=this.startingRules)=>{this.canvas&&this.defaultCanvas&&(this.ctx=this.canvas.getContext("2d")),this.canvas&&window.addEventListener("resize",this.onresize),this.setupRules(t),this.startingRules=t,this.looping||(this.currFrame=performance.now()*.001,this.looping=!0,this.loop())});n(this,"deinit",()=>{this.looping=!1,this.canvas&&window.removeEventListener("resize",this.onresize())});n(this,"defaultAnimation",t=>{this.ctx.beginPath();let e=Math.sqrt(t.velocity.x*t.velocity.x+t.velocity.y*t.velocity.y+t.velocity.z*t.velocity.z);var s=Math.floor(e*255/(t.maxSpeed*1.2));s>255?s=255:s<0&&(s=0),this.ctx.fillStyle=this.colorScale[s],this.ctx.arc(t.position.x,t.position.y,t.particleSize,0,Math.PI*2,!0),this.ctx.closePath(),this.ctx.fill()});n(this,"updateGroupProperties",(t,e={},s=void 0,i=void 0)=>{s?i?this.particles[t].particles.map(r=>Object.assign(r[s][i],e)):this.particles[t].particles.map(r=>Object.assign(r[s],e)):this.particles[t].particles.map(r=>Object.assign(r,e))});n(this,"defaultGroupRule",(t,e)=>{t.type=e[0],e[1]>3e3&&e[1]<5e3?t.boid.searchLimit=3:e[1]>=5e3&&(t.boid.searchLimit=1);let s=e[7];s&&(t.boid.avoidance.groups=s);let i=1,r=1,o=1;e[2]?(i=e[2][0],r=e[2][1],o=e[2][2],t.boid.separation*=(i+r+o)/3):this.canvas?(i=this.canvas.height,r=this.canvas.width,o=this.canvas.width):(i=1,r=1,o=1);let h=Math.random()*r,a=Math.random()*i,d=Math.random()*o;t.startingX=Math.random(),t.startingY=Math.random(),t.startingZ=Math.random(),t.position={x:h,y:a,z:d},t.boundingBox={left:t.boundingBox.left*r,right:t.boundingBox.right*r,bot:t.boundingBox.bot*i,top:t.boundingBox.top*i,front:t.boundingBox.front*o,back:t.boundingBox.back*o},t.boid.boundingBox={left:t.boid.boundingBox.left*r,right:t.boid.boundingBox.right*r,bot:t.boid.boundingBox.bot*i,top:t.boid.boundingBox.top*i,front:t.boid.boundingBox.front*o,back:t.boid.boundingBox.back*o},t.boid.attractor={x:.5*r,y:.5*i,z:.5*o,mul:t.boid.attractor.mul},t.boid.swirl={x:.5*r,y:.5*i,z:.5*o,mul:t.boid.swirl.mul}});n(this,"checkParticleBounds",t=>{if(t.velocity.x>t.maxSpeed||t.velocity.y>t.maxSpeed||t.velocity.z>t.maxSpeed||t.velocity.x<-t.maxSpeed||t.velocity.y<-t.maxSpeed||t.velocity.z<-t.maxSpeed){let e=this.normalize3D([t.velocity.x,t.velocity.y,t.velocity.z]);t.velocity.x=e[0]*t.maxSpeed,t.velocity.y=e[1]*t.maxSpeed,t.velocity.z=e[2]*t.maxSpeed}t.position.y-t.particleSize<=t.boundingBox.top&&(t.velocity.y*=t.yBounce,t.position.y=t.boundingBox.top+t.particleSize),t.position.y+t.particleSize>=t.boundingBox.bot&&(t.velocity.y*=t.yBounce,t.position.y=t.boundingBox.bot-t.particleSize),t.position.x-t.particleSize<=t.boundingBox.left&&(t.velocity.x*=t.xBounce,t.position.x=t.boundingBox.left+t.particleSize),t.position.x+t.particleSize>=t.boundingBox.right&&(t.velocity.x*=t.xBounce,t.position.x=t.boundingBox.right-t.particleSize),t.position.z-t.particleSize<=t.boundingBox.front&&(t.velocity.z*=t.xBounce,t.position.z=t.boundingBox.front+t.particleSize),t.position.z+t.particleSize>=t.boundingBox.back&&(t.velocity.z*=t.xBounce,t.position.z=t.boundingBox.back-t.particleSize)});n(this,"defaultTimestepFunc",(t,e)=>{if(t.particles.length<t.max){let i=t.max,r=t.particles.length;for(t.spawnRate&&(r=0,i=t.spawnRate);r<i;)t.particles.push(this.newParticle()),t.groupRuleGen(t.particles[t.particles.length-1],t.rule),r++}else t.particles.length>t.max&&t.particles.splice(t.max);t.useBoids&&(this.calcBoids(t.particles,e)||console.error("boids error"));let s=[];t.particles.forEach((i,r)=>{i.timestepFunc&&i.timestepFunc(t,i,e),i.gravity!==0&&(i.velocity.y+=i.gravity*e),i.force.x!==0&&(i.velocity.x+=i.force.x*e/i.mass),i.force.y!==0&&(i.velocity.y+=i.force.y*e/i.mass),i.force.z!==0&&(i.velocity.z+=i.force.z*e/i.mass),i.acceleration.x!==0&&(i.velocity.x+=i.acceleration.x*e),i.acceleration.y!==0&&(i.velocity.y+=i.acceleration.y*e),i.acceleration.z!==0&&(i.velocity.z+=i.acceleration.z*e),i.velocity.x!==0&&(i.position.x+=i.velocity.x*e),i.velocity.y!==0&&(i.position.y+=i.velocity.y*e),i.velocity.z!==0&&(i.position.z+=i.velocity.z*e),this.checkParticleBounds(i),i.life+=e,this.defaultCanvas&&t.animateParticle(i),i.life>=i.lifeTime&&s.push(r)}),s.reverse().forEach(i=>{t.particles.splice(i,1)})});n(this,"calcAttraction",(t,e,s,i)=>{let r=e.position.x-t.position.x,o=e.position.y-t.position.y,h=e.position.z-t.position.z,a=t.attraction*t.mass*e.mass/(s*s),d=a*r,f=a*o,l=a*h,g=i*d/t.mass,y=i*f/t.mass,b=i*l/t.mass;t.velocity.x+=g,t.velocity.y+=y,t.velocity.z+=b;let w=-i*d/e.mass,m=-i*f/e.mass,u=-i*l/e.mass;return e.velocity.x+=w,e.velocity.y+=m,e.velocity.z+=u,u});n(this,"calcBoids",(t=[],e,s=0,i=t.length)=>{let r=[],o=1/e;e:for(var h=s;h<i;h++){let a=t[h],d=[],f=[],l=[a.position.x,a.position.y,a.position.z,0,0,0,a.velocity.x,a.velocity.y,a.velocity.z,0,0,0,0,0,0,0,0,0],g=1;t:for(let m=0;m<t.length;m++){let u=t[m];if(f.length>a.boid.groupSize||m>=a.boid.searchLimit)break t;let v=Math.floor(Math.random()*t.length);if(!(m===h||v===h||d.indexOf(v)>-1)){let E=t[v],C=this.distance3D(a.position,E.position);if(!(C>a.boid.groupRadius)){f.push(C),d.push(v);let S;if((a.boid.useSeparation||a.boid.useAlignment)&&(S=a.boid.groupRadius/(C*C),S==1/0?S=u.maxSpeed:S==-1/0&&(S=-u.maxSpeed)),a.boid.useCohesion&&(l[0]+=(E.position.x-a.position.x)*.5*C*o,l[1]+=(E.position.y-a.position.y)*.5*C*o,l[2]+=(E.position.z-a.position.z)*.5*C*o),isNaN(C)||isNaN(l[0])||isNaN(E.position.x)){console.log(C,h,v,a.position,E.position,l),a.position.x=NaN;return}a.boid.useSeparation&&(l[3]=l[3]+(a.position.x-E.position.x)*S,l[4]=l[4]+(a.position.y-E.position.y)*S,l[5]=l[5]+(a.position.z-E.position.z)*S),a.boid.useAttraction&&this.calcAttraction(a,E,C,e),a.boid.useAlignment&&(l[6]=l[6]+E.velocity.x*S,l[7]=l[7]+E.velocity.y*S,l[8]=l[8]+E.velocity.z*S),g++}}}if(a.boid.useAvoidance&&a.boid.avoidance.groups.length>0){let m=Math.floor(Math.random()*a.boid.avoidanceGroups.length),u=[];t:for(let E=0;E<a.searchLimit;E++){m++;let C=a.boid.avoidanceGroups[m%a.boid.avoidanceGroups.length];if(u>a.boid.groupSize)break t;let S=Math.floor(Math.random()*C.length);if(!(j===h||S===h||u.indexOf(S)>-1)){let O=C[S],D=this.distance3D(a.position,O.position);if(!(D>a.boid.groupRadius)){u.push(S);let B=a.boid.groupRadius/(D*D);B==1/0?B=p.maxSpeed:B==-1/0&&(B=-p.maxSpeed),l[15]=l[15]+(a.position.x-O.position.x)*B,l[16]=l[16]+(a.position.y-O.position.y)*B,l[17]=l[17]+(a.position.z-O.position.z)*B}}}let v=u.length;l[15]=l[15]*v,l[16]=l[16]*v,l[17]=l[17]*v}let y=1/g;a.boid.useCohesion?(l[0]=a.boid.cohesion*(l[0]*y),l[1]=a.boid.cohesion*(l[1]*y),l[2]=a.boid.cohesion*(l[2]*y)):(l[0]=0,l[1]=0,l[2]=0),a.boid.useSeparation?(l[3]=a.boid.separation*l[3],l[4]=a.boid.separation*l[4],l[5]=a.boid.separation*l[5]):(l[3]=0,l[4]=0,l[5]=0),a.boid.useAlignment?(l[6]=-(a.boid.alignment*l[6]*y),l[7]=a.boid.alignment*l[7]*y,l[8]=a.boid.alignment*l[8]*y):(l[6]=0,l[7]=0,l[8]=0);let b=[0,0,0];a.boid.useSwirl==!0&&(l[9]=-(a.position.y-a.boid.swirl.y)*a.boid.swirl.mul,l[10]=(a.position.z-a.boid.swirl.z)*a.boid.swirl.mul,l[11]=(a.position.x-a.boid.swirl.x)*a.boid.swirl.mul);let w=[0,0,0];a.boid.useAttractor==!0&&(l[12]=(a.boid.attractor.x-a.position.x)*a.boid.attractor.mul,(a.position.x>a.boid.boundingBox.left||a.position.x<a.boid.boundingBox.right)&&(l[12]*=3),l[13]=(a.boid.attractor.y-a.position.y)*a.boid.attractor.mul,(a.position.y>a.boid.boundingBox.top||a.position.y<a.boid.boundingBox.bottom)&&(l[13]*=3),l[14]=(a.boid.attractor.z-a.position.z)*a.boid.attractor.mul,(a.position.z>a.boid.boundingBox.front||a.position.z<a.boid.boundingBox.back)&&(l[14]*=3)),r.push([a.velocity.x*a.drag+l[0]+l[3]+l[6]+l[9]+l[12]+l[15],a.velocity.y*a.drag+l[1]+l[4]+l[7]+l[10]+l[13]+l[16],a.velocity.z*a.drag+l[2]+l[5]+l[8]+l[11]+l[14]+l[17]]),isNaN(r[r.length-1][0])&&console.log(a,h,g,a.position,a.velocity,cohesionVec,separationVec,alignmentVec,b,w)}return r.length===t.length?(t.forEach((a,d)=>{a.velocity.x+=r[d][0],a.velocity.y+=r[d][1],a.velocity.z+=r[d][2]}),!0):(console.error("Boids error"),!1)});n(this,"removeGroup",t=>{this.particles.splice(t,1)});n(this,"onresize",()=>{if(this.canvas){this.defaultCanvas&&(this.canvas.width=this.canvas.parentNode.clientWidth,this.canvas.height=this.canvas.parentNode.clientHeight,this.canvas.style.width=this.canvas.parentNode.clientWidth,this.canvas.style.height=this.canvas.parentNode.clientHeight);let t=this.canvas.clientHeight,e=this.canvas.clientWidth,s=JSON.parse(JSON.stringify(this.prototype)),i={left:s.boundingBox.left*e,right:s.boundingBox.right*e,bot:s.boundingBox.bot*t,top:s.boundingBox.top*t,front:s.boundingBox.front*t,back:s.boundingBox.back*t},r={left:s.boid.boundingBox.left*e,right:s.boid.boundingBox.right*e,bot:s.boid.boundingBox.bot*t,top:s.boid.boundingBox.top*t,front:s.boid.boundingBox.front*t,back:s.boid.boundingBox.back*t};this.particles.forEach(o=>{o.particles.forEach(h=>{h.boundingBox=JSON.parse(JSON.stringify(i)),h.boid.boundingBox=JSON.parse(JSON.stringify(r))})})}});n(this,"frame",t=>{this.frameOffset||(this.frameOffset=t),this.currFrame=performance.now()*.001+this.frameOffset;let e=this.currFrame-t;return e>1&&(e=1),this.defaultCanvas&&this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.particles.forEach(s=>{if(s.timestepFunc(s,e),isNaN(s.particles[0].position.x)){console.log(e,this.ticks,s.particles[0]),this.looping=!1;return}}),this.ticks++,this.currFrame});n(this,"loop",()=>{this.looping!==!1&&(this.frame(this.currFrame),setTimeout(()=>{requestAnimationFrame(()=>{this.loop()})},15))});this.canvas=e,this.defaultCanvas=s,this.ctx=void 0,this.looping=!1,this.currFrame=performance.now()*.001,this.frameOffset=void 0,this.ticks=0,this.startingRules=t,this.nGroups=this.startingRules.length,this.particles=[],this.maxParticles=0,this.colorScale=["#000000","#030106","#06010c","#090211","#0c0215","#0e0318","#10031b","#12041f","#130522","#140525","#150628","#15072c","#16082f","#160832","#160936","#160939","#17093d","#170a40","#170a44","#170a48","#17094b","#17094f","#170953","#170956","#16085a","#16085e","#150762","#140766","#140669","#13066d","#110571","#100475","#0e0479","#0b037d","#080281","#050185","#020089","#00008d","#000090","#000093","#000096","#000099","#00009c","#00009f","#0000a2","#0000a5","#0000a8","#0000ab","#0000ae","#0000b2","#0000b5","#0000b8","#0000bb","#0000be","#0000c1","#0000c5","#0000c8","#0000cb","#0000ce","#0000d1","#0000d5","#0000d8","#0000db","#0000de","#0000e2","#0000e5","#0000e8","#0000ec","#0000ef","#0000f2","#0000f5","#0000f9","#0000fc","#0803fe","#2615f9","#3520f4","#3f29ef","#4830eb","#4e37e6","#543ee1","#5944dc","#5e49d7","#614fd2","#6554cd","#6759c8","#6a5ec3","#6c63be","#6e68b9","#6f6db4","#7072af","#7177aa","#717ba5","#7180a0","#71859b","#718996","#708e91","#6f928b","#6e9786","#6c9b80","#6aa07b","#68a475","#65a96f","#62ad69","#5eb163","#5ab65d","#55ba56","#4fbf4f","#48c347","#40c73f","#36cc35","#34ce32","#37cf31","#3ad130","#3cd230","#3fd32f","#41d52f","#44d62e","#46d72d","#48d92c","#4bda2c","#4ddc2b","#4fdd2a","#51de29","#53e029","#55e128","#58e227","#5ae426","#5ce525","#5ee624","#60e823","#62e922","#64eb20","#66ec1f","#67ed1e","#69ef1d","#6bf01b","#6df11a","#6ff318","#71f416","#73f614","#75f712","#76f810","#78fa0d","#7afb0a","#7cfd06","#7efe03","#80ff00","#85ff00","#89ff00","#8eff00","#92ff00","#96ff00","#9aff00","#9eff00","#a2ff00","#a6ff00","#aaff00","#adff00","#b1ff00","#b5ff00","#b8ff00","#bcff00","#bfff00","#c3ff00","#c6ff00","#c9ff00","#cdff00","#d0ff00","#d3ff00","#d6ff00","#daff00","#ddff00","#e0ff00","#e3ff00","#e6ff00","#e9ff00","#ecff00","#efff00","#f3ff00","#f6ff00","#f9ff00","#fcff00","#ffff00","#fffb00","#fff600","#fff100","#ffec00","#ffe700","#ffe200","#ffdd00","#ffd800","#ffd300","#ffcd00","#ffc800","#ffc300","#ffbe00","#ffb900","#ffb300","#ffae00","#ffa900","#ffa300","#ff9e00","#ff9800","#ff9300","#ff8d00","#ff8700","#ff8100","#ff7b00","#ff7500","#ff6f00","#ff6800","#ff6100","#ff5a00","#ff5200","#ff4900","#ff4000","#ff3600","#ff2800","#ff1500","#ff0004","#ff000c","#ff0013","#ff0019","#ff001e","#ff0023","#ff0027","#ff002b","#ff012f","#ff0133","#ff0137","#ff013b","#ff023e","#ff0242","#ff0246","#ff0349","#ff034d","#ff0450","#ff0454","#ff0557","#ff065b","#ff065e","#ff0762","#ff0865","#ff0969","#ff0a6c","#ff0a70","#ff0b73","#ff0c77","#ff0d7a","#ff0e7e","#ff0f81","#ff1085","#ff1188","#ff128c","#ff138f","#ff1493"],this.rules=[{type:"default",groupRuleGen:this.defaultGroupRule,timestepFunc:this.defaultTimestepFunc,animateParticle:this.defaultAnimation},{type:"boids",groupRuleGen:this.defaultGroupRule,timestepFunc:this.defaultTimestepFunc,animateParticle:this.defaultAnimation}],this.prototype={position:{x:0,y:0,z:0},velocity:{x:0,y:0,z:0},acceleration:{x:0,y:0,z:0},force:{x:0,y:0,z:0},timestepFunc:void 0,type:"boids",particleSize:5,startingX:.5,startingY:.5,maxSpeed:40,xBounce:-1,yBounce:-1,gravity:0,mass:1,drag:.033,life:0,lifeTime:1e8,boundingBox:{left:0,right:1,bot:1,top:0,front:0,back:1},boid:{boundingBox:{left:0,right:1,bot:1,top:0,front:0,back:1},cohesion:1e-5,separation:1e-4,alignment:.006,swirl:{x:.5,y:.5,z:.5,mul:.006},attractor:{x:.5,y:.5,z:.5,mul:.002},avoidance:{groups:[],mul:.1},useCohesion:!0,useSeparation:!0,useAlignment:!0,useSwirl:!0,useAttractor:!0,useAvoidance:!0,attraction:6674e-14,useAttraction:!1,groupRadius:200,groupSize:10,searchLimit:10},plant:{diet:"photosynthetic"},animal:{diet:"omnivore"},bacteria:{},atom:{},proton:{},neutron:{},electron:{},conway:{survivalRange:[2,3],reproductionRange:[3,3],groupRadius:10}},i&&this.init()}setupRules(t=this.startingRules){return t.forEach((e,s)=>{let i=this.addGroup(e)}),this.particles}distance3D(t,e){return Array.isArray(t)?Math.sqrt((e[0]-t[0])*(e[0]-t[0])+(e[1]-t[1])*(e[1]-t[1])+(e[2]-t[2])*(e[2]-t[2])):Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y)+(e.z-t.z)*(e.z-t.z))}normalize3D(t=[]){let e;return Array.isArray(t)?(e=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),[t[0]/e,t[1]/e,t[2]/e]):(e=Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z),{x:t.x/e,y:t.y/e,z:t.z/e})}addRule(t="",e=(r,o)=>{},s=(r,o)=>{},i=r=>{}){if(t.length>0&&typeof e=="function"&&typeof timestepFunc=="function"&&typeof i=="function")this.rules.push({type:t,groupRuleGen:e,timestepFunc:s,animateParticle:i});else return!1}removeGroup(t=0){return this.particles[t]?(this.maxParticles-=this.particles[t].max,this.particles.slice(t,1),!0):!1}addGroup(t=["boids",50]){if(!Array.isArray(t))return!1;let e=t[0],s=t[1],i=t[2],r=t[3],o=t[4],h=t[5];e==="boids"&&(h=!0);let a=t[6];if(!t[0]||!t[1])return!1;this.maxParticles+=t[1];let d,f,l;if(this.rules.forEach(m=>{e===m.type&&(d=m.timestepFunc,f=m.groupRuleGen,l=m.animateParticle)}),!d||!f||this.defaultCanvas&&!l)return!1;let g=new Array(s).fill(0),y=Math.random()*.4+.35,b=Math.random()*.4+.35,w=Math.random()*.4+.35;if(r)for(let m=0;m<r;m++)g[m]=this.newParticle(),f(g[m],t),a&&(g[m].timestepFunc=d),e==="boids"&&(g[m].boid.attractor.x=g[m].boid.boundingBox.right*y,g[m].boid.attractor.y=g[m].boid.boundingBox.bot*b,g[m].boid.attractor.z=g[m].boid.boundingBox.back*w,y<.5&&(g[m].boid.swirl.mul=-g[m].boid.swirl.mul));else g.forEach((m,u)=>{g[u]=this.newParticle(),f(g[u],t),e==="boids"&&(a&&(g[u].timestepFunc=d),g[u].boid.attractor.x=g[u].boid.boundingBox.right*y,g[u].boid.attractor.y=g[u].boid.boundingBox.bot*b,g[u].boid.attractor.z=g[u].boid.boundingBox.back*w,y<.5&&(g[u].boid.swirl.mul=-g[u].boid.swirl.mul))});return this.particles.push({rule:t,type:e,max:s,particles:g,timestepFunc:d,groupRuleGen:f,animateParticle:l,spawnRate:o,useBoids:h,groupId:"id"+Math.floor(Math.random()*99999999)}),g}newParticle(t=void 0){let e=JSON.parse(JSON.stringify(this.prototype));return t&&Object.assign(e,t),e}setParticle(t,e={}){return Object.assign(t,e),t}};var he=gt(),ft=class extends N{constructor(){super(...arguments);n(this,"props",{bodies:{},speed:3e5,lastTime:void 0,now:void 0,canvas:void 0,ctx:void 0,useCanvas:!0,useHTML:!0,meter_per_px:1e9,px_per_meter:1/1e9,zind:0,stars:[],boids:void 0,nstars:void 0,nboids:void 0,operator:(t,e,s,i)=>{if(i==="animate"){this.props.lastTime=this.props.now,this.props.now=Date.now();let r,o=(this.props.now-this.props.lastTime)*.001;o>.1&&(o=.1),r=o*this.props.speed;let h=this.props.bodies,a=Object.keys(h);for(let d=0;d<a.length;d++)for(let f=0;f<a.length;f++)d!==f&&!h[a[d]].fixed&&!h[a[f]].fixed&&this.newtonianMechanics(h[a[d]],h[a[f]],r);if(this.props.node.callChildren(r),this.props.useCanvas){this.draw(t,e,s,i);for(let d=0;d<this.drawFuncs.length;d++){let f=this.drawFuncs[d];typeof f=="function"&&f(t,e,s,i)}}}},forward:!0,backward:!1,children:void 0,delay:!1,repeat:!1,recursive:!1,animate:!0,loop:void 0,tag:void 0,input:void 0,graph:void 0,node:void 0});n(this,"template",he);n(this,"drawFuncs",[]);n(this,"oncreate",t=>{this.canvas=this.querySelector("canvas"),t.meter_per_px&&(t.px_per_meter=1/t.meter_per_px),t.width&&(this.canvas.width=t.width,this.canvas.style.height=t.height),t.height&&(this.canvas.height=t.height,this.canvas.style.height=t.height),t.style&&(this.canvas.style=t.style,setTimeout(()=>{if(this.canvas.height=this.canvas.clientHeight,this.canvas.width=this.canvas.clientWidth,t.useCanvas){t.nstars||(t.nstars=200),t.nboids||(t.nboids=100),t.stars=[];let e=0;for(;e<t.nstars;){let i=Math.floor(Math.random()*100);i<20&&(i=20),t.stars.push({x:Math.random(),y:Math.random(),z:Math.random(),color:`#${i}${i}${i}`}),e++}let s=[["boids",t.nboids],["default",200]];t.boids=new H(s,this.canvas,!1),this.props.boids.particles.forEach((i,r)=>{r===0&&i.particles.forEach((o,h)=>{o.maxSpeed=70,o.boid.separation=.1,o.boid.attractor.mul=.02,o.boid.swirl.mul=.1;let a=Math.floor(Math.random()*100);a<10&&(a=10),o.color=`#${a}DDFF`}),r===1&&i.particles.forEach((o,h)=>{o.velocity={x:Math.random()*10-5,y:Math.random()*10-5,z:Math.random()*10-5};let a=Math.floor(Math.random()*100);a<30&&(a=30);let d=Math.floor(Math.random()*100);d<30&&(d=30);let f=Math.floor(Math.random()*100);f<30&&(f=30),o.color=`#${a}${d}${f}`})})}},10)),t.canvas=this.canvas,t.context?t.context=this.canvas.getContext(t.context):t.context=this.canvas.getContext("2d"),this.context=t.context,this.ctx=this.context,t.ctx=this.context,setTimeout(()=>{t.animate&&(t.now=Date.now(),t.node.runAnimation())},10)});n(this,"onresize",t=>{this.canvas&&(this.canvas.width=this.canvas.clientWidth,this.canvas.height=this.canvas.clientHeight,this.canvas.style.width=this.canvas.clientWidth,this.canvas.style.height=this.canvas.clientHeight,t.width=this.canvas.clientWidth,t.height=this.canvas.clientHeight);let e=t.bodies,s=Object.keys(e);for(let i=0;i<e.length;i++)e[s[i]].props.display===!1&&e[s[i]].props.display==="none"&&(e[s[i]].div.style.height=2*e[s[i]].radius/t.meter_per_px,e[s[i]].div.style.width=2*e[s[i]].radius/t.meter_per_px,e[s[i]].div.style.borderRadius=e[s[i]].radius/t.meter_per_px)})}draw(t,e,s,i){let r=this.props.canvas,o=this.props.ctx;o.clearRect(0,0,r.width,r.height),o.fillStyle="#111111",o.fillRect(0,0,r.width,r.height),this.props.stars.forEach((h,a)=>{o.fillStyle=h.color,o.fillRect(h.x*r.width,h.y*r.height,2,2)}),this.props.boids.particles.forEach((h,a)=>{a===0&&h.particles.forEach((d,f)=>{this.props.bodies.saturn&&(d.boid.attractor.x=this.canvas.clientWidth*.5+this.props.bodies.saturn.position.x*this.props.px_per_meter,d.boid.attractor.y=this.canvas.clientHeight*.5-this.props.bodies.saturn.position.y*this.props.px_per_meter,d.boid.attractor.z=this.canvas.clientWidth*.5+this.props.bodies.saturn.position.z*this.props.px_per_meter),d.boid.swirl.x=d.boid.attractor.x,d.boid.swirl.y=d.boid.attractor.y,d.boid.swirl.z=d.boid.attractor.z;let l=Math.floor(10+f/h.particles.length*90);o.fillStyle=d.color,o.fillRect(d.position.x,d.position.y,2,2)}),a===1&&h.particles.forEach((d,f)=>{o.fillStyle=d.color,o.fillRect(d.position.x,d.position.y,2,2)})})}addDraw(t){typeof t=="function"&&this.drawFuncs.push(t)}magnitude(t={}){let e=0;return Object.keys(t).forEach(s=>{e+=t[s]*t[s]}),Math.sqrt(e)}distance(t={},e={}){let s=0;return Object.keys(t).forEach((i,r)=>{let o=e[i]-t[i];s+=o*o}),Math.sqrt(s)}makeVec(t={},e={}){var s={};return Object.keys(t).forEach((i,r)=>{s[i]=e[i]-t[i]}),s}normalize(t={}){let e=1/this.magnitude(t),s={};return Object.keys(t).forEach((i,r)=>{s[i]=t[i]*e}),s}calcAzimuth(t={x:1,y:1,z:0}){return Math.atan2(t.x,t.y)}calcZenith(t={x:1,y:0,z:1}){return Math.acos(t.z/this.magnitude(t))}sphereCollision(t,e){let s=this.distance(t.position,e.position);return s<t.radius+e.radius?t.radius+e.radius-s:!1}newtonianMechanics(t,e,s){if(!t.mass||!e.mass||t.mass==0&&e.mass===0)return;let i=this.distance(t.position,e.position),r=this.normalize(this.makeVec(t.position,e.position)),o=this.sphereCollision(t,e);if(o){let g=t.mass+e.mass,y=t.mass/g,b=1-y;t.fixed===!1?(t.position.x+=r.x*o*b*1.01,t.position.y+=r.y*o*b*1.01,t.position.z+=r.z*o*b*1.001):(e.position.x-=r.x*o*1.01,e.position.y-=r.y*o*1.01,e.position.z-=r.z*o*1.01),e.fixed===!1?(e.position.x+=r.x*o*y*1.01,e.position.y+=r.y*o*y*1.01,e.position.z+=r.z*o*y*1.01):(t.position.x+=r.x*o*1.01,t.position.y+=r.y*o*1.01,t.position.z+=r.z*o*1.01),i=this.distance(t.position,e.position);let w={x:t.velocity.x-e.velocity.x,y:t.velocity.y-e.velocity.y,z:t.velocity.z-e.velocity.z},m=w.x*r.x+w.y*r.y+w.z*r.z;if(m>0){let u=2*m/g;t.fixed===!1&&(t.velocity.x-=u*r.x*e.mass*t.restitution,t.velocity.y-=u*r.y*e.mass*t.restitution,t.velocity.z-=u*r.z*e.mass*t.restitution),e.fixed===!1&&(e.velocity.x+=u*r.x*e.mass*e.restitution/e.mass,e.velocity.y+=u*r.y*e.mass*e.restitution/e.mass,e.velocity.z+=u*r.z*e.mass*e.restitution/e.mass)}}let h=1/t.mass,a=1/e.mass,d=6674e-14*t.mass*e.mass/(i*i),f={x:r.x*d,y:r.y*d,z:r.z*d},l={x:-r.x*d,y:-r.y*d,z:-r.z*d};t.fixed||(t.velocity.x+=s*f.x*h,t.velocity.y+=s*f.y*h,t.velocity.z+=s*f.z*h),e.fixed||(e.velocity.x+=s*l.x*a,e.velocity.y+=s*l.y*a,e.velocity.z+=s*l.z*a)}};A(ft,"space-node");var _=class extends N{constructor(){super(...arguments);n(this,"operator",(t,e,s,i)=>{var f;let r;typeof t=="object"?(t.position&&(this.props.position=t.position),t.velocity&&(this.props.velocity=t.velocity),t.acceleration&&(this.props.acceleration=t.acceleration),t.force&&(this.props.force=t.force),t.tstep&&(r=t.tstep)):typeof t=="number"?r=t:typeof t=="string"&&(r=parseInt(t));let o=this.props.force,h=this.props.acceleration,a=this.props.velocity,d=this.props.position;if(r&&this.props.fixed===!1&&(o.x&&(h.x+=o.x/this.props.mass,o.x=0),o.y&&(h.y+=o.y/this.props.mass,o.y=0),o.z&&(h.z+=o.z/this.props.mass,o.z=0),h.x&&(a.x+=h.x*r),h.y&&(a.y+=h.y*r),h.z&&(a.z+=h.z*r),a.x&&(d.x+=a.x*r),a.y&&(d.y+=a.y*r),a.z&&(d.z+=a.z*r),this.props.bounded&&this.checkBoundaries(d,a),this.props.distance=this.magnitude(this.props.position),this.props.azimuth=this.calcAzimuth(this.props.position),this.props.zenith=this.calcZenith(this.props.position,this.props.distance),((f=this.parentNode.props)==null?void 0:f.useHTML)||!this.parentNode.props)){this.props.div.style.left=this.parentNode.clientWidth*.5+this.props.position.x/this.parentNode.props.meter_per_px+"px",this.props.div.style.top=this.parentNode.clientHeight*.5-this.props.position.y/this.parentNode.props.meter_per_px+"px";let l=Math.floor(this.props.position.z/this.parentNode.props.meter_per_px);this.parentNode.props.zind>l&&(this.parentNode.props.zind=l);let g=parseInt(this.parentNode.props.canvas.style.zIndex);g||(g=1),this.props.div.style.zIndex=l+g-this.parentNode.props.zind}return t});n(this,"props",{mass:5972e21,radius:63781e5,distance:void 0,theta:void 0,azimuth:void 0,position:{x:15e10,y:0,z:0},velocity:{x:0,y:0,z:0},acceleration:{x:0,y:0,z:0},force:{x:0,y:0,z:0},restitution:.01,vloss:1e-14,fixed:!1,bounded:!0,operator:this.operator,forward:!0,backward:!1,children:void 0,parent:void 0,delay:!1,repeat:!1,recursive:!1,animate:!1,loop:void 0,tag:void 0,input:void 0,graph:void 0,node:void 0});n(this,"template",t=>{var i,r;let e="''";if((t.display===!1||t.display==="none"||((i=this.parentNode.props)==null?void 0:i.useHTML)===!1)&&(e="'none'"),((r=this.parentNode.props)==null?void 0:r.useHTML)===!1)return"";let s;return t.img?`
                <div>
                    <img src=${t.img} height="100%" width="100%" style="position:absolute;"></img>
                </div>
            `:(t.style?s=t.style:s=`"display:${e}; background-color:blue;"`,`
            <div style=${s}></div>
        `)});n(this,"checkBoundaries",(t,e)=>{let s=this.parentNode.getBoundingClientRect(),i=1/this.parentNode.props.meter_per_px,r=s.left+this.parentNode.clientWidth*.5-t.x*i,o=s.top+this.parentNode.clientHeight*.5-t.y*i,h=s.left+this.parentNode.clientWidth*.5-t.z*i,a=this.props.radius*i;r+a>=s.right&&(t.x=-(this.parentNode.clientWidth*.5)*this.parentNode.props.meter_per_px+this.props.radius,e.x<0&&(e.x=-e.x)),r-a<=s.left&&(t.x=this.parentNode.clientWidth*.5*this.parentNode.props.meter_per_px-this.props.radius,e.x>0&&(e.x=-e.x)),o-a<=s.top&&(t.y=this.parentNode.clientHeight*.5*this.parentNode.props.meter_per_px-this.props.radius,e.y>0&&(e.y=-e.y)),o+a>=s.bottom&&(t.y=(this.parentNode.clientHeight*.5-(s.bottom-s.top))*this.parentNode.props.meter_per_px+this.props.radius,e.y<0&&(e.y=-e.y)),h+a>=s.right&&(t.z=-(this.parentNode.clientWidth*.5)*this.parentNode.props.meter_per_px+this.props.radius,e.z<0&&(e.z=-e.z)),h-a<=s.left&&(t.z=this.parentNode.clientWidth*.5*this.parentNode.props.meter_per_px-this.props.radius,e.z>0&&(e.z=-e.z))});n(this,"render",(t=this.props)=>{typeof this.template=="function"?this.templateString=this.template(t):this.templateString=this.template;let e=document.createElement("template");e.innerHTML=this.templateString;let s=e.content;this.fragment&&this.removeChild(this.fragment),this.fragment=s,this.appendChild(s),this.setupNode(this.props),this.props.input&&setTimeout(()=>x(this,null,function*(){this.props.node.runNode(this.props.node,this.props.input,this.props.graph)}),this.input_delay),this.setupPhysicsBody(t),this.oncreate&&this.oncreate(t)});n(this,"oncreate",t=>{});n(this,"dragElement",t=>{let e=r=>{r=r||window.event,r.preventDefault();let o=!1;setTimeout(()=>{o||(document.onmouseup=i,document.onmousemove=s)},200),document.onmouseup=()=>{o=!0}},s=r=>{var o,h;if(r=r||window.event,r.preventDefault(),(o=this.parentNode.props)==null?void 0:o.meter_per_px){let a=this.parentNode.getBoundingClientRect();this.props.position.x=-(this.parentNode.clientWidth*.5+a.x-r.clientX)*this.parentNode.props.meter_per_px,this.props.position.y=(this.parentNode.clientHeight*.5+a.y-r.clientY)*this.parentNode.props.meter_per_px,this.props.velocity.x=0,this.props.velocity.y=0}(((h=this.parentNode.props)==null?void 0:h.useHTML)||!this.parentNode.props)&&(t.style.top=r.clientY+"px",t.style.left=r.clientX+"px")},i=()=>{document.onmouseup=null,document.onmousemove=null};t&&(t.style.cursor="pointer",t.onmousedown=e)})}d2r(t){return Math.PI*t/180}r2d(t){return 180*t/Math.PI}magnitude(t={}){let e=0;return Object.keys(t).forEach(s=>{e+=t[s]*t[s]}),Math.sqrt(e)}distance(t={},e={}){let s=0;return Object.keys(t).forEach((i,r)=>{let o=e[i]-t[i];s+=o*o}),Math.sqrt(s)}makeVec(t={},e={}){var s={};return Object.keys(t).forEach((i,r)=>{s[i]=e[i]-t[i]}),s}normalize(t={}){let e=1/this.magnitude(t),s={};return Object.keys(t).forEach((i,r)=>{s[i]=t[i]*e}),s}calcAzimuth(t={x:1,y:1,z:0}){return Math.atan2(t.x,t.y)}calcZenith(t={x:1,y:0,z:1},e=this.magnitude(t)){if(e)return Math.acos(t.z/e);let s=this.magnitude(t);return(s=0)?0:Math.acos(t.z/s)}setAzimuth(t){this.props.azimuth=t,props.position.z=props.distance*Math.sin(2*props.azimuth)}setZenith(t){this.props.theta=t,this.props.position.x=this.props.distance*Math.cos(this.props.theta),this.props.position.y=this.props.distance*Math.sin(this.props.theta)}setPositionFromSpherical(t){var e;if(!t.distance)t.distance=this.magnitude(t.position),t.azimuth?(t.position.z=t.distance*Math.sin(2*t.azimuth),t.div.style.top=this.parentNode.clientHeight*.5-t.position.y/this.parentNode.props.meter_per_px+"px"):t.azimuth=this.calcZenith(t.position),t.theta?(t.position.x=t.distance*Math.cos(t.theta),t.position.y=t.distance*Math.sin(t.theta),t.div.style.left=this.parentNode.clientWidth*.5-t.position.x/this.parentNode.props.meter_per_px+"px"):t.theta=this.calcAzimuth(t.position);else if(t.azimuth||(t.azimuth=this.calcZenith(t.position)),t.position.z=t.distance*Math.sin(2*t.azimuth),t.theta||(t.theta=this.calcAzimuth(t.position)),t.position.x=t.distance*Math.cos(t.theta),t.position.y=t.distance*Math.sin(t.theta),((e=this.parentNode.props)==null?void 0:e.useHTML)||!this.parentNode.props){t.div.style.left=this.parentNode.clientWidth*.5+t.position.x/this.parentNode.props.meter_per_px+"px",t.div.style.top=this.parentNode.clientHeight*.5-t.position.y/this.parentNode.props.meter_per_px+"px";let s=Math.floor(t.position.z/this.parentNode.props.meter_per_px);Math.abs(this.parentNode.props.zind)>s&&(this.parentNode.props.zind=s),t.div.style.zIndex=s+parseInt(this.parentNode.props.canvas.style.zIndex)+this.parentNode.props.zind}}setupPhysicsBody(t){var i,r,o,h;typeof t.px=="number"&&(t.position.x=t.px),typeof t.py=="number"&&(t.position.y=t.py),typeof t.pz=="number"&&(t.position.z=t.pz),typeof t.vx=="number"&&(t.velocity.x=t.vx),typeof t.vy=="number"&&(t.velocity.y=t.vy),typeof t.vz=="number"&&(t.velocity.z=t.vz);let e=this.querySelector("div");t.div=e;let s=t.radius;if(((r=(i=this.parentNode)==null?void 0:i.props)==null?void 0:r.meter_per_px)&&(s=s/this.parentNode.props.meter_per_px),((o=this.parentNode.props)==null?void 0:o.useHTML)||!this.parentNode.props){let a=this.parentNode.clientWidth*.5+t.position.x/this.parentNode.props.meter_per_px,d=this.parentNode.clientHeight*.5-t.position.y/this.parentNode.props.meter_per_px;e.style.position="absolute",e.style.height=2*s+"px",e.style.width=2*s+"px",e.style.borderRadius=s+"px",e.style.left=a+"px",e.style.top=d+"px",e.style.transform="translate(-"+s+"px,-"+s+"px)",this.style.backgroundColor&&(e.style.backgroundColor=this.style.backgroundColor)}this.setPositionFromSpherical(t),this.dragElement(e),((h=this.parentNode.props)==null?void 0:h.bodies)&&(this.parentNode.props.bodies[t.tag]=t)}};A(_,"physics-body");var ce=mt(),ut=class extends z{constructor(){super(...arguments);n(this,"props",{tag:"",direction:"top",color:"rgba(0,0,0,0.8)"});n(this,"template",ce);n(this,"oncreate",t=>{let e=this.querySelector("div");e.style.backgroundColor=t.color,t.div=e;let s=this.querySelector("p");t.tag&&s.insertAdjacentHTML("beforebegin",t.tag+"</br>")})}};ut.addElement("planet-tag");var Ms=Math.PI*2,bt=class extends _{constructor(){super(...arguments);n(this,"nClicks",!1);n(this,"startTime",Date.now());n(this,"oncreate",t=>{let e=this.querySelector("div");this.props.div=e;let s=document.createElement("div"),i=document.createElement("div");t.ndot=i,Object.assign(s.style,{position:"absolute",width:0,height:0,borderLeft:"3px solid transparent",borderRight:"3px solid transparent",borderBottom:"15px solid rgba(50,50,50,0.8)",transform:"rotate(-30deg)",left:this.parentNode.props.px_per_meter*t.radius*-.5+"px",top:`-${this.parentNode.props.px_per_meter*t.radius*1.75}px`}),Object.assign(i.style,{position:"absolute",width:"6px",height:"6px",borderRadius:"3px",backgroundColor:"darkred",left:this.parentNode.props.px_per_meter*t.radius*-1.3+"px",top:`-${this.parentNode.props.px_per_meter*t.radius*2.5}px`}),e.appendChild(s),e.appendChild(i);let r=document.createElement("div"),o=document.createElement("div");t.pdot=o,Object.assign(r.style,{position:"absolute",width:0,height:0,borderLeft:"3px solid transparent",borderRight:"3px solid transparent",borderBottom:"15px solid rgba(50,50,50,0.8)",transform:"rotate(-210deg)",left:this.parentNode.props.px_per_meter*t.radius*1.4+"px",top:`${this.parentNode.props.px_per_meter*t.radius*1.5}px`}),Object.assign(o.style,{position:"absolute",width:"6px",height:"6px",borderRadius:"3px",backgroundColor:"darkred",left:this.parentNode.props.px_per_meter*t.radius*2.2+"px",top:`${this.parentNode.props.px_per_meter*t.radius*3.5}px`}),e.appendChild(r),e.appendChild(o);let h=document.createElement("div"),a=document.createElement("div");t.npdot=a,Object.assign(h.style,{position:"absolute",width:0,height:0,borderLeft:"3px solid transparent",borderRight:"3px solid transparent",borderBottom:"15px solid rgba(50,50,50,0.8)",transform:"rotate(-130deg)",left:this.parentNode.props.px_per_meter*t.radius*-.8+"px",top:`${this.parentNode.props.px_per_meter*t.radius}px`}),Object.assign(a.style,{position:"absolute",width:"6px",height:"6px",borderRadius:"3px",backgroundColor:"darkred",left:this.parentNode.props.px_per_meter*t.radius*-1.75+"px",top:`${this.parentNode.props.px_per_meter*t.radius*2.5}px`}),e.appendChild(h),e.appendChild(a),e.onclick=d=>{this.nClicks++,this.nClicks===1||this.nClicks===2||(this.nClicks=0)},e.onmouseover=d=>{},e.onmouseout=d=>{}})}};bt.addElement("planet-earth");var q=R(F());var ge=yt(),fe=Math.PI*2,wt=class extends _{constructor(){super(...arguments);n(this,"nClicks",0);n(this,"transmittingSSE",!1);n(this,"startTime",Date.now());n(this,"drawPtoE",(t,e,s,i)=>{var r,o;if(this.transmittingSSE){let h=this.props.div.getBoundingClientRect(),a=document.querySelector("planet-earth");if(a&&(a=a.props.div.getBoundingClientRect(),(o=(r=this.parentNode)==null?void 0:r.props)==null?void 0:o.ctx)){let d=this.parentNode.props.ctx,f=.5*(h.right+h.left)-10,l=.5*(h.bottom+h.top)-10,g=.5*(a.right+a.left),y=.5*(a.bottom+a.top)-5,b=d.createLinearGradient(f,l,g,y),w=(Math.PI+(Date.now()-this.startTime)*.0031415)%fe;w>Math.PI&&(w=0);let m=Math.abs(Math.tanh(w));b.addColorStop(0,"rgba(0,0,0,0)");let u=m-.12;u<0&&(u=0),b.addColorStop(u,"rgba(0,0,0,0)"),b.addColorStop(m,"rgba(255,255,50,0.75)");let v=m+.12;v>1&&(v=1),b.addColorStop(v,"rgba(0,0,0,0)"),b.addColorStop(1,"rgba(0,0,0,0)"),d.strokeStyle=b,d.lineWidth=5,d.beginPath(),d.moveTo(f,l),d.lineTo(g,y),d.stroke()}}});n(this,"oncreate",t=>{var o;let e=this.querySelector("div");this.props.div=e,((o=this.parentNode)==null?void 0:o.drawFuncs)&&this.parentNode.drawFuncs.push(this.drawPtoE),e.onmouseover=h=>{t.ptag=document.createElement("planet-tag"),t.ptag.props.tag="Python",e.appendChild(t.ptag)},e.onmouseout=h=>{t.ptag.delete()};let s=document.createElement("div"),i=document.createElement("div");t.pdot=i,Object.assign(s.style,{position:"absolute",width:0,height:0,borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderBottom:"15px solid rgba(50,50,50,0.8)",transform:"rotate(25deg)",left:this.parentNode.props.px_per_meter*t.radius*1.3+"px",top:`-${this.parentNode.props.px_per_meter*t.radius*.08}px`}),Object.assign(i.style,{position:"absolute",width:"6px",height:"6px",borderRadius:"3px",backgroundColor:"darkred",left:this.parentNode.props.px_per_meter*t.radius*1.43+"px",top:`-${this.parentNode.props.px_per_meter*t.radius*.2}px`}),e.appendChild(s),e.appendChild(i);let r=document.querySelector("planet-earth");e.onclick=h=>{if(this.nClicks++,this.nClicks===1){i.style.backgroundColor="gold",setTimeout(()=>{i.style.backgroundColor="brown"},500);let a=document.createElement("sse-");a.props.protocol=q.settings.protocol,a.props.host=q.settings.host,a.props.port=q.settings.python,e.appendChild(a),t.sse=this.querySelector("sse-"),t.sse.props.sse&&(t.sse.props.sse.addEventListener("message",d=>{this.transmittingSSE||(this.transmittingSSE=!0),i.style.backgroundColor="gold",r&&(r.props.pdot.style.backgroundColor="gold"),setTimeout(()=>{this.transmittingSSE&&(t.sse&&(i.style.backgroundColor="brown"),r&&(r.props.pdot.style.backgroundColor="brown"))},500)}),t.sse.props.sse.addEventListener("close",()=>{this.transmittingSSE=!1}))}else if(this.nClicks===2){let a=document.createElement("portfolio-window");a.props.innerTemplate=ge,document.body.appendChild(a);let d=document.querySelectorAll("portfolio-window");t.pwindow=d[d.length-1]}else i.style.backgroundColor="darkred",r&&(r.props.pdot.style.backgroundColor="darkred"),this.nClicks=0,t.sse&&t.sse.delete(),this.transmittingSSE=!1,t.sse=void 0}})}};wt.addElement("planet-python");var T=R(F());var ue=xt(),$=Math.PI*2,vt=class extends _{constructor(){super(...arguments);n(this,"nClicks",!1);n(this,"transmittingWS",!1);n(this,"transmittingPyToNode",!1);n(this,"startTime",Date.now());n(this,"drawPtoN",(t,e,s,i)=>{var r,o;if(this.transmittingPyToNode){let h=this.props.div.getBoundingClientRect(),a=document.querySelector("planet-python");if(a&&(a=a.props.div.getBoundingClientRect(),(o=(r=this.parentNode)==null?void 0:r.props)==null?void 0:o.ctx)){let d=this.parentNode.props.ctx,f=.5*(a.right+a.left)-5,l=.5*(a.bottom+a.top)-20,g=.5*(h.right+h.left)-5,y=.5*(h.bottom+h.top)-20,b=d.createLinearGradient(f,l,g,y),w=(Date.now()-this.startTime)*.0031415%$;w>Math.PI&&(w=0);let m=Math.abs(Math.tanh(w));b.addColorStop(0,"rgba(0,0,0,0)");let u=m-.12;u<0&&(u=0),b.addColorStop(u,"rgba(0,0,0,0)"),b.addColorStop(m,"rgba(100,100,255,0.75)");let v=m+.12;v>1&&(v=1),b.addColorStop(v,"rgba(0,0,0,0)"),b.addColorStop(1,"rgba(0,0,0,0)"),d.strokeStyle=b,d.lineWidth=5,d.beginPath(),d.moveTo(f,l),d.lineTo(g,y),d.stroke()}}});n(this,"drawNPtoE",(t,e,s,i)=>{var r,o;if(this.transmittingPyToNode){let h=this.props.div.getBoundingClientRect(),a=document.querySelector("planet-earth");if(a&&(a=a.props.div.getBoundingClientRect(),(o=(r=this.parentNode)==null?void 0:r.props)==null?void 0:o.ctx)){let d=this.parentNode.props.ctx,f=.5*(h.right+h.left)-10,l=.5*(h.bottom+h.top)+10,g=.5*(a.right+a.left),y=.5*(a.bottom+a.top)-5,b=d.createLinearGradient(f,l,g,y),w=(Math.PI+(Date.now()-this.startTime)*.0031415)%$;w>Math.PI&&(w=0);let m=Math.abs(Math.tanh(w));b.addColorStop(0,"rgba(0,0,0,0)");let u=m-.12;u<0&&(u=0),b.addColorStop(u,"rgba(0,0,0,0)"),b.addColorStop(m,"rgba(100,100,255,0.75)");let v=m+.12;v>1&&(v=1),b.addColorStop(v,"rgba(0,0,0,0)"),b.addColorStop(1,"rgba(0,0,0,0)"),d.strokeStyle=b,d.lineWidth=5,d.beginPath(),d.moveTo(f,l),d.lineTo(g,y),d.stroke()}}});n(this,"drawNtoE",(t,e,s,i)=>{var r,o;if(this.transmittingWS){let h=this.props.div.getBoundingClientRect(),a=document.querySelector("planet-earth");if(a&&(a=a.props.div.getBoundingClientRect(),(o=(r=this.parentNode)==null?void 0:r.props)==null?void 0:o.ctx)){let d=this.parentNode.props.ctx,f=.5*(h.right+h.left)-10,l=.5*(h.bottom+h.top)-40,g=.5*(a.right+a.left),y=.5*(a.bottom+a.top)-5,b=d.createLinearGradient(f,l,g,y),w=(Math.PI+(Date.now()-this.startTime)*.0031415)%$;w>Math.PI&&(w=0);let m=Math.abs(Math.tanh(w));b.addColorStop(0,"rgba(0,0,0,0)");let u=m-.12;u<0&&(u=0),b.addColorStop(u,"rgba(0,0,0,0)"),b.addColorStop(m,"rgba(100,255,100,0.75)");let v=m+.12;v>1&&(v=1),b.addColorStop(v,"rgba(0,0,0,0)"),b.addColorStop(1,"rgba(0,0,0,0)"),d.strokeStyle=b,d.lineWidth=5,d.beginPath(),d.moveTo(f,l),d.lineTo(g,y),d.stroke()}}});n(this,"oncreate",t=>{var f;let e=this.querySelector("div");this.props.div=e,((f=this.parentNode)==null?void 0:f.drawFuncs)&&(this.parentNode.drawFuncs.push(this.drawNtoE),this.parentNode.drawFuncs.push(this.drawPtoN),this.parentNode.drawFuncs.push(this.drawNPtoE)),e.onmouseover=l=>{t.ptag=document.createElement("planet-tag"),t.ptag.props.tag="NodeJS",e.appendChild(t.ptag)},e.onmouseout=l=>{t.ptag.delete()};let s=document.createElement("div"),i=document.createElement("div");t.ndot=i,Object.assign(s.style,{position:"absolute",width:0,height:0,borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderBottom:"15px solid rgba(50,50,50,0.8)",transform:"rotate(-30deg)",left:this.parentNode.props.px_per_meter*t.radius*.4+"px",top:`-${this.parentNode.props.px_per_meter*t.radius*-.1}px`}),Object.assign(i.style,{position:"absolute",width:"6px",height:"6px",borderRadius:"3px",backgroundColor:"darkred",left:this.parentNode.props.px_per_meter*t.radius*.34+"px",top:`-${this.parentNode.props.px_per_meter*t.radius*.1}px`}),e.appendChild(s),e.appendChild(i);let r=document.createElement("div"),o=document.createElement("div");t.pdot=o,Object.assign(r.style,{position:"absolute",width:0,height:0,borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderBottom:"15px solid rgba(50,50,50,0.8)",transform:"rotate(-210deg)",left:this.parentNode.props.px_per_meter*t.radius*1.4+"px",top:`${this.parentNode.props.px_per_meter*t.radius*1.6}px`}),Object.assign(o.style,{position:"absolute",width:"6px",height:"6px",borderRadius:"3px",backgroundColor:"darkred",left:this.parentNode.props.px_per_meter*t.radius*1.54+"px",top:`${this.parentNode.props.px_per_meter*t.radius*1.87}px`}),e.appendChild(r),e.appendChild(o);let h=document.createElement("socket-");h.props.host=T.settings.host,h.props.port=T.settings.port,e.appendChild(h),t.pysocket=this.querySelector("socket-");let a=t.pysocket.props.ws,d=document.querySelector("planet-earth");a&&(a.addEventListener("open",()=>{o.style.backgroundColor="cyan",setTimeout(()=>{t.pysocket_closed||(o.style.backgroundColor="darkblue")},500)}),a.addEventListener("close",()=>{this.transmittingPyToNode=!1,o.style.backgroundColor="darkred",d&&(d.props.npdot.style.backgroundColor="darkred"),t.pysocket_closed=!0}),a.addEventListener("message",l=>{this.transmittingPyToNode||(this.transmittingPyToNode=!0),o.style.backgroundColor="cyan",d&&(d.props.npdot.style.backgroundColor="cyan"),setTimeout(()=>{this.transmittingPyToNode&&(t.pysocket_closed||(o.style.backgroundColor="darkblue"),d&&(d.props.npdot.style.backgroundColor="darkblue"))},500)}),a.onmessage=l=>x(this,null,function*(){let g=new Date(Date.now()),y=g.getHours()+":"+g.getMinutes()+":"+g.getSeconds(),b=l.data;l.data.constructor.name==="Blob"&&(b=yield l.data.text());let w=`${y}:: ${T.settings.host}:${T.settings.port} received:
 ${b}`,m=`<tr><td style='color:cyan;'>${w}</tr></td>`;t.pysocket.props.logger?t.pysocket.props.logger.props.log(w,m):console.log(w)})),e.onclick=l=>{if(this.nClicks++,this.nClicks===1){let g=document.createElement("socket-");g.props.host=T.settings.host,g.props.port=T.settings.python_node,e.appendChild(g),t.socket=this.querySelectorAll("socket-")[1],t.socket.props.ws&&(t.socket.props.ws.addEventListener("message",y=>{this.transmittingWS||(this.transmittingWS=!0),i.style.backgroundColor="lightgreen",d&&(d.props.ndot.style.backgroundColor="lightgreen"),setTimeout(()=>{this.transmittingWS&&(t.socket&&(i.style.backgroundColor="darkgreen"),d&&(d.props.ndot.style.backgroundColor="darkgreen"))},500)}),t.socket.props.ws.addEventListener("close",()=>{this.transmittingWS=!1,i.style.backgroundColor="darkred",d&&(d.props.ndot.style.backgroundColor="darkred")}))}else if(this.nClicks===2){let g=document.createElement("portfolio-window");g.props.innerTemplate=ue,document.body.appendChild(g);let y=document.querySelectorAll("portfolio-window");t.pwindow=y[y.length-1]}else i.style.backgroundColor="darkred",d&&(d.props.ndot.style.backgroundColor="darkred"),this.nClicks=0,t.socket&&t.socket.delete(),this.transmittingWS=!1,t.socket=void 0}});n(this,"ondelete",(t=this.props)=>{t.socket&&t.socket.delete(),t.pysocket&&t.pysocket.delete(),t.pysocket=void 0})}};vt.addElement("planet-nodejs");var ye=kt(),zt=class extends _{constructor(){super(...arguments);n(this,"nClicks",!1);n(this,"oncreate",t=>{let e=this.querySelector("div");this.props.div=e;let s=this.querySelector("img");s&&(s.className="saturate"),e.onclick=i=>{if(this.nClicks++,this.nClicks!==1)if(this.nClicks===2){let r=document.createElement("portfolio-window");r.props.innerTemplate=ye,document.body.appendChild(r);let o=document.querySelectorAll("portfolio-window");t.pwindow=o[o.length-1]}else this.nClicks=0},e.onmouseover=i=>{t.ptag=document.createElement("planet-tag"),t.ptag.props.tag="Maker",e.appendChild(t.ptag)},e.onmouseout=i=>{t.ptag.delete()}})}};zt.addElement("planet-maker");var xe=Et(),St=class extends z{constructor(){super(...arguments);n(this,"props",{innerTemplate:""});n(this,"template",xe);n(this,"clickedOut",t=>{this.props.div.classList.remove("window-wipe-enter"),this.props.div.classList.add("window-wipe-exit"),setTimeout(()=>{this.delete()},1e3)});n(this,"oncreate",t=>{let e=this.querySelector("div");t.div=e,e.insertAdjacentHTML("beforeend",t.innerTemplate);let s=document.querySelector("canvas");s&&s.addEventListener("click",this.clickedOut)});n(this,"ondelete",t=>{let e=document.querySelector("canvas");e&&e.removeEventListener("click",this.clickedOut)})}};St.addElement("portfolio-window");var ke=Nt(),_t=class extends _{constructor(){super(...arguments);n(this,"nClicks",!1);n(this,"oncreate",t=>{let e=this.querySelector("div");this.props.div=e,e.onclick=s=>{if(this.nClicks++,this.nClicks!==1)if(this.nClicks===2){let i=document.createElement("portfolio-window");i.props.innerTemplate=ke,document.body.appendChild(i);let r=document.querySelectorAll("portfolio-window");t.pwindow=r[r.length-1]}else this.nClicks=0},e.onmouseover=s=>{t.ptag=document.createElement("planet-tag"),t.ptag.props.tag="Javascript",e.appendChild(t.ptag)},e.onmouseout=s=>{t.ptag.delete()}})}};_t.addElement("planet-javascript");var Ee=Ct(),At=class extends _{constructor(){super(...arguments);n(this,"nClicks",!1);n(this,"oncreate",t=>{let e=this.querySelector("div");this.props.div=e,e.onmouseover=s=>{t.ptag=document.createElement("planet-tag"),t.ptag.props.tag="Startups",e.appendChild(t.ptag)},e.onmouseout=s=>{t.ptag.delete()},e.onclick=s=>{if(this.nClicks++,this.nClicks!==1)if(this.nClicks===2){let i=document.createElement("portfolio-window");i.props.innerTemplate=Ee,document.body.appendChild(i);let r=document.querySelectorAll("portfolio-window");t.pwindow=r[r.length-1]}else this.nClicks=0}})}};At.addElement("planet-startup");var _e=Pt(),Ce=Bt(),Tt=class extends z{constructor(){super(...arguments);n(this,"props",{});n(this,"template",_e);n(this,"oncreate",t=>{let e=this.querySelectorAll("span"),s=e[1],i=e[2],r=o=>{let h=document.createElement("portfolio-window");h.props.innerTemplate=Ce,document.body.appendChild(h),s.onclick=a=>{document.getElementsByTagName("portfolio-window")[0]?(h.clickedOut(),s.onclick=r):r()}};s.onclick=r,i.onclick=o=>{window.open("https://github.com/moothyknight","_blank")}})}};Tt.addElement("top-nav");})();
//# sourceMappingURL=app.js.map
