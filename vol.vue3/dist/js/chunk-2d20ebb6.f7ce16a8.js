(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20ebb6"],{b12c:function(t,e,i){"use strict";i.r(e);var l=i("7a23");function d(t,e,i,d,a,n){var o=Object(l["resolveComponent"])("view-grid");return Object(l["openBlock"])(),Object(l["createBlock"])(o,{ref:"grid",columns:t.columns,detail:t.detail,editFormFields:t.editFormFields,editFormOptions:t.editFormOptions,searchFormFields:t.searchFormFields,searchFormOptions:t.searchFormOptions,table:t.table,extend:t.extend},null,8,["columns","detail","editFormFields","editFormOptions","searchFormFields","searchFormOptions","table","extend"])}var a={components:{gridHeader:"",gridBody:"",gridFooter:"",modelHeader:"",modelBody:"",modelFooter:""},tableAction:"",buttons:{view:[],box:[],detail:[]},methods:{onInit:function(){},onInited:function(){},searchBefore:function(t){return!0},searchAfter:function(t){return!0},addBefore:function(t){return!0},updateBefore:function(t){return!0},rowClick:function(t){t.row,t.column,t.event},modelOpenAfter:function(t){}}},n=a,o=Object(l["defineComponent"])({setup:function(){var t=Object(l["ref"])({key:"id",footer:"Foots",cnName:"停机&设备异常",name:"datacollection_tjyc/dataCollection_tjyc",url:"/dataCollection_tjyc/",sortName:"CreateDate"}),e=Object(l["ref"])({scx:"",riQi:"",banZhu:"",banZhang:"",banCi:"",ciShu:"",weiZhi:"",daiHao:"",yuanYin:"",chuLi:"",zdyc:"",tjsj:"",qjwc:"",cmwc:"",tswc:"",tisoShiWC:"",sjsj:"",tzwxsj:"",wxzcsj:"",cyry:""}),i=Object(l["ref"])([[{dataKey:"产线-中文",data:[],title:"生产线",field:"scx",type:"select"},{title:"日期",field:"riQi",type:"date"}],[{dataKey:"生产班长",data:[],title:"班长",field:"banZhang",type:"select"},{dataKey:"班主",data:[],title:"班主",field:"banZhu",type:"select"},{dataKey:"班次",data:[],title:"班次",field:"banCi",type:"select"}],[{title:"停机次数",field:"ciShu",type:"number"},{dataKey:"停机位置",data:[],title:"停机位置",field:"weiZhi",colSize:6,type:"select"}],[{dataKey:"停机代号",data:[],title:"停机代号",field:"daiHao",colSize:6,type:"select"},{title:"停机原因",field:"yuanYin",colSize:6}],[{title:"处理方案",field:"chuLi",colSize:6},{dataKey:"停机分类",data:[],title:"停机分类",field:"zdyc",type:"select"}],[{title:"停机时间",field:"tjsj",type:"datetime"},{title:"清洁完成",field:"qjwc",type:"datetime"},{title:"穿膜完成",field:"cmwc",type:"datetime"}],[{title:"提速完成",field:"tswc",type:"datetime"},{title:"调试完成",field:"tisoShiWC",type:"datetime"},{title:"收卷时间",field:"sjsj",type:"datetime"}],[{title:"通知维修时间",field:"tzwxsj",type:"datetime"},{title:"维修正常时间",field:"wxzcsj",type:"datetime"}],[{title:"参与人员",field:"cyry",colSize:12,type:"textarea"}]]),d=Object(l["ref"])({}),a=Object(l["ref"])([]),o=Object(l["ref"])([{field:"id",title:"id",type:"guid",width:110,hidden:!0,readonly:!0,require:!0,align:"left"},{field:"scx",title:"生产线",type:"string",bind:{key:"产线-中文",data:[]},width:110,align:"left",sort:!0},{field:"riQi",title:"日期",type:"date",width:150,align:"left",sort:!0},{field:"banZhu",title:"班主",type:"string",bind:{key:"班主",data:[]},width:110,align:"left"},{field:"banZhang",title:"班长",type:"string",bind:{key:"生产班长",data:[]},width:110,align:"left"},{field:"banCi",title:"班次",type:"string",bind:{key:"班次",data:[]},width:110,align:"left"},{field:"ciShu",title:"停机次数",type:"int",width:110,align:"left"},{field:"weiZhi",title:"停机位置",type:"string",bind:{key:"停机位置",data:[]},width:110,align:"left"},{field:"daiHao",title:"停机代号",type:"string",bind:{key:"停机代号",data:[]},width:110,align:"left"},{field:"yuanYin",title:"停机原因",type:"string",width:110,align:"left"},{field:"chuLi",title:"处理方案",type:"string",width:110,align:"left"},{field:"zdyc",title:"停机分类",type:"string",bind:{key:"停机分类",data:[]},width:110,align:"left"},{field:"tjsj",title:"停机时间",type:"datetime",width:150,align:"left",sort:!0},{field:"qjwc",title:"清洁完成",type:"datetime",width:150,align:"left",sort:!0},{field:"cmwc",title:"穿膜完成",type:"datetime",width:150,align:"left",sort:!0},{field:"tswc",title:"提速完成",type:"datetime",width:150,align:"left",sort:!0},{field:"tisoShiWC",title:"调试完成",type:"datetime",width:150,align:"left",sort:!0},{field:"sjsj",title:"收卷时间",type:"datetime",width:150,align:"left",sort:!0},{field:"tzwxsj",title:"通知维修时间",type:"datetime",width:150,align:"left",sort:!0},{field:"wxzcsj",title:"维修正常时间",type:"datetime",width:150,align:"left",sort:!0},{field:"CreateID",title:"CreateID",type:"int",width:100,hidden:!0,align:"left"},{field:"Creator",title:"创建人",type:"string",width:100,align:"left"},{field:"CreateDate",title:"创建时间",type:"datetime",width:150,align:"left",sort:!0},{field:"ModifyID",title:"ModifyID",type:"int",width:100,hidden:!0,align:"left"},{field:"Modifier",title:"修改人",type:"string",width:100,align:"left"},{field:"ModifyDate",title:"修改时间",type:"datetime",width:150,align:"left",sort:!0},{field:"cyry",title:"参与人员",type:"string",width:110,align:"left"}]),r=Object(l["ref"])({cnName:"#detailCnName",table:"#detailTable",columns:[],sortName:"",key:""});return{table:t,extend:n,editFormFields:e,editFormOptions:i,searchFormFields:d,searchFormOptions:a,columns:o,detail:r}}}),r=i("6b0d"),f=i.n(r);const c=f()(o,[["render",d]]);e["default"]=c}}]);