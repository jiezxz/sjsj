(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d212b4a"],{aa0d:function(e,t,i){"use strict";i.r(t);var l=i("7a23");function d(e,t,i,d,n,r){var a=Object(l["resolveComponent"])("view-grid");return Object(l["openBlock"])(),Object(l["createBlock"])(a,{ref:"grid",columns:e.columns,detail:e.detail,editFormFields:e.editFormFields,editFormOptions:e.editFormOptions,searchFormFields:e.searchFormFields,searchFormOptions:e.searchFormOptions,table:e.table,extend:e.extend},null,8,["columns","detail","editFormFields","editFormOptions","searchFormFields","searchFormOptions","table","extend"])}var n=i("e73a"),r={components:{gridHeader:n["default"],gridBody:"",gridFooter:"",modelHeader:"",modelBody:"",modelFooter:""},tableAction:"",buttons:{view:[],box:[],detail:[]},methods:{onInit:function(){var e=this;this.columns.push({title:"操作",field:"操作",width:120,align:"center",render:function(t,i){var d=i.row;i.column,i.index;return Object(l["createVNode"])("div",null,[Object(l["createVNode"])(Object(l["resolveComponent"])("el-button"),{onClick:function(t){e.$refs.gridHeader.open([d],!0)},type:"primary",plain:!0,size:"small",style:"height:26px; padding: 10px !important;"},{default:function(){return[Object(l["createTextVNode"])("审核")]}}),Object(l["createVNode"])(Object(l["resolveComponent"])("el-button"),{onClick:function(t){e.$tabs.open({text:d.WorkTableName||d.WorkName,path:"/"+d.WorkTable,query:{id:d.WorkTableKey,viewflow:1}})},type:"default",plain:!0,size:"small",style:"height:26px; padding: 10px !important;"},{default:function(){return[Object(l["createTextVNode"])("查看")]}})])}})},onInited:function(){},searchBefore:function(e){return!0},searchAfter:function(e){return!0},addBefore:function(e){return!0},updateBefore:function(e){return!0},rowClick:function(e){e.row,e.column,e.event},modelOpenAfter:function(e){}}},a=r,o=Object(l["defineComponent"])({setup:function(){var e=Object(l["ref"])({key:"WorkFlowTable_Id",footer:"Foots",cnName:"审批流程",name:"flow/Sys_WorkFlowTable",url:"/Sys_WorkFlowTable/",sortName:"CreateDate"}),t=Object(l["ref"])({}),i=Object(l["ref"])([]),d=Object(l["ref"])({WorkName:"",WorkTableName:"",AuditStatus:"",CreateDate:""}),n=Object(l["ref"])([[{dataKey:"audit",data:[],title:"审批状态",field:"AuditStatus",type:"select"},{title:"流程名称",field:"WorkName",type:"like"},{title:"业务名称",field:"WorkTableName",type:"like"},{title:"创建时间",field:"CreateDate",type:"datetime"}]]),r=Object(l["ref"])([{field:"WorkFlowTable_Id",title:"WorkFlowTable_Id",type:"guid",width:110,hidden:!0,readonly:!0,require:!0,align:"left"},{field:"WorkFlow_Id",title:"流程id",type:"guid",width:110,hidden:!0,align:"left"},{field:"WorkName",title:"流程名称",type:"string",width:130,align:"left",sort:!0},{field:"WorkTableKey",title:"表主键id",type:"string",width:180,hidden:!0,align:"left"},{field:"WorkTable",title:"表名",type:"string",width:100,align:"left"},{field:"WorkTableName",title:"业务名称",type:"string",width:120,align:"left"},{field:"CurrentStepId",title:"当前审核节点ID",type:"string",width:110,align:"left"},{field:"StepName",title:"当前审核节点名称",type:"string",width:120,align:"left"},{field:"CurrentOrderId",title:"不用",type:"int",width:90,hidden:!0,align:"left"},{field:"AuditStatus",title:"审批状态",type:"int",bind:{key:"audit",data:[]},width:110,align:"left"},{field:"Creator",title:"创建人",type:"string",width:100,align:"left"},{field:"CreateDate",title:"创建时间",type:"datetime",width:150,align:"left",sort:!0},{field:"CreateID",title:"CreateID",type:"int",width:80,hidden:!0,align:"left"},{field:"Enable",title:"Enable",type:"byte",width:110,hidden:!0,align:"left"},{field:"Modifier",title:"Modifier",type:"string",width:130,hidden:!0,align:"left"},{field:"ModifyDate",title:"ModifyDate",type:"datetime",width:110,hidden:!0,align:"left",sort:!0},{field:"ModifyID",title:"ModifyID",type:"int",width:80,hidden:!0,align:"left"}]),o=Object(l["ref"])({cnName:"审批节点",table:"Sys_WorkFlowTableStep",columns:[{field:"Sys_WorkFlowTableStep_Id",title:"Sys_WorkFlowTableStep_Id",type:"guid",width:110,hidden:!0,readonly:!0,require:!0,align:"left"},{field:"WorkFlowTable_Id",title:"主表id",type:"guid",width:110,require:!0,align:"left",sort:!0},{field:"WorkFlow_Id",title:"流程id",type:"guid",width:110,align:"left"},{field:"StepId",title:"节点id",type:"string",width:120,align:"left"},{field:"StepName",title:"节名称",type:"string",width:180,align:"left"},{field:"StepType",title:"审批类型",type:"int",width:110,align:"left"},{field:"StepValue",title:"节点类型(1=按用户审批,2=按角色审批)",type:"string",width:110,align:"left"},{field:"OrderId",title:"审批顺序",type:"int",width:110,align:"left"},{field:"Remark",title:"Remark",type:"string",width:220,align:"left"},{field:"CreateDate",title:"CreateDate",type:"datetime",width:110,align:"left",sort:!0},{field:"CreateID",title:"CreateID",type:"int",width:80,hidden:!0,align:"left"},{field:"Creator",title:"Creator",type:"string",width:130,align:"left"},{field:"Enable",title:"Enable",type:"byte",width:110,align:"left"},{field:"Modifier",title:"Modifier",type:"string",width:130,align:"left"},{field:"ModifyDate",title:"ModifyDate",type:"datetime",width:110,align:"left",sort:!0},{field:"ModifyID",title:"ModifyID",type:"int",width:80,hidden:!0,align:"left"},{field:"AuditId",title:"审核人id",type:"int",width:80,align:"left"},{field:"Auditor",title:"审核人",type:"string",width:120,align:"left"},{field:"AuditStatus",title:"审核状态",type:"int",width:80,align:"left"},{field:"AuditDate",title:"审核时间",type:"datetime",width:150,align:"left",sort:!0},{field:"StepAttrType",title:"节点属性(start、node、end))",type:"string",width:110,align:"left"},{field:"ParentId",title:"ParentId",type:"string",width:120,align:"left"},{field:"NextStepId",title:"NextStepId",type:"string",width:120,align:"left"}],sortName:"CreateDate",key:"Sys_WorkFlowTableStep_Id"});return{table:e,extend:a,editFormFields:t,editFormOptions:i,searchFormFields:d,searchFormOptions:n,columns:r,detail:o}}}),f=i("d959"),p=i.n(f);const s=p()(o,[["render",d]]);t["default"]=s}}]);