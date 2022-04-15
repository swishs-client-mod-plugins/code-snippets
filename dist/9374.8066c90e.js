(self.webpackChunk=self.webpackChunk||[]).push([[9374,1222],{1709:(e,t,n)=>{n.r(t),n.d(t,{default:()=>pe});var a=n(1222),r=n(7383),c=n(795),o=n(647),s=n(6653);const l=(0,o.hI)("editor"),i=c.Z.getByProps("getFullState","settings"),p=e=>u.getPropertyValue(e);let u;const d=e=>{if(!e)return"";switch(e){case"js":case"jsx":return"javascript";case"ts":return"typescript";case"sass":return"scss";default:return e}},m=({states:e})=>{const{editorRef:t}=e,n=React.useRef([]),r=React.useRef(),c=e.unsavedState[1],[m]=e.collapsedState,[f]=e.currentSnippet,C=e=>{if(t.current&&e.ctrlKey&&"s"===e.key){const e=a.default.getScriptType(f);if(a.default.updateSnippet(f,{enabled:e||a.default.getSnippet(f).enabled,code:t.current.getValue()}))return;if(a.default.makeToast(`Successfully saved ${e?"":"and loaded"} snippet ${f}!`,!0),c(!1),!e)return;a.default.runSnippet(f,a.default.ScriptType.CSS,!0)}};return React.useEffect((()=>{CodeSnippetsNative.readDir("editor-types").forEach((e=>{const t=CodeSnippetsNative.readFile(`editor-types/${e}`);s.languages.typescript.typescriptDefaults.addExtraLib(t),s.languages.typescript.javascriptDefaults.addExtraLib(t)})),(()=>{u=getComputedStyle(document.body);const e={textColor:p("--text-normal"),bgAccent:p("--background-accent"),bgFloating:p("--background-floating"),bgTeritary:p("--background-tertiary")},t=i.settings.appearance.theme-1;s.editor.defineTheme("code-snippets",{inherit:!0,base:t?"vs":"vs-dark",rules:[{background:e.bgTeritary}],colors:{"editor.background":e.bgTeritary,"editorGutter.background":e.bgTeritary,"editorLineNumber.foreground":e.textColor}})})()}),[]),React.useEffect((()=>{if(!r.current)return;s.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!1,noSyntaxValidation:!1,diagnosticCodesToIgnore:[1108]});const e=t.current=s.editor.create(r.current,{automaticLayout:!0,theme:"code-snippets",value:a.default.getSnippet(f).code,language:d(a.default.getSnippet(f).extension)});if(n.current.push(e.onDidChangeModelContent((()=>{if(e.getValue()!==a.default.getSnippet(f).code)return c(!0);c(!1)}))),a.default.getScriptType(f)){const t=()=>{r=0,a.default.updateSnippet(f,{code:e.getValue()}),a.default.getSnippet(f).enabled&&a.default.runSnippet(f,a.default.ScriptType.CSS,!0)};let r;n.current.push(e.onDidChangeModelContent((()=>{0!==r&&clearTimeout(r),r=setTimeout(t,200)})))}return document.addEventListener("keydown",C),()=>{e.dispose(),(0,o.VS)(n.current,"dispose"),document.removeEventListener("keydown",C)}}),[r,t,f]),React.createElement("div",{className:l("container",m?"collapsed":"expanded"),ref:r})},f=React.memo((()=>React.createElement("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"currentColor"},React.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),React.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"})))),C=React.memo((()=>React.createElement("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"currentColor"},React.createElement("path",{d:"M16,11h-1V3c0-1.1-0.9-2-2-2h-2C9.9,1,9,1.9,9,3v8H8c-2.76,0-5,2.24-5,5v7h18v-7C21,13.24,18.76,11,16,11z M19,21h-2v-3 c0-0.55-0.45-1-1-1s-1,0.45-1,1v3h-2v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3H9v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3H5v-5 c0-1.65,1.35-3,3-3h8c1.65,0,3,1.35,3,3V21z"})))),[h,R,g,S]=c.Z.bulk(c.x.byProps("DropdownSizes"),c.x.byDisplayName("FormItem"),c.x.byDisplayName("FormTitle"),c.x.byDisplayName("TextInput")),{Modal:E}=c.Z.components,y=({event:e,action:t,options:n})=>{const[a,r]=React.useState(n?.initialInput||""),[c,o]=React.useState(void 0),s=React.useRef(),l=()=>{if(n?.rejectFilter){const e=n.rejectFilter(s.current);if(e)return o(e)}t(s.current),e.onClose()},i=e=>{"Enter"===e.key&&l()};return React.useEffect((()=>(document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i))),[]),React.createElement(E.Root,{transitionState:e.transitionState,size:E.Sizes.SMALL},React.createElement(E.Header,null,React.createElement(g,{tag:"h3"},n?.titleText||"Input Modal"),React.createElement(E.CloseButton,{onClick:e.onClose})),React.createElement("div",{style:{marginTop:"10px"}}),React.createElement(E.Content,null,React.createElement(R,{error:c,title:n?.headerText||"Input Text"},React.createElement(S,{value:a,onChange:e=>{s.current=e,r(e)},style:{marginBottom:"10px"},placeholder:n?.placeholder||"rape LMAO"}))),React.createElement(E.Footer,null,React.createElement(h,{onClick:l,color:h.Colors.GREEN},n?.buttonText||"Submit"),React.createElement(h,{onClick:e.onClose,look:h.Looks.LINK,color:h.Colors.TRANSPARENT},"Cancel")))},{Modal:v}=c.Z.components,[b,x]=c.Z.bulk(c.x.byDisplayName("Text"),c.x.byProps("DropdownSizes")),w=(0,o.hI)("modal-delete"),k=({event:e,action:t})=>React.createElement(v.Root,{size:v.Sizes.SMALL,transitionState:e.transitionState},React.createElement(v.Content,{className:w("content")},React.createElement(v.CloseButton,{onClick:e.onClose,className:w("closebutton")}),React.createElement(b,{size:b.Sizes.SIZE_24,className:w("title"),color:b.Colors.HEADER_PRIMARY},"This action is irreversible."),React.createElement(b,{size:b.Sizes.SIZE_16,className:w("subtitle"),color:b.Colors.HEADER_SECONDARY},"Only click the below button if you are absolutely sure.")),React.createElement(v.Footer,null,React.createElement(x,{size:x.Sizes.LARGE,color:x.Colors.RED,className:w("button"),onClick:()=>{t(),e.onClose()}},"Delete it."))),T=(0,o.hI)("topbar"),[N,$,D,M]=c.Z.bulk(c.x.byDisplayName("Switch"),c.x.byDisplayName("FormTitle"),c.x.byProps("dangerous","selected"),c.x.byProps("closeModal")),{Icon:L,Tooltip:Z}=c.Z.components,{button:j,dangerous:F,disabled:I}=D,A=({states:e})=>{const t=e.editorRef.current,[n]=e.collapsedState,[r,c]=e.unsavedState,[s,l,i]=e.currentSnippet,p=a.default.getSnippet(s),u=a.default.getScriptType(s);return React.createElement("div",{className:T("container",n?"collapsed":"expanded")},Boolean(u)?React.createElement($,{tag:"h3"},s):React.createElement(Z,{position:"top",text:"Click me to run the code!"},React.createElement($,{tag:"h3",className:T("jstitle"),onClick:()=>a.default.runSnippet(s,u)},s)),React.createElement("div",{style:{flex:"auto"}}),r&&!Boolean(u)?React.createElement(Z,{position:"top",text:"You can press CTRL + S!"},React.createElement("div",{className:j,onClick:()=>{a.default.updateSnippet(s,{code:t.getValue()})||(a.default.makeToast(`Successfully saved snippet ${s}!`,!0),c(!1))}},React.createElement(f,null))):null,!Boolean(u)&&a.default.cleanups[s]?React.createElement(Z,{position:"top",text:Boolean(u)?"Remove CSS":"Run Return Function"},React.createElement("div",{className:j,onClick:()=>a.default.cleanups[s]()},React.createElement(C,null))):null,p.gist?React.createElement(Z,{position:"top",text:"Pull snippet from Github"},React.createElement("div",{className:j,onClick:async()=>{const t=await a.default.pullGist(p.gist).catch((e=>{a.default.makeToast("Failed to pull snippet from Github!",!1),Logger.error("Failed to pull snippet from Github!",e)}));t&&a.default.updateSnippet(s,{code:t}),e.remountMonaco()}},React.createElement(L.Pull,{height:"20",width:"20"}))):React.createElement(Z,{position:"top",text:"Connect to Github Gist"},React.createElement("div",{className:j,onClick:async()=>{const e=await new Promise((e=>{M.openModal((t=>React.createElement(y,{event:t,action:e,options:{buttonText:"Save ID",titleText:"Github Gist ID",headerText:"Enter the ID of the gist you want to pull from",placeholder:"aec93e7d46e041e5c37f3d25bcbee20c",rejectFilter:e=>{if(!/^[0-9a-f]{32}$/.test(e))return"Invalid ID!"}}})))}));await(0,o._v)(4),M.openModal((t=>React.createElement(y,{event:t,action:t=>{a.default.updateSnippet(s,{gist:{id:e,name:t}})},options:{buttonText:"Save Name",placeholder:"Keyword Search.ts",titleText:"Github Gist File Name (if it's blank it'll choose the first file)",headerText:"Enter the name of file in the gist (or nothing if the gist only has one file)"}})))}},React.createElement(L.Link,{height:"20",width:"20"}))),!Boolean(u)||React.createElement("div",{className:T("switch")},React.createElement(N,{checked:p.enabled,className:T("switch"),onChange:e=>{if(!a.default.updateSnippet(s,{enabled:e})){if(!e)return a.default.cleanups[s]?.();a.default.runSnippet(s,a.default.ScriptType.CSS,!0),a.default.makeToast(`Successfully saved and loaded snippet ${s}!`,!0)}}})),Boolean(u)||React.createElement(Z,{position:"top",text:(p.enabled?"Turn off":"Turn on")+" Run on Startup"},React.createElement("div",{className:`${j} ${p.enabled?"":(0,o.v_)(I,T("rocket"))}`,onClick:()=>a.default.updateSnippet(s,{enabled:!p.enabled})},React.createElement(L.Rocket,{height:"20",width:"20"}))),React.createElement("div",{className:(0,o.v_)(j,F),onClick:()=>{M.openModal((e=>React.createElement(k,{event:e,action:()=>{a.default.deleteSnippet(s),l(i)}})))}},React.createElement(L.Trash,{height:"20",width:"20"})))},B=React.memo((()=>React.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{fill:"#3178C6","fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.1682 14.6681V17.0119C13.5478 17.2088 14.0119 17.3541 14.5275 17.4525C15.0432 17.5509 15.6057 17.5978 16.1682 17.5978C16.7307 17.5978 17.2463 17.5463 17.7619 17.4384C18.2775 17.3306 18.6994 17.1525 19.0744 16.9228C19.4541 16.6744 19.7775 16.3603 19.965 15.9384C20.1525 15.5166 20.2978 15.0478 20.2978 14.4384C20.2978 14.0119 20.2322 13.6416 20.1057 13.3134C19.9791 12.9853 19.7963 12.7041 19.5432 12.4697C19.3041 12.2213 19.0275 12.0009 18.6994 11.8134C18.3713 11.6259 17.9963 11.4291 17.5744 11.2509C17.265 11.1244 17.0119 11.0025 16.7307 10.8806C16.4869 10.7588 16.276 10.6369 16.1213 10.515C15.9478 10.3884 15.8166 10.2572 15.7228 10.1213C15.6291 9.98063 15.5822 9.82594 15.5822 9.6525C15.5822 9.49313 15.6239 9.34781 15.7088 9.21656C15.7936 9.08531 15.9103 8.9775 16.0603 8.88375C16.2103 8.79 16.3978 8.71969 16.6228 8.66813C16.8432 8.61656 17.0869 8.59313 17.3728 8.59313C17.5697 8.59313 17.776 8.60766 17.9822 8.63719C18.1978 8.66672 18.4182 8.71219 18.6385 8.77313C18.8588 8.83406 19.0744 8.90906 19.2947 9.00281C19.501 9.09656 19.6932 9.20438 19.8572 9.32625V7.12313C19.501 6.98719 19.1072 6.88406 18.6853 6.81844C18.2635 6.75281 17.7947 6.72 17.2322 6.72C16.6697 6.72 16.1541 6.78094 15.6385 6.89813C15.1228 7.01531 14.701 7.20281 14.326 7.46063C13.9463 7.71375 13.6697 8.02313 13.4353 8.445C13.215 8.83875 13.1072 9.28875 13.1072 9.85125C13.1072 10.5544 13.3088 11.1638 13.7166 11.6325C14.1197 12.1481 14.7478 12.5231 15.5447 12.8981C15.8682 13.0294 16.1541 13.1606 16.4353 13.2872C16.7166 13.4138 16.951 13.545 17.1385 13.6809C17.34 13.8169 17.4994 13.9669 17.6072 14.1263C17.7244 14.2856 17.7853 14.4731 17.7853 14.6888C17.7853 14.8388 17.7488 14.9794 17.6775 15.1106C17.6063 15.2419 17.4947 15.3544 17.3447 15.4481C17.1947 15.5419 17.0119 15.6169 16.7822 15.6731C16.5619 15.7247 16.3135 15.7528 15.9853 15.7528C15.4697 15.7528 14.9541 15.6638 14.4853 15.4856C13.9697 15.3075 13.501 15.0403 13.0791 14.6888L13.1682 14.6681ZM9.23065 8.9025H12.2307V6.98063H3.84003V8.9025H6.84003V17.4806H9.23065V8.9025Z"})))),P=React.memo((()=>React.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{fill:"#F7DF1E",d:"M13.6427 14.579C14.1261 15.3684 14.7551 15.9486 15.8675 15.9486C16.8019 15.9486 17.3989 15.4815 17.3989 14.8362C17.3989 14.0629 16.7855 13.789 15.757 13.339L15.1932 13.0971C13.5657 12.4038 12.4846 11.5352 12.4846 9.69905C12.4846 8.00762 13.7734 6.72 15.7875 6.72C17.2214 6.72 18.2522 7.21905 18.9951 8.52572L17.2389 9.65333C16.8522 8.96 16.4351 8.68686 15.7875 8.68686C15.1269 8.68686 14.7082 9.10591 14.7082 9.65333C14.7082 10.3299 15.1273 10.6038 16.0949 11.0229L16.6587 11.2644C18.5749 12.0861 19.6568 12.9238 19.6568 14.8072C19.6568 16.8377 18.0617 17.9501 15.9196 17.9501C13.8252 17.9501 12.472 16.952 11.8099 15.6438L13.6427 14.579ZM5.67584 14.7745C6.03012 15.403 6.35241 15.9345 7.12726 15.9345C7.86822 15.9345 8.33565 15.6446 8.33565 14.5173V6.84876H10.5909V14.5478C10.5909 16.883 9.22174 17.9459 7.22326 17.9459C5.41755 17.9459 4.37184 17.0114 3.84003 15.8859L5.67584 14.7745Z"})))),O=React.memo((()=>React.createElement("svg",{width:"20",height:"20",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{fill:"#61DAFB",d:"M12 13.6763C13.1322 13.6763 14.05 12.7584 14.05 11.6263C14.05 10.4941 13.1322 9.57626 12 9.57626C10.8678 9.57626 9.95001 10.4941 9.95001 11.6263C9.95001 12.7584 10.8678 13.6763 12 13.6763Z"}),React.createElement("path",{stroke:"#61DAFB",d:"M12 15.8263C18.0751 15.8263 23 13.9459 23 11.6263C23 9.30667 18.0751 7.42627 12 7.42627C5.92487 7.42627 1 9.30667 1 11.6263C1 13.9459 5.92487 15.8263 12 15.8263Z"}),React.createElement("path",{stroke:"#61DAFB",d:"M8.36272 13.7263C11.4003 18.9875 15.4912 22.3124 17.5 21.1526C19.5089 19.9928 18.6749 14.7875 15.6373 9.52628C12.5998 4.26506 8.50885 0.940202 6.50002 2.1C4.49119 3.2598 5.32515 8.46506 8.36272 13.7263Z"}),React.createElement("path",{stroke:"#61DAFB",d:"M8.36272 9.52629C5.32515 14.7875 4.49119 19.9928 6.50002 21.1526C8.50885 22.3124 12.5998 18.9875 15.6373 13.7263C18.6749 8.46507 19.5089 3.25981 17.5 2.10001C15.4912 0.940214 11.4003 4.26507 8.36272 9.52629Z"})))),V=React.memo((()=>React.createElement("svg",{width:"20",height:"16",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{fill:"#42a5f5",d:"m5 3-.65 3.34h13.59L17.5 8.5H3.92l-.66 3.33h13.59l-.76 3.81-5.48 1.81-4.75-1.81.33-1.64H2.85l-.79 4 7.85 3 9.05-3 1.2-6.03.24-1.21L21.94 3H5z"})))),z=React.memo((()=>React.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{fill:"#EC407A",stroke:"#EC407A","stroke-width":"0.781754",d:"M20.1142 4.61891C19.529 2.32273 15.7219 1.56817 12.1186 2.84814C9.974 3.61019 7.65324 4.80582 5.98376 6.36702C3.999 8.22342 3.68249 9.83881 3.81339 10.514C4.27337 12.8958 7.53747 14.4533 8.87907 15.608V15.6149C8.48326 15.8094 5.58795 17.275 4.91024 18.7733C4.19537 20.3541 5.02409 21.488 5.57283 21.641C7.27318 22.1141 9.01755 21.2634 9.9558 19.8645C10.8607 18.5147 10.7852 16.7722 10.3919 15.9051C10.9343 15.7622 11.5667 15.698 12.3703 15.7918C14.6383 16.0567 15.0832 17.4726 14.9982 18.0654C14.9132 18.6582 14.4375 18.9841 14.2783 19.0823C14.1191 19.1804 14.0707 19.2151 14.0839 19.288C14.1034 19.3944 14.177 19.3906 14.3123 19.3673C14.4992 19.3359 15.5029 18.8853 15.5463 17.7916C15.601 16.4028 14.2701 14.8491 11.9135 14.89C10.9431 14.907 10.3327 14.9989 9.89158 15.1632C9.85889 15.126 9.82616 15.0889 9.79155 15.0524C8.33475 13.498 5.64147 12.3987 5.75532 10.3089C5.79689 9.54932 6.06118 7.54888 10.9305 5.12233C14.9195 3.13446 18.1132 3.6819 18.665 4.8939C19.4535 6.62569 16.9584 9.84448 12.8159 10.3089C11.2376 10.4857 10.4063 9.874 10.1999 9.64624C9.9822 9.40648 9.95014 9.39577 9.8683 9.44046C9.73616 9.51409 9.81982 9.72553 9.8683 9.85201C9.99228 10.1742 10.4995 10.745 11.3647 11.0288C12.1262 11.2786 13.9788 11.4158 16.2203 10.5493C18.7298 9.57702 20.69 6.87616 20.1142 4.61891V4.61891ZM9.43601 16.3198C9.62417 17.0158 9.60339 17.6645 9.40894 18.2516C9.3658 18.3824 9.31409 18.5102 9.25414 18.6342C9.10438 18.9451 8.90302 19.2358 8.65697 19.5045C7.90558 20.3239 6.85659 20.6341 6.40664 20.3729C5.92088 20.091 6.16438 18.9357 7.03467 18.0157C7.97163 17.0252 9.31956 16.3884 9.31956 16.3884L9.31769 16.3845L9.43601 16.3197V16.3198Z"})))),G=({extension:e})=>{switch(e){case"ts":return React.createElement(B,null);case"js":return React.createElement(P,null);case"css":return React.createElement(V,null);case"jsx":return React.createElement(O,null);case"scss":return React.createElement(z,null);default:return React.createElement(React.Fragment,null)}},H=({each:e,fallback:t,children:n})=>{if(!e?.length)return t??React.createElement(React.Fragment,null);let a=[];for(let t=0;t<e.length;t++)a[t]=n(e[t],t);return React.createElement(React.Fragment,null,a)},_=(0,o.hI)("sidebar"),[U,J,Q,K,W]=c.Z.bulk(c.x.byDisplayName("FormTitle"),c.x.byProps("DropTarget","useDrop"),c.x.byProps("dangerous","selected"),c.x.byProps("closeModal"),c.x.byProps("openContextMenuLazy")),{Icon:Y,Tooltip:q,ContextMenu:X,BarlessScroller:ee}=c.Z.components,te=({states:e})=>{const{LEFT:t,RIGHT:n}=Y.Caret.Directions,{button:r}=Q,c=React.useRef(!1),s=e=>{c.current="mousedown"===e.type};React.useEffect((()=>(document.addEventListener("mousedown",s),document.addEventListener("mouseup",s),()=>{document.removeEventListener("mousedown",s),document.removeEventListener("mouseup",s)})),[]);const l=e.currentSnippet[1],[i,p]=e.collapsedState;return React.createElement("div",{className:_("container",i?"collapsed":"expanded")},React.createElement("div",{className:_("topbar")},i||React.createElement(U,{tag:"h3"},"Snippets"),i||React.createElement("div",{className:r,onClick:()=>{K.openModal((e=>React.createElement(y,{event:e,action:e=>{const[t,n]=e.split(".");a.default.createSnippet(t,n),l(t)},options:{buttonText:"Create Snippet",placeholder:"Block All Astra Users.ts",headerText:"psst you can use typescript and jsx!",titleText:"Create Snippet (include the extension)",rejectFilter:e=>a.default.getSnippets()[e.split(".")?.[0]]?"A snippet with that name is already saved!":o.Rw.some((t=>e.toLowerCase().endsWith(`.${t}`)))?void 0:"Must have a valid extension."}})))}},React.createElement(Y.Plus,{height:"20",width:"20"})),React.createElement("div",{className:r,onClick:p},React.createElement(Y.Caret,{height:"20",width:"20",direction:i?n:t}))),React.createElement("div",{className:_("divider")}),React.createElement("div",{className:_(["tab","list"])},React.createElement(ee,null,React.createElement(H,{each:Object.keys(a.default.getSnippets())},((t,n)=>React.createElement(ce,{index:n,snippet:t,collapsed:i,draggingRef:c,state:e.currentSnippet,forceUpdate:e.forceUpdate}))))))},ne="CODE_SNIPPETS_ITEM",{useDrag:ae,useDrop:re}=J,ce=({snippet:e,state:t,index:n,forceUpdate:r,collapsed:c,draggingRef:o})=>{const[{dragIndex:s},l]=re({accept:ne,drop:()=>({dropIndex:n}),collect:e=>{const t=e.getItem();return t&&e.isOver()?{dragIndex:t.index}:{dragIndex:null}}}),i=ae({type:ne,item:{snippet:e,index:n},end:(t,n)=>{const{dropIndex:r}=n.getDropResult();a.default.moveSnippet(e,r)}})[1],[p,u]=React.useState(!1);let d;const[m,f]=t;return React.createElement(q,{position:"top",shouldShow:p,text:`${e}.${a.default.getSnippet(e).extension}`},React.createElement("div",{onMouseEnter:()=>{d=setTimeout((()=>{o.current||u(!0)}),850)},onMouseLeave:()=>{u(!1),clearTimeout(d)},ref:e=>i(l(e||null)),onClick:()=>f(e),onContextMenu:n=>oe({event:n,state:t,snippet:e,forceUpdate:r}),className:_(["tab","item"],null!==s&&s!==n?s>n?["tab","item","drag","below"]:["tab","item","drag","above"]:"",e===m?["tab","item","selected"]:"")},React.createElement(G,{extension:a.default.getSnippet(e).extension}),c||React.createElement("div",{className:_(["tab","item","text"])},e)))},oe=({event:e,snippet:t,state:n,forceUpdate:r})=>{const[c,s,l]=n;W.openContextMenu(e,(()=>React.createElement(X.Container,{onClose:W.closeContextMenu},React.createElement(X.Item,{id:"rename",label:"Rename Snippet",action:()=>{K.openModal((e=>React.createElement(y,{event:e,action:e=>{console.log(e,"inpust");const[n,r]=e.split(".");r&&o.Rw.includes(r)&&a.default.updateSnippet(t,{extension:r}),n!==t&&a.default.renameSnippet(t,n),s(n)},options:{initialInput:t,titleText:"Rename Snippet",buttonText:"Rename Snippet",placeholder:"Cute Girl Getter.ts",headerText:"By the way, you can change the extension!",rejectFilter:e=>{const n=e.split(".");return t!==n[0]&&a.default.getSnippets()[n[0]]?"A snippet with that name is already saved!":(console.log(n[1],o.Rw.includes(n[1])),n[1]&&!o.Rw.includes(n[1])?`${n[1]} is not a valid extension.`:void 0)}}})))}}),React.createElement(X.Item,{id:"close",color:"colorDanger",label:"Delete Snippet",action:()=>{K.openModal((e=>React.createElement(k,{event:e,action:()=>{if(a.default.deleteSnippet(t),t===c)return s(l);r()}})))}}))))},[se,le,ie]=c.Z.bulk(c.x.byDisplayName("FormTitle"),c.x.byDisplayName("FormSection"),c.x.byDisplayName("StickerPickerLoader",!0)),pe=()=>{const e=React.useRef(),t=React.useState(!1),n=React.useReducer((e=>!e),!1),c=React.useReducer((()=>({})),{})[1],s=React.useState(a.default.getFirstSnippet()),[l,i]=React.useReducer((e=>!e),!1),p=React.useRef("no snippets? :nobitches:");React.useEffect((()=>{if("function"==typeof ie?.default)return r.Z.after(ie,"default",(([e])=>e.closePopout()))}),[]);const u=[s[0],e=>{p.current=s[0],s[1](e),t[1](!1)},p.current],d={editorRef:e,forceUpdate:c,unsavedState:t,remountMonaco:i,currentSnippet:u,collapsedState:n};return a.default.setUpdate(c),React.createElement(le,null,React.createElement(se,{tag:"h1"},"Code Snippets"),React.createElement("div",{className:(0,o.As)("container")},React.createElement(te,{states:d}),React.createElement("div",{className:(0,o.As)(["editor","container"])},React.createElement(A,{states:d}),React.createElement(m,{states:d,key:Number(l)}))))}},1222:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var a,r=n(5548),c=n(795),o=n(647);!function(e){e[e.JS=0]="JS",e[e.CSS=1]="CSS"}(a||(a={}));const s="src/snippets.json";let l,i={};const[{createToast:p},{showToast:u}]=c.Z.getByProps("createToast","showToast",{bulk:!0}),d=(e,t)=>{if(window.powercord?.api?.notices?.sendToast)return window.powercord.api.notices.sendToast(null,{content:e,timeout:t?2500:3500,type:t?"success":"danger",header:t?"Snippet Action Successful":"Snippet Action Unsuccessful"});u(p(e,t||2))},m=e=>{CodeSnippetsNative.writeFile(s,JSON.stringify(e,null,"\t"),(e=>{d("Error trying to write to the snippets file! Check console for more details."),r.Z.error("Error trying to write to the snippets file!",e),e=!0})),l?.()},f=c.Z.getByProps("getLocale"),C=()=>{const e=CodeSnippetsNative.readFile(s);return e?JSON.parse(e):{}},h=e=>{const t=C();return Object.keys(t).length&&t[e]?t[e]:{code:"",extension:"",enabled:!1}},R=async(e,t,n)=>{let a;try{a=await new Function(`\n        let Logger  = this.cs.logger;\n        let Patcher = this.cs.patcher;\n        let Webpack = this.cs.webpack;\n        let Manager = this.cs.manager;\n\n        return (async () => { ${CodeSnippetsNative.compile(t.code,t.extension)} })();\n      `)()}catch(t){return d(`Error running snippet ${e||"QuickRun"}! Check console for more details.`),r.Z.error(`Error running snippet ${e||"QuickRun"}!`,t)}return n??d(`Successfully ran ${e||"QuickRun"}!`,!0),r.Z.info(`Successfully ran ${e||"QuickRun"}!`,a?"":`Returned: ${a}`),l?.(),a},g=(e,t,n)=>{const a=((e={})=>Object.assign(document.createElement("style"),e))({textContent:e,id:`code-snippets-${t}`});return(n??document.head).appendChild(a),a},S={makeToast:d,cleanup:()=>{Object.keys(i).forEach((async e=>{try{await i[e](),delete i[e]}catch(t){d(`Error running the cleanup function for ${e}! Check console for more details.`),r.Z.error(`Error running the cleanup function for ${e}!`,t)}}))},setUpdate:e=>{l=e},getSnippets:C,getFirstSnippet:()=>Object.keys(C())?.[0],getSnippet:h,getScriptType:e=>{const t=h(e);return t.extension.endsWith("ss")?a.CSS:t.extension in o.Rw?a.JS:void 0},backupSnippets:()=>{const e=(new Date).toLocaleString(f.getLocale(),{hourCycle:"h24"}).replace(/[\/:]/g,"-").replace(", ","-");CodeSnippetsNative.writeFile(`src/backup-${e}.json`,JSON.stringify(C()),(e=>{d("Error trying to back up the snippets file! Check console for more details."),r.Z.error("Error trying to back up the snippets file!",e),e=!0})),d(`Successfully backed up snippets to backup-${e}.json!`,!0),r.Z.info(`Successfully backed up snippets to backup-${e}.json!`)},deleteSnippet:e=>{let t=C();try{delete t[e],i[e]?.()}catch(t){return d(`Error deleting snippet ${e}! Check console for more details.`),r.Z.error(`Error deleting snippet ${e}!`,t)}return m(t)},moveSnippet:(e,t)=>{let n=C();try{let a=n[e],r=Object.entries(n).filter((([t])=>t!==e));r.splice(t,0,[e,a]),n=Object.fromEntries(r)}catch(t){return d(`Error moving snippet ${e}! Check console for more details.`),r.Z.error(`Error moving snippet ${e}!`,t)}return m(n)},updateSnippet:(e,t)=>{let n=C();t=Object.assign(h(e),t);try{Object.assign(n,{[e]:t})}catch(t){return d(`Error writing snippet ${e}! Check console for more details.`),!0}return m(n)},renameSnippet:(e,t)=>{console.log(e,t);let n=C();try{let a=Object.keys(n).indexOf(e),r=Object.entries(n);r.splice(a,1,[t,n[e]]),n=Object.fromEntries(r)}catch(n){return d(`Error renaming snippet ${e} to ${t}! Check console for more details.`),r.Z.error(`Error renaming snippet ${e} to ${t}!`,n)}return m(n)},createSnippet:(e,t,n)=>{let a=C();try{Object.assign(a,{[e]:{code:"",enabled:n??!1,extension:t}})}catch(t){return d(`Error creating snippet ${e}! Check console for more details.`),r.Z.error(`Error creating snippet ${e}.`,t)}return m(a)},runCode:R,injectCSS:g,runSnippet:async(e,t,n)=>{if(!C()[e])return r.Z.warn(`Snippet ${e} does not exist!`);const c=h(e);if(await(i[e]?.(!0)),t===a.CSS){const t=g(CodeSnippetsNative.compile(c.code,c.extension),e);i[e]=n=>{t.remove(),delete i[e],n||d(`Successfully removed CSS for ${e}!`,!0),r.Z.info(`Successfully removed CSS for ${e}!`,t),l?.()},n||d(`Successfully loaded CSS for ${e}! Check console for node info.`,!0),r.Z.info(`Successfuly loaded CSS for ${e}!`,t)}else{const t=await R(e,c,n);"function"==typeof t&&(i[e]=async n=>{let a;try{a=await t(),delete i[e]}catch(t){return d(`Error running the cleanup function for ${e}! Check console for more details.`),r.Z.error(`Error running the cleanup function for ${e}!`,t)}n||d(`Successfully ran cleanup function for ${e}!`,!0),r.Z.info(`Successfully ran cleanup function for ${e}!`,a&&"function"!=typeof a?"":`Returned: ${a}`),l?.()})}l?.()},pullGist:async e=>{const t=await(await fetch(`https://api.github.com/gists/${e.id}`)).json();if(t.message)return Promise.reject("Gist does not exist!");return(t.files[e.name]?.content??t.files[Object.keys(t.files)[0]]?.content)||Promise.reject("Gist does not contain any files!")},ScriptType:a,get cleanups(){return i}}},647:(e,t,n)=>{n.d(t,{As:()=>o,Rw:()=>r,VS:()=>i,_v:()=>l,hI:()=>s,v_:()=>c});const a=(e,t)=>t.map((t=>`${e?`${e}-`:""}${Array.isArray(t)?t.join("-"):t}`)).join(" "),r=["js","ts","jsx","css","scss","sass"];function c(...e){return a("",e)}function o(...e){return`code-snippets-${a("",e)}`}function s(e){return(...t)=>a(`code-snippets-${e}`,t)}function l(e){return new Promise((t=>setTimeout(t,e)))}function i(e,t){e.forEach((e=>t?e[t]?.():e?.()))}}}]);