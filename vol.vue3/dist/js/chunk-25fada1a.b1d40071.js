(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25fada1a","chunk-725003ca"],{"0b9e":function(e,t,a){},2169:function(e,t,a){"use strict";var i={bar:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:10,left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:["Brazil","Indonesia","USA","India","China","World"]},series:[{name:"2011",type:"bar",data:[18203,23489,29034,14970,31744,60230]},{name:"2012",type:"bar",data:[19325,23438,31e3,11594,24141,6807]}]},pie:{tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{top:20,data:["图例1","图例2","图例3","图例4","图例5","图例6","图例7"]},series:[{name:"图例1",type:"pie",radius:["40%","70%"],selectedMode:"single",itemStyle:{borderRadius:6,borderColor:"#fff",borderWidth:2},data:[{value:2563,name:"图例1",itemStyle:{color:"rgb(45, 140, 240)"}},{value:727,name:"图例2",itemStyle:{color:"rgb(92, 173, 255)"}},{value:2182,name:"图例3",itemStyle:{color:"rgb(25, 190, 107)"}},{value:1419,name:"图例4",itemStyle:{color:"#00e5ff"}},{value:984,name:"图例5",itemStyle:{color:"#ff80ab"}},{value:870,name:"图例6",itemStyle:{color:"rgb(237, 64, 20)"}},{value:1670,name:"图例7",itemStyle:{color:"#ffb445"}}]}]},line:{legend:{data:["邮件营销","联盟广告"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},yAxis:{type:"value"},series:[{name:"邮件营销",type:"line",stack:"总量",itemStyle:{color:"rgb(25, 190, 107)"},smooth:!0,data:[7,6.9,9.5,12.5,18.2,21.5,22.5,23.3,18.3,13.9,9.6]},{name:"联盟广告",type:"line",stack:"总量",smooth:!0,itemStyle:{color:"rgb(92, 173, 255)"},data:[7,6.9,9.5,14.5,18.2,21.5,22.5,21.3,18.3,13.9,9.6]}]}};t["a"]=i},"2ac0":function(e,t,a){"use strict";a.r(t);var i=a("7a23"),l={class:"c-container"},d={class:"item"},o={class:"left"},r=["id"],n={class:"right"},c={class:"item"},s={class:"left"},p={class:"right"},m=["id"];function b(e,t,a,b,f,y){var u=Object(i["resolveComponent"])("VolHeader"),g=Object(i["resolveComponent"])("VolForm");return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",l,[Object(i["createElementVNode"])("div",d,[Object(i["createElementVNode"])("div",o,[Object(i["createVNode"])(u,{icon:"md-apps",text:"柱状图",style:{"padding-left":"10px","margin-bottom":"5px"}}),Object(i["createElementVNode"])("div",{style:{height:"calc(100% - 45px)"},id:f.bar},null,8,r)]),Object(i["createElementVNode"])("div",n,[Object(i["createVNode"])(u,{icon:"md-apps",text:"基础表单",style:{"padding-left":"10px","margin-bottom":"20px"}}),Object(i["createVNode"])(g,{style:{"padding-right":"30px"},ref:"myform1",loadKey:!0,"label-width":80,formFields:f.formFields1,formRules:f.formRules1},null,8,["formFields","formRules"])])]),Object(i["createElementVNode"])("div",c,[Object(i["createElementVNode"])("div",s,[Object(i["createVNode"])(u,{icon:"md-apps",text:"表单属性字段只读",style:{"padding-left":"10px","margin-bottom":"20px"}}),Object(i["createVNode"])(g,{style:{"padding-right":"30px"},ref:"myform1",loadKey:!0,formFields:f.formFields2,formRules:f.formRules2},null,8,["formFields","formRules"])]),Object(i["createElementVNode"])("div",p,[Object(i["createVNode"])(u,{icon:"md-apps",text:"饼状图表",style:{"padding-left":"10px"}}),Object(i["createElementVNode"])("div",{style:{height:"calc(100% - 30px)"},id:f.pie},null,8,m)])])])}var f=a("c5e6"),y=a("6e5b"),u=a("2169"),g={Variety:"",AgeRange:"",DateRange:[],City:"",AvgPrice:8.88,Date:"",IsTop:"还没想好..."},v=[[{link:!0,dataKey:"city",title:"城市",required:!0,field:"City",data:[],type:"select"},{title:"多选日期",range:!0,required:!1,field:"DateRange",type:"date"}],[{dataKey:"age",data:[],title:"下拉",required:!0,field:"AgeRange",type:"select"},{title:"日期",required:!0,field:"Date",placeholder:"你可以设置colSize属性决定标签的长度，可选值12/8/6/4",type:"datetime"}],[{title:"测试",dataKey:"age",placeholder:"此处数据源为手动绑定",data:[{key:"1",value:"测试1"},{key:"2",value:"测试2"}],required:!1,field:"Variety",type:"select"},{type:"decimal",title:"价格",required:!0,placeholder:"你可以自己定义placeholder显示的文字",field:"AvgPrice"}],[{title:"备注",required:!0,field:"IsTop",colSize:12,type:"textarea"}]],h={Variety:"一次性用品",City:"北京市",DateRange:"2019-09-01",AvgPrice:8.88,Variety1:"",DateRange1:"2019-09-02",AvgPrice1:7.72,Address:"北京市海淀区001号",IsChange:1},O=[[{title:"商品类型",dataKey:"age",data:[{key:"1",value:"1"},{key:"2",value:"2"}],field:"Variety",disabled:!0,type:"select"},{dataKey:"city",title:"所在城市",field:"City",disabled:!0,type:"select",data:[]}],[{title:"销售日期",field:"DateRange",disabled:!0},{title:"销售价格",field:"AvgPrice",disabled:!0}],[{title:"生产日期",field:"DateRange1",disabled:!0},{title:"中间价格",field:"AvgPrice1",disabled:!0}],[{title:"销售地址",field:"Address",disabled:!0},{title:"是否成交",field:"IsChange",dataKey:"enable",data:[],disabled:!0}]],x=a("313e"),j={components:{VolForm:y["a"],VolHeader:f["default"]},data:function(){return{formFields1:g,formRules1:v,formFields2:h,formRules2:O,bar:"b-"+~~(1e5*Math.random(1e4,1e5)),pie:"p-"+~~(1e5*Math.random(1e4,1e5)),options:u["a"]}},mounted:function(){var e=x.init(document.getElementById(this.bar));e.setOption(this.options.bar),this.options.pie.legend.top=50,this.options.pie.legend.right=80,this.options.pie.legend.orient="vertical";var t=x.init(document.getElementById(this.pie));t.setOption(this.options.pie)}},V=(a("3cc2"),a("d959")),S=a.n(V);const N=S()(j,[["render",b],["__scopeId","data-v-a491f8d6"]]);t["default"]=N},"2c2e":function(e,t,a){"use strict";a("0b9e")},"3cc2":function(e,t,a){"use strict";a("bbe2")},bbe2:function(e,t,a){},c5e6:function(e,t,a){"use strict";a.r(t);var i=a("7a23"),l={class:"v-header"},d={class:"v-left-text"},o={class:"content"},r={class:"v-right-content"};function n(e,t,a,n,c,s){return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",l,[Object(i["createElementVNode"])("div",d,[Object(i["createElementVNode"])("span",null,Object(i["toDisplayString"])(a.title||a.text),1)]),Object(i["createElementVNode"])("div",o,[Object(i["renderSlot"])(e.$slots,"content",{},void 0,!0)]),Object(i["createElementVNode"])("div",r,[Object(i["renderSlot"])(e.$slots,"default",{},void 0,!0)])])}var c={props:{icon:{type:String,default:""},title:{type:String,default:""},text:{type:String,default:"未定义名称"}}},s=(a("2c2e"),a("d959")),p=a.n(s);const m=p()(c,[["render",n],["__scopeId","data-v-236692e0"]]);t["default"]=m}}]);