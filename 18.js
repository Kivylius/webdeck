(self.webpackChunkwebdeck=self.webpackChunkwebdeck||[]).push([["18"],{348:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n,o=r("7030");function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=e=>o.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",className:"disconnect_svg__icon",viewBox:"0 0 1024 1024"},e),n||(n=o.createElement("path",{d:"M832.6 191.4c-84.6-84.6-221.5-84.6-306 0l-96.9 96.9 51 51 96.9-96.9c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204l-96.9 96.9 51.1 51.1 96.9-96.9c84.4-84.6 84.4-221.5-.1-306.1M446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l96.9-96.9-51.1-51.1-96.9 96.9c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l96.9-96.9-51-51zM260.3 209.4a8.03 8.03 0 0 0-11.3 0L209.4 249a8.03 8.03 0 0 0 0 11.3l554.4 554.4c3.1 3.1 8.2 3.1 11.3 0l39.6-39.6c3.1-3.1 3.1-8.2 0-11.3z"})))},9937:function(e,t,r){"use strict";r.r(t),r.d(t,{Controller:function(){return i},Settings:function(){return u},Wrapper:function(){return o}});var n=r("1893"),o=(0,n.default)("div")(function(e){return e.$hasDeck,{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",width:"100vw"}}),i=(0,n.default)("div")({display:function(e){return e.$isOpen?"block":"none"},marginLeft:50,padding:"50px",paddingTop:"30px",border:"2px inset black",background:"rgb(21 21 21)",borderRadius:"20px",color:"white",maxHeight:"80vh",overflow:"auto",boxShadow:"-6px -20px 20px rgba(0,0,0,0.2), -6px -10px 15px rgba(0,0,0,0.2), -20px 0px 20px rgba(0,0,0,0.2), 6px 20px 20px rgba(0,0,0,0.2)"}),u=(0,n.default)("div")({color:"white",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"2px 0px"})},7059:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r("5893"),o=r("8764"),i=r("9937"),u=r("9540"),l=r("4089"),c=r("3468"),a=r("1418"),s=r("5854"),f=r("6720"),p=r("5701"),d=r("4540"),y=r("4184"),b=r.n(y);window.Buffer=o.Buffer;var g=function(){var e=(0,f.useAppContext)().deck;return(0,n.jsx)("div",{className:b()({wrapper:!0,hasDeck:!!e.current}),children:(0,n.jsx)(i.Wrapper,{children:e.current?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.Deck,{}),(0,n.jsxs)(i.Controller,{$isOpen:void 0!==e.selectedKey&&e.editMode,children:[(0,n.jsx)(a.Header,{}),(0,n.jsx)(c.Profiles,{}),void 0!==e.selectedKey&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.Settings,{children:[(0,n.jsx)(l.SubSubTitle,{children:"currently selected key"}),(0,n.jsx)("span",{children:e.selectedKey})]}),(0,n.jsxs)(i.Settings,{children:[(0,n.jsx)(l.SubSubTitle,{children:"plugin"}),(0,n.jsx)(p.Plugins,{})]}),(0,n.jsx)(i.Settings,{children:(0,n.jsx)(d.Plugin,{})})]}),(0,n.jsx)("small",{style:{opacity:.5},children:"All changes are saved automaticly."}),window.location.search.includes("debug")&&(0,n.jsx)(s.Debugger,{})]})]}):(0,n.jsxs)("div",{style:{color:"white"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"WEB DECK"}),(0,n.jsx)("p",{children:"Connect you usb device or create a virtual device."}),(0,n.jsx)("br",{})]}),(0,n.jsx)("button",{onClick:e.tryGetStreamDeck,children:"Connect"}),(0,n.jsx)("small",{children:" -or- "}),(0,n.jsx)("button",{onClick:e.tryCreateVirtualDeck,children:"Create Virtual Device"})]})})})}},8612:function(e,t,r){"use strict";r.r(t),r.d(t,{Container:function(){return d}});var n=r("5893"),o=r("7030"),i=r.n(o),u=r("745"),l=r("7059"),c=r("407"),a=r("6720"),s=r("3896"),f=r("2632"),p=r("3522"),d=function(){var e=(0,f.useProfiles)(),t=(0,s.usePlugins)(),r=(0,p.useDeck)(e,t);return(0,n.jsxs)(a.AppContext.Provider,{value:{deck:r,profiles:e,plugins:t},children:[(0,n.jsx)("div",{children:!t.initalised&&(0,n.jsx)(n.Fragment,{children:"initialising plugins..."})}),(0,n.jsx)(l.default,{})]})};u.createRoot(document.getElementById("root")).render((0,n.jsx)(i().StrictMode,{children:(0,n.jsx)(d,{})})),(0,c.default)()},5854:function(e,t,r){"use strict";r.r(t),r.d(t,{Debugger:function(){return c}});var n=r("5893"),o=r("7030"),i=r("4089"),u=r("6720");function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var c=function(){var e,t,r=(0,u.useAppContext)(),c=r.profiles,a=r.plugins;var s=(e=(0,o.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],u=!0,l=!1;try{for(o=o.call(e);!(u=(r=o.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){l=!0,n=e}finally{try{!u&&null!=o.return&&o.return()}finally{if(l)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),f=s[0],p=s[1];return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{style:{justifyContent:"space-between",display:"flex",alignItems:"center",padding:"0 0 8px 0"},children:[(0,n.jsx)(i.SubSubTitle,{children:"debugging"}),(0,n.jsx)("button",{className:"s",onClick:function(){return p(!f)},children:f?" close":"open"})]}),(0,n.jsxs)("div",{style:{display:f?"block":"none"},children:[(0,n.jsx)("pre",{style:{width:350,textAlign:"left",background:"black"},children:JSON.stringify(c.profiles,null,4)}),(0,n.jsx)("pre",{style:{width:350,textAlign:"left",background:"black"},children:JSON.stringify(a.plugins,null,4)})]})]})}},4700:function(e,t,r){"use strict";r.r(t),r.d(t,{HeaderWrapper:function(){return n}});var n=(0,r("1893").styled)("div")({display:"flex",justifyContent:"space-between",alignItems:"center",minWidth:350,paddingBottom:"8px",marginBottom:"10px",borderBottom:"1px solid #474747"})},1418:function(e,t,r){"use strict";r.r(t),r.d(t,{Header:function(){return l}});var n=r("5893"),o=r("4700"),i=r("501"),u=r("6720"),l=function(){var e=(0,u.useAppContext)().deck;return(0,n.jsxs)(o.HeaderWrapper,{children:[(0,n.jsx)(i.SubTitle,{children:"Settings"}),(0,n.jsx)("button",{title:"close",className:"s",onClick:function(){return e.setSelectedKey(void 0)},children:"\xd7"})]})}},4540:function(e,t,r){"use strict";r.r(t),r.d(t,{Plugin:function(){return l}});var n=r("5893"),o=r("7030"),i=r("6720");function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var l=function(){var e,t,r,l=(0,i.useAppContext)(),c=l.plugins,a=l.profiles,s=l.deck;var f=(e=(0,o.useState)(null),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],u=!0,l=!1;try{for(o=o.call(e);!(u=(r=o.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){l=!0,n=e}finally{try{!u&&null!=o.return&&o.return()}finally{if(l)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),p=f[0],d=f[1],y=s.selectedKey,b=a.profile.keys[y],g=c.getModule(null===(r=c.pluginsById[null==b?void 0:b.plugin])||void 0===r?void 0:r.name);return(0,o.useEffect)(function(){g?d((0,o.lazy)(function(){return Promise.resolve(g)})):d(null)},[g]),(0,n.jsx)("div",{style:{width:"100%",height:"400px",outline:"none",margin:"8px 0",border:"2px solid black",position:"relative",textAlign:"left",borderRadius:10,overflow:"hidden"},children:(0,n.jsx)(o.Suspense,{fallback:"Loading System",children:p&&(null==b?void 0:b.config)?(0,n.jsx)(p,{config:b.config,setConfig:function(e){a.setConfig(y,e)}}):(0,n.jsx)("div",{})})})}},5701:function(e,t,r){"use strict";r.r(t),r.d(t,{Plugins:function(){return i}});var n=r("5893"),o=r("6720"),i=function(){var e,t=(0,o.useAppContext)(),r=t.profiles,i=t.deck,u=t.plugins,l=null===(e=r.profile.keys[i.selectedKey])||void 0===e?void 0:e.plugin;return(0,n.jsxs)("div",{children:[(0,n.jsxs)("select",{name:"plugins",id:"plugins",title:"select plugin",value:l||"",onChange:function(e){return r.setPlugin(e.target.value,i.selectedKey)},children:[(0,n.jsx)("option",{value:"",children:"select..."}),u.plugins.map(function(e){return(0,n.jsxs)("option",{value:e.name,children:[e.name," ",e.creator&&"@".concat(e.creator)]},e.name)})]}),(0,n.jsx)("button",{title:"remove plugin",className:"s",onClick:function(){return u.promptRemovePlugin(l,function(){r.removePlugin(l)})},disabled:!l,children:"-"}),(0,n.jsx)("button",{title:"add plugin",className:"s",onClick:u.promptAddPlugin,children:"+"})]})}},9753:function(e,t,r){"use strict";r.r(t),r.d(t,{ProfilesWrapper:function(){return n}});var n=(0,r("1893").default)("div")({color:"white",display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"8px",marginBottom:"5px",borderBottom:"1px solid #474747"})},3468:function(e,t,r){"use strict";r.r(t),r.d(t,{Profiles:function(){return l}});var n=r("5893"),o=r("501"),i=r("9753"),u=r("6720"),l=function(){var e=(0,u.useAppContext)().profiles;return(0,n.jsxs)(i.ProfilesWrapper,{children:[(0,n.jsx)(o.SubTitle,{children:"Profiles"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("select",{name:"profile",id:"profile",title:"select profile",value:e.profileName,onChange:function(t){return e.setProfileName(t.target.value)},children:Object.keys(e.profiles).map(function(e){return(0,n.jsx)("option",{value:e,children:e},e)})}),(0,n.jsx)("button",{disabled:"default"===e.profileName,title:"remove profile",className:"s",onClick:e.promptRemoveProfile,children:"-"}),(0,n.jsx)("button",{title:"new profile",className:"s",onClick:e.promptAddProfile,children:"+"}),(0,n.jsx)("button",{title:"export profile",className:"s",onClick:e.promptExportProfile,children:"↗"})]})]})}},56:function(e,t,r){"use strict";r.r(t),r.d(t,{DeckButton:function(){return c},DeckButtonContent:function(){return s},DeckLayout:function(){return l},DeckTitle:function(){return u},DeckWrapper:function(){return i},DisconnectButton:function(){return a}});var n=r("1893"),o=r("348"),i=(0,n.default)("div")({padding:"50px",paddingTop:"30px",border:"2px inset black",background:"rgb(21 21 21)",borderRadius:"20px",boxShadow:"-6px -20px 20px rgba(0,0,0,0.2), -6px -10px 15px rgba(0,0,0,0.2), -20px 0px 20px rgba(0,0,0,0.2), 6px 20px 20px rgba(0,0,0,0.2)",position:"relative"}),u=(0,n.default)("h1")({display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,paddingBottom:20,paddingTop:0,margin:0,color:"white",textTransform:"uppercase"}),l=(0,n.default)("div")(function(e){var t=e.$columns;return{display:"grid",gap:"20px",gridTemplateColumns:"repeat(".concat(t,", min-content)")}}),c=(0,n.default)("button")({display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid #888888",width:"77px",height:"77px",borderRadius:10,background:"red",position:"relative",padding:"0",backgroundColor:"rgb(37 37 37)",outline:"4px solid black",boxShadow:"-6px -20px 20px rgba(0,0,0,0.2), -6px -10px 15px rgba(0,0,0,0.2), -20px 0px 20px rgba(0,0,0,0.2), 6px 20px 20px rgba(0,0,0,0.2)",transition:".13s ease-in-out",cursor:"pointer","&:active:not(.editMode), &.active":{boxShadow:"none",border:"0px solid",backgroundColor:"rgb(35 35 35)","& > div":{boxShadow:"none",border:"0px solid","& > *":{transition:".13s ease-in-out",transform:"translate3d(0px, 0px, 0px)"}}},"&.active":{},"&.selected":{outline:"2px dotted #ffffff9c",outlineOffset:"5px"}}),a=(0,n.default)(o.default)({marginLeft:16,marginTop:3,height:18,width:18,fill:"white",opacity:.5,cursor:"pointer",transition:"all 300ms","&:hover":{opacity:1,fill:"red"}}),s=(0,n.default)("div")({position:"relative",width:"100%",height:"100%",boxShadow:"rgb(221, 221, 221) 0px 0px 0px inset, rgb(47 47 47) -2px -2px 0px",borderRadius:10,transition:".13s ease-in-out",zIndex:1,"& > *":{height:"70%",display:"flex",alignItems:"center",justifyContent:"center",transition:".13s ease-in-out",transform:"translate3d(0px, -4px, 0px)"}})},9540:function(e,t,r){"use strict";r.r(t),r.d(t,{Deck:function(){return a}});var n=r("5893"),o=r("4184"),i=r.n(o),u=r("56"),l=r("6720"),c=r("4755"),a=function(){var e,t,r,o=(0,l.useAppContext)().deck;return(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,n.jsxs)(u.DeckWrapper,{children:[(0,n.jsxs)(u.DeckTitle,{children:[null===(e=o.current)||void 0===e?void 0:e.PRODUCT_NAME," ",(0,n.jsx)("span",{title:"Disconect device",children:(0,n.jsx)(u.DisconnectButton,{onClick:function(){return o.disconect()}})})]}),(0,n.jsx)(u.DeckLayout,{$columns:(null===(t=o.current)||void 0===t?void 0:t.KEY_COLUMNS)||0,children:Array.from({length:(null===(r=o.current)||void 0===r?void 0:r.NUM_KEYS)||0}).map(function(e,t){return(0,n.jsx)(u.DeckButton,{onMouseDown:function(){return o.onMouseDown(t)},onMouseUp:function(){return o.onMouseUp(t)},onClick:function(){o.editMode&&o.setSelectedKey(t)},className:i()({active:o.pressedMap[t],selected:o.editMode&&o.selectedKey===t,editMode:o.editMode}),children:(0,n.jsx)(u.DeckButtonContent,{children:(0,n.jsx)("p",{children:t})})},t)})})]}),(0,n.jsx)(c.DeckFooterText,{})]})}},4755:function(e,t,r){"use strict";r.r(t),r.d(t,{DeckFooterText:function(){return i}});var n=r("5893"),o=r("6720"),i=function(){var e=(0,o.useAppContext)().deck;return e.isVirtual?(0,n.jsxs)("small",{style:{color:"white",paddingTop:20,opacity:.2,fontSize:12},children:["You are currently in ",e.editMode?"Edit Mode":"Preview Mode",". Switch to"," ",(0,n.jsx)("a",{href:"#",onClick:function(t){t.preventDefault(),e.setEditMode(!e.editMode)},children:e.editMode?"Preview Mode":"Edit Mode"})," ","to ",e.editMode?"test":"edit"," it."]}):null}},4089:function(e,t,r){"use strict";r.r(t),r.d(t,{SubSubTitle:function(){return n}});var n=(0,r("1893").default)("h3")({display:"inline-block",alignItems:"center",justifyContent:"center",fontSize:14,padding:0,margin:0,color:"white"})},501:function(e,t,r){"use strict";r.r(t),r.d(t,{SubTitle:function(){return n}});var n=(0,r("1893").default)("h2")({display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,padding:0,margin:0,color:"white",textTransform:"uppercase"})},6720:function(e,t,r){"use strict";r.r(t),r.d(t,{AppContext:function(){return o},useAppContext:function(){return i}});var n=r("7030"),o=(0,n.createContext)({}),i=function(){return(0,n.useContext)(o)}},3522:function(e,t,r){"use strict";r.r(t),r.d(t,{useDeck:function(){return y}});var n=r("7030"),o=r("9047"),i=r("4778");function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t,r,n,o,i,u){try{var l=e[i](u),c=l.value}catch(e){r(e);return}l.done?t(c):Promise.resolve(c).then(n,o)}function c(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var i=e.apply(t,r);function u(e){l(i,n,o,u,c,"next",e)}function c(e){l(i,n,o,u,c,"throw",e)}u(void 0)})}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){a(e,t,r[t])})}return e}function f(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],u=!0,l=!1;try{for(o=o.call(e);!(u=(r=o.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){l=!0,n=e}finally{try{!u&&null!=o.return&&o.return()}finally{if(l)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}var y=function(e,t){var r=p((0,n.useState)(!0),2),u=r[0],l=r[1],y=p((0,n.useState)(0),2),b=y[0],g=y[1],v=p((0,n.useState)(),2),h=v[0],m=v[1],x=p((0,n.useState)(),2),j=x[0],w=x[1],S=p((0,n.useState)({}),2),O=S[0],k=S[1];(0,n.useEffect)(function(){var e;(e=c(function(){var e,t;return d(this,function(r){switch(r.label){case 0:return[4,(0,o.getStreamDecks)()];case 1:return(e=p.apply(void 0,[r.sent(),1])[0])?w(e):(t=p((0,i.getVirtualDeck)(),1)[0])&&m(t),[2]}})}),function(){return e.apply(this,arguments)})()},[]);var P=(0,n.useCallback)(c(function(){var e;return d(this,function(t){switch(t.label){case 0:return[4,(0,o.requestStreamDecks)()];case 1:return(e=p.apply(void 0,[t.sent(),1])[0])?w(e):console.error("Couldn’t get a Stream Deck"),[2]}})}),[]),C=(0,n.useCallback)(function(){var e=p((0,i.requestVirtualDecks)(),1)[0];e?m(e):console.error("Couldn’t get a Virtual Deck"),console.log(e)},[]),D=(0,n.useCallback)(c(function(){var e,t;return d(this,function(t){switch(t.label){case 0:if(!j)return[3,7];return[4,navigator.hid.getDevices()];case 1:e=p.apply(void 0,[t.sent(),1])[0],t.label=2;case 2:return t.trys.push([2,5,,6]),[4,e.forget()];case 3:return t.sent(),[4,e.close()];case 4:case 5:return t.sent(),[3,6];case 6:return w(null),[3,8];case 7:h&&(h.close(),m(null)),t.label=8;case 8:return[2]}})}),[j,h]);(0,n.useEffect)(function(){var r=function(e){k(function(t){return f(s({},t),a({},e,!0))})},n=function(r){k(function(e){return f(s({},e),a({},r,!1))});var n=e.profile.keys[r];if(null==n?void 0:n.plugin){var o=t.getModule(n.plugin);try{null==o||o.onPress(f(s({},n),{keyIndex:r}))}catch(e){console.warn("Webdeck: Failed to execute ".concat(n.plugin,". Have you added and exported onPress() functions in you plugin?"),e)}}};return j&&(j.on("down",r),j.on("up",n)),function(){null==j||j.off("down",r),null==j||j.off("up",n)}},[j,e.profile.keys]);var A=j||h;return{current:A,initalised:!!A,onMouseDown:function(e){j&&j.fillKeyColor(e,255,0,0)},onMouseUp:function(r){if(u)j&&j.fillKeyColor(r,0,0,0);else{var n=e.profile.keys[r];if(null==n?void 0:n.plugin){var o=t.getModule(n.plugin);try{null==o||o.onPress(f(s({},n),{keyIndex:r}))}catch(e){console.warn("Webdeck: Failed to execute ".concat(n.plugin,". Have you added and exported onPress() functions in you plugin?"),e)}}}},selectedKey:b,setSelectedKey:g,disconect:D,tryCreateVirtualDeck:C,isVirtual:!!h,tryGetStreamDeck:P,pressedMap:O,editMode:u,setEditMode:l}}},3896:function(e,t,r){"use strict";r.r(t),r.d(t,{usePlugins:function(){return w}});var n=r("4638"),o=r("7030"),i=r("2869");function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}e=r.hmd(e);function l(e,t,r,n,o,i,u){try{var l=e[i](u),c=l.value}catch(e){r(e);return}l.done?t(c):Promise.resolve(c).then(n,o)}function c(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var i=e.apply(t,r);function u(e){l(i,n,o,u,c,"next",e)}function c(e){l(i,n,o,u,c,"throw",e)}u(void 0)})}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){a(e,t,r[t])})}return e}function f(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],u=!0,l=!1;try{for(o=o.call(e);!(u=(r=o.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){l=!0,n=e}finally{try{!u&&null!=o.return&&o.return()}finally{if(l)throw n}}return i}}(e,t)||y(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||y(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}}function b(e,t){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}var g="./Plugin",v=new Set,h="plugins",m=new Map,x=function(){var e=localStorage.getItem(h);return e?d(JSON.parse(e)):[]},j=function(e){localStorage.setItem(h,JSON.stringify(e))},w=function(){var t,r,u,l=p((0,o.useState)(!1),2),y=l[0],h=l[1],w=p((0,o.useState)(x()),2),S=w[0],O=w[1],k=function(e){O(function(t){var r=d(t).concat([e]);return j(r),r})};var P=(t=c(function(){var e,t,r,n,o,u,l,c,a,s,f,d,y,g;return b(this,function(b){switch(b.label){case 0:if(!(e=prompt("Add url to plugin. List of plugins: https://github.com/search?q=topic:webdeck-plugin")))return[3,7];b.label=1;case 1:if(b.trys.push([1,6,,7]),!e.includes("github.com"))return[3,4];return n=e.replace("https://github.com/","https://api.github.com/repos/"),[4,fetch(n)];case 2:return[4,b.sent().json()];case 3:if((o=b.sent())&&o.has_pages)t=o.homepage,r=(u=p(o.full_name.split("/"),2))[0],k({name:u[1],creator:r,versions:["1.0.0"],url:t});else throw Error("");return[3,5];case 4:if(e.includes("remoteEntry.js")){if(c=(l=p(e.split("?"),2))[0],a=l[1],f=(s=i.default.parse(a)).name,d=s.creator,y=s.v,f)k({name:f,creator:d,versions:[y],url:c.replace("remoteEntry.js","")});else throw Error("")}else throw Error("");b.label=5;case 5:return[3,7];case 6:return g=b.sent(),alert("Cound not add plugin, invalid url or repo provided."),console.error(g),[3,7];case 7:return[2]}})}),function(){return t.apply(this,arguments)});var C=(r=c(function(e,t){return b(this,function(r){return[2,new Promise(function(r){if(!e&&r({loaded:!1,url:e,name:t}),v.has(e)){r({loaded:!0,url:e,name:t});return}var n=document.createElement("script");n.src=e,n.type="text/javascript",n.async=!0,n.onload=function(){v.add(e),r({loaded:!0,url:e,name:t})},n.onerror=function(n){return r({loaded:!1,url:e,name:t,e:n})},document.head.appendChild(n)})]})}),function(e,t){return r.apply(this,arguments)});var D=(u=c(function(e){var t,r;return b(this,function(o){switch(o.label){case 0:if(r="".concat(g,"-").concat(e),!m.has(r))return[3,1];return t=m.get(r),[3,3];case 1:return[4,(0,n.loadRemote)("".concat(e.replaceAll("-","_"),"/").concat(g.slice(2)))];case 2:t=o.sent(),m.set(r,t),o.label=3;case 3:return[2,t]}})}),function(e){return u.apply(this,arguments)});(0,o.useEffect)(function(){h(!1);var t={name:"webdeck",remotes:S.map(function(e){return{name:e.name.replaceAll("-","_"),entry:"".concat(e.url,"remoteEntry.js")}})};(0,n.init)(t);var r=[];t.remotes.forEach(function(e){r.push(C(e.entry,e.name))}),Promise.all(r).then(function(r){var n=r.reduce(function(e,t){return!t.loaded&&console.error('Webdeck: Could not load script "'.concat(t.name,'" at ').concat(t.url),t.e),f(s({},e),a({},t.name,t))},{}),o=[];t.remotes.map(function(t){if(!(null==n?void 0:n[t.name]))return console.error('Webdeck: Cant initalise module "'.concat(name,'" as script was not loaded succesfully!')),e;o.push(D(t.name))}),Promise.all(o).then(function(e){h(!0)})})},[S]);var A=S.reduce(function(e,t){return f(s({},e),a({},t.name,t))},{});return{initalised:y,plugins:S,pluginsById:A,loadScript:C,setPlugins:O,addPlugin:k,promptAddPlugin:P,promptRemovePlugin:function(e,t){confirm("Are you sure you want to remove this plugin and everywhere where it was used? This action is not reversable.")&&(O(function(t){var r=t.filter(function(t){return t.name!==e});return j(r),r}),t())},loadModule:D,getModule:function(e){var t="".concat(g,"-").concat(null==e?void 0:e.replaceAll("-","_"));return m.get(t)},getModules:function(){return m}}}},2632:function(e,t,r){"use strict";r.r(t),r.d(t,{useProfiles:function(){return b}});var n=r("7030");function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){i(e,t,r[t])})}return e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],u=!0,l=!1;try{for(o=o.call(e);!(u=(r=o.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){l=!0,n=e}finally{try{!u&&null!=o.return&&o.return()}finally{if(l)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==s(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===s(t)?t:String(t)}function s(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var f="profiles",p=function(){var e=localStorage.getItem(f);return e?u({},JSON.parse(e)):{default:{keys:{}}}},d=function(e){localStorage.setItem(f,JSON.stringify(e))},y=function(){return"default"},b=function(){var e=c((0,n.useState)(p()),2),t=e[0],r=e[1],o=c((0,n.useState)(y),2),s=o[0],f=o[1],b=t[s],g=function(e){r(function(t){var r=l(u({},t),i({},s,u({},t[s],e)));return d(r),r})},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{keys:{}};r(function(r){var n=l(u({},r),i({},e,t));return d(n),n})};return{profiles:t,profile:b,profileName:s,setProfileName:f,setPlugin:function(e,t){g({keys:l(u({},b.keys),i({},t,{plugin:e,config:{}}))})},removePlugin:function(e){g({keys:u({},Object.keys(b.keys).reduce(function(t,r){var n=b.keys[r],o=e===n.plugin;return l(u({},t),i({},r,{plugin:o?"":n.plugin,config:o?{}:n.config}))},{}))})},updateProfile:g,addProfile:v,promptAddProfile:function(){var e=prompt("What the name of the profile? Using names that already exists, will overwirte you old profile! You can use a pipe (`|`) after the name, to provide the config.");if(e){var t,r=c(e.split("|"),2),n=r[0],o=r[1];try{var i=JSON.parse(o);i&&(t=i)}catch(e){console.log("invalid config provided")}console.log({name:n,config:o}),v(n,t),f(n)}},promptRemoveProfile:function(){confirm("Are you sure you want to delete this profile? These changes are inreversable.")&&r(function(e){e[s];var t=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++){if(r=i[n],!(t.indexOf(r)>=0))Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}}return o}(e,[s].map(a));return f("default"),u({},t)})},promptExportProfile:function(){prompt("Profile:","".concat(s,"|").concat(JSON.stringify(b)))},setConfig:function(e,t){g(l(u({},b),{keys:l(u({},b.keys),i({},e,l(u({},b.keys[e]),{config:t})))}))}}}},407:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return n}});var n=function(e){var t,n;if(e&&(t=e,null!=(n=Function)&&"undefined"!=typeof Symbol&&n[Symbol.hasInstance]?!!n[Symbol.hasInstance](t):t instanceof n))r.el("407@309:329").then(r.bind(r,"2131")).then(function(t){var r=t.getCLS,n=t.getFID,o=t.getFCP,i=t.getLCP,u=t.getTTFB;r(e),n(e),o(e),i(e),u(e)})}},4778:function(e,t,r){"use strict";r.r(t),r.d(t,{getVirtualDeck:function(){return u},requestVirtualDecks:function(){return l}});var n="virtualdeck",o=function(){localStorage.removeItem(n)},i={default:{PRODUCT_NAME:"VirtualDeck 2x3",NUM_KEYS:6,KEY_COLUMNS:3,KEY_ROWS:2,close:o}},u=function(){var e,t,r=localStorage.getItem(n);if(r){;return[(e=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,o,i;n=e,o=t,i=r[t],o in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})}return e}({},JSON.parse(r)),t=(t={close:o},t),Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e)]}return[]},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=i[e];return localStorage.setItem(n,JSON.stringify(t)),[i[e]]}}}]);
//# sourceMappingURL=18.js.map