(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{242:function(t,e,s){},406:function(t,e,s){var n={"./af":245,"./af.js":245,"./ar":246,"./ar-dz":247,"./ar-dz.js":247,"./ar-kw":248,"./ar-kw.js":248,"./ar-ly":249,"./ar-ly.js":249,"./ar-ma":250,"./ar-ma.js":250,"./ar-sa":251,"./ar-sa.js":251,"./ar-tn":252,"./ar-tn.js":252,"./ar.js":246,"./az":253,"./az.js":253,"./be":254,"./be.js":254,"./bg":255,"./bg.js":255,"./bm":256,"./bm.js":256,"./bn":257,"./bn.js":257,"./bo":258,"./bo.js":258,"./br":259,"./br.js":259,"./bs":260,"./bs.js":260,"./ca":261,"./ca.js":261,"./cs":262,"./cs.js":262,"./cv":263,"./cv.js":263,"./cy":264,"./cy.js":264,"./da":265,"./da.js":265,"./de":266,"./de-at":267,"./de-at.js":267,"./de-ch":268,"./de-ch.js":268,"./de.js":266,"./dv":269,"./dv.js":269,"./el":270,"./el.js":270,"./en-SG":271,"./en-SG.js":271,"./en-au":272,"./en-au.js":272,"./en-ca":273,"./en-ca.js":273,"./en-gb":274,"./en-gb.js":274,"./en-ie":275,"./en-ie.js":275,"./en-il":276,"./en-il.js":276,"./en-nz":277,"./en-nz.js":277,"./eo":278,"./eo.js":278,"./es":279,"./es-do":280,"./es-do.js":280,"./es-us":281,"./es-us.js":281,"./es.js":279,"./et":282,"./et.js":282,"./eu":283,"./eu.js":283,"./fa":284,"./fa.js":284,"./fi":285,"./fi.js":285,"./fo":286,"./fo.js":286,"./fr":287,"./fr-ca":288,"./fr-ca.js":288,"./fr-ch":289,"./fr-ch.js":289,"./fr.js":287,"./fy":290,"./fy.js":290,"./ga":291,"./ga.js":291,"./gd":292,"./gd.js":292,"./gl":293,"./gl.js":293,"./gom-latn":294,"./gom-latn.js":294,"./gu":295,"./gu.js":295,"./he":296,"./he.js":296,"./hi":297,"./hi.js":297,"./hr":298,"./hr.js":298,"./hu":299,"./hu.js":299,"./hy-am":300,"./hy-am.js":300,"./id":301,"./id.js":301,"./is":302,"./is.js":302,"./it":303,"./it-ch":304,"./it-ch.js":304,"./it.js":303,"./ja":305,"./ja.js":305,"./jv":306,"./jv.js":306,"./ka":307,"./ka.js":307,"./kk":308,"./kk.js":308,"./km":309,"./km.js":309,"./kn":310,"./kn.js":310,"./ko":311,"./ko.js":311,"./ku":312,"./ku.js":312,"./ky":313,"./ky.js":313,"./lb":314,"./lb.js":314,"./lo":315,"./lo.js":315,"./lt":316,"./lt.js":316,"./lv":317,"./lv.js":317,"./me":318,"./me.js":318,"./mi":319,"./mi.js":319,"./mk":320,"./mk.js":320,"./ml":321,"./ml.js":321,"./mn":322,"./mn.js":322,"./mr":323,"./mr.js":323,"./ms":324,"./ms-my":325,"./ms-my.js":325,"./ms.js":324,"./mt":326,"./mt.js":326,"./my":327,"./my.js":327,"./nb":328,"./nb.js":328,"./ne":329,"./ne.js":329,"./nl":330,"./nl-be":331,"./nl-be.js":331,"./nl.js":330,"./nn":332,"./nn.js":332,"./pa-in":333,"./pa-in.js":333,"./pl":334,"./pl.js":334,"./pt":335,"./pt-br":336,"./pt-br.js":336,"./pt.js":335,"./ro":337,"./ro.js":337,"./ru":338,"./ru.js":338,"./sd":339,"./sd.js":339,"./se":340,"./se.js":340,"./si":341,"./si.js":341,"./sk":342,"./sk.js":342,"./sl":343,"./sl.js":343,"./sq":344,"./sq.js":344,"./sr":345,"./sr-cyrl":346,"./sr-cyrl.js":346,"./sr.js":345,"./ss":347,"./ss.js":347,"./sv":348,"./sv.js":348,"./sw":349,"./sw.js":349,"./ta":350,"./ta.js":350,"./te":351,"./te.js":351,"./tet":352,"./tet.js":352,"./tg":353,"./tg.js":353,"./th":354,"./th.js":354,"./tl-ph":355,"./tl-ph.js":355,"./tlh":356,"./tlh.js":356,"./tr":357,"./tr.js":357,"./tzl":358,"./tzl.js":358,"./tzm":359,"./tzm-latn":360,"./tzm-latn.js":360,"./tzm.js":359,"./ug-cn":361,"./ug-cn.js":361,"./uk":362,"./uk.js":362,"./ur":363,"./ur.js":363,"./uz":364,"./uz-latn":365,"./uz-latn.js":365,"./uz.js":364,"./vi":366,"./vi.js":366,"./x-pseudo":367,"./x-pseudo.js":367,"./yo":368,"./yo.js":368,"./zh-cn":369,"./zh-cn.js":369,"./zh-hk":370,"./zh-hk.js":370,"./zh-tw":371,"./zh-tw.js":371};function a(t){var e=i(t);return s(e)}function i(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id=406},407:function(t,e,s){"use strict";var n=s(242);s.n(n).a},411:function(t,e,s){"use strict";s.r(e);var n=s(409),a=n.b.reactiveProp,i={components:{LineChart:{extends:n.a,mixins:[a],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},data:function(){return{chartData:null,chartOptions:null}},mounted:function(){this.updateGraph()},methods:{updateGraph:function(){for(var t=document.getElementById("imax").value,e=[],s=[],n=0;n<=100;n++){var a=n/100*t;s.push({x:a,y:this.Q_HS_cond(a)}),e.push({x:a,y:this.Q_HS_cond(a)})}var i=[];for(n=0;n<=100;n++){a=n/100*t;i.push({x:a,y:this.Q_HS_sw(a)}),e[n].y+=this.Q_HS_sw(a)}var r=[];for(n=0;n<=100;n++){a=n/100*t;r.push({x:a,y:this.Q_LS_cond(a)}),e[n].y+=this.Q_LS_cond(a)}var o=[];for(n=0;n<=100;n++){a=n/100*t;o.push({x:a,y:this.Q_L(a)}),e[n].y+=this.Q_L(a)}var l=[];for(n=0;n<=100;n++){a=n/100*t;l.push({x:a,y:this.Q_driver(a)}),e[n].y+=this.Q_driver(a)}var u=[];for(n=0;n<=100;n++){a=n/100*t;u.push({x:a,y:this.eff(a,e[n].y)})}this.chartData={datasets:[{label:"Efficiency",yAxisID:"eff",pointRadius:0,borderWidth:2,borderColor:"#fbbe59",backgroundColor:"#fbbe59",fill:!1,data:u},{label:"Driver",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#6b6b6b",backgroundColor:"#6b6b6b",fill:!1,data:l},{label:"HS switching",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#005e85",backgroundColor:"#005e85",fill:!1,data:i},{label:"HS conduction",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#5c9aaf",backgroundColor:"#5c9aaf",fill:!1,data:s},{label:"LS conduction",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#d3d5cc",backgroundColor:"#d3d5cc",fill:!1,data:r},{label:"Inductor DC",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#262626",backgroundColor:"#262626",fill:!1,data:o}]},this.chartOptions={scales:{xAxes:[{type:"linear",display:!0,scaleLabel:{labelString:"Output current (A)",fontSize:14,display:!0},gridLines:{display:!0}}],yAxes:[{id:"loss",type:"linear",position:"right",display:!0,stacked:!0,scaleLabel:{labelString:"Total Losses (W)",fontSize:14,display:!0},ticks:{beginAtZero:!0},gridLines:{display:!1}},{id:"eff",type:"linear",position:"left",display:!0,scaleLabel:{labelString:"Efficiency (%)",fontSize:14,display:!0},ticks:{max:100,min:90},gridLines:{display:!0}}]},legend:{usePointStyle:!0,labels:{boxWidth:20}},tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!1}},Q_HS_cond:function(t){var e=document.getElementById("fsw").value,s=document.getElementById("rdson").value,n=document.getElementById("vin").value,a=document.getElementById("vout").value,i=a/n;document.getElementById("l").value;return s/1e3*(i*(Math.pow(t,2)+Math.pow(t,2)/12))},Q_HS_sw:function(t){var e=document.getElementById("vin").value;document.getElementById("vout").value,document.getElementById("rdson").value;return e*t/2*document.getElementById("fsw").value*1e3*40*1e-9},Q_LS_cond:function(t){var e=document.getElementById("vin").value,s=document.getElementById("vout").value,n=s/e,a=document.getElementById("rdson").value,i=document.getElementById("fsw").value,r=(e-s)*n/(1e3*i)/(1e-6*document.getElementById("l").value);return a/1e3*((1-n)*(Math.pow(t,2)+Math.pow(r,2)/12))+400*1e-9*i*1e3*.6*t},Q_L:function(t){var e=document.getElementById("vin").value,s=document.getElementById("vout").value,n=(e-s)*(s/e)/(1e3*document.getElementById("fsw").value)/(1e-6*document.getElementById("l").value);return document.getElementById("rl").value/1e3*(Math.pow(t,2)+Math.pow(n,2)/12)},Q_driver:function(t){return 8e-8*12*document.getElementById("fsw").value*1e3},eff:function(t,e){var s=document.getElementById("vout").value;return s*t/(s*t+e)*100}}},r=(s(407),s(38)),o=Object(r.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{overflow:"auto"}},[s("line-chart",{attrs:{"chart-data":t.chartData,options:t.chartOptions}}),t._v(" "),s("p"),s("div",{staticClass:"left"},[t._v("Maximum output current:")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"imax",step:"1",value:"20",min:"5"},on:{change:function(e){return t.updateGraph()}}}),t._v(" A")]),t._v(" "),s("div",{staticClass:"left"},[t._v("Input voltage:")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"vin",step:"1",value:"30",min:"3"},on:{change:function(e){return t.updateGraph()}}}),t._v(" V")]),t._v(" "),s("div",{staticClass:"left"},[t._v("Output voltage: ")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"vout",step:"1",value:"14",min:"1"},on:{change:function(e){return t.updateGraph()}}}),t._v(" V")]),t._v(" "),s("div",{staticClass:"left"},[t._v("MOSFET Rds(on): ")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"rdson",step:"1",value:"3",min:"0"},on:{change:function(e){return t.updateGraph()}}}),t._v(" mΩ")]),t._v(" "),s("div",{staticClass:"left"},[t._v("Switching frequency: ")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"fsw",step:"10",value:"70",min:"10"},on:{change:function(e){return t.updateGraph()}}}),t._v(" kHz")]),t._v(" "),s("div",{staticClass:"left"},[t._v("Inductance: ")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"l",step:"5",value:"47",min:"1"},on:{change:function(e){return t.updateGraph()}}}),t._v(" µH")]),t._v(" "),s("div",{staticClass:"left"},[t._v("Inductor resistance: ")]),t._v(" "),s("div",{staticClass:"right"},[s("input",{attrs:{type:"number",id:"rl",step:"1",value:"5",min:"0"},on:{change:function(e){return t.updateGraph()}}}),t._v(" mΩ")]),t._v(" "),s("p")],1)},[],!1,null,null,null);e.default=o.exports}}]);