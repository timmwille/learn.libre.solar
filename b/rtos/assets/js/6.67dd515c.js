(window.webpackJsonp=window.webpackJsonp||[]).push([[6,13],{442:function(t,e,s){"use strict";s.r(e);var n=s(446),a=n.b.reactiveProp,i={extends:n.a,mixins:[a],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}},r=s(42),l=Object(r.a)(i,void 0,void 0,!1,null,null,null);e.default=l.exports},445:function(t,e,s){var n={"./af":307,"./af.js":307,"./ar":308,"./ar-dz":309,"./ar-dz.js":309,"./ar-kw":310,"./ar-kw.js":310,"./ar-ly":311,"./ar-ly.js":311,"./ar-ma":312,"./ar-ma.js":312,"./ar-sa":313,"./ar-sa.js":313,"./ar-tn":314,"./ar-tn.js":314,"./ar.js":308,"./az":315,"./az.js":315,"./be":316,"./be.js":316,"./bg":317,"./bg.js":317,"./bm":318,"./bm.js":318,"./bn":319,"./bn-bd":320,"./bn-bd.js":320,"./bn.js":319,"./bo":321,"./bo.js":321,"./br":322,"./br.js":322,"./bs":323,"./bs.js":323,"./ca":324,"./ca.js":324,"./cs":325,"./cs.js":325,"./cv":326,"./cv.js":326,"./cy":327,"./cy.js":327,"./da":328,"./da.js":328,"./de":329,"./de-at":330,"./de-at.js":330,"./de-ch":331,"./de-ch.js":331,"./de.js":329,"./dv":332,"./dv.js":332,"./el":333,"./el.js":333,"./en-au":334,"./en-au.js":334,"./en-ca":335,"./en-ca.js":335,"./en-gb":336,"./en-gb.js":336,"./en-ie":337,"./en-ie.js":337,"./en-il":338,"./en-il.js":338,"./en-in":339,"./en-in.js":339,"./en-nz":340,"./en-nz.js":340,"./en-sg":341,"./en-sg.js":341,"./eo":342,"./eo.js":342,"./es":343,"./es-do":344,"./es-do.js":344,"./es-mx":345,"./es-mx.js":345,"./es-us":346,"./es-us.js":346,"./es.js":343,"./et":347,"./et.js":347,"./eu":348,"./eu.js":348,"./fa":349,"./fa.js":349,"./fi":350,"./fi.js":350,"./fil":351,"./fil.js":351,"./fo":352,"./fo.js":352,"./fr":353,"./fr-ca":354,"./fr-ca.js":354,"./fr-ch":355,"./fr-ch.js":355,"./fr.js":353,"./fy":356,"./fy.js":356,"./ga":357,"./ga.js":357,"./gd":358,"./gd.js":358,"./gl":359,"./gl.js":359,"./gom-deva":360,"./gom-deva.js":360,"./gom-latn":361,"./gom-latn.js":361,"./gu":362,"./gu.js":362,"./he":363,"./he.js":363,"./hi":364,"./hi.js":364,"./hr":365,"./hr.js":365,"./hu":366,"./hu.js":366,"./hy-am":367,"./hy-am.js":367,"./id":368,"./id.js":368,"./is":369,"./is.js":369,"./it":370,"./it-ch":371,"./it-ch.js":371,"./it.js":370,"./ja":372,"./ja.js":372,"./jv":373,"./jv.js":373,"./ka":374,"./ka.js":374,"./kk":375,"./kk.js":375,"./km":376,"./km.js":376,"./kn":377,"./kn.js":377,"./ko":378,"./ko.js":378,"./ku":379,"./ku.js":379,"./ky":380,"./ky.js":380,"./lb":381,"./lb.js":381,"./lo":382,"./lo.js":382,"./lt":383,"./lt.js":383,"./lv":384,"./lv.js":384,"./me":385,"./me.js":385,"./mi":386,"./mi.js":386,"./mk":387,"./mk.js":387,"./ml":388,"./ml.js":388,"./mn":389,"./mn.js":389,"./mr":390,"./mr.js":390,"./ms":391,"./ms-my":392,"./ms-my.js":392,"./ms.js":391,"./mt":393,"./mt.js":393,"./my":394,"./my.js":394,"./nb":395,"./nb.js":395,"./ne":396,"./ne.js":396,"./nl":397,"./nl-be":398,"./nl-be.js":398,"./nl.js":397,"./nn":399,"./nn.js":399,"./oc-lnc":400,"./oc-lnc.js":400,"./pa-in":401,"./pa-in.js":401,"./pl":402,"./pl.js":402,"./pt":403,"./pt-br":404,"./pt-br.js":404,"./pt.js":403,"./ro":405,"./ro.js":405,"./ru":406,"./ru.js":406,"./sd":407,"./sd.js":407,"./se":408,"./se.js":408,"./si":409,"./si.js":409,"./sk":410,"./sk.js":410,"./sl":411,"./sl.js":411,"./sq":412,"./sq.js":412,"./sr":413,"./sr-cyrl":414,"./sr-cyrl.js":414,"./sr.js":413,"./ss":415,"./ss.js":415,"./sv":416,"./sv.js":416,"./sw":417,"./sw.js":417,"./ta":418,"./ta.js":418,"./te":419,"./te.js":419,"./tet":420,"./tet.js":420,"./tg":421,"./tg.js":421,"./th":422,"./th.js":422,"./tk":423,"./tk.js":423,"./tl-ph":424,"./tl-ph.js":424,"./tlh":425,"./tlh.js":425,"./tr":426,"./tr.js":426,"./tzl":427,"./tzl.js":427,"./tzm":428,"./tzm-latn":429,"./tzm-latn.js":429,"./tzm.js":428,"./ug-cn":430,"./ug-cn.js":430,"./uk":431,"./uk.js":431,"./ur":432,"./ur.js":432,"./uz":433,"./uz-latn":434,"./uz-latn.js":434,"./uz.js":433,"./vi":435,"./vi.js":435,"./x-pseudo":436,"./x-pseudo.js":436,"./yo":437,"./yo.js":437,"./zh-cn":438,"./zh-cn.js":438,"./zh-hk":439,"./zh-hk.js":439,"./zh-mo":440,"./zh-mo.js":440,"./zh-tw":441,"./zh-tw.js":441};function a(t){var e=i(t);return s(e)}function i(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id=445},467:function(t,e,s){},501:function(t,e,s){"use strict";s(467)},517:function(t,e,s){"use strict";s.r(e);var n={components:{LineChart:s(442).default},data:function(){return{chartData:null,chartOptions:null}},mounted:function(){this.updateGraph()},methods:{updateGraph:function(){for(var t=document.getElementById("imax").value,e=[],s=[],n=0;n<=100;n++){var a=n/100*t;s.push({x:a,y:this.Q_HS_cond(a)}),e.push({x:a,y:this.Q_HS_cond(a)})}var i=[];for(n=0;n<=100;n++){a=n/100*t;i.push({x:a,y:this.Q_HS_sw(a)}),e[n].y+=this.Q_HS_sw(a)}var r=[];for(n=0;n<=100;n++){a=n/100*t;r.push({x:a,y:this.Q_LS_cond(a)}),e[n].y+=this.Q_LS_cond(a)}var l=[];for(n=0;n<=100;n++){a=n/100*t;l.push({x:a,y:this.Q_L(a)}),e[n].y+=this.Q_L(a)}var o=[];for(n=0;n<=100;n++){a=n/100*t;o.push({x:a,y:this.Q_driver(a)}),e[n].y+=this.Q_driver(a)}var u=[];for(n=0;n<=100;n++){a=n/100*t;u.push({x:a,y:this.eff(a,e[n].y)})}this.chartData={datasets:[{label:"Efficiency",yAxisID:"eff",pointRadius:0,borderWidth:2,borderColor:"#fbbe59",backgroundColor:"#fbbe59",fill:!1,data:u},{label:"Driver",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#6b6b6b",backgroundColor:"#6b6b6b",fill:!1,data:o},{label:"HS switching",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#005e85",backgroundColor:"#005e85",fill:!1,data:i},{label:"HS conduction",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#5c9aaf",backgroundColor:"#5c9aaf",fill:!1,data:s},{label:"LS conduction",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#d3d5cc",backgroundColor:"#d3d5cc",fill:!1,data:r},{label:"Inductor DC",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#262626",backgroundColor:"#262626",fill:!1,data:l}]},this.chartOptions={scales:{xAxes:[{type:"linear",display:!0,scaleLabel:{labelString:"Output current (A)",fontSize:14,display:!0},gridLines:{display:!0}}],yAxes:[{id:"loss",type:"linear",position:"right",display:!0,stacked:!0,scaleLabel:{labelString:"Total Losses (W)",fontSize:14,display:!0},ticks:{beginAtZero:!0},gridLines:{display:!1}},{id:"eff",type:"linear",position:"left",display:!0,scaleLabel:{labelString:"Efficiency (%)",fontSize:14,display:!0},ticks:{max:100,min:90},gridLines:{display:!0}}]},legend:{usePointStyle:!0,labels:{boxWidth:20}},tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!1}},Q_HS_cond:function(t){var e=document.getElementById("fsw").value,s=document.getElementById("rdson").value,n=document.getElementById("vin").value,a=document.getElementById("vout").value,i=a/n;document.getElementById("l").value;return s/1e3*(i*(Math.pow(t,2)+Math.pow(t,2)/12))},Q_HS_sw:function(t){var e=document.getElementById("vin").value;document.getElementById("vout").value,document.getElementById("rdson").value;return e*t/2*document.getElementById("fsw").value*1e3*40*1e-9},Q_LS_cond:function(t){var e=document.getElementById("vin").value,s=document.getElementById("vout").value,n=s/e,a=document.getElementById("rdson").value,i=document.getElementById("fsw").value,r=(e-s)*n/(1e3*i)/(1e-6*document.getElementById("l").value);return a/1e3*((1-n)*(Math.pow(t,2)+Math.pow(r,2)/12))+400*1e-9*i*1e3*.6*t},Q_L:function(t){var e=document.getElementById("vin").value,s=document.getElementById("vout").value,n=(e-s)*(s/e)/(1e3*document.getElementById("fsw").value)/(1e-6*document.getElementById("l").value);return document.getElementById("rl").value/1e3*(Math.pow(t,2)+Math.pow(n,2)/12)},Q_driver:function(t){return 8e-8*12*document.getElementById("fsw").value*1e3},eff:function(t,e){var s=document.getElementById("vout").value;return s*t/(s*t+e)*100}}},a=(s(501),s(42)),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{overflow:"auto"}},[s("line-chart",{attrs:{"chart-data":t.chartData,options:t.chartOptions}}),t._v(" "),s("p"),s("div",{staticClass:"left"},[t._v("Maximum output current:")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"imax",step:"1",value:"20",min:"5"},on:{change:function(e){return t.updateGraph()}}}),t._v(" A")]),t._v(" "),s("div",{staticClass:"left"},[t._v("Input voltage:")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"vin",step:"1",value:"30",min:"3"},on:{change:function(e){return t.updateGraph()}}}),t._v(" V")]),t._v(" "),s("div",{staticClass:"left"},[t._v("Output voltage: ")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"vout",step:"1",value:"14",min:"1"},on:{change:function(e){return t.updateGraph()}}}),t._v(" V")]),t._v(" "),s("div",{staticClass:"left"},[t._v("MOSFET Rds(on): ")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"rdson",step:"1",value:"3",min:"0"},on:{change:function(e){return t.updateGraph()}}}),t._v(" mΩ")]),t._v(" "),s("div",{staticClass:"left"},[t._v("Switching frequency: ")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"fsw",step:"10",value:"70",min:"10"},on:{change:function(e){return t.updateGraph()}}}),t._v(" kHz")]),t._v(" "),s("div",{staticClass:"left"},[t._v("Inductance: ")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"l",step:"5",value:"47",min:"1"},on:{change:function(e){return t.updateGraph()}}}),t._v(" µH")]),t._v(" "),s("div",{staticClass:"left"},[t._v("Inductor resistance: ")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"rl",step:"1",value:"5",min:"0"},on:{change:function(e){return t.updateGraph()}}}),t._v(" mΩ")]),t._v(" "),s("p")],1)}),[],!1,null,null,null);e.default=i.exports}}]);