(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{151:function(t,s,e){"use strict";var a=e(160),n=a.b.reactiveProp;s.a={extends:a.a,mixins:[n],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},159:function(t,s,e){var a={"./af":15,"./af.js":15,"./ar":16,"./ar-dz":17,"./ar-dz.js":17,"./ar-kw":18,"./ar-kw.js":18,"./ar-ly":19,"./ar-ly.js":19,"./ar-ma":20,"./ar-ma.js":20,"./ar-sa":21,"./ar-sa.js":21,"./ar-tn":22,"./ar-tn.js":22,"./ar.js":16,"./az":23,"./az.js":23,"./be":24,"./be.js":24,"./bg":25,"./bg.js":25,"./bm":26,"./bm.js":26,"./bn":27,"./bn.js":27,"./bo":28,"./bo.js":28,"./br":29,"./br.js":29,"./bs":30,"./bs.js":30,"./ca":31,"./ca.js":31,"./cs":32,"./cs.js":32,"./cv":33,"./cv.js":33,"./cy":34,"./cy.js":34,"./da":35,"./da.js":35,"./de":36,"./de-at":37,"./de-at.js":37,"./de-ch":38,"./de-ch.js":38,"./de.js":36,"./dv":39,"./dv.js":39,"./el":40,"./el.js":40,"./en-SG":41,"./en-SG.js":41,"./en-au":42,"./en-au.js":42,"./en-ca":43,"./en-ca.js":43,"./en-gb":44,"./en-gb.js":44,"./en-ie":45,"./en-ie.js":45,"./en-il":46,"./en-il.js":46,"./en-nz":47,"./en-nz.js":47,"./eo":48,"./eo.js":48,"./es":49,"./es-do":50,"./es-do.js":50,"./es-us":51,"./es-us.js":51,"./es.js":49,"./et":52,"./et.js":52,"./eu":53,"./eu.js":53,"./fa":54,"./fa.js":54,"./fi":55,"./fi.js":55,"./fo":56,"./fo.js":56,"./fr":57,"./fr-ca":58,"./fr-ca.js":58,"./fr-ch":59,"./fr-ch.js":59,"./fr.js":57,"./fy":60,"./fy.js":60,"./ga":61,"./ga.js":61,"./gd":62,"./gd.js":62,"./gl":63,"./gl.js":63,"./gom-latn":64,"./gom-latn.js":64,"./gu":65,"./gu.js":65,"./he":66,"./he.js":66,"./hi":67,"./hi.js":67,"./hr":68,"./hr.js":68,"./hu":69,"./hu.js":69,"./hy-am":70,"./hy-am.js":70,"./id":71,"./id.js":71,"./is":72,"./is.js":72,"./it":73,"./it-ch":74,"./it-ch.js":74,"./it.js":73,"./ja":75,"./ja.js":75,"./jv":76,"./jv.js":76,"./ka":77,"./ka.js":77,"./kk":78,"./kk.js":78,"./km":79,"./km.js":79,"./kn":80,"./kn.js":80,"./ko":81,"./ko.js":81,"./ku":82,"./ku.js":82,"./ky":83,"./ky.js":83,"./lb":84,"./lb.js":84,"./lo":85,"./lo.js":85,"./lt":86,"./lt.js":86,"./lv":87,"./lv.js":87,"./me":88,"./me.js":88,"./mi":89,"./mi.js":89,"./mk":90,"./mk.js":90,"./ml":91,"./ml.js":91,"./mn":92,"./mn.js":92,"./mr":93,"./mr.js":93,"./ms":94,"./ms-my":95,"./ms-my.js":95,"./ms.js":94,"./mt":96,"./mt.js":96,"./my":97,"./my.js":97,"./nb":98,"./nb.js":98,"./ne":99,"./ne.js":99,"./nl":100,"./nl-be":101,"./nl-be.js":101,"./nl.js":100,"./nn":102,"./nn.js":102,"./pa-in":103,"./pa-in.js":103,"./pl":104,"./pl.js":104,"./pt":105,"./pt-br":106,"./pt-br.js":106,"./pt.js":105,"./ro":107,"./ro.js":107,"./ru":108,"./ru.js":108,"./sd":109,"./sd.js":109,"./se":110,"./se.js":110,"./si":111,"./si.js":111,"./sk":112,"./sk.js":112,"./sl":113,"./sl.js":113,"./sq":114,"./sq.js":114,"./sr":115,"./sr-cyrl":116,"./sr-cyrl.js":116,"./sr.js":115,"./ss":117,"./ss.js":117,"./sv":118,"./sv.js":118,"./sw":119,"./sw.js":119,"./ta":120,"./ta.js":120,"./te":121,"./te.js":121,"./tet":122,"./tet.js":122,"./tg":123,"./tg.js":123,"./th":124,"./th.js":124,"./tl-ph":125,"./tl-ph.js":125,"./tlh":126,"./tlh.js":126,"./tr":127,"./tr.js":127,"./tzl":128,"./tzl.js":128,"./tzm":129,"./tzm-latn":130,"./tzm-latn.js":130,"./tzm.js":129,"./ug-cn":131,"./ug-cn.js":131,"./uk":132,"./uk.js":132,"./ur":133,"./ur.js":133,"./uz":134,"./uz-latn":135,"./uz-latn.js":135,"./uz.js":134,"./vi":136,"./vi.js":136,"./x-pseudo":137,"./x-pseudo.js":137,"./yo":138,"./yo.js":138,"./zh-cn":139,"./zh-cn.js":139,"./zh-hk":140,"./zh-hk.js":140,"./zh-tw":141,"./zh-tw.js":141};function n(t){var s=r(t);return e(s)}function r(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id=159},207:function(t,s,e){},363:function(t,s,e){"use strict";var a=e(207);e.n(a).a},371:function(t,s,e){"use strict";e.r(s);var a={components:{LineChart:e(151).a},data:function(){return{chartData:null,chartOptions:null}},mounted:function(){this.updateGraph()},methods:{updateGraph:function(){for(var t=[],s=0;s<=200;s+=5)t.push({x:s,y:this.I_cap(s)});var e=[];for(s=0;s<=200;s+=5)e.push({x:s,y:this.I_sc(s)});this.chartData={datasets:[{label:"Short circuit",pointRadius:0,borderWidth:2,borderColor:"#fbbe59",backgroundColor:"#fbbe59",fill:!1,data:e},{label:"Capacitive load",pointRadius:0,borderWidth:2,borderColor:"#005e85",backgroundColor:"#005e85",fill:!1,data:t}]},this.chartOptions={scales:{xAxes:[{type:"linear",display:!0,scaleLabel:{display:!0,labelString:"Time (µs)"},gridLines:{display:!0}}],yAxes:[{type:"linear",display:!0,scaleLabel:{display:!0,labelString:"Current (A)"},ticks:{beginAtZero:!0},gridLines:{display:!0}}]},legend:{usePointStyle:!0},tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!1}},I_cap:function(t){var s=1e-6*document.getElementById("wirelength").value,e=.001*document.getElementById("bat_ir").value,a=document.getElementById("voltage").value,n=1e-6*document.getElementById("capacitance").value,r=e+.001*document.getElementById("cap_esr").value+.0042*document.getElementById("wirelength").value,i=1/Math.sqrt(s*n),l=r/(2*s),j=Math.sqrt(Math.pow(i,2)-Math.pow(l,2));return a/(s*j)*Math.exp(-l*t*1e-6)*Math.sin(j*t*1e-6)},I_sc:function(t){var s=1e-6*document.getElementById("wirelength").value,e=document.getElementById("voltage").value,a=.001*document.getElementById("bat_ir").value+.0042*document.getElementById("wirelength").value;return e/a*(1-Math.exp(-a/s*t*1e-6))}}},n=(e(363),e(0)),r=Object(n.a)(a,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticStyle:{overflow:"auto"}},[e("line-chart",{attrs:{"chart-data":t.chartData,options:t.chartOptions}}),t._v(" "),e("p"),e("div",{staticClass:"left"},[t._v("Battery voltage:")]),t._v(" "),e("div",{staticClass:"right"},[e("input",{attrs:{type:"number",id:"voltage",step:"2",value:"14"},on:{change:function(s){return t.updateGraph()}}}),t._v(" V")]),t._v(" "),e("div",{staticClass:"left"},[t._v("Battery and charge controller resistance: ")]),t._v(" "),e("div",{staticClass:"right"},[e("input",{attrs:{type:"number",id:"bat_ir",step:"5",value:"10"},on:{change:function(s){return t.updateGraph()}}}),t._v(" mΩ"),e("br")]),t._v(" "),e("div",{staticClass:"left"},[t._v("Total wire length: ")]),t._v(" "),e("div",{staticClass:"right"},[e("input",{attrs:{type:"number",id:"wirelength",step:"1",value:"1"},on:{change:function(s){return t.updateGraph()}}}),t._v(" m")]),t._v(" "),e("div",{staticClass:"left"},[t._v("Capacitance: ")]),t._v(" "),e("div",{staticClass:"right"},[e("input",{attrs:{type:"number",id:"capacitance",step:"100",value:"1000"},on:{change:function(s){return t.updateGraph()}}}),t._v(" µF"),e("br")]),t._v(" "),e("div",{staticClass:"left"},[t._v("Capacitor ESR: ")]),t._v(" "),e("div",{staticClass:"right"},[e("input",{attrs:{type:"number",id:"cap_esr",step:"5",value:"20"},on:{change:function(s){return t.updateGraph()}}}),t._v(" mΩ"),e("br")]),t._v(" "),e("p")],1)},[],!1,null,null,null);s.default=r.exports}}]);