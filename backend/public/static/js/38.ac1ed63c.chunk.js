(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[38],{523:function(e,t,a){"use strict";var r=a(3),n=a(28),c=a.n(n),i="/api/grammar",o={getGrammar:function(e){return c.a.get("".concat(i,"/get-grammar/").concat(e))},getGrammarById:function(e){return c.a.get("".concat(i,"/get-grammar-by-id/").concat(e))},getGrammarByLevel:function(e,t){return c.a.get("".concat(i,"/get-grammar-by-level/").concat(e),{headers:{Authorization:t}})},getGrammarLevels:function(e){return c.a.get("".concat(i,"/get-grammar-levels"),{headers:{Authorization:e}})},getAllGrammar:function(e){return c.a.get("".concat(i,"/get-all-grammar"),{headers:{Authorization:e}})},postGrammar:function(e){return c.a.post("".concat(i,"/post-grammar"),Object(r.a)({},e),{header:{"content-type":"multipart/form-data"}})},putGrammar:function(e,t){return c.a.put("".concat(i,"/put-grammar/").concat(e),Object(r.a)({},t),{params:{id:e},header:{"content-type":"multipart/form-data"}})},deleteGrammar:function(e){return c.a.patch("".concat(i,"/delete-grammar/").concat(e))},searchGrammar:function(e){return c.a.get("".concat(i,"/search-grammar"),{params:{title:e}})}};t.a=o},552:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return u}));var r=a(16),n=a.n(r),c=a(27),i=a(54),o=a(523),s=function(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.getGrammar(e);case 3:200===(r=t.sent).status?a({type:i.a.GET_GRAMMAR,payload:r.data}):a({type:i.a.SET_GRAMMAR_ERROR,payload:r.data.message}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:i.a.SET_GRAMMAR_ERROR,payload:t.t0.response.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},u=function(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.deleteGrammar(e);case 3:200===(r=t.sent).status?a({type:i.a.DELETE_GRAMMAR,payload:e}):a({type:i.a.SET_GRAMMAR_ERROR,payload:r.data.message}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:i.a.SET_GRAMMAR_ERROR,payload:t.t0.response.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},737:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return A}));var r=a(11),n=a(3),c=a(4),i=a(0),o=a(753),s=a(726),u=a(507),l=a(602),d=a(56),m=(a(599),a(512)),p=a(503),b=a(19),j=a(552),h=a(20),g=a(488),f=a(29),O=a(5),x=a(1),v=["children","value","index"],y=Object(g.a)((function(){return{borderTopic:{borderStyle:"solid",borderColor:"initial",borderWidth:"1px",backgroundColor:"#ccff66",width:"700px",height:"auto"},grammarbox:{backgroundColor:"#99ffff",padding:"10px 10px",border:"1px solid #666",marginBottom:"10px"},picture:{width:"50rem",height:"30rem",marginLeft:"15rem"}}}));function R(e){var t=e.children,a=e.value,r=e.index,i=Object(c.a)(e,v);return Object(x.jsx)("div",Object(n.a)(Object(n.a)({role:"tabpanel",hidden:a!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},i),{},{children:a===r&&Object(x.jsx)(l.a,{sx:{p:3},children:Object(x.jsx)(u.a,{children:t})})}))}function G(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function A(){Object(d.a)("Grammar Details");var e=y(),t=Object(i.useState)(0),a=Object(r.a)(t,2),c=a[0],g=a[1],v=Object(h.i)().id,A=Object(b.c)((function(e){return e.grammarReducer})).grammar,E=Object(h.g)();var M=Object(b.b)();Object(i.useEffect)((function(){return M(Object(j.b)(v))}),[M]);var _=function(e){var t=[];return e&&(t=e.split("\n")),t},w=null;A&&(w=Object(f.a)(A.Image?A.Image:O.c.IMAGE_SRC,200,200,!0,!0));return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(m.a,{children:[Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(u.a,{variant:"h6",align:"center",children:A.Title}),Object(x.jsx)(u.a,{children:A.Content})]}),A.Video?Object(x.jsx)("p",{align:"center",children:Object(x.jsx)("iframe",{src:A.Video,width:"500",height:"300"})}):Object(x.jsx)("img",{className:e.picture,src:w,alt:"photo",align:"center"}),A.Audio&&Object(x.jsxs)("audio",{controls:!0,children:[Object(x.jsx)("source",{src:A.Audio,type:"audio/mpeg"}),"Your browser does not support the audio element."]}),Object(x.jsxs)(l.a,{sx:{width:"100%"},children:[Object(x.jsx)(l.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(x.jsxs)(o.a,{value:c,onChange:function(e,t){g(t)},"aria-label":"basic tabs example",indicatorColor:"primary",children:[Object(x.jsx)(s.a,Object(n.a)({label:"Script"},G(0))),Object(x.jsx)(s.a,Object(n.a)({label:"Grammar"},G(1)))]})}),Object(x.jsx)(R,{value:c,index:0,children:Object(x.jsx)("td",{dangerouslySetInnerHTML:{__html:A.Script}})}),Object(x.jsx)(R,{value:c,index:1,children:A.Items&&A.Items.map((function(t,a){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(u.a,{className:e.grammarbox,children:Object(x.jsxs)("p",{children:[Object(x.jsxs)("strong",{children:["Point ",a+1," :  "]}),t.Point]})}),Object(x.jsx)("div",{children:_(t.Examples).map((function(e){return Object(x.jsx)(u.a,{variant:"body2",align:"justify",children:e})}))})]})}))}),Object(x.jsx)(p.a,{color:"primary",onClick:function(){E.push("/admin/grammar")},children:"GO BACK"}),Object(x.jsx)(p.a,{color:"primary",onClick:function(){E.push("/admin/grammar/edit/".concat(v))},children:"Edit"})]})]})})}}}]);
//# sourceMappingURL=38.ac1ed63c.chunk.js.map