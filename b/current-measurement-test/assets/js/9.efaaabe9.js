(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{433:function(t,s,e){"use strict";var a=e(437),n=a.b.reactiveProp;s.a={extends:a.a,mixins:[n],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},436:function(t,s,e){var a={"./af":306,"./af.js":306,"./ar":307,"./ar-dz":308,"./ar-dz.js":308,"./ar-kw":309,"./ar-kw.js":309,"./ar-ly":310,"./ar-ly.js":310,"./ar-ma":311,"./ar-ma.js":311,"./ar-sa":312,"./ar-sa.js":312,"./ar-tn":313,"./ar-tn.js":313,"./ar.js":307,"./az":314,"./az.js":314,"./be":315,"./be.js":315,"./bg":316,"./bg.js":316,"./bm":317,"./bm.js":317,"./bn":318,"./bn.js":318,"./bo":319,"./bo.js":319,"./br":320,"./br.js":320,"./bs":321,"./bs.js":321,"./ca":322,"./ca.js":322,"./cs":323,"./cs.js":323,"./cv":324,"./cv.js":324,"./cy":325,"./cy.js":325,"./da":326,"./da.js":326,"./de":327,"./de-at":328,"./de-at.js":328,"./de-ch":329,"./de-ch.js":329,"./de.js":327,"./dv":330,"./dv.js":330,"./el":331,"./el.js":331,"./en-SG":332,"./en-SG.js":332,"./en-au":333,"./en-au.js":333,"./en-ca":334,"./en-ca.js":334,"./en-gb":335,"./en-gb.js":335,"./en-ie":336,"./en-ie.js":336,"./en-il":337,"./en-il.js":337,"./en-nz":338,"./en-nz.js":338,"./eo":339,"./eo.js":339,"./es":340,"./es-do":341,"./es-do.js":341,"./es-us":342,"./es-us.js":342,"./es.js":340,"./et":343,"./et.js":343,"./eu":344,"./eu.js":344,"./fa":345,"./fa.js":345,"./fi":346,"./fi.js":346,"./fo":347,"./fo.js":347,"./fr":348,"./fr-ca":349,"./fr-ca.js":349,"./fr-ch":350,"./fr-ch.js":350,"./fr.js":348,"./fy":351,"./fy.js":351,"./ga":352,"./ga.js":352,"./gd":353,"./gd.js":353,"./gl":354,"./gl.js":354,"./gom-latn":355,"./gom-latn.js":355,"./gu":356,"./gu.js":356,"./he":357,"./he.js":357,"./hi":358,"./hi.js":358,"./hr":359,"./hr.js":359,"./hu":360,"./hu.js":360,"./hy-am":361,"./hy-am.js":361,"./id":362,"./id.js":362,"./is":363,"./is.js":363,"./it":364,"./it-ch":365,"./it-ch.js":365,"./it.js":364,"./ja":366,"./ja.js":366,"./jv":367,"./jv.js":367,"./ka":368,"./ka.js":368,"./kk":369,"./kk.js":369,"./km":370,"./km.js":370,"./kn":371,"./kn.js":371,"./ko":372,"./ko.js":372,"./ku":373,"./ku.js":373,"./ky":374,"./ky.js":374,"./lb":375,"./lb.js":375,"./lo":376,"./lo.js":376,"./lt":377,"./lt.js":377,"./lv":378,"./lv.js":378,"./me":379,"./me.js":379,"./mi":380,"./mi.js":380,"./mk":381,"./mk.js":381,"./ml":382,"./ml.js":382,"./mn":383,"./mn.js":383,"./mr":384,"./mr.js":384,"./ms":385,"./ms-my":386,"./ms-my.js":386,"./ms.js":385,"./mt":387,"./mt.js":387,"./my":388,"./my.js":388,"./nb":389,"./nb.js":389,"./ne":390,"./ne.js":390,"./nl":391,"./nl-be":392,"./nl-be.js":392,"./nl.js":391,"./nn":393,"./nn.js":393,"./pa-in":394,"./pa-in.js":394,"./pl":395,"./pl.js":395,"./pt":396,"./pt-br":397,"./pt-br.js":397,"./pt.js":396,"./ro":398,"./ro.js":398,"./ru":399,"./ru.js":399,"./sd":400,"./sd.js":400,"./se":401,"./se.js":401,"./si":402,"./si.js":402,"./sk":403,"./sk.js":403,"./sl":404,"./sl.js":404,"./sq":405,"./sq.js":405,"./sr":406,"./sr-cyrl":407,"./sr-cyrl.js":407,"./sr.js":406,"./ss":408,"./ss.js":408,"./sv":409,"./sv.js":409,"./sw":410,"./sw.js":410,"./ta":411,"./ta.js":411,"./te":412,"./te.js":412,"./tet":413,"./tet.js":413,"./tg":414,"./tg.js":414,"./th":415,"./th.js":415,"./tl-ph":416,"./tl-ph.js":416,"./tlh":417,"./tlh.js":417,"./tr":418,"./tr.js":418,"./tzl":419,"./tzl.js":419,"./tzm":420,"./tzm-latn":421,"./tzm-latn.js":421,"./tzm.js":420,"./ug-cn":422,"./ug-cn.js":422,"./uk":423,"./uk.js":423,"./ur":424,"./ur.js":424,"./uz":425,"./uz-latn":426,"./uz-latn.js":426,"./uz.js":425,"./vi":427,"./vi.js":427,"./x-pseudo":428,"./x-pseudo.js":428,"./yo":429,"./yo.js":429,"./zh-cn":430,"./zh-cn.js":430,"./zh-hk":431,"./zh-hk.js":431,"./zh-tw":432,"./zh-tw.js":432};function n(t){var s=r(t);return e(s)}function r(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id=436},454:function(t,s,e){},525:function(t,s,e){"use strict";var a=e(454);e.n(a).a},532:function(t,s,e){"use strict";e.r(s);var a={components:{LineChart:e(433).a},data:function(){return{chartData:null,chartOptions:null}},mounted:function(){this.updateGraph()},methods:{updateGraph:function(){for(var t=[],s=0;s<=200;s+=5)t.push({x:s,y:this.I_cap(s)});var e=[];for(s=0;s<=200;s+=5)e.push({x:s,y:this.I_sc(s)});this.chartData={datasets:[{label:"Short circuit",pointRadius:0,borderWidth:2,borderColor:"#fbbe59",backgroundColor:"#fbbe59",fill:!1,data:e},{label:"Capacitive load",pointRadius:0,borderWidth:2,borderColor:"#005e85",backgroundColor:"#005e85",fill:!1,data:t}]},this.chartOptions={scales:{xAxes:[{type:"linear",display:!0,scaleLabel:{display:!0,labelString:"Time (µs)"},gridLines:{display:!0}}],yAxes:[{type:"linear",display:!0,scaleLabel:{display:!0,labelString:"Current (A)"},ticks:{beginAtZero:!0},gridLines:{display:!0}}]},legend:{usePointStyle:!0},tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!1}},I_cap:function(t){var s=1e-6*document.getElementById("wirelength").value,e=.001*document.getElementById("bat_ir").value,a=document.getElementById("voltage").value,n=1e-6*document.getElementById("capacitance").value,r=e+.001*document.getElementById("cap_esr").value+.0042*document.getElementById("wirelength").value,i=1/Math.sqrt(s*n),l=r/(2*s),j=Math.sqrt(Math.pow(i,2)-Math.pow(l,2));return a/(s*j)*Math.exp(-l*t*1e-6)*Math.sin(j*t*1e-6)},I_sc:function(t){var s=1e-6*document.getElementById("wirelength").value,e=document.getElementById("voltage").value,a=.001*document.getElementById("bat_ir").value+.0042*document.getElementById("wirelength").value;return e/a*(1-Math.exp(-a/s*t*1e-6))}}},n=(e(525),e(42)),r=Object(n.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticStyle:{overflow:"auto"}},[e("line-chart",{attrs:{"chart-data":t.chartData,options:t.chartOptions}}),t._v(" "),e("p"),e("div",{staticClass:"left"},[t._v("Battery voltage:")]),t._v(" "),e("div",{staticClass:"right"},[e("input",{attrs:{type:"number",id:"voltage",step:"2",value:"14"},on:{change:function(s){return t.updateGraph()}}}),t._v(" V")]),t._v(" "),e("div",{staticClass:"left"},[t._v("Battery and charge controller resistance: ")]),t._v(" "),e("div",{staticClass:"right"},[e("input",{attrs:{type:"number",id:"bat_ir",step:"5",value:"10"},on:{change:function(s){return t.updateGraph()}}}),t._v(" mΩ"),e("br")]),t._v(" "),e("div",{staticClass:"left"},[t._v("Total wire length: ")]),t._v(" "),e("div",{staticClass:"right"},[e("input",{attrs:{type:"number",id:"wirelength",step:"1",value:"1"},on:{change:function(s){return t.updateGraph()}}}),t._v(" m")]),t._v(" "),e("div",{staticClass:"left"},[t._v("Capacitance: ")]),t._v(" "),e("div",{staticClass:"right"},[e("input",{attrs:{type:"number",id:"capacitance",step:"100",value:"1000"},on:{change:function(s){return t.updateGraph()}}}),t._v(" µF"),e("br")]),t._v(" "),e("div",{staticClass:"left"},[t._v("Capacitor ESR: ")]),t._v(" "),e("div",{staticClass:"right"},[e("input",{attrs:{type:"number",id:"cap_esr",step:"5",value:"20"},on:{change:function(s){return t.updateGraph()}}}),t._v(" mΩ"),e("br")]),t._v(" "),e("p")],1)}),[],!1,null,null,null);s.default=r.exports}}]);