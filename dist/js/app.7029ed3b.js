(function(e){function a(a){for(var r,n,o=a[0],l=a[1],c=a[2],d=0,f=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&f.push(i[n][0]),i[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(a);while(f.length)f.shift()();return s.push.apply(s,c||[]),t()}function t(){for(var e,a=0;a<s.length;a++){for(var t=s[a],r=!0,o=1;o<t.length;o++){var l=t[o];0!==i[l]&&(r=!1)}r&&(s.splice(a--,1),e=n(n.s=t[0]))}return e}var r={},i={app:0},s=[];function n(a){if(r[a])return r[a].exports;var t=r[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=r,n.d=function(e,a,t){n.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,a){if(1&a&&(e=n(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)n.d(t,r,function(a){return e[a]}.bind(null,r));return t},n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,"a",a),a},n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},n.p="/NMS-SaveEditor/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var u=l;s.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";var r=t("85ec"),i=t.n(r);i.a},"56d7":function(e,a,t){"use strict";t.r(a);t("e623"),t("e379"),t("5dc8"),t("37e1");var r=t("2b0e"),i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[t("b-navbar-brand",{attrs:{href:"#"}},[e._v("No Man's Sky Difficulty Editor")]),t("b-navbar-nav",{staticClass:"ml-auto"},[t("b-nav-item",{attrs:{href:"#"},on:{click:function(a){e.english=!e.english}}},[e._v(e._s(e.english?"Español":"English"))])],1)],1),t("div",{staticClass:"nmsWallpaper mb-5",class:[e.$bindParallax]}),t("div",{staticClass:"container"},[t("h4",[e._v(e._s(e.$lang.WELCOME_TEXT))]),t("hr"),t("div",{staticClass:"alert alert-warning",domProps:{innerHTML:e._s(e.$lang.WARNING_RISK_DIALOG)}}),t("p",[e._v(e._s(e.$lang.SHORT_DESC))]),e._l(e.$lang.steps,(function(e){return t("Step",{key:e.id,staticClass:"mb-5",attrs:{data:e}})})),t("hr"),t("div",{staticClass:"row mb-3"},[t("div",{staticClass:"col-sm-6 mb-3"},[t("div",{staticClass:"alert alert-info"},[e._v(e._s(e.$lang.SRC_SAVE_DATA))]),t("IvyFilePicker",{staticClass:"mb-3",attrs:{text:e.$lang.DRAG_N_DROP_SV,errorText:e.$lang.ERROR_WRONG_SV},on:{input:e.parseSrcSaveData}}),e.srcSaveData?t("SaveDataInfo",{staticClass:"mb-3",attrs:{"save-data":e.srcSaveData}}):e._e()],1),t("div",{staticClass:"col-sm-6 mb-3"},[t("div",{staticClass:"alert alert-info"},[e._v(e._s(e.$lang.DEST_SAVE_DATA))]),t("IvyFilePicker",{staticClass:"mb-3",attrs:{text:e.$lang.DRAG_N_DROP_SV,errorText:e.$lang.ERROR_WRONG_SV},on:{input:e.parseDestSaveData}}),e.destSaveData?t("SaveDataInfo",{staticClass:"mb-3",attrs:{"save-data":e.destSaveData}}):e._e()],1)]),e.srcSaveData&&e.destSaveData?[t("h4",[e._v("Final save data")]),t("hr"),e.finalSaveData?t("SaveDataInfo",{staticClass:"mb-3",attrs:{"save-data":e.finalSaveData,final:"","final-txt":e.$lang.FINAL_SV_TEXT}}):e._e(),t("b-button",{attrs:{variant:"danger"},on:{click:e.downloadFinalSave}},[e._v(e._s(e.$lang.DOWNLOAD_BT_TEXT))])]:e._e(),t("div",{staticClass:"mb-5 d-block w-100"}),t("h4",[e._v("Disclaimer")]),t("hr"),t("p",[e._v('THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.')])],2),e._m(0)],1)},s=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"w-100 bg-dark d-block text-center text-light",staticStyle:{padding:"1rem"}},[t("img",{staticClass:"rounded-circle mr-3",staticStyle:{"max-height":"60px"},attrs:{src:"https://avatars2.githubusercontent.com/u/520683?s=460&u=4c84240f1443770a9df9096cf2965862a2a2f279&v=4"}}),e._v(" "),t("span",[e._v("Developed with ❤️ by Brayan Iribe. "),t("a",{attrs:{href:"https://github.com/BrayanIribe"}},[e._v("Visit me on GitHub!")])])])}],n={WELCOME_TEXT:"Bienvenido a mi webapp, aquí podrás modificar la dificultad de No Man's Sky con unos clics.",WARNING_RISK_DIALOG:"<b>ADVERTENCIA:</b> No me hago responsable por cualquier daño que puedas provocarte por usar esto. Úsalo bajo tu riesgo.",SHORT_DESC:"Sigue la siguiente guía al pie de la letra para lograr el efecto deseado. Vamos a necesitar dos save datas. Uno al que le vas a cambiar el modo y otro que tiene el modo que quieres. Si no los tienes, habrá que crearlos dentro del juego (y llegar hasta la parte de guardado).",DRAG_N_DROP_SV:"Arrastra y suelta o haz clic para seleccionar un archivo.",ERROR_WRONG_SV:"El save data que pusiste no es correcto. Tiene que ser un archivo con extensión HG.",SRC_SAVE_DATA:"Pon abajo el save data que tiene el modo a a dificultad que quieres cambiar",DEST_SAVE_DATA:"Pon abajo el save data al que le quieres cambiar la dificultad.",DOWNLOAD_BT_TEXT:"DESCARGAR",FINAL_SV_TEXT:"Este es tu save data con la dificultad cambiada, revisa los cambios!",steps:[{id:0,img:"/img/run.png",title:"Paso 1 - Ir al appdata",body:'En Windows, usa Win+R para abrir la ventana de ejecutar. Aquí, escribe "%appdata%".'},{id:1,img:"/img/hellogames-folder.png",title:"Paso 2 - Hacer backup de la carpeta HelloGames",body:"Dentro de la carpeta appdata, busca la carpeta HelloGames y haz una copia de ella."},{id:2,img:"/img/hellogames-folder-contents.png",title:"Paso 3 - Busca tu save data",body:"Entra a la carpeta HelloGames y posterior a NMS. Aquí habrán muchas carpetas, ordenalas por fecha de modificación y entra a la primera."},{id:3,img:"/img/savedata-files.png",title:"Paso 4 - Busca tu archivo save data",body:"Habrán muchos archivos, los que empiezan con save son tus save datas. Se encuentran ordenados por fecha de modificación, así que toca deducir cual por el último jugado. NO TOQUES ningún otro archivo. Arrastra y sueltalos aquí abajo hasta que encuentres los deseados."}]},o={WELCOME_TEXT:"Welcome to my simple webapp. Here, you can edit your No Man's Sky difficulty with a few clicks.",WARNING_RISK_DIALOG:"<b>WARNING:</b> I'm not responsible for any damage that you could take by using this. Use it at your own risk!",SHORT_DESC:"Follow the next guide to change the difficulty of your game. We're going to need two save datas. The one you want to change the game mode, and another one that have the desired game mode.",DRAG_N_DROP_SV:"Drag n Drop or clic to pick a file",ERROR_WRONG_SV:"You gave me the wrong save data. It must be a HG file.",SRC_SAVE_DATA:"Put below your save data that has the desired game mode.",DEST_SAVE_DATA:"Put below your save data that you want to change.",DOWNLOAD_BT_TEXT:"DOWNLOAD",FINAL_SV_TEXT:"This is your final save data, review the changes!",steps:[{id:0,img:"/img/run.png",title:"Step 1 - Go to appdata",body:'In Windows, use Win+R to open Run dialog. Here, type "%appdata%".'},{id:1,img:"/img/hellogames-folder.png",title:"Step 2 - Do backup of HelloGames folder",body:"Inside the appdata folder, find the HelloGames and do a backup of it."},{id:2,img:"/img/hellogames-folder-contents.png",title:"Step 3 - Find your save data folder",body:"Get inside HelloGames and enter to NMS folder, here find your save data. There could be multiple matches, sort them by date to get the desired one."},{id:3,img:"/img/savedata-files.png",title:"Step 4 - Find your save data file",body:"The save files are your save datas. DO NOT TOUCH mf_save or other files here!. Pick the desired save data, they're sorted by modification date."}]},l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("h4",{staticClass:"text-primary"},[e._v(e._s(e.data.title))]),t("hr"),t("p",[e._v(e._s(e.data.body))]),t("div",{staticClass:"w-100 text-center"},[e.data.img?t("img",{staticClass:"step-image",attrs:{src:e.data.img}}):e._e()])])},c=[],u={name:"Step",props:{data:{type:Object,default:null}}},d=u,f=(t("e18e"),t("2877")),v=Object(f["a"])(d,l,c,!1,null,null,null),p=v.exports,h=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"ivy-file-picker",class:[e.$errorClass],on:{drop:function(a){return a.preventDefault(),e.dropFile(a)},dragover:function(e){e.preventDefault()},click:function(a){return e.$refs.filePicker.click()}}},[t("div",{staticClass:"text-center"},[t("img",{staticClass:"mb-3",staticStyle:{height:"3rem",opacity:"0.7"},attrs:{src:"/img/drag-drop.jpg"}}),t("p",{staticClass:"w-100 text-lighter"},[e._v(e._s(e.file?e.file.name:e.text))])]),t("input",{ref:"filePicker",staticStyle:{display:"none"},attrs:{type:"file",accept:".hg"},on:{change:function(a){return e.pickFile()}}})])},g=[],S=(t("b0c0"),t("ac1f"),t("1276"),{name:"IvyFilePicker",props:{text:{type:String,default:null},errorText:{type:String,default:null}},data:function(){return{error:!1,file:null}},watch:{error:function(e){var a=this;e&&setTimeout((function(){a.error=!1}),1200)}},computed:{$errorClass:function(){return this.error?"border-danger text-danger error":""}},methods:{dropFile:function(e){var a=e.dataTransfer.files;a&&this.processFile(a[0])},pickFile:function(){var e=this.$refs.filePicker.files;e.length?(this.processFile(e[0]),this.$refs.filePicker.value=""):this.throwError()},throwError:function(){this.error=!0,this.$bvToast.toast(this.errorText,{title:"Error",variant:"danger",autoHideDelay:5e3})},processFile:function(e){var a=this,t=e.name.split(".")[1].toUpperCase();if("HG"===t){var r=new FileReader;r.readAsText(e),r.onload=function(t){if(t.target.result){var r=t.target.result;a.$emit("input",{filename:e.name,data:r}),a.file=e,console.log(r)}else a.throwError()},r.onerror=function(){a.throwError()}}else this.throwError()}}}),_=S,m=(t("924a"),Object(f["a"])(_,h,g,!1,null,null,null)),E=m.exports,D=function(){var e=this,a=e.$createElement,t=e._self._c||a;return e.saveData?t("div",[e.final?[t("div",{staticClass:"alert alert-warning"},[e._v("This will be your final save data, becareful!")])]:[t("div",{staticClass:"alert alert-success"},[e._v("Valid save data detected... here's the info.")]),t("h4",[e._v("You have played "+e._s(e.saveData.TOTAL_TIME)+" hours.")]),t("hr")],t("p",[e._v(" Units: "),t("b",[e._v(e._s(e.saveData.UNITS))])]),t("p",[e._v(" Nanites: "),t("b",[e._v(e._s(e.saveData.NANITES))])]),t("p",[e._v(" QuickSilver: "),t("b",[e._v(e._s(e.saveData.QUICKSILVER))])]),t("p",[e._v(" Current game mode: "),t("b",{class:[e.difficultyGameMode]},[e._v(e._s(e.$gameModeTxt))])])],2):e._e()},T=[],b=(t("d3b7"),t("25f0"),{GAME_MODE_ID:"F2P",USER_DATA:"6f=",TOTAL_TIME:"Lg8",UNITS:"wGS",NANITES:"7QL",QUICKSILVER:"kN;"}),A={difficulty:{NORMAL:46,SURVIVAL:56,CREATIVE:51},parse:function(e,a){var t=e.substr(e.length-1,1),r=JSON.parse(e.substr(0,e.length-1)),i=r[b.USER_DATA],s={filename:a,raw:e,j:r,verifierByte:t,GAME_MODE_ID:r[b.GAME_MODE_ID],TOTAL_TIME:Math.round(i[b.TOTAL_TIME]/60/60),UNITS:i[b.UNITS],NANITES:i[b.NANITES],QUICKSILVER:i[b.QUICKSILVER],generate:function(){var e=this.j;return e[b.GAME_MODE_ID]=this.GAME_MODE_ID,e}};return s}},O=A,y={props:{saveData:{type:Object,default:null},final:{type:Boolean,default:!1},finalTxt:{type:String,default:null}},computed:{$gameMode:function(){return this.saveData?parseFloat(this.saveData.GAME_MODE_ID.toString().substr(0,2)):null},$gameModeTxt:function(){switch(this.$gameMode){case O.difficulty.NORMAL:return"NORMAL";case O.difficulty.SURVIVAL:return"SURVIVAL";case O.difficulty.CREATIVE:return"CREATIVE"}return"UNKNOWN (PERMADEATH MAYBE?)"},difficultyGameMode:function(){switch(this.$gameMode){case O.difficulty.NORMAL:return"text-info";case O.difficulty.SURVIVAL:return"text-primary";case O.difficulty.CREATIVE:return"text-success"}return"text-danger"}}},I=y,R=Object(f["a"])(I,D,T,!1,null,null,null),N=R.exports,C=t("aeb1"),M=t.n(C),w={name:"App",components:{Step:p,IvyFilePicker:E,SaveDataInfo:N},data:function(){return{bottom:!1,english:!0,srcSaveData:null,destSaveData:null,finalSaveData:null}},computed:{$bindParallax:function(){return this.bottom?"bottom":""},$lang:function(){return this.english?o:n}},methods:{generateFinalSaveData:function(){if(!this.srcSaveData||!this.destSaveData)return this.finalSaveData=null,null;this.finalSaveData=JSON.parse(JSON.stringify(this.destSaveData)),this.finalSaveData.GAME_MODE_ID=this.srcSaveData.GAME_MODE_ID},parseSrcSaveData:function(e){this.srcSaveData=O.parse(e.data,e.filename),console.log(this.srcSaveData),this.generateFinalSaveData()},parseDestSaveData:function(e){this.destSaveData=O.parse(e.data,e.filename),console.log(this.destSaveData),this.generateFinalSaveData()},downloadFinalSave:function(){if(!this.finalSaveData)return null;var e=O.parse(this.destSaveData.raw);e.GAME_MODE_ID=this.srcSaveData.GAME_MODE_ID;var a=e.generate();console.log(JSON.stringify(a)),M()(JSON.stringify(a)+e.verifierByte,this.destSaveData.filename)}},created:function(){var e=this,a=navigator.language||navigator.userLanguage;"ES"===a.toUpperCase().substr(0,2)&&(this.english=!1),document.title="No Man's Sky Difficulty Editor",setTimeout((function(){e.bottom=!0}),100)}},G=w,L=(t("034f"),Object(f["a"])(G,i,s,!1,null,null,null)),x=L.exports,P=t("5f5b");t("f9e3"),t("2dd8"),t("6f8d"),t("77ed");r["default"].config.productionTip=!1,r["default"].use(P["a"]),new r["default"]({render:function(e){return e(x)}}).$mount("#app")},"6f8d":function(e,a,t){},"85ec":function(e,a,t){},"88b1":function(e,a,t){},"924a":function(e,a,t){"use strict";var r=t("88b1"),i=t.n(r);i.a},dc6a:function(e,a,t){},e18e:function(e,a,t){"use strict";var r=t("dc6a"),i=t.n(r);i.a}});
//# sourceMappingURL=app.7029ed3b.js.map