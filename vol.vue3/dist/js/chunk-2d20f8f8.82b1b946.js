(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f8f8"],{b3c4:function(e,t,i){"use strict";i.r(t);var l=i("7a23");function d(e,t,i,d,a,n){var r=Object(l["resolveComponent"])("view-grid");return Object(l["openBlock"])(),Object(l["createBlock"])(r,{ref:"grid",columns:e.columns,detail:e.detail,editFormFields:e.editFormFields,editFormOptions:e.editFormOptions,searchFormFields:e.searchFormFields,searchFormOptions:e.searchFormOptions,table:e.table,extend:e.extend},null,8,["columns","detail","editFormFields","editFormOptions","searchFormFields","searchFormOptions","table","extend"])}var a={components:{gridHeader:"",gridBody:"",gridFooter:"",modelHeader:"",modelBody:"",modelFooter:""},tableAction:"",buttons:{view:[],box:[],detail:[]},methods:{onInit:function(){},onInited:function(){},searchBefore:function(e){return!0},searchAfter:function(e){return!0},addBefore:function(e){return!0},updateBefore:function(e){return!0},rowClick:function(e){e.row,e.column,e.event},modelOpenAfter:function(e){}}},n=a,r=Object(l["defineComponent"])({setup:function(){var e=Object(l["ref"])({key:"id",footer:"Foots",cnName:"车间看板",name:"datacollection_cjkb/dataCollection_cjkb",url:"/dataCollection_cjkb/",sortName:"CreateDate"}),t=Object(l["ref"])({shengChanXian:"",dingDanHao:"",guiGe:"",jrcqrs:"",ywgk:"",mj_rmb:"",mj_sj:"",mj_dcl:"",mj_dbzt:"",yzl_rmb:"",yzl_sj:"",yzl_dcl:"",yzl_dbzt:"",al_rmb:"",al_sj:"",al_dcl:"",al_dbzt:"",sl_rmb:"",sl_sj:"",sl_dcl:"",sl_dbzt:"",jrcqry:""}),i=Object(l["ref"])([[{dataKey:"产线-中文",data:[],title:"生产线",field:"shengChanXian",type:"select"},{title:"订单号",field:"dingDanHao",type:"text"}],[{title:"今日出勤人数",field:"jrcqrs",type:"number"},{title:"规格",field:"guiGe",type:"text"},{dataKey:"合格不合格",data:[],title:"异物管控",field:"ywgk",colSize:6,type:"radio"}],[{title:"母卷日目标",field:"mj_rmb",type:"decimal"},{title:"母卷实绩",field:"mj_sj",type:"decimal"},{title:"母卷达成率",field:"mj_dcl",type:"decimal"},{dataKey:"上升下降",data:[],title:"母卷对比昨日",field:"mj_dbzt",type:"radio"}],[{title:"运转率日目标",field:"yzl_rmb",type:"decimal"},{title:"运转率实绩",field:"yzl_sj",type:"decimal"},{title:"运转率达成率",field:"yzl_dcl",type:"decimal"},{dataKey:"上升下降",data:[],title:"运转率对比昨天",field:"yzl_dbzt",type:"radio"}],[{title:"A率日目标",field:"al_rmb",type:"decimal"},{title:"A率实绩",field:"al_sj",type:"decimal"},{title:"A率达成率",field:"al_dcl",type:"decimal"},{dataKey:"上升下降",data:[],title:"A率对比昨天",field:"al_dbzt",type:"radio"}],[{title:"收率日目标",field:"sl_rmb",type:"decimal"},{title:"收率实绩",field:"sl_sj",type:"decimal"},{title:"收率达成率",field:"sl_dcl",type:"decimal"},{dataKey:"上升下降",data:[],title:"收率对比昨天",field:"sl_dbzt",type:"radio"}],[{title:"今日出勤人员",field:"jrcqry",colSize:12,type:"textarea"}]]),d=Object(l["ref"])({shengChanXian:[],dingDanHao:"",guiGe:""}),a=Object(l["ref"])([[{dataKey:"产线-中文",data:[],title:"生产线",field:"shengChanXian",type:"selectList"},{title:"订单号",field:"dingDanHao",type:"text"},{title:"规格",field:"guiGe",type:"text"}]]),r=Object(l["ref"])([{field:"id",title:"id",type:"guid",width:110,hidden:!0,readonly:!0,require:!0,align:"left"},{field:"shengChanXian",title:"生产线",type:"string",bind:{key:"产线-中文",data:[]},width:110,align:"left",sort:!0},{field:"dingDanHao",title:"订单号",type:"string",width:120,align:"left"},{field:"guiGe",title:"规格",type:"string",width:120,align:"left"},{field:"jrcqrs",title:"今日出勤人数",type:"int",width:80,align:"left"},{field:"ywgk",title:"异物管控",type:"string",bind:{key:"合格不合格",data:[]},width:120,align:"left"},{field:"mj_rmb",title:"母卷日目标",type:"decimal",width:110,align:"left"},{field:"mj_sj",title:"母卷实绩",type:"decimal",width:110,align:"left"},{field:"mj_dcl",title:"母卷达成率",type:"decimal",width:110,align:"left"},{field:"mj_dbzt",title:"母卷对比昨日",type:"string",bind:{key:"上升下降",data:[]},width:120,align:"left"},{field:"yzl_rmb",title:"运转率日目标",type:"decimal",width:110,align:"left"},{field:"yzl_sj",title:"运转率实绩",type:"decimal",width:110,align:"left"},{field:"yzl_dcl",title:"运转率达成率",type:"decimal",width:110,align:"left"},{field:"yzl_dbzt",title:"运转率对比昨天",type:"string",bind:{key:"上升下降",data:[]},width:120,align:"left"},{field:"al_rmb",title:"A率日目标",type:"decimal",width:110,align:"left"},{field:"al_sj",title:"A率实绩",type:"decimal",width:110,align:"left"},{field:"al_dcl",title:"A率达成率",type:"decimal",width:110,align:"left"},{field:"al_dbzt",title:"A率对比昨天",type:"string",bind:{key:"上升下降",data:[]},width:120,align:"left"},{field:"sl_rmb",title:"收率日目标",type:"decimal",width:110,align:"left"},{field:"sl_sj",title:"收率实绩",type:"decimal",width:110,align:"left"},{field:"sl_dcl",title:"收率达成率",type:"decimal",width:110,align:"left"},{field:"sl_dbzt",title:"收率对比昨天",type:"string",bind:{key:"上升下降",data:[]},width:120,align:"left"},{field:"jrcqry",title:"今日出勤人员",type:"string",width:110,align:"left"},{field:"Creator",title:"创建人",type:"string",width:100,align:"left"},{field:"CreateDate",title:"创建时间",type:"datetime",width:150,align:"left",sort:!0}]),c=Object(l["ref"])({cnName:"#detailCnName",table:"#detailTable",columns:[],sortName:"",key:""});return{table:e,extend:n,editFormFields:t,editFormOptions:i,searchFormFields:d,searchFormOptions:a,columns:r,detail:c}}}),c=i("6b0d"),o=i.n(c);const f=o()(r,[["render",d]]);t["default"]=f}}]);