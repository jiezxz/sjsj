(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1f2d"],{"47e9":function(e,t,i){"use strict";i.r(t);var r=i("7a23");function o(e,t,i,o,l,d){var n=Object(r["resolveComponent"])("view-grid");return Object(r["openBlock"])(),Object(r["createBlock"])(n,{ref:"grid",columns:e.columns,detail:e.detail,editFormFields:e.editFormFields,editFormOptions:e.editFormOptions,searchFormFields:e.searchFormFields,searchFormOptions:e.searchFormOptions,table:e.table,extend:e.extend},null,8,["columns","detail","editFormFields","editFormOptions","searchFormFields","searchFormOptions","table","extend"])}var l=i("2909"),d=(i("159b"),i("d81d"),i("a434"),i("ac1f"),i("841c"),i("a15b"),i("4de4"),{components:{gridHeader:"",gridBody:"",gridFooter:"",modelHeader:"",modelBody:"",modelFooter:""},text:"点击左侧表单名名字即可加载收集的数据",tableAction:"formCollectionResultTree",buttons:{view:[],box:[],detail:[]},methods:{onInit:function(){this.textInline=!1,this.load=!1,this.setFiexdSearchForm(!0)},onInited:function(){this.height=this.height-74},loadById:function(e){var t,i=[{title:"提交人",field:"Creator"},{title:"提交时间",field:"CreateDate"}];JSON.parse(e.formOptions).formOptions.forEach((function(e){i.push.apply(i,Object(l["a"])(e.map((function(e){return{title:e.title,field:e.field,type:e.type}}))))})),this.formId=e.formId,this.columns.splice(0),(t=this.columns).push.apply(t,i),this.search()},exportBefore:function(e){return e.Value=this.formId,!0},searchBefore:function(e){return e.wheres.push({name:"FormId",value:this.formId}),!0},searchAfter:function(e){return e.forEach((function(e){if(e.FormData){var t=JSON.parse(e.FormData);for(var i in t)e[i]=Array.isArray(t[i])?t[i].filter((function(e){return null!=e&&void 0!=e})).join(","):t[i]}})),!0}}}),n=d,a=Object(r["defineComponent"])({setup:function(){var e=Object(r["ref"])({key:"FormCollectionId",footer:"Foots",cnName:"数据采集",name:"form/FormCollectionObject",url:"/FormCollectionObject/",sortName:"CreateDate"}),t=Object(r["ref"])({Title:"",FormData:""}),i=Object(r["ref"])([[{title:"标题",field:"Title"},{title:"表单数据",field:"FormData"}]]),o=Object(r["ref"])({Title:"",Creator:"",CreateDate:""}),l=Object(r["ref"])([[{title:"标题",field:"Title",type:"like"},{title:"提交人",field:"Creator",type:"like"},{title:"提交时间",field:"CreateDate",type:"datetime"}]]),d=Object(r["ref"])([{field:"FormCollectionId",title:"FormCollectionId",type:"guid",width:110,hidden:!0,readonly:!0,require:!0,align:"left"},{field:"FormId",title:"表单ID",type:"guid",width:110,hidden:!0,align:"left"},{field:"Title",title:"标题",type:"string",width:110,align:"left",sort:!0},{field:"FormData",title:"表单数据",type:"string",width:110,hidden:!0,align:"left"},{field:"Creator",title:"提交人",type:"string",width:100,align:"left"},{field:"CreateDate",title:"提交时间",type:"datetime",width:145,align:"left",sort:!0},{field:"CreateID",title:"CreateID",type:"int",width:80,hidden:!0,align:"left"},{field:"Modifier",title:"Modifier",type:"string",width:130,hidden:!0,align:"left"},{field:"ModifyDate",title:"ModifyDate",type:"datetime",width:110,hidden:!0,align:"left",sort:!0},{field:"ModifyID",title:"ModifyID",type:"int",width:80,hidden:!0,align:"left"}]),a=Object(r["ref"])({cnName:"#detailCnName",columns:[],sortName:"",key:""});return{table:e,extend:n,editFormFields:t,editFormOptions:i,searchFormFields:o,searchFormOptions:l,columns:d,detail:a}}}),s=i("d959"),f=i.n(s);const c=f()(a,[["render",o]]);t["default"]=c}}]);